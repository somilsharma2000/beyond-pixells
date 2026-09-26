#!/usr/bin/env python3
"""Render the Obsidian Veins hero texture (v5.3 — reference-matched).

v5.4 pass: reference measured precisely — 51% mid violet-navy wash rgb(32,16,52) family,
29% black pockets avg(15,9,21), ~15-20% BROAD bright gray-lavender crack zones (avg ~190).
Old render's cracks were hairlines; reference cracks glow broad and bright. v5.3 attempt — avg RGB (74,60,96),
violet glow on ~14% of pixels at deep-violet rgb(64,32,112)-(80,48,128), PURE BLACK
canvas (not navy #080810), brightness EVEN across top/mid/bottom thirds. Changes:
multi-ellipse violet ambient across the whole frame (not one at the focal), stronger
crack glow layers, vignette halved. The old render was 3x too dark and blue-hued.

Procedural raster render — replaces the hand-coded SVG stroke approach that
never matched the founder's reference photo. Layers, in order:
  1. near-black obsidian base + faint violet ambient around the focal
  2. main crack network: trunk branches fanning out from the focal core,
     drawn in 4 passes (wide deep-purple bloom -> violet glow -> lavender
     core -> near-white hot line), stroke width tapering with distance
  3. scattered dim hairline cracks across the whole slab
  4. bright spark dots at crack junctions
  5. faceted crystal shard at the focal point with rim light + inner facets
  6. core bloom (violet) + hot white center
  7. glossy black droplets with violet rim glow
  8. edge vignette to keep the frame deep black

Output: assets/img/hero-veins.jpg (committed to the repo, served by GH Pages).
"""
import math
import random

from PIL import Image, ImageDraw, ImageFilter

# CLI: python3 tools/render_hero_texture.py [W] [H] [outfile]
# default = hub landscape (2048x1230); tall variant for near-square heroes
# (Gym OS hero element is ~1:1 — a landscape texture center-crops away the glow).
import sys
W = int(sys.argv[1]) if len(sys.argv) > 1 else 2048
H = int(sys.argv[2]) if len(sys.argv) > 2 else 1230
OUT = sys.argv[3] if len(sys.argv) > 3 else "assets/img/hero-veins.jpg"
FOCAL = (int(W * 0.74), int(H * 0.24))  # luminous core, upper right
FX, FY = FOCAL
MAXD = 1600.0  # taper reference distance

random.seed(19)


def branch(x0, y0, ang_deg, length, segs, spread, jitter):
    """Jagged random-walk polyline — a crack."""
    pts = [(x0, y0)]
    x, y = x0, y0
    a = math.radians(ang_deg)
    sl = length / segs
    for _ in range(segs):
        a += random.uniform(-spread, spread)
        x += math.cos(a) * sl + random.uniform(-jitter, jitter)
        y += math.sin(a) * sl + random.uniform(-jitter, jitter)
        pts.append((x, y))
    return pts


BX, BY = int(W * 0.30), int(H * 0.88)  # second focal: bottom-left cluster


def dist_focal(p):
    return min(math.hypot(p[0] - FX, p[1] - FY),
               math.hypot(p[0] - BX, p[1] - BY) * 0.8)


# ---- 1. base ------------------------------------------------------------
# v5.3: pure black canvas + violet ambient spread over the WHOLE frame so all
# thirds glow (reference: top/mid/bottom all avg ~75,60,92). Deep violet
# rgb(44,22,88) family per measured reference glow blocks.
base = Image.new("RGB", (W, H), (1, 1, 2))
AMB = (92, 68, 94)  # glow zones raised: pockets stay black (painted last)
for cx, cy, rw, rh, fill in (
    (FX, FY, 660, 500, 200),          # focal bloom (strongest)
    (W * 0.12, H * 0.30, 560, 430, 130),  # left-center
    (W * 0.42, H * 1.02, 780, 620, 215),  # bottom-center (stronger: ref bottom glows)
    (W * 0.95, H * 0.72, 520, 430, 105),  # right-lower
):
    amb = Image.new("L", (W, H), 0)
    ImageDraw.Draw(amb).ellipse([cx - rw, cy - rh, cx + rw, cy + rh], fill=fill)
    amb = amb.filter(ImageFilter.GaussianBlur(240))
    base = Image.composite(Image.new("RGB", (W, H), AMB), base, amb)

