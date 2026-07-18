// local-iconify.js
// Локальна заміна CDN-скрипта https://code.iconify.design/3/3.1.1/iconify.min.js
// Працює повністю офлайн: бере готові SVG з window.LOCAL_ICONS (icons-data.js)
// і вставляє їх у всі <span class="iconify" data-icon="..."></span>,
// точно так само, як це робив оригінальний CDN-скрипт.

(function () {
  function renderIcons(root) {
    var scope = root || document;
    var els = scope.querySelectorAll('.iconify[data-icon]:not([data-ico-done])');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var name = el.getAttribute('data-icon');
      var svg = window.LOCAL_ICONS && window.LOCAL_ICONS[name];
      if (!svg) {
        console.warn('local-iconify: no local SVG for', name);
        continue;
      }
      el.innerHTML = svg;
      var svgEl = el.querySelector('svg');
      if (svgEl) {
        var w = el.getAttribute('data-width');
        var h = el.getAttribute('data-height');
        if (w) svgEl.setAttribute('width', w);
        if (h) svgEl.setAttribute('height', h);
        if (!w && !h) {
          // Поведінка за замовчуванням як у оригінального Iconify: розмір = 1em
          svgEl.style.width = '1em';
          svgEl.style.height = '1em';
        }
        svgEl.style.verticalAlign = '-0.125em';
        svgEl.style.display = 'inline-block';
      }
      el.setAttribute('data-ico-done', '1');
    }
  }

  // Початковий рендер
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { renderIcons(); });
  } else {
    renderIcons();
  }

  // app.js динамічно перемальовує екрани через innerHTML —
  // стежимо за змінами DOM і рендеримо нові іконки, щойно вони з'являються
  var observer = new MutationObserver(function () { renderIcons(); });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
