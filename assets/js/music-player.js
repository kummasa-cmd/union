(function () {
  'use strict';

  var player = document.getElementById('musicPlayer');
  if (!player) return;

  var audio = document.getElementById('musicAudio');
  var toggleBtn = document.getElementById('musicToggle');

  var LABELS = {
    ko: { play: '배경음악 재생', pause: '배경음악 일시정지' },
    en: { play: 'Play background music', pause: 'Pause background music' }
  };

  function setPlayingState(isPlaying) {
    player.classList.toggle('is-playing', isPlaying);
    toggleBtn.classList.toggle('is-playing', isPlaying);
    toggleBtn.setAttribute('aria-pressed', String(isPlaying));
    var lang = document.documentElement.lang === 'en' ? 'en' : 'ko';
    toggleBtn.setAttribute('aria-label', isPlaying ? LABELS[lang].pause : LABELS[lang].play);
  }

  toggleBtn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play().catch(function () {});
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', function () {
    setPlayingState(true);
  });

  audio.addEventListener('pause', function () {
    setPlayingState(false);
  });
})();
