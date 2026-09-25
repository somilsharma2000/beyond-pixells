/* ============================================================
   BEYOND PIXELLS — MOTION ENGINE v1.0
   Auto-activates the design system's motion on any page:
   <script src="https://somilsharma2000.github.io/beyond-pixells/assets/bp-motion.js"></script>
   - Auto-reveals standard sections/cards with stagger (fadeUp)
   - countUp: animates numeric stats when they enter view
   - Respects prefers-reduced-motion (no animation, content visible)
   ============================================================ */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. AUTO SCROLL-REVEAL ---- */
  var AUTO = ['.sec-head','.os-card','.svc','.stat','.step','.tier','.f','.pain-card','.b-card','.q','.mini','.venture','.vs'];
  var els = document.querySelectorAll(AUTO.join(','));
  els.forEach(function(el){ el.setAttribute('data-reveal',''); });
  var groups = document.querySelectorAll('section, header');
  groups.forEach(function(g){
    var kids = g.querySelectorAll('[data-reveal]');
    kids.forEach(function(k,i){ k.style.transitionDelay = (i%6)*70 + 'ms'; });
  });

  if (reduce) {
    els.forEach(function(el){ el.classList.add('bp-revealed'); });
    return;
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('bp-revealed'); io.unobserve(e.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){ io.observe(el); });

  /* ---- 2. COUNT-UP STATS ---- */
  function countUp(el){
    var raw = el.textContent.trim();
    var m = raw.match(/^([₹$]?\s*)(\d[\d,]*)(.*)$/);
    if (!m) return;
    var prefix = m[1], target = parseInt(m[2].replace(/,/g,''),10), suffix = m[3];
    var dur = 1100, start = null;
    function frame(t){
      if (!start) start = t;
      var p = Math.min((t-start)/dur, 1);
      var eased = 1 - Math.pow(1-p, 3);
      el.textContent = prefix + Math.round(target*eased).toLocaleString('en-IN') + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    el.style.animation = 'bp-numSlide .5s var(--bp-ease-out-expo)';
    requestAnimationFrame(frame);
  }
  var STAT = ['.stat b','.trust b','.hero .pill'];
  var statEls = document.querySelectorAll(STAT.join(','));
  var io2 = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting && !e.target.dataset.counted){
        e.target.dataset.counted = '1';
        if (!reduce) countUp(e.target);
      }
    });
  }, {threshold:.4});
  statEls.forEach(function(el){ io2.observe(el); });
})();