# v5.4: black obsidian pockets — the reference keeps ~29% near-black for
# contrast between glowing crack zones; an all-mid wash reads flat.
for _ in range(11):
    cx, cy = random.uniform(0, W), random.uniform(0, H)
    if math.hypot(cx - FX, cy - FY) < 250:
        continue
    rw, rh = random.uniform(160, 340), random.uniform(120, 260)
    pk = Image.new("L", (W, H), 0)
    ImageDraw.Draw(pk).ellipse(
        [cx - rw, cy - rh, cx + rw, cy + rh], fill=random.randint(205, 245))
    pk = pk.filter(ImageFilter.GaussianBlur(80))
    base = Image.composite(Image.new("RGB", (W, H), (3, 2, 7)), base, pk)

# ---- 2. crack network ----------------------------------------------------
trunks = []
for a in (84, 100, 114, 128, 140, 152, 164, 176, 188, 202, 216, 230, 246, 262, 284, 304):
    length = random.uniform(950, 1550)
    pts = branch(FX, FY, a, length, random.randint(11, 16), 0.26, 24)
    trunks.append(pts)
    for _ in range(3):  # forks
        i = random.randint(2, len(pts) - 2)
        sub = branch(
            pts[i][0], pts[i][1],
            a + random.choice([-1, 1]) * random.uniform(30, 65),
            length * random.uniform(0.30, 0.50), 5, 0.45, 18)
        trunks.append(sub)


# v5.4: second cluster — reference glows bottom-left too; single focal left
# the lower band dead. Cracks from here join the same glow passes below.
for a in (250, 268, 286, 300, 318, 335, 355, 15, 35):
    length = random.uniform(700, 1150)
    trunks.append(branch(BX, BY, a, length, random.randint(10, 14), 0.28, 22))
for _ in range(8):
    ang = random.uniform(0, 360)
    trunks.append(branch(
        random.uniform(60, W - 60), random.uniform(H * 0.55, H - 60),
        ang, random.uniform(240, 460), 6, 0.5, 16))

