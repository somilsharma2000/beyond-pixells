/* Beyond Pixells — Visual Effects Kit v1 (Chrome Violet v4)
   Patterns ported from Magic UI / Aceternity: meteors, spotlight, tilt.
   Auto-wires: meteors into any element with data-bp-meteors, tilt into
   .bp-tilt (inside .bp-tilt-scene), spotlight into .bp-spot-host. */
(function () {
  var d = document;

  /* METEORS — spawn N shooting stars inside [data-bp-meteors] */
  d.querySelectorAll('[data-bp-meteors]').forEach(function (host) {
    var n = parseInt(host.getAttribute('data-bp-meteors'), 10) || 6;
    var wrap = d.createElement('div');
    wrap.className = 'bp-meteors';
    for (var i = 0; i < n; i++) {
      var m = d.createElement('i');
      m.style.left = (10 + Math.random() * 80) + '%';
      m.style.top = (-5 + Math.random() * 35) + '%';
      m.style.animationDelay = (Math.random() * 6) + 's';
      m.style.animationDuration = (2.6 + Math.random() * 2.4) + 's';
      wrap.appendChild(m);
    }
    host.appendChild(wrap);
  });

  /* SPOTLIGHT — cursor-follow glow for .bp-spot-host */
  d.querySelectorAll('.bp-spot-host').forEach(function (el) {
    if (el.querySelector('.bp-spot')) return;
    var sp = d.createElement('div');
    sp.className = 'bp-spot';
    el.appendChild(sp);
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      sp.style.setProperty('--bp-mx', (e.clientX - r.left) + 'px');
      sp.style.setProperty('--bp-my', (e.clientY - r.top) + 'px');
    });
  });

  /* TILT — 3D perspective follow for .bp-tilt inside .bp-tilt-scene */
  d.querySelectorAll('.bp-tilt-scene').forEach(function (scene) {
    var t = scene.querySelector('.bp-tilt');
    if (!t || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    scene.addEventListener('mousemove', function (e) {
      var r = scene.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - .5;
      var y = (e.clientY - r.top) / r.height - .5;
      t.style.transform = 'rotateX(' + (-y * 10) + 'deg) rotateY(' + (x * 12) + 'deg)';
    });
    scene.addEventListener('mouseleave', function () { t.style.transform = ''; });
  });
})();
