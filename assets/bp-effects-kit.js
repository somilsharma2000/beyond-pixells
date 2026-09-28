/* Beyond Pixells — Visual Effects Kit v1 (Chrome Violet v4)
   Patterns ported from Magic UI / Aceternity: tilt.
   Auto-wires: tilt into .bp-tilt (inside .bp-tilt-scene). */
(function () {
  var d = document;

    /* SPOTLIGHT removed 26 Sep 2026 — founder dislikes cursor-follow glow. */
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
