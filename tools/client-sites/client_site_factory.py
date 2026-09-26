#!/usr/bin/env python3
"""
BEYOND PIXELLS — CLIENT SITE FACTORY (blueprint §205 landing page factory)
Generates a client landing site from the canonical template (oxigen-fitness-digital)
plus one JSON client-data file. No invention: every value comes from the client's
published data, gathered into the JSON.

Usage: python3 client_site_factory.py <client.json> <target_dir>
"""
import json, os, sys, re

def load(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)

def build_index(client, template_html):
    s = template_html
    def rep(old, new):
        nonlocal s
        assert old in s, "ANCHOR MISSING: " + old[:70]
        s = s.replace(old, new, 1)

    d = client
    rep('<meta name="description" content="Oxigen Fitness Jaipur — purposeful programming, practical coaching, and a connected Gym OS member experience: QR check-in, WhatsApp-first support, instant booking." />',
        f'<meta name="description" content="{d["metaDescription"]}" />')
    rep('<title>Oxigen Fitness Jaipur | Connected Gym OS Experience</title>', f'<title>{d["title"]}</title>')
    rep('<link rel="canonical" href="https://somilsharma2000.github.io/oxigen-fitness-digital/">',
        f'<link rel="canonical" href="{d["siteUrl"]}">')
    rep('<meta property="og:title" content="Oxigen Fitness Jaipur">', f'<meta property="og:title" content="{d["ogTitle"]}">')
    rep('<meta property="og:description" content="Purposeful training, connected member experience. Powered by Gym OS.">',
        f'<meta property="og:description" content="{d["ogDescription"]}">')
    rep('<meta property="og:url" content="https://somilsharma2000.github.io/oxigen-fitness-digital/">',
        f'<meta property="og:url" content="{d["siteUrl"]}">')
    rep('''<script type="application/ld+json">{"@context":"https://schema.org","@type":"HealthClub","name":"Oxigen Fitness","url":"https://somilsharma2000.github.io/oxigen-fitness-digital/","description":"Connected fitness club in Jaipur, India.","publisher":{"@type":"Organization","name":"Beyond Pixells","url":"https://somilsharma2000.github.io/beyond-pixells/"}}</script>''',
        f'<script type="application/ld+json">{json.dumps(d["jsonld"], ensure_ascii=False)}</script>')

    rep('<span class="brand-mark">O</span>\n          <span id="brand-name">OXIGEN FITNESS</span>',
        f'<span class="brand-mark">{d["brandMark"]}</span>\n          <span id="brand-name">{d["brandNameUpper"]}</span>')
    rep('<span class="brand-mark">O</span>\n              <span id="footer-brand">OXIGEN FITNESS</span>',
        f'<span class="brand-mark">{d["brandMark"]}</span>\n              <span id="footer-brand">{d["brandNameUpper"]}</span>')
    rep('aria-label="Oxigen Fitness home"', f'aria-label="{d["brandName"]} home"')

    rep('<span id="location-label">JAIPUR · MEMBER-LED TRAINING</span>',
        f'<span id="location-label">{d["locationLabel"]}</span>')
    rep('Training with <span class="hl">intent.</span><br />Progress with a plan.', d["heroH1"])
    rep('A connected club for people who want strength, momentum and a routine built around the life they actually lead.',
        d["heroDescription"])
    rep('>Book a trial on WhatsApp <span>↗</span></a>', f'>{d["heroPrimaryCta"]} <span>↗</span></a>')
    rep('⚡ Gym OS connected &nbsp;·&nbsp; QR check-in &nbsp;·&nbsp; Reply within 24 hours &nbsp;·&nbsp; No lock-in contracts',
        d["heroMicroCopy"])
    rep('aria-label="Oxigen training philosophy"', f'aria-label="{d["brandName"]} philosophy"')
    rep('“Less noise.<br />More <span class="hl">purpose.</span>”', d["heroCardQuote"])
    rep('Your membership, bookings and check-ins run on the Gym OS member portal.', d["heroCardNote"])

    rep('A MODERN MEMBER EXPERIENCE', d["aboutEyebrow"])
    rep('Everything you need to train well. Nothing you do not.', d["aboutH2"])
    rep('Oxigen brings together purposeful programming, practical coaching and a clear path from first visit to lasting routine — integrated with Gym OS for instant lead response, touchless check-in and member tracking.',
        d["aboutP"])
    rep('<span class="stat-num">24/7</span><span class="stat-label">Gym OS member portal access</span>', d["stat1"])
    rep('<span class="stat-num">1-tap</span><span class="stat-label">WhatsApp-first support</span>', d["stat2"])
    rep('<span class="stat-num">QR</span><span class="stat-label">Touchless check-in</span>', d["stat3"])

    rep('02 / TRAINING PROGRAMS', d["programsEyebrow"])
    rep('One club.<br /><span class="hl">Three clear paths.</span>', d["programsH2"])
    rep('Choose a starting point that matches your goal. Your coach helps you build consistency from day one.', d["programsP"])
    for i, card in enumerate(d["programCards"]):
        rep(f'<h3>Build Strength</h3>' if i == 0 else ('<h3>Move Better</h3>' if i == 1 else '<h3>Find Your Rhythm</h3>'),
            f'<h3>{card["name"]}</h3>')
        old_spans = [
            'Structured coaching for progress you can feel outside the gym: compound lifts, movement alignment, progressive overload.',
            'Mobility, conditioning and a smarter relationship with effort — efficient aerobic engines without joint strain.',
            'Supportive coaching for a routine that fits real life: habit integration, progressive feedback, weekly milestones.',
        ]
        rep(f'<span>{old_spans[i]}</span>', f'<span>{card["desc"]}</span>')

    rep('03 / CLASS SCHEDULE', d["timetableEyebrow"])
    rep('Useful sessions.<br /><span class="hl">Real energy.</span>', d["timetableH2"])
    rep('Classes are shaped around strength, conditioning and sustainable movement. Book your spot on WhatsApp — it lands directly with the team.',
        d["timetableP"])

    rep('Our coaching team brings expertise, technical focus and genuine care to every session on the floor.', d["trainersP"])

    rep('Flexible options built for consistency. All tiers include the Gym OS member portal, touchless check-in and WhatsApp support.',
        d["membershipP"])

    rep('Every square meter of Oxigen Fitness is engineered for purposeful training.', d["facilitiesP"])
    rep('''<span>COMPETITION-GRADE STRENGTH PLATFORMS</span>
              <span>ROWERS &amp; CONDITIONING RUNNERS</span>
              <span>CUSTOM RIG &amp; TURF ZONE</span>''',
        "\n              ".join(f'<span>{line}</span>' for line in d["equipmentLines"]))
    rep('<p class="card-kicker">RECOVERY SUITE</p>\n            <h3>Sauna &amp; Recovery</h3>\n            <p>Decompress after intense training in our quiet wellness bays.</p>',
        f'<p class="card-kicker">{d["recoveryKicker"]}</p>\n            <h3>{d["recoveryTitle"]}</h3>\n            <p>{d["recoveryP"]}</p>')
    rep('<p class="card-kicker">AMENITIES</p>\n            <h3>Locker Rooms</h3>\n            <p>Showers, towel service and keyless digital lockers.</p>',
        f'<p class="card-kicker">{d["fourthPanelKicker"]}</p>\n            <h3>{d["fourthPanelTitle"]}</h3>\n            <p>{d["fourthPanelP"]}</p>')

    rep('Start with<br /><span class="hl">one useful visit.</span>', d["trialH2"])
    rep('Tell us what you want to work on. The team confirms the most suitable visit time and next step.', d["trialP"])
    rep('I agree that Oxigen Fitness may use these details to respond to my enquiry. Managed via Gym OS.',
        f'I agree that {d["brandName"]} may use these details to respond to my enquiry. Managed via Gym OS.')

    rep('Purposeful training, clear progress, and a connected member experience.', d["footerTagline"])
    rep('© 2026 Oxigen Fitness. All rights reserved.', f'© 2026 {d["brandName"]}. All rights reserved.')
    rep('<p id="footer-address">📍 Oxigen Fitness Studio, Jaipur</p>', f'<p id="footer-address">📍 {d["address"]}</p>')
    rep('<p id="footer-phone">📞 +91 77370 77479</p>', f'<p id="footer-phone">📞 {d["phoneDisplay"]}</p>')

    rep("<script>window.GymOSConfig = { gymName: 'Oxigen Fitness', isDemo: true };</script>",
        f"<script>window.GymOSConfig = {{ gymName: '{d['brandName']}', isDemo: true }};</script>")

    assert 'Oxigen' not in s, "leftover Oxigen references"
    return s

