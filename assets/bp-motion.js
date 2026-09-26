/* ============================================================
   BEYOND PIXELLS — MOTION ENGINE v2.0
   Universal Vanilla JS Motion & Lighting System.
   Include on any site:
   <script src="https://somilsharma2000.github.io/beyond-pixells/assets/bp-motion.js"></script>

   Engines:
   1. Scroll-reveal (data-reveal="up|scale|left|right", legacy
      v1.0 selectors auto-upgraded) with grouped stagger
   2. Card spotlight (mouse-following) for .bp-spotlight-card
   3. 3D tilt cards (.bp-tilt-card, hover devices only)
   4. Magnetic buttons (.bp-magnetic-btn, hover devices only)
   5. Nav frost/scroll-shrink (.bp-nav-sticky) + scroll progress bar
   6. Count-up stats (.stat b, .trust b, [data-countup]) — ₹/$ aware
   7. Marquee direction/pause controls

   Everything respects prefers-reduced-motion: content is always
   visible and no transform-based engine runs.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ */
  function initScrollReveal() {
    /* v1.0 legacy selectors stay auto-revealed; new sites use
       data-reveal="up|scale|left|right" explicitly. */
    var legacySelectors = ['.sec-head', '.os-card', '.svc', '.stat', '.step', '.tier', '.f', '.pain-card', '.b-card', '.q', '.mini', '.venture', '.vs'];
    var revealElements = Array.prototype.slice.call(document.querySelectorAll('[data-reveal], ' + legacySelectors.join(',')));

    revealElements.forEach(function (el) {
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'up');
    });

    var groups = document.querySelectorAll('section, header, .grid, .bp-grid');
    groups.forEach(function (group) {
      var children = group.querySelectorAll('[data-reveal]');
      children.forEach(function (child, idx) {
        if (!child.style.transitionDelay) {
          child.style.transitionDelay = (idx % 6) * 70 + 'ms';
        }
      });
    });

    if (reduceMotion) {
      revealElements.forEach(function (el) { el.classList.add('bp-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('bp-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------ */
    /* initSpotlightCards removed 26 Sep 2026 — founder dislikes cursor-follow glow.
     Cards keep their clean lift hover only. */

  function init3DTilt() {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return;

    var tiltCards = document.querySelectorAll('.bp-tilt-card, [data-tilt]');

    Array.prototype.forEach.call(tiltCards, function (card) {
      var rafId = null;

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var rotateX = ((centerY - y) / centerY) * 3; /* max 3deg — smooth per founder directive */
        var rotateY = ((x - centerX) / centerX) * 3;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) scale3d(1.02,1.02,1.02)';
        });
      });

      card.addEventListener('mouseleave', function () {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        });
      });
    });
  }

  /* ------------------------------------------------------------ */
  function initMagneticButtons() {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return;

    var magneticBtns = document.querySelectorAll('.bp-magnetic-btn, [data-magnetic]');

    Array.prototype.forEach.call(magneticBtns, function (btn) {
      var rafId = null;

      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;

        var deltaX = (e.clientX - centerX) * 0.25;
        var deltaY = (e.clientY - centerY) * 0.25;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          btn.style.transform = 'translate3d(' + deltaX.toFixed(2) + 'px,' + deltaY.toFixed(2) + 'px,0px)';
        });
      });

      btn.addEventListener('mouseleave', function () {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          btn.style.transform = 'translate3d(0px,0px,0px)';
        });
      });
    });
  }

  /* ------------------------------------------------------------ */
  function initNavScroll() {
    var nav = document.querySelector('.bp-nav-sticky, [data-sticky]');
    var progressBar = document.querySelector('.bp-scroll-progress-bar');
    if (!nav && !progressBar) return;

    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrolled = window.scrollY > 20;
          if (nav) nav.setAttribute('data-scrolled', scrolled ? 'true' : 'false');

          if (progressBar) {
            var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            progressBar.style.transform = 'scaleX(' + Math.min(Math.max(progress, 0), 1) + ')';
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------ */
  function countUp(el) {
    var raw = el.textContent.trim();
    var match = raw.match(/^([₹$]?\s*)(\d[\d,]*\.?\d*)(.*)$/);
    if (!match) return;

    var prefix = match[1];
    var target = parseFloat(match[2].replace(/,/g, ''));
    var suffix = match[3];
    var isDecimal = match[2].indexOf('.') !== -1;
    var isIndianFormat = prefix.indexOf('₹') !== -1 || raw.indexOf('Cr') !== -1 || raw.indexOf('Lakh') !== -1;

    var duration = 1200;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = 1 - Math.pow(1 - progress, 3);
      var currentValue = target * easedProgress;

      var formattedNum;
      if (isDecimal) {
        formattedNum = currentValue.toFixed(1);
      } else {
        var rounded = Math.round(currentValue);
        formattedNum = isIndianFormat ? rounded.toLocaleString('en-IN') : rounded.toLocaleString('en-US');
      }

      el.textContent = prefix + formattedNum + suffix;

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function initCountUpStats() {
    var statSelectors = ['.stat b', '.trust b', '[data-countup]'];
    var statElements = document.querySelectorAll(statSelectors.join(','));
    if (!statElements.length) return;

    if (reduceMotion) return; /* leave initial text intact */

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = '1';
          countUp(entry.target);
        }
      });
    }, { threshold: 0.4 });

    Array.prototype.forEach.call(statElements, function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------ */
  function initMarquees() {
    var marquees = document.querySelectorAll('.bp-marquee');
    Array.prototype.forEach.call(marquees, function (mq) {
      var dir = mq.getAttribute('data-direction');
      if (dir === 'reverse') {
        var track = mq.querySelector('.bp-marquee-track');
        if (track) track.style.animationDirection = 'reverse';
      }
    });
  }

  /* ------------------------------------------------------------ */
  function initEngine() {
    document.body.classList.add('bp-engine-ready');

    initScrollReveal();
    
    init3DTilt();
    initMagneticButtons();
    initNavScroll();
    initCountUpStats();
    initMarquees();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEngine);
  } else {
    initEngine();
  }

})();
