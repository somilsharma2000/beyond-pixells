#!/usr/bin/env python3
"""Render the Obsidian Veins hero texture (v5.2).

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

W, H = 2048, 1230
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


def dist_focal(p):
    return math.hypot(p[0] - FX, p[1] - FY)


# ---- 1. base ------------------------------------------------------------
base = Image.new("RGB", (W, H), (4, 3, 8))
amb = Image.new("L", (W, H), 0)
ImageDraw.Draw(amb).ellipse(
    [FX - 560, FY - 430, FX + 560, FY + 430], fill=46)
amb = amb.filter(ImageFilter.GaussianBlur(220))
base = Image.composite(Image.new("RGB", (W, H), (22, 12, 40)), base, amb)

# ---- 2. crack network ----------------------------------------------------
trunks = []
for a in (100, 120, 138, 155, 170, 185, 200, 218, 238, 258, 280):
    length = random.uniform(720, 1180)
    pts = branch(FX, FY, a, length, random.randint(9, 14), 0.30, 26)
    trunks.append(pts)
    for _ in range(2):  # forks
        i = random.randint(2, len(pts) - 2)
        sub = branch(
            pts[i][0], pts[i][1],
            a + random.choice([-1, 1]) * random.uniform(30, 65),
            length * random.uniform(0.30, 0.50), 5, 0.45, 18)
        trunks.append(sub)


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
for _ in range(14):
    x0, y0 = random.uniform(40, W - 40), random.uniform(40, H - 40)
    if math.hypot(x0 - FX, y0 - FY) < 320:
        continue
    ang = random.uniform(0, 360)
    pts = branch(x0, y0, ang, random.uniform(180, 400), 4, 0.5, 16)
    for i in range(len(pts) - 1):
        sd.line([pts[i], pts[i + 1]], fill=(115, 72, 205, 115), width=3)
scatter = scatter.filter(ImageFilter.GaussianBlur(2.2))

# ---- 4. junction sparks --------------------------------------------------
sparks = Image.new("RGBA", (W, H), (0, 0, 0, 0))
spd = ImageDraw.Draw(sparks)
for pts in trunks:
    for i in (2, 4, 6):
        if i < len(pts) - 1 and dist_focal(pts[i]) < MAXD * 0.7:
            x, y = pts[i]
            r = random.uniform(3, 7)
            spd.ellipse([x - r, y - r, x + r, y + r],
                        fill=(222, 208, 255, 200))
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

# ---- composite ------------------------------------------------------------
canvas = base.convert("RGBA")
for layer in (
    crack_layer((64, 22, 140), 46, 0.24, 185, 44),   # deep bloom
    crack_layer((124, 58, 237), 22, 0.28, 230, 11),  # violet glow
    scatter,
    crack_layer((196, 181, 253), 6.5, 0.34, 245, 1.2),  # lavender core
    sparks,
    crack_layer((240, 236, 255), 3.2, 0.50, 255, 0),   # hot line
    bloom,
    shard,
    hotcore,
    drops,
):
    canvas = Image.alpha_composite(canvas, layer)

# ---- 8. vignette -----------------------------------------------------------
vin = Image.new("L", (W, H), 60)
ImageDraw.Draw(vin).ellipse(
    [-W * 0.28, -H * 0.38, W * 1.28, H * 1.38], fill=0)
vin = vin.filter(ImageFilter.GaussianBlur(220))
canvas = Image.composite(Image.new("RGBA", (W, H), (0, 0, 0, 255)),
                         canvas, vin)

out = canvas.convert("RGB")
out.save("assets/img/hero-veins.jpg", "JPEG", quality=86, optimize=True)
print("saved", out.size)