def js_str(x):
    return json.dumps(x, ensure_ascii=False)

def build_config(client):
    c = client["config"]
    cfg = f"""/* ============================================================
   {client['brandName'].upper()} — SITE CONFIG (owner-editable)
   Every value the owner can change without code lives here.
   All data below is the club's real, published information.
   Full slot list: OWNER_CONTENT_CHECKLIST.md
   ============================================================ */
window.{client['configVar']} = {{
  brandName: {js_str(c['brandName'])},
  publicSlug: {js_str(c['publicSlug'])},
  locationLabel: {js_str(c['locationLabel'])},
  tagline: {js_str(c['tagline'])},
  description: {js_str(c['description'])},

  /* --- Contact (real values from the club) --- */
  whatsapp: {js_str(c['whatsapp'])},
  whatsappName: {js_str(c['whatsappName'])},
  whatsappPreFill: {js_str(c['whatsappPreFill'])},
  instagram: {js_str(c['instagram'])},
  email: {js_str(c['email'])},
  address: {js_str(c['address'])},
  phone: {js_str(c['phone'])},
  mapsUrl: {js_str(c['mapsUrl'])},

  /* --- Google reviews (real: from the club's published profile) --- */
  googleRating: {c['googleRating']},
  googleReviewCount: {c['googleReviewCount']},

  /* --- Trial pass --- */
  upiId: "",
  trialPass: {json.dumps(c['trialPass'], ensure_ascii=False)},

  /* --- Membership plans (real, from the club's published pricing) --- */
  plans: [
"""
    items = []
    for p in c["plans"]:
        feats = ", ".join(js_str(f) for f in p["features"])
        items.append(f'''    {{ kicker: {js_str(p['kicker'])}, name: {js_str(p['name'])}, price: {js_str(p['price'])}, period: {js_str(p['period'])}, popular: {str(p['popular']).lower()},
      desc: {js_str(p['desc'])},
      features: [{feats}] }}''')
    cfg += ",\n".join(items)
    cfg += """
  ],

  /* --- Coaches (real people from the club's published site — never invented) --- */
  trainers: [
"""
    tr = []
    for t in c["trainers"]:
        tags = ", ".join(js_str(x) for x in t["tags"])
        tr.append(f'''    {{ role: {js_str(t['role'])}, name: {js_str(t['name'])}, bio: {js_str(t['bio'])}, tags: [{tags}] }}''')
    cfg += ",\n".join(tr)
    cfg += """
  ],

  /* --- Training & services (real offerings — times via WhatsApp, none invented) --- */
  classes: [
"""
    cl = []
    for x in c["classes"]:
        cl.append(f'''    {{ category: {js_str(x['category'])}, name: {js_str(x['name'])}, time: {js_str(x['time'])}, desc: {js_str(x['desc'])} }}''')
    cfg += ",\n".join(cl)
    cfg += "\n  ]\n};\n"
    return cfg

