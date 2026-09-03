(function () {
  var KEY = 'theme';
  var stored;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored === 'day') document.documentElement.dataset.theme = 'day';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isDay = document.documentElement.dataset.theme === 'day';
      if (isDay) {
        delete document.documentElement.dataset.theme;
      } else {
        document.documentElement.dataset.theme = 'day';
      }
      try { localStorage.setItem(KEY, isDay ? 'night' : 'day'); } catch (e) {}
    });
  });
})();
