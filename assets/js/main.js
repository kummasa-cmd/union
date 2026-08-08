(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Header: scroll shadow + condensed height
     ------------------------------------------------------------------ */
  var header = document.getElementById('header');

  function updateHeaderState() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  /* ------------------------------------------------------------------
     Mobile hamburger menu
     ------------------------------------------------------------------ */
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  function closeNav() {
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function toggleNav() {
    var isOpen = document.body.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }

  hamburger.addEventListener('click', toggleNav);

  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* ------------------------------------------------------------------
     Scroll spy — highlight active nav link for the section in view
     ------------------------------------------------------------------ */
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll('.nav__link'));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = navLinks.find(function (l) {
            return l.getAttribute('href') === '#' + entry.target.id;
          });
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) {
              l.classList.remove('is-active');
            });
            link.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      spyObserver.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     Scroll-reveal (lightweight AOS replacement)
     ------------------------------------------------------------------ */
  var aosTargets = document.querySelectorAll('[data-aos]');

  if ('IntersectionObserver' in window) {
    var aosObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-visible');
            aosObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    aosTargets.forEach(function (el) {
      aosObserver.observe(el);
    });
  } else {
    aosTargets.forEach(function (el) {
      el.classList.add('aos-visible');
    });
  }

  /* ------------------------------------------------------------------
     Portfolio category filter
     ------------------------------------------------------------------ */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      filterButtons.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      portfolioCards.forEach(function (card) {
        var match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
})();