def find_template_dir():
    here = os.path.abspath(os.path.dirname(__file__))
    for cand in [os.path.join(here, "..", "oxigen-fitness-digital"),
                 os.path.join(here, "..", "..", "oxigen-fitness-digital")]:
        if os.path.isdir(cand): return cand
    raise SystemExit("oxigen-fitness-digital template not found")

def main():
    client_path, target_dir = sys.argv[1], sys.argv[2]
    client = load(client_path)
    tpl_dir = find_template_dir()
    tpl = open(os.path.join(tpl_dir, "index.html"), encoding="utf-8").read()
    os.makedirs(target_dir, exist_ok=True)
    with open(os.path.join(target_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(build_index(client, tpl))
    with open(os.path.join(target_dir, "site.config.js"), "w", encoding="utf-8") as f:
        f.write(build_config(client))
    for fn in ["styles.css", "script.js", "config.example.js", "OWNER_CONTENT_CHECKLIST.md"]:
        src = open(os.path.join(tpl_dir, fn), encoding="utf-8").read()
        src = src.replace("OXIGEN_SITE_CONFIG", client["configVar"]).replace("Oxigen Fitness", client["brandName"]).replace("OXIGEN FITNESS", client["brandNameUpper"])
        with open(os.path.join(target_dir, fn), "w", encoding="utf-8") as f:
            f.write(src)
    print(f"BUILT {client['brandName']} -> {target_dir}")

if __name__ == "__main__":
    main()
