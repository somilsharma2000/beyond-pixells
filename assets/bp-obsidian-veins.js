/* Beyond Pixells — Obsidian Veins (v5) runtime.
   Wires: grain overlay, procedural droplet scatter, tsParticles violet
   dust confined to .ov-geode via clip-path host. Uses the vendored
   tsParticles slim bundle (assets/vendor/tsparticles.slim.bundle.min.js). */
(function () {
  var d = document;

  /* grain overlay — inject once, site-wide */
  if (!d.querySelector('.ov-grain')) {
    var g = d.createElement('div');
    g.className = 'ov-grain';
    d.body.appendChild(g);
  }

  /* droplet scatter inside any [data-ov-droplets="N"] host */
  d.querySelectorAll('[data-ov-droplets]').forEach(function (host) {
    var n = parseInt(host.getAttribute('data-ov-droplets'), 10) || 10;
    var wrap = d.createElement('div');
    wrap.className = 'ov-droplets';
    for (var i = 0; i < n; i++) {
      var s = 4 + Math.random() * 14;
      var el = d.createElement('i');
      el.style.width = s + 'px';
      el.style.height = s + 'px';
      el.style.left = Math.random() * 96 + '%';
      el.style.top = Math.random() * 96 + '%';
      wrap.appendChild(el);
    }
    host.appendChild(wrap);
  });

  /* geode particle dust — violet glitter confined to the shard shape */
  if (window.tsParticles) {
    d.querySelectorAll('.ov-geode-particles').forEach(function (host, i) {
      var id = host.id || ('ov-geode-p-' + i);
      host.id = id;
      window.tsParticles.load({
        id: id,
        options: {
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            number: { value: 90 },
            color: { value: ['#C4B5FD', '#A855F7', '#F5F3FF'] },
            opacity: { value: { min: 0.2, max: 0.9 }, animation: { enable: true, speed: 1.2, sync: false } },
            size: { value: { min: 0.4, max: 1.6 } },
            move: { enable: true, speed: 0.25, direction: 'none', random: true, outModes: { default: 'bounce' } },
            links: { enable: false }
          },
          detectRetina: true
        }
      });
    });
  }
})();
