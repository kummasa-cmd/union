(function () {
  'use strict';

  var STORAGE_KEY = 'union-lang';
  var DEFAULT_LANG = 'ko';

  /* English replacements, keyed by data-i18n / data-i18n-attr-* values.
     Korean is read straight from the DOM, so it never needs to be duplicated here. */
  var EN = {
    'nav.history': 'Our History',
    'nav.about': 'Our Philosophy',
    'about.title': 'Our Philosophy',
    'nav.business': 'Business Areas',
    'nav.portfolio': 'Selected Projects',
    'nav.registration': 'Recommendations & Certifications',

    'a11y.openMenu': 'Open menu',
    'a11y.intro': 'Intro',
    'a11y.close': 'Close',

    'hero.bgAria': 'Interior showcase image',
    'hero.sub': 'Value that endures, crafted through trust and precision.',
    'hero.scrollAria': 'Scroll down',

    'history.label': 'UNION creates spaces whose value endures over time.',
    'history.title': 'Company History',
    'history.term.name': 'Company Name',
    'history.term.founded': 'Founded',
    'history.founded': 'July 31, 2002',
    'history.term.ceo': 'CEO',
    'history.ceo': 'Young-jong Seo',
    'history.term.address': 'Address',
    'history.address': '1127 Singil 7(chil)-dong, Yeongdeungpo-gu, Seoul, Korea',
    'history.term.bizType': 'Business Type',
    'history.bizType': 'Service',
    'history.term.industry': 'Industry',
    'history.industry': 'Architecture / Interior Design',
    'history.term.tel': 'Tel',
    'history.term.mobile': 'Mobile',
    'history.term.email': 'Email',

    'about.lead': 'Built on architecture and interior design &amp; construction expertise,<br>' +
      'UNION has earned experience and trust across residential, commercial, and diplomatic spaces.' +
      '<br><br>' +
      'Through precise craftsmanship and responsible execution,<br>' +
      'we create spaces whose value endures over time.',
    'about.u': 'We understand spaces and clients deeply.',
    'about.n1': 'We pursue a dignity that endures over time.',
    'about.i': 'We uphold honesty and responsibility as our principles.',
    'about.o': 'We design the unique value of every space.',
    'about.n2': "We finish every detail with care, down to what the eye can't see.",

    'business.title': 'Business Areas',
    'business.card1.title': 'Interior Construction',
    'business.card1.desc': 'Interior construction services that elevate the value of every space.',
    'business.card2.title': 'Architectural Construction',
    'business.card2.desc': 'Architectural construction built on solid technical expertise.',
    'business.card3.title': 'Design &amp; Planning',
    'business.card3.desc': 'Tailored design and project planning built around client needs.',

    'portfolio.title': 'Portfolio',
    'portfolio.filterAria': 'Portfolio category filter',

    'cat.all': 'All',
    'cat.office': 'Office',
    'cat.commercial': 'Commercial',
    'cat.hospitality': 'Hospitality',
    'cat.factory': 'Factory / Facility',
    'cat.residential': 'Residential',
    'cat.embassy': 'Embassy',

    'pf.thai.linkAria': 'Open Royal Thai Embassy project detail page in a new tab',
    'pf.thai.imgAria': 'Royal Thai Embassy banquet hall',
    'pf.thai.title': 'Royal Thai Embassy<br>Banquet Hall &amp; Conference Room',

    'pf.02.title': 'Gyeonggi Credit Guarantee',
    'pf.03.title': 'ATGen',
    'pf.04.title': 'Ilsan Clinic',
    'pf.05.title': 'Pohang Wedding Hall',
    'pf.06.title': 'Gurye Peace Restaurant',
    'pf.07.title': 'Namyangju Bakery Café',
    'pf.08.title': 'Pyeongchang Residence',
    'pf.09.title': 'Kumho Disaster Prevention',
    'pf.10.title': 'Pyeongchang-dong Detached House',

    'reg.zoomAria': 'View enlarged Polish Embassy letter of appreciation',
    'reg.letterAlt': 'Polish Embassy letter of appreciation',
    'reg.letterCaption': 'Polish Embassy Letter of Appreciation — UNION Interior',
    'reg.zoomHint': 'Zoom +',
    'reg.title': 'Trust and Excellence Recognized by the Polish Embassy',
    'reg.text': '<p>In 2018, the Embassy of the Republic of Poland in Seoul<br>' +
      'presented UNION with an official letter of recommendation,<br>' +
      'recognizing its expertise, high construction quality,<br>' +
      'and the thoughtful cooperation shown throughout the project.</p>' +
      '<p>The Embassy highly valued UNION’s technical expertise and sense of responsibility<br>' +
      'in successfully completing the project under challenging conditions<br>' +
      'while minimizing disruption to embassy operations.</p>',
    'reg.quote': '<p>&ldquo;We thank you for your professionalism, high quality,<br>' +
      'and kind, considerate cooperation.&rdquo;</p>' +
      '<cite>— Embassy of the Republic of Poland in Seoul<br>2018</cite>',

    'footer.ceoLine': 'CEO Young-jong Seo · Business Reg. No. 106-05-28053',

    'meta.title': 'UNION | Architecture & Interior Design Specialists',
    'meta.description': "UNION is a construction and interior design firm built on an owner's mindset, delivering trust and technical excellence in every project.",
    'meta.ogLocale': 'en_US',

    /* Portfolio detail — Royal Thai Embassy */
    'detail.meta.title': 'Royal Thai Embassy | UNION',
    'detail.meta.description': "A detailed look at UNION's interior remodeling project for the Royal Thai Embassy's banquet hall and conference room.",
    'back': '← Back to list',
    'hero.title': 'Royal Thai Embassy',
    'hero.subtitle': 'Banquet Hall &amp; Conference Room Interior Remodeling',
    'overview.name': 'Royal Thai Embassy',
    'stage.title': 'Stage Design',
    'stage.imgAlt': 'Stage design',
    'stage.caption': 'Banquet hall front stage design — wood paneling &amp; bronze line detail',
    'bookshelf.title': 'Side Bookshelf Design',
    'bookshelf.imgAlt': 'Side bookshelf design',
    'bookshelf.caption': 'Built-in side bookshelf design for the conference room',
    'material.title': 'Material Finish',
    'material.01.name': 'Wood Sheet Film',
    'material.01.code': 'Banquet Hall / Conference Room, Wall',
    'material.02.name': 'MDF Perforated Board',
    'material.03.name': 'Patterned Glass',
    'material.03.code': 'Banquet Hall / Conference Room, Folding Door',
    'material.04.name': 'Carpet Tile',
    'material.04.code': 'Conference Room, Floor'
  };

  var textEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  textEls.forEach(function (el) {
    el.dataset.i18nKo = el.innerHTML;
  });

  var ATTR_PREFIX = 'data-i18n-attr-';
  var attrJobs = [];
  Array.prototype.slice.call(document.querySelectorAll('*')).forEach(function (el) {
    if (!el.attributes) return;
    Array.prototype.slice.call(el.attributes).forEach(function (attr) {
      if (attr.name.indexOf(ATTR_PREFIX) !== 0) return;
      var targetAttr = attr.name.slice(ATTR_PREFIX.length);
      var key = attr.value;
      attrJobs.push({ el: el, attr: targetAttr, key: key, ko: el.getAttribute(targetAttr) });
    });
  });

  function applyLang(lang) {
    textEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (lang === 'en' && EN[key] != null) ? EN[key] : el.dataset.i18nKo;
    });

    attrJobs.forEach(function (job) {
      var value = (lang === 'en' && EN[job.key] != null) ? EN[job.key] : job.ko;
      if (value == null) {
        job.el.removeAttribute(job.attr);
      } else {
        job.el.setAttribute(job.attr, value);
      }
    });

    document.documentElement.lang = lang;

    var buttons = document.querySelectorAll('.lang-switch__btn');
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable (private mode, etc.) — language just won't persist */
    }
  }

  var initialLang = DEFAULT_LANG;
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ko' || saved === 'en') initialLang = saved;
  } catch (e) {
    /* ignore */
  }

  applyLang(initialLang);

  document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });
})();