def crack_layer(color, width_base, taper_min, alpha, blur):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    dr = ImageDraw.Draw(layer)
    for pts in trunks:
        for i in range(len(pts) - 1):
            p1, p2 = pts[i], pts[i + 1]
            mid = ((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2)
            t = max(0.0, 1.0 - dist_focal(mid) / MAXD)
            w = width_base * (taper_min + (1 - taper_min) * t)
            dr.line([p1, p2], fill=color + (alpha,), width=max(1, int(w)))
    if blur:
        layer = layer.filter(ImageFilter.GaussianBlur(blur))
    return layer


# ---- 3. scattered hairline cracks (whole slab, dim) ---------------------
scatter = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(scatter)
for _ in range(30):
    x0, y0 = random.uniform(40, W - 40), random.uniform(40, H - 40)
    if math.hypot(x0 - FX, y0 - FY) < 260:
        continue
    ang = random.uniform(0, 360)
    pts = branch(x0, y0, ang, random.uniform(180, 400), 4, 0.5, 16)
    for i in range(len(pts) - 1):
        sd.line([pts[i], pts[i + 1]], fill=(150, 135, 190, 150), width=4)
scatter = scatter.filter(ImageFilter.GaussianBlur(2.2))

# ---- 4. junction sparks --------------------------------------------------
sparks = Image.new("RGBA", (W, H), (0, 0, 0, 0))
spd = ImageDraw.Draw(sparks)
for pts in trunks:
    for i in (2, 4, 6, 8):
        if i < len(pts) - 1 and dist_focal(pts[i]) < MAXD * 0.8:
            x, y = pts[i]
            r = random.uniform(4, 11)
            spd.ellipse([x - r, y - r, x + r, y + r],
                        fill=(226, 214, 255, 230))
sparks = sparks.filter(ImageFilter.GaussianBlur(4))

# ---- 5. crystal shard at focal -------------------------------------------
shard = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sh = ImageDraw.Draw(shard)
poly = [(FX, FY - 105), (FX + 88, FY - 50), (FX + 104, FY + 38),
        (FX + 44, FY + 97), (FX - 57, FY + 101), (FX - 101, FY + 30),
        (FX - 86, FY - 64)]
sh.polygon(poly, fill=(24, 14, 42, 240), outline=(196, 181, 253, 255))
sh.line([(FX, FY - 105), (FX + 44, FY + 97)], fill=(124, 58, 237, 170), width=3)
sh.line([(FX - 86, FY - 64), (FX + 104, FY + 38)], fill=(124, 58, 237, 130), width=3)
sh.line([(FX - 101, FY + 30), (FX + 88, FY - 50)], fill=(168, 85, 247, 150), width=2)
shard = shard.filter(ImageFilter.GaussianBlur(0.6))

# ---- 6. core bloom --------------------------------------------------------
bloom = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(bloom).ellipse(
    [FX - 140, FY - 120, FX + 140, FY + 120], fill=(172, 88, 250, 175))
bloom = bloom.filter(ImageFilter.GaussianBlur(95))

hotcore = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(hotcore).ellipse(
    [FX - 50, FY - 44, FX + 50, FY + 44], fill=(242, 232, 255, 210))
hotcore = hotcore.filter(ImageFilter.GaussianBlur(30))

# ---- 7. glossy droplets ---------------------------------------------------
drops = Image.new("RGBA", (W, H), (0, 0, 0, 0))
dd = ImageDraw.Draw(drops)
for _ in range(15):
    r = random.uniform(9, 30)
    cx, cy = random.uniform(70, W - 70), random.uniform(70, H - 70)
    if math.hypot(cx - FX, cy - FY) < 280:
        continue
    dd.ellipse([cx - r - 3, cy - r - 3, cx + r + 3, cy + r + 3],
               outline=(124, 58, 237, 70))
    dd.ellipse([cx - r, cy - r, cx + r, cy + r],
               fill=(7, 5, 13, 245), outline=(150, 110, 220, 130))
    hr = r * 0.33
    hx, hy = cx - r * 0.42, cy - r * 0.42
    dd.ellipse([hx - hr, hy - hr, hx + hr, hy + hr],
               fill=(215, 205, 245, 160))
drops = drops.filter(ImageFilter.GaussianBlur(0.5))

# ---- 9. final black pockets ------------------------------------------------
pocket_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
pd_ = ImageDraw.Draw(pocket_layer)
for _ in range(9):
    cx, cy = random.uniform(80, W - 80), random.uniform(80, H - 80)
    if math.hypot(cx - FX, cy - FY) < 300 or math.hypot(cx - BX, cy - BY) < 260:
        continue
    rw, rh = random.uniform(150, 320), random.uniform(110, 230)
    pd_.ellipse([cx - rw, cy - rh, cx + rw, cy + rh], fill=(3, 2, 6, 205))
pocket_layer = pocket_layer.filter(ImageFilter.GaussianBlur(70))

# ---- composite ------------------------------------------------------------
canvas = base.convert("RGBA")
for layer in (
    crack_layer((190, 180, 214), 210, 0.46, 178, 62),   # v5.4 BROAD halo: warm gray-lavender bright zones
    crack_layer((88, 42, 150), 90, 0.34, 235, 40),    # deep bloom (warmer violet)
    crack_layer((130, 72, 225), 42, 0.38, 250, 12),   # violet glow (warmer)
    scatter,
    crack_layer((204, 194, 255), 14, 0.46, 250, 1.2),  # lavender core (wider)
    sparks,
    crack_layer((244, 240, 255), 4.2, 0.52, 255, 0),   # hot line (wider)
    bloom,
    shard,
    hotcore,
    drops,
    # v5.4 FINAL pocket pass — obsidian black pockets painted AFTER the glow
    # layers so the halos can't wash them out (ref: 29% true-black pockets
    # between glowing zones; contrast IS the look).
    pocket_layer,
):
    canvas = Image.alpha_composite(canvas, layer)

# ---- 8. vignette -----------------------------------------------------------
vin = Image.new("L", (W, H), 30)
ImageDraw.Draw(vin).ellipse(
    [-W * 0.28, -H * 0.38, W * 1.28, H * 1.38], fill=0)
vin = vin.filter(ImageFilter.GaussianBlur(220))
canvas = Image.composite(Image.new("RGBA", (W, H), (0, 0, 0, 255)),
                         canvas, vin)

# ---- 10. reference-matched tone curve ----------------------------------------
# Final calibration against the measured reference (avg 78,63,95, R/B 0.82):
# gamma lift on mid-tones only — black pockets stay black, highlights capped.
# R gets the strongest lift (temperature: reference is warmer than raw violet).
out = canvas.convert("RGB")
r, g, b = out.split()
r = r.point(lambda v: int(255 * (v / 255) ** 0.80) if v else 0)
g = g.point(lambda v: int(255 * (v / 255) ** 0.82) if v else 0)
b = b.point(lambda v: int(255 * (v / 255) ** 0.86) if v else 0)
out = Image.merge("RGB", (r, g, b))
out.save(OUT, "JPEG", quality=86, optimize=True)
print("saved", out.size)
