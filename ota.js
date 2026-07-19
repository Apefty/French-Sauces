/* ТИМЧАСОВА СИНХРОННА ПЕРЕВІРКА — чи файл взагалі виконується */
(function () {
  try {
    var el = document.createElement('div');
    el.textContent = 'OTA.JS SYNC CHECK: executing at ' + new Date().toISOString();
    el.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:999999;background:#2980b9;color:#fff;padding:8px;font:12px monospace;';
    document.body.appendChild(el);
  } catch (e) {}
})();
/* КІНЕЦЬ СИНХРОННОЇ ПЕРЕВІРКИ */

/* <!-- ANDROID VERSION! --> */
/* build 1.0.0 — 2026-07-19 */
/*
  OTA-оновлення через @capgo/capacitor-updater (ручний режим, autoUpdate:false).
  Джерело оновлень — GitHub Releases цього репозиторію (Apefty/French-Sauces).

  Очікується, що кожен реліз:
    - має тег виду vX.Y.Z (наприклад v1.3.0)
    - містить прикріплений файл з іменем bundle.zip — архів усього вмісту
      цієї папки (те, що вказано як webDir у capacitor.config.json)

  Нічого не робить у звичайному вебі/PWA — лише всередині нативного
  Android-застосунку (Capacitor.isNativePlatform()).
*/
(function () {
  var GH_REPO = 'Apefty/French-Sauces';
  var CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000; // не частіше ніж раз на 6 год
  var LAST_CHECK_KEY = 'ota_last_check';

  function isNative() {
    return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  }

  function getUpdater() {
    return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.CapacitorUpdater;
  }

  function shouldCheck() {
    try {
      var last = parseInt(localStorage.getItem(LAST_CHECK_KEY) || '0', 10);
      return (Date.now() - last) > CHECK_INTERVAL_MS;
    } catch (e) { return true; }
  }

  function markChecked() {
    try { localStorage.setItem(LAST_CHECK_KEY, String(Date.now())); } catch (e) {}
  }

  function isNewer(remote, current) {
    var r = String(remote).split('.').map(Number);
    var c = String(current).split('.').map(Number);
    for (var i = 0; i < Math.max(r.length, c.length); i++) {
      var rv = r[i] || 0, cv = c[i] || 0;
      if (rv > cv) return true;
      if (rv < cv) return false;
    }
    return false;
  }

  function findAsset(release, name) {
    var assets = release.assets || [];
    for (var i = 0; i < assets.length; i++) {
      if (assets[i].name === name) return assets[i];
    }
    return null;
  }

  async function fetchLatestRelease() {
    var res = await fetch('https://api.github.com/repos/' + GH_REPO + '/releases/latest', {
      headers: { 'Accept': 'application/vnd.github+json' }
    });
    if (!res.ok) throw new Error('GitHub API responded ' + res.status);
    return res.json();
  }

  async function checkForUpdate(opts) {
    opts = opts || {};
    if (!isNative()) return;

    var Updater = getUpdater();
    if (!Updater) { console.warn('[OTA] CapacitorUpdater plugin not found'); return; }

    if (!opts.force && !shouldCheck()) return;

    try {
      var release = await fetchLatestRelease();
      markChecked();

      var remoteVersion = (release.tag_name || '').replace(/^v/, '');
      if (!remoteVersion) { console.warn('[OTA] release has no tag_name'); return; }

      var current = await Updater.current();
      var currentVersion = (current && current.bundle && current.bundle.version) || '0.0.0';

      if (!isNewer(remoteVersion, currentVersion)) {
        console.log('[OTA] up to date (' + currentVersion + ')');
        return;
      }

      var asset = findAsset(release, 'bundle.zip');
      if (!asset) { console.warn('[OTA] release ' + remoteVersion + ' has no bundle.zip asset'); return; }

      console.log('[OTA] downloading update ' + remoteVersion + ' ...');
      var bundle = await Updater.download({
        url: asset.browser_download_url,
        version: remoteVersion
      });

      await Updater.set({ id: bundle.id });
      console.log('[OTA] update ' + remoteVersion + ' set, reloading...');

      if (typeof opts.onReady === 'function') opts.onReady(remoteVersion);

      await Updater.reload();
    } catch (err) {
      console.warn('[OTA] update check failed:', err);
    }
  }

  // Підтверджуємо, що поточний бандл завантажився і працює коректно —
  // без цього виклику плагін відкотить застосунок до попередньої версії
  // при наступному запуску (захист від "битих" оновлень).
  function notifyReady() {
    var Updater = getUpdater();
    if (Updater && Updater.notifyAppReady) {
      Updater.notifyAppReady().catch(function (e) {
        console.warn('[OTA] notifyAppReady failed', e);
      });
    }
  }

  window.OTA = { checkForUpdate: checkForUpdate };

  // ===== ТИМЧАСОВИЙ ДІАГНОСТИЧНИЙ БЛОК — видалити після перевірки =====
  function showBanner(text) {
    var el = document.createElement('div');
    el.id = 'ota-diag-banner';
    el.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:999999;' +
      'background:#c0392b;color:#fff;font:12px/1.4 monospace;padding:10px;' +
      'white-space:pre-wrap;word-break:break-all;max-height:60vh;overflow:auto;';
    el.textContent = text;
    var closeBtn = document.createElement('div');
    closeBtn.textContent = '[закрити]';
    closeBtn.style.cssText = 'margin-top:8px;text-decoration:underline;';
    closeBtn.onclick = function () { el.remove(); };
    el.appendChild(closeBtn);
    document.body.appendChild(el);
  }

  async function diagnosticBanner() {
    var lines = [];
    var Updater = getUpdater();
    if (Updater) {
      try {
        var current = await Updater.current();
        lines.push('CURRENT BUNDLE VERSION: ' + (current && current.bundle && current.bundle.version));
        lines.push('full: ' + JSON.stringify(current));
      } catch (e) {
        lines.push('current() error: ' + e.message);
      }
    }
    try {
      var release = await fetchLatestRelease();
      lines.push('latest GitHub release tag: ' + release.tag_name);
      var asset = findAsset(release, 'bundle.zip');
      lines.push('bundle.zip asset found: ' + !!asset);

      if (Updater && asset) {
        var remoteVersion = release.tag_name.replace(/^v/, '');
        try {
          lines.push('downloading from: ' + asset.browser_download_url);
          var bundle = await Updater.download({ url: asset.browser_download_url, version: remoteVersion });
          lines.push('download OK, bundle id: ' + bundle.id);
          try {
            await Updater.set({ id: bundle.id });
            lines.push('set() OK — update applied, will show on next launch');
          } catch (setErr) {
            lines.push('set() ERROR: ' + (setErr && setErr.message) + ' | ' + JSON.stringify(setErr));
          }
        } catch (dlErr) {
          lines.push('download() ERROR: ' + (dlErr && dlErr.message) + ' | ' + JSON.stringify(dlErr));
        }
      }
    } catch (e) {
      lines.push('GitHub API error: ' + e.message);
    }
    showBanner(lines.join('\n'));
  }
  // ===== КІНЕЦЬ ТИМЧАСОВОГО БЛОКУ =====

  document.addEventListener('DOMContentLoaded', function () {
    notifyReady();
    diagnosticBanner();
  });

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') checkForUpdate();
  });
})();
