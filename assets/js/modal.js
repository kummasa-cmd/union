(function () {
  'use strict';

  var overlay = document.getElementById('lightboxModal');
  var closeBtn = document.getElementById('modalClose');
  var imageEl = document.getElementById('lightboxImage');
  var captionEl = document.getElementById('lightboxCaption');
  var lastFocusedEl = null;

  function openModal(label, caption, imgSrc) {
    lastFocusedEl = document.activeElement;
    imageEl.replaceChildren();

    if (imgSrc) {
      /* Real photo: drop the placeholder box styling so the <img> sizes
         itself naturally via the .modal__content img rule (contain, 88vh cap). */
      imageEl.classList.remove('img-placeholder', 'img-placeholder--light');
      imageEl.style.aspectRatio = '';
      imageEl.style.minWidth = '';
      var img = document.createElement('img');
      img.src = imgSrc;
      img.alt = caption || label;
      imageEl.appendChild(img);
    } else {
      imageEl.classList.add('img-placeholder');
      imageEl.style.aspectRatio = '4/3';
      imageEl.style.minWidth = 'min(80vw,720px)';
      imageEl.textContent = label;
    }

    captionEl.textContent = caption;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  /* Portfolio card lightbox triggers (all cards except Thai Embassy, which
     links to its own standalone page instead of using this modal) */
  document.querySelectorAll('.portfolio-card__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var title = trigger.getAttribute('data-title');
      var imgLabel = trigger.getAttribute('data-img-label');
      var imgSrc = trigger.getAttribute('data-img');
      openModal(imgLabel, title, imgSrc);
    });
  });

  /* Business registration image zoom */
  var regTrigger = document.getElementById('regZoomTrigger');
  if (regTrigger) {
    regTrigger.addEventListener('click', function () {
      var imgSrc = regTrigger.getAttribute('data-img');
      openModal('사업자등록증', '사업자등록증 — Union (106-05-28053)', imgSrc);
    });
    regTrigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        regTrigger.click();
      }
    });
  }

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });
})();
