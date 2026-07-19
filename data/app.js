/* <!-- ANDROID VERSION! --> */
// build 1.2.4 — 2026-07-18

// ── все читається з window.SD (визначено в data.js) ───────────────────
var SD; // буде присвоєно після завантаження DOM

// ── СХОВИЩЕ ДАНИХ КОРИСТУВАЧА ───────────────────────────────────────────
// В Neutralino — файл userdata.json поруч із застосунком (portable, мандрує з флешкою).
// В звичайному браузері / Live Server — localStorage (для зручності розробки/тестування).
var USERDATA_FILE = 'userdata.json';
var isNeutralino = typeof Neutralino !== 'undefined';
var userData = { lang: 'en', fav: [], nts: {}, cst: {}, fs: 1 };

function loadUserData() {
  if (isNeutralino) {
    return Neutralino.filesystem.readFile(USERDATA_FILE)
      .then(function (content) {
        try { Object.assign(userData, JSON.parse(content)); }
        catch (e) { console.warn('userdata.json corrupted, using defaults:', e); }
      })
      .catch(function () { /* файлу ще нема при першому запуску — лишаємось на дефолтах */ });
  }
  try {
    userData.lang = localStorage.getItem('lang') || 'en';
    userData.fav  = JSON.parse(localStorage.getItem('fav') || '[]');
    userData.nts  = JSON.parse(localStorage.getItem('nts') || '{}');
    userData.cst  = JSON.parse(localStorage.getItem('cst') || '{}');
    userData.fs   = parseFloat(localStorage.getItem('fs') || '1');
  } catch (e) { console.warn('localStorage read failed:', e); }
  return Promise.resolve();
}

function saveUserData() {
  if (isNeutralino) {
    Neutralino.filesystem.writeFile(USERDATA_FILE, JSON.stringify(userData))
      .catch(function (e) { console.error('Save failed:', e); });
    return;
  }
  localStorage.setItem('lang', userData.lang);
  localStorage.setItem('fav', JSON.stringify(userData.fav));
  localStorage.setItem('nts', JSON.stringify(userData.nts));
  localStorage.setItem('cst', JSON.stringify(userData.cst));
  localStorage.setItem('fs', String(userData.fs));
}



// ── LANGUAGE ──────────────────────────────────────────────────────────
var currentLang = 'en'; // початкове значення, реальне р-реться в loadUserData()/initApp()

// t(key) — UI string translation
function t(key) {
  var lang = currentLang === 'uk' ? window.LANG_UK : window.LANG_EN;
  return lang ? (lang[key] || key) : key;
}

// tf(sauceObj, field) — sauce DATA field translation
// returns field+'_uk' if currentLang is 'uk' and it exists, else field
function tf(s, field) {
  if (!s) return '';
  if (currentLang === 'uk' && s[field + '_uk'] !== undefined) {
    return s[field + '_uk'];
  }
  return s[field];
}

// sName(nm) — переклад "сирої" назви соусу (до завантаження файлу),
// використовує словник SD.nameUk, зібраний з полів s_uk у data.js
function sName(nm) {
  if (currentLang === 'uk' && SD && SD.nameUk && SD.nameUk[nm]) return SD.nameUk[nm];
  return nm;
}

// trVal(dict, val) — перекладає значення властивості (tp/tm/df/mo/cl) через словник
// у lang-файлі; підтримує складові значення типу "Hot, Cold"
function trVal(dict, val) {
  if (currentLang !== 'uk' || !val) return val;
  var lang = window.LANG_UK;
  var map = lang && lang[dict];
  if (!map) return val;
  return String(val).split(/\s*[,/]\s*/).map(function(part) {
    return map[part] || part;
  }).join(', ');
}

// trCat(val) — перекладає назву категорії через словник cat{} з lang-файлу
function trCat(val) {
  if (currentLang === 'uk' && window.LANG_UK && window.LANG_UK.cat && window.LANG_UK.cat[val]) {
    return window.LANG_UK.cat[val];
  }
  return val;
}

// moName(val) — для материнського соусу: спершу пробує як реальну назву соусу (sName),
// якщо немає — як загальний опис основи (trVal('mo', ...))
function moName(val) {
  var n = sName(val);
  if (n !== val) return n;
  return trVal('mo', val);
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'uk' : 'en';
  userData.lang = currentLang;
  saveUserData();
  var btn = document.getElementById('lang-label');
  if (btn) btn.textContent = currentLang === 'uk' ? 'UA' : 'EN';
  var aboutScr = document.getElementById('s-about');
  if (aboutScr && aboutScr.classList.contains('active')) showAbout();
  // Re-render current screen
  var active = document.querySelector('.scr.active, .screen.active');
  if (!active) { initApp(); return; }
  var id = active.id.replace('s-', '');
  if (id === 'home' || id === 'home') initApp();
  else if (id === 'hierarchy') bHier();
  else if (id === 'usage') bUsage();
  else if (id === 'technique') bTech();
  else if (id === 'favs') bFavs();
  else if (id === 'all') bAll();
  else if (id === 'sauce' && cur) openSauce(cur, false);
}

function showAbout() {
  var body = document.getElementById('abb');
  if (!body) return;
  var isNativeApp = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  body.innerHTML =
    '<h2 class="about-title">' + x(t('app_title')) + '</h2>'
    + '<div class="about-version">' + x(t('about_version')) + '</div>'
    + '<div class="about-desc">' + x(t('about_desc')).replace(/\n/g, '<br>') + '</div>'
    + '<div class="about-credits">' + x(t('about_credits')) + '</div>'
    + '<div class="about-image"><img src="./icons/paniot.png" alt="Paniot"></div>'
    + '<div class="about-copyright">&copy; 2026 Παναγιώτης</div>'
    + (isNativeApp
      ? '<div class="about-update">'
        + '<button class="about-update-btn" id="about-update-btn" onclick="checkAppUpdateFromAbout()">' + x(t('about_check_update')) + '</button>'
        + '<div class="about-update-status" id="about-update-status"></div>'
        + '</div>'
      : '');
  showS('about', x(t('about_title')));
}

function checkAppUpdateFromAbout() {
  var statusEl = document.getElementById('about-update-status');
  var btnEl = document.getElementById('about-update-btn');
  if (!window.OTA || !window.OTA.checkForUpdate) return;
  if (btnEl) btnEl.disabled = true;
  window.OTA.checkForUpdate({
    force: true,
    onStatus: function (status) {
      if (!statusEl) return;
      if (status === 'checking') statusEl.textContent = t('about_checking');
      else if (status === 'up_to_date') { statusEl.textContent = t('about_up_to_date'); if (btnEl) btnEl.disabled = false; }
      else if (status === 'downloading') statusEl.textContent = t('about_update_downloading');
      else if (status === 'updated') statusEl.textContent = t('about_update_applied');
      else if (status === 'error') { statusEl.textContent = t('about_update_error'); if (btnEl) btnEl.disabled = false; }
    }
  });
}

// ── STATE ─────────────────────────────────────────────────────────────
var stk = ['home'], cur = null, noteEditing = false, editKey = null, photoData = {};
var sauceHistory = []; // ключі соусів, щоб коректно повертатись "назад" при переходах соус→соус
var favs = [], notes = {}, custom = {}; // реальні значення підставляються в startApp() після loadUserData()
var ntTimer = null;

function allR() { return Object.assign({}, SD.r, custom); }

// ── TECHNIQUE GROUPS ──────────────────────────────────────────────────
var TG = {};
function rebuildTG() {
  TG = {'Emulsified (Hot)':[],'Emulsified (Cold)':[],'Roux-based':[],'Reduction':[],'Tomato-based':[],'Fruit-based':[],'Unstable Emulsion':[],'Dessert':[]};
  Object.entries(allR()).forEach(function(e) {
    var k = e[0], s = e[1];
    if (s.tp === 'Emulsified') TG[s.tm === 'Hot' ? 'Emulsified (Hot)' : 'Emulsified (Cold)'].push(k);
    else if (s.tp === 'Cold Emulsified') TG['Emulsified (Cold)'].push(k);
    else if (TG[s.tp]) TG[s.tp].push(k);
  });
}

// ── NAVIGATION ─────────────────────────────────────────────────────────
var TITLES = {
  home:'French Sauces', hierarchy:'Sauce Hierarchy', usage:'By Dish / Product',
  technique:'By Technique', sublist:'Sauces', sauce:'Sauce',
  favs:'Saved Sauces', form:'Add Sauce', about:'About'
};

function showS(id, title, push) {
  if (push !== false) stk.push(id);
  var all = document.querySelectorAll('.scr');
  for (var i = 0; i < all.length; i++) all[i].classList.remove('active');
  document.getElementById('s-' + id).classList.add('active');

  var R = allR();
  var htText;
  if (id === 'sauce' && cur && R[cur]) {
    // Show category name in header instead of sauce name
    var s = R[cur];
    var catNm = s.cat || '';
    if (currentLang === 'uk' && window.LANG_UK && window.LANG_UK.cat && window.LANG_UK.cat[catNm]) {
      catNm = window.LANG_UK.cat[catNm];
    }
    htText = catNm;
  } else {
    htText = title || TITLES[id] || id;
  }
  document.getElementById('ht').textContent = htText;
  var bbEl = document.getElementById('bb');
  if (bbEl) bbEl.style.display = stk.length > 1 ? '' : 'none';
  var bfhEl = document.getElementById('bfh');
  if (bfhEl) bfhEl.style.display = id === 'sauce' ? '' : 'none';
  var badEl = document.getElementById('bad');
  if (badEl) badEl.style.display = id === 'form' ? 'none' : '';

  ['home','hierarchy','usage','favs','all'].forEach(function(n) {
    var el = document.getElementById('nb-' + n);
    if (el) el.classList.toggle('on', n === id);
  });
  updFavIco();
}

function navTo(id) {
  stk = [id];
  sauceHistory = [];
  if (id === 'hierarchy') bHier();
  if (id === 'usage') bUsage();
  if (id === 'technique') bTech();
  if (id === 'favs') bFavs();
  showS(id, null, false);
  if (id === 'all') bAll();
}

function goBack() {
  if (stk.length <= 1) return;
  var poppedId = stk.pop();
  var id = stk[stk.length - 1];

  if (poppedId === 'sauce' && id === 'sauce' && sauceHistory.length) {
    var prevKey = sauceHistory.pop();
    openSauce(prevKey, false);
    document.getElementById('bb').style.display = stk.length > 1 ? '' : 'none';
    ['home','hierarchy','usage','favs','all'].forEach(function(n) {
      var el = document.getElementById('nb-' + n);
      if (el) el.classList.toggle('on', n === id);
    });
    return;
  }

  var all = document.querySelectorAll('.scr');
  for (var i = 0; i < all.length; i++) all[i].classList.remove('active');
  document.getElementById('s-' + id).classList.add('active');
  var R = allR();
  var t = id === 'sauce' && cur ? (R[cur] ? R[cur].nm : 'Sauce') : TITLES[id] || id;
  document.getElementById('ht').textContent = t;
  document.getElementById('bb').style.display = stk.length > 1 ? '' : 'none';
  document.getElementById('bfh').style.display = id === 'sauce' ? '' : 'none';
 var badEl = entById('bad'); if (badEl) badEl.style.display = id === 'form' ? 'none' : '';
  ['home','hierarchy','usage','favs','all'].forEach(function(n) {
    var el = document.getElementById('nb-' + n);
    if (el) el.classList.toggle('on', n === id);
  });
  updFavIco();
  if (id === 'all') bAll();
}

// ── SEARCH ─────────────────────────────────────────────────────────────
function onSearch(v) {
  var q = v.trim().toLowerCase();
  var res = document.getElementById('sr');
  var main = document.getElementById('hm');
  if (!q) { res.style.display = 'none'; res.innerHTML = ''; main.style.display = ''; return; }
  res.style.display = 'block'; main.style.display = 'none';
  var R = allR();
  var ukCat = (window.LANG_UK && window.LANG_UK.cat) || {};
  var ukMo  = (window.LANG_UK && window.LANG_UK.mo)  || {};
  var ms = Object.keys(R).filter(function(k) {
    var s = R[k];
    var ingr   = Object.values(s.ig    || {}).reduce(function(a,b){ return a.concat(b); }, []);
    var ingrUk = Object.values(s.ig_uk || {}).reduce(function(a,b){ return a.concat(b); }, []);
    return [s.nm, s.nm_uk, s.fr, s.cat, ukCat[s.cat], s.mo, ukMo[s.mo], s.rc || '', s.rc_uk || '']
      .concat(s.pr || [], s.pr_uk || [])
      .concat(ingr, ingrUk)
      .join(' ').toLowerCase().indexOf(q) !== -1;
  });
  if (!ms.length) {
    res.innerHTML = '<div class="search-empty">' + t('search_no_results') + ' <b>' + x(v) + '</b></div>';
    return;
  }
  res.innerHTML = ms.map(function(k) {
    var s = R[k];
    return '<div class="sri" onclick="openSauce(\'' + k + '\')">'
      + '<div class="sri-ico">' + (SD.cico[s.cat] || '🍶') + '</div>'
      + '<div><div class="sri-n">' + x(sName(s.nm)) + '</div>'
      + '<div class="sri-c">' + x(trCat(s.cat)) + ' · ' + x(trVal('tp', s.tp)) + '</div></div>'
      + '<span style="margin-left:auto;color:var(--border)">›</span></div>';
  }).join('');
}

// ── SEARCH KEY ─────────────────────────────────────────────────────────
function fKey(nm) {
  var R = allR();
  var l = nm.toLowerCase();
  return Object.keys(R).find(function(k) {
    return k.toLowerCase() === l
      || R[k].nm.toLowerCase() === l;
  }) || null;
}

// ── HIERARCHY ──────────────────────────────────────────────────────────
function bHier() {
  var ck = Object.keys(custom);
  var html = SD.cats.map(function(cat, ci) {
    var catNm = (currentLang === 'uk' && cat.nm_uk) ? cat.nm_uk : cat.nm;
    return '<div class="cg">'
      + '<div class="ch" onclick="tC(' + ci + ')">'
      + '<div class="cico">' + cat.ic + '</div>'
      + '<div class="cnm"><div class="cnm-m">' + catNm + '</div>'
      + '<div class="cnm-f">' + cat.fr + '</div></div>'
      + '<span class="chev" id="ca' + ci + '">›</span></div>'
      + '<div class="csl" id="cl' + ci + '">'
      + cat.subs.map(function(sub, si) {
        var subNm = (currentLang === 'uk' && sub.nm_uk) ? sub.nm_uk : sub.nm;
        return '<div class="csi">'
          + '<div class="csh" onclick="tS(' + ci + ',' + si + ')">'
          + '<div><div class="csnm">' + subNm + '</div>'
          + '<div class="csmo">' + sub.mo + '</div></div>'
          + '<span class="csch" id="sa' + ci + '_' + si + '">›</span></div>'
          + '<div class="ssl" id="sl' + ci + '_' + si + '">'
          + sub.s.map(function(nm) {
            var rk = fKey(nm);
            var callKey = rk || nm;
            return '<div class="sli" onclick="openSauce(\'' + callKey + '\')">'
              + '<div class="sld"></div>'
              + '<div class="sln">' + x(sName(nm)) + '</div>'
              + '<span class="slt">›</span>'
              + '</div>';
          }).join('')
          + '</div></div>';
      }).join('')
      + '</div></div>';
  }).join('');

  // My Sauces block — hidden for now, custom sauces appear in their own category
  // if (ck.length) { ... }

  document.getElementById('hb').innerHTML = html;
}
function tCC() { tog('clC','caC'); }
function tC(ci) { tog('cl'+ci,'ca'+ci); }
function tS(ci,si) { tog('sl'+ci+'_'+si,'sa'+ci+'_'+si); }
function tog(listId, arrowId) {
  document.getElementById(listId).classList.toggle('op');
  document.getElementById(arrowId).classList.toggle('op');
}

// ── BY DISH ───────────────────────────────────────────────────────────
function bUsage() {
  document.getElementById('ub').innerHTML = '<div class="list-body">'
    + Object.keys(SD.usage).map(function(cat) {
      var sauces = SD.usage[cat];
      var catLabel = (currentLang === 'uk' && LANG_UK && LANG_UK.usage_cats && LANG_UK.usage_cats[cat]) ? LANG_UK.usage_cats[cat] : cat;
      return '<div class="li" onclick="showSL(\'' + x(cat) + '\',' + attrJson(sauces) + ')">'
        + '<div class="li-ico">' + (SD.uico[cat] || '🍶') + '</div>'
        + '<div class="li-n">' + catLabel + '</div>'
        + '<span class="li-count">' + sauces.length + '</span>'
        + '<span class="li-ar">›</span></div>';
    }).join('') + '</div>';
}

// ── BY TECHNIQUE ──────────────────────────────────────────────────────
function bTech() {
  rebuildTG();
  document.getElementById('tb').innerHTML = '<div class="list-body">'
    + Object.keys(TG).filter(function(nm) { return TG[nm].length; }).map(function(nm) {
      var sauces = TG[nm];
      var techLabel = (currentLang === 'uk' && LANG_UK && LANG_UK.tech_types && LANG_UK.tech_types[nm]) ? LANG_UK.tech_types[nm] : nm;
      return '<div class="li" onclick="showSLK(\'' + x(nm) + '\',' + attrJson(sauces) + ')">'
        + '<div class="li-ico">' + (SD.tico[nm] || '🍶') + '</div>'
        + '<div class="li-n">' + techLabel + '</div>'
        + '<span class="li-count">' + sauces.length + '</span>'
        + '<span class="li-ar">›</span></div>';
    }).join('') + '</div>';
}

function showSL(title, items) {
  document.getElementById('slb').innerHTML = '<div class="list-body">'
    + items.map(function(nm) {
      var k = fKey(nm);
      var callKey = k || nm;
      return '<div class="li" onclick="openSauce(\'' + x(callKey) + '\')">'
        + '<div class="li-n">' + x(sName(nm)) + '</div>'
        + '<span class="li-ar">›</span>'
        + '</div>';
    }).join('') + '</div>';
  showS('sublist', title);
}

function showSLK(title, keys) {
  var R = allR();
  document.getElementById('slb').innerHTML = '<div class="list-body">'
    + keys.map(function(k) {
      var s = R[k];
      var nm = s ? s.nm : k;
      var cat = s ? s.cat : '';
      return '<div class="li" onclick="openSauce(\'' + x(k) + '\')">'
        + '<div style="flex:1"><div class="li-n">' + x(nm) + '</div>'
        + (cat ? '<div class="li-s">' + x(trCat(cat)) + '</div>' : '') + '</div>'
        + '<span class="li-ar">›</span></div>';
    }).join('') + '</div>';
  showS('sublist', title);
}

// ── SAVED ─────────────────────────────────────────────────────────────
function bFavs() {
  var b = document.getElementById('fb2');
  var R = allR();
  if (!favs.length) {
    b.innerHTML = '<div class="fe"><div class="empty-ico"><span class="iconify" data-icon="mdi:heart"></span></div><p class="empty-text">No saved sauces yet.<br>Open any sauce and tap <span class="iconify" data-icon="mdi:heart-outline"></span> to save.</p></div>';
    return;
  }
  b.innerHTML = '<div class="list-body">'
    + favs.map(function(k) {
      var s = R[k]; if (!s) return '';
      return '<div class="li" onclick="openSauce(\'' + k + '\')">'
        + '<div style="flex:1"><div class="li-n">' + x(s.nm) + '</div>'
        + '<div class="li-s">' + x(trCat(s.cat)) + (notes[k] ? ' · 📝' : '') + '</div></div>'
        + '<span class="li-ar">›</span></div>';
    }).join('') + '</div>';
}

// ── SAUCE CARD ──────────────────────────────────────────────────────
async function openSauce(key, push) {
  var R = allR();
  var s = R[key];
  if (!s) {
    // try fKey lookup first (name->key mapping)
    var mapped = fKey(key);
    if (mapped && mapped !== key) { key = mapped; s = R[key]; }
  }
  if (!s) {
    try {
      await window.SD.loadSauce(key);
    } catch(e) {
      console.error('Failed to load sauce', key, e);
      return;
    }
    R = allR();
    // after load, key in file might differ from requested name
    if (!R[key]) {
      var mapped2 = fKey(key);
      if (mapped2) key = mapped2;
    }
    s = R[key];
    if (!s) return;
  }
  if (push !== false && cur) sauceHistory.push(cur);
  cur = key;
  var fav = favs.indexOf(key) !== -1;
  var isCust = !!custom[key];
  var nt = notes[key] || '';
  var photoBase = s.photo || ('./image/' + key.toLowerCase().replace(/\s+/g,'_'));
  var photo = photoBase.match(/\.(jpg|png|webp)$/i) ? photoBase : photoBase + '.jpg';
  var nm = tf(s, 'nm');
  var pr = tf(s, 'pr') || [];
  var ig = tf(s, 'ig') || {};
  var st = tf(s, 'st') || [];
  var rc = tf(s, 'rc') || '';

  // Breadcrumbs
  var bc = '';
  if (s.mo && s.mo !== '—' && s.mo !== s.nm) {
    var moKey = fKey(s.mo);
    if (moKey && moKey !== key) {
      bc += '<span class="bci" onclick="openSauce(\'' + moKey + '\')">' + x(moName(s.mo)) + '</span>'
        + '<span class="bcs"><span class="iconify" data-icon="tdesign:chevron-right-double-s" data-width="28px"></span></span>';
    } else {
      bc += '<span class="bci plain">' + x(moName(s.mo)) + '</span><span class="bcs"><span class="iconify" data-icon="tdesign:chevron-right-double-s" data-width="28px"></span></span>';
    }
  }
  bc += '<span class="bci current">' + x(nm) + '</span>';

  // Ingredients
  var ingr = '';
  if (ig) {
    var groups = Object.keys(ig).filter(function(g) { return ig[g] && ig[g].length; });
    if (groups.length) {
      ingr = '<div class="ig">'
        + groups.map(function(g) {
          return '<div class="igg"><div class="igg-title">' + t('ig_' + g) + '</div>'
            + ig[g].map(function(i) { return '<div class="igi">' + x(i) + '</div>'; }).join('')
            + '</div>';
        }).join('') + '</div>';
    }
  }

  // Steps
  var stps = '';
  if (st && st.length) {
    stps = st.map(function(t2, i) {
      return '<div class="stp"><div class="stp-num">' + (i+1) + '</div>'
        + '<div class="stp-text">' + x(t2) + '</div></div>';
    }).join('');
  }

  // Derivatives
  var deriv = '';
  if (s.dv && s.dv.length) {
    deriv = '<div class="dt"><div class="dtm">' + x(nm) + '</div>'
      + '<div class="dtl"></div><div class="dtc">'
      + s.dv.map(function(d) {
        var dk = fKey(d);
        var callKey = dk || d;
        return '<div class="dtch' + (dk === key ? ' current' : '') + '"'
          + ' onclick="openSauce(\'' + callKey + '\')">' + x(R[dk] ? tf(R[dk], 'nm') : sName(d)) + '</div>';
      }).join('') + '</div></div>';
  }

  // Similar
  var sim = '';
  if (s.sm && s.sm.length) {
    sim = '<div class="rl">'
      + s.sm.filter(function(n) { return n !== s.nm; }).map(function(n) {
          var sk = fKey(n);
          var callKey = sk || n;
          return '<div class="rli" onclick="openSauce(\'' + callKey + '\')">'
            + '<span>' + x(R[sk] ? tf(R[sk], 'nm') : sName(n)) + '</span>'
            + '</div>';
        }).join('') + '</div>';
  }

  document.getElementById('sab').innerHTML =
    '<div class="sauce-hero">'
    + (photo ? '<img class="sauce-hero-img" src="' + photo + '" alt="" onerror="if(this.src.indexOf(\'.jpg\')>-1){this.src=this.src.replace(\'.jpg\',\'.png\')}else{this.style.display=\'none\'}">' : '<div class="sauce-hero-img-placeholder"></div>')
    + '<div class="sauce-hero-body">'
/*     + '<div class="sbadge">' + (SD.cico[s.cat] || '🍶') + ' ' + x(s.cat)
    + (isCust ? '<span class="cbadge">custom</span>' : '') + '</div>' */
    + '<div class="stit">' + x(nm) + '</div>'
    + (s.fr && s.fr !== nm ? '<div class="stit-fr">' + x(s.fr) + '</div>' : '')
    + '</div></div>'

    + '<div class="ssec"><div class="ssec-title">' + t("sec_classification") + '</div>'
    + '<div class="breadcrumbs">' + bc + '</div></div>'

    + '<div class="ssec"><div class="ssec-title">' + t("sec_properties") + '</div>'
    + '<div class="mg">'
    + cell(t('meta_type'), trVal('tp', s.tp)) + cell(t('meta_temp'), trVal('tm', s.tm)) + cell(t('meta_diff'), trVal('df', s.df))
    + cell(t('meta_time'), tf(s, 'ti')) + cell(t('meta_base'), tf(s, 'bs'))
    // + cell(t('meta_classic'), trVal('cl', s.cl))
    + cell(t('meta_classic'), trVal('cl', s.cl), 'mv-classic')
    + '</div></div>'

    + (pr && pr.length ? '<div class="ssec"><div class="ssec-title">' + t("sec_pairs") + '</div>'
      + '<div class="tgs">' + pr.map(function(p) { return '<span class="tg">' + x(p) + '</span>'; }).join('') + '</div></div>' : '')

    + (ingr ? '<div class="ssec"><div class="ssec-title">' + t('sec_ingredients') + '</div>' + ingr + '</div>' : '')
    + (stps ? '<div class="ssec"><div class="ssec-title">' + t('sec_technique') + '</div>' + stps + '</div>' : '')
    + (rc ? '<div class="ssec"><div class="ssec-title">' + t('sec_recipe') + '</div><div class="rb"><div class="rt">' + x(rc) + '</div></div></div>' : '')
    + (deriv ? '<div class="ssec"><div class="ssec-title">' + t('sec_derivatives') + '</div>' + deriv + '</div>' : '')
    + (sim ? '<div class="ssec"><div class="ssec-title">' + t('sec_similar') + '</div>' + sim + '</div>' : '')

    + '<div class="ssec"><div class="ssec-title">' + t('sec_notes') + '</div>'
    + '<div class="nview' + (nt ? '' : ' empty') + '" id="notes-view">' + (nt ? x(nt) : t('notes_empty')) + '</div>'
    + '<textarea class="notes-edit-area" id="notes-ta" placeholder="' + t('ph_notes') + '" style="display:none"></textarea>'
    + '<div class="notes-buttons">'
    + '<button class="ab btn-note-edit" id="btn-note-edit" onclick="toggleNote()">' + t('notes_edit') + '</button>'
    + '<button class="ab btn-note-save" id="btn-note-save" onclick="saveNote(\'' + key + '\')">✓ ' + t('notes_save') + '</button>'
    + '</div></div>'

    + '<div class="ssec"><div class="ar">'
    + '<button class="ab btn-save' + (fav ? ' on' : '') + '" id="btn-fav-card" onclick="toggleFav()">' + (fav ? '<span class="iconify" data-icon="mdi:heart"></span> ' + t('btn_in_favs') : '<span class="iconify" data-icon="mdi:heart-outline"></span> ' + t('btn_add_favs')) + '</button>'
  /*   + '<button class="ab ab-ed" onclick="openForm(\'' + key + '\')">✎ Edit</button>' */
    + (isCust ? '<button class="ab ab-dlete" onclick="doDelete(\'' + key + '\')">🗑</button>' : '')
    + '</div></div>'
    + '<div style="height:40px"></div>';

  document.getElementById('sab').scrollTop = 0;
  if (push !== false) showS('sauce', null);
  else {
    var catNm = s.cat || '';
    if (currentLang === 'uk' && window.LANG_UK && window.LANG_UK.cat && window.LANG_UK.cat[catNm]) {
      catNm = window.LANG_UK.cat[catNm];
    }
    document.getElementById('ht').textContent = catNm;
  }
  updFavIco();
}

/* function cell(label, val) {
  return '<div class="mi"><div class="ml">' + label + '</div>'
    + '<div class="mvue">' + x(val || '—') + '</div></div>';
} */
function cell(label, val, extraClass) {
  return '<div class="mi"><div class="ml">' + label + '</div>'
    + '<div class="mvue' + (extraClass ? ' ' + extraClass : '') + '">' + x(val || '—') + '</div></div>';
}

// ── NOTES ───────────────────────────────────────────────────────────
function toggleNote() {
  noteEditing = !noteEditing;
  var view = document.getElementById('notes-view');
  var ta = document.getElementById('notes-ta');
  var btnE = document.getElementById('btn-note-edit');
  var btnS = document.getElementById('btn-note-save');
  if (!view || !ta || !btnE || !btnS) return;
  if (noteEditing) {
    view.style.display = 'none';
    ta.style.display = 'block';
    ta.value = notes[cur] || '';
    ta.focus();
    btnE.textContent = '✕ Cancel';
    btnS.style.display = 'flex';
  } else {
    view.style.display = '';
    ta.style.display = 'none';
    btnE.textContent = t('notes_edit');
    btnS.style.display = 'none';
  }
}

function saveNote(key) {
  var ta = document.getElementById('notes-ta');
  var view = document.getElementById('notes-view');
  if (!ta || !view) return;
  var val = ta.value.trim();
  notes[key] = val;
  saveUserData();
  view.textContent = val || t('notes_empty');
  view.className = 'nview' + (val ? '' : ' empty');
  toggleNote();
  toast('Notes saved ✓');
}

// ── FAVORITES ──────────────────────────────────────────────────────────
function updFavIco() {
  var btn = document.getElementById('bfh');
  if (!btn || !cur) return;
  btn.innerHTML = favs.indexOf(cur) !== -1 ? '<span class="iconify" data-icon="mdi:heart"></span>' : '<span class="iconify" data-icon="mdi:heart-outline"></span>';
}

function toggleFav() {
  if (!cur) return;
  var i = favs.indexOf(cur);
  if (i === -1) favs.push(cur); else favs.splice(i, 1);
  saveUserData();
  updFavIco();
  var btn = document.getElementById('btn-fav-card');
  if (btn) { var f = favs.indexOf(cur) !== -1; btn.className = 'ab btn-save' + (f ? ' on' : ''); btn.innerHTML = f ? '<span class="iconify" data-icon="mdi:heart"></span> ' + t('btn_in_favs') : '<span class="iconify" data-icon="mdi:heart-outline"></span> ' + t('btn_add_favs'); }
}

// ── DELETION ─────────────────────────────────────────────────────────
function doDelete(key) {
  if (!confirm('Delete this sauce?')) return;
  delete custom[key];
  saveUserData();
  rebuildTG();
  toast('Sauce deleted');
  goBack();
}

// ── FORM ─────────────────────────────────────────────────────────────
var CATS = ['White Sauces','Brown Sauces','Hot Emulsified','Cold Emulsified','Cold Sauces','Dessert Sauces'];
var TYPES = ['Emulsified','Cold Emulsified','Roux-based','Reduction','Tomato-based','Fruit-based','Unstable Emulsion','Dessert'];
var TEMPS = ['Hot','Cold','Hot/Cold'];
var DIFFS = ['Easy','Medium','Hard'];

async function editSauce(nm) {
  // Try to find by key first
  var k = fKey(nm);
  if (!k) {
    // Try loading by name slug
    try { await window.SD.loadSauce(nm); } catch(e) {}
    k = fKey(nm);
  }
  openForm(k || '');
}

function openForm(key) {
  editKey = key;
  var R = allR();
  var s = key ? R[key] : null;
  photoData = {};

  function sel(opts, val) {
    return opts.map(function(o) { return '<option' + (o === val ? ' selected' : '') + '>' + o + '</option>'; }).join('');
  }
  function dynList(id, items) {
    return '<div class="dl" id="' + id + '">'
      + (items.length ? items : ['']).map(function(v, i) { return dynRow(id, v, i); }).join('')
      + '</div><button class="dra" onclick="addRow(\'' + id + '\')">+ Add item</button>';
  }
  var existPhoto = s && s.photo ? '<img class="photo-preview" id="photo-prev" src="' + s.photo + '" alt="">' : '';

  document.getElementById('fb3').innerHTML =
    '<div class="fs"><div class="fs-title">Photo</div>'
    + '<div class="fpa" id="fpa">'
    + (existPhoto || '<div class="photo-ico"><span class="iconify" data-icon="bytesize:photo" data-width="64"></span></div><span class="photo-hint">Tap to upload</span>')
    + '<input type="file" accept="image/*" onchange="handlePhoto(this)"></div></div>'

    + '<div class="fs"><div class="fs-title">Basic information</div>'
    + frow(t('label_name_en'), '<input id="f-nm" value="' + x(s ? s.nm : '') + '" placeholder="e.g. Bearnaise Sauce">')
    + frow(t('label_name_fr'), '<input id="f-fr" value="' + x(s ? s.fr : '') + '" placeholder="e.g. Sauce Bearnaise">')
    + frow(t('label_mother'), '<input id="f-mo" value="' + x(s ? s.mo : '') + '" placeholder="e.g. Béarnaise, Hollandaise">')
    + '<div class="form-2col">'
    + frow(t('label_category'), '<select id="f-cat">' + sel(CATS, s ? s.cat : '') + '</select>')
    + frow(t('meta_classic'), '<input id="f-cl" value="' + x(s ? (s.cl || '') : '') + '" placeholder="Escoffier, Bocuse, Robuchon...">')
    + '</div></div>'

    + '<div class="fs"><div class="fs-title">Properties</div>'
    + '<div class="form-2col">'
    + frow(t('label_type'), '<select id="f-tp">' + sel(TYPES, s ? s.tp : '') + '</select>')
    + frow(t('label_temp'), '<select id="f-tm">' + sel(TEMPS, s ? s.tm : '') + '</select>')
    + '</div><div class="form-2col">'
    + frow(t('label_diff'), '<select id="f-df">' + sel(DIFFS, s ? s.df : '') + '</select>')
    + frow(t('label_time'), '<input id="f-ti" value="' + x(s ? s.ti : '') + '" placeholder="30 min">')
    + '</div>'
    + frow(t('label_base'), '<input id="f-bs" value="' + x(s ? s.bs : '') + '" placeholder="e.g. Butter/Egg">')
    + '</div>'

    + '<div class="fs"><div class="fs-title">Ingredients</div>'
    + ['base','aromatics','acid','finish'].map(function(g) {
      return frow(t('ig_' + g), dynList('ig-'+g, s && s.ig && s.ig[g] ? s.ig[g] : []));
    }).join('') + '</div>'

    + '<div class="fs"><div class="fs-title">Technique stps</div>'
    + dynList('f-st', s && s.st ? s.st : [])
    + '</div>'

    + '<div class="fs"><div class="fs-title">Full recipe</div>'
    + frow('', '<textarea id="f-rc" rows="5" placeholder="Full recipe text…">' + x(s ? s.rc : '') + '</textarea>')
    + '</div>'

    + '<div class="fs"><div class="fs-title">Relations</div>'
    + frow(t('label_pairs'), '<input id="f-pr" value="' + x(s && s.pr ? s.pr.join(', ') : '') + '">')
    + frow(t('label_derivatives'), '<input id="f-dv" value="' + x(s && s.dv ? s.dv.join(', ') : '') + '">')
    + frow(t('label_similar'), '<input id="f-sm" value="' + x(s && s.sm ? s.sm.join(', ') : '') + '">')
    + '</div>'

    + '<div class="fa">'
    + '<button class="form-cancel" onclick="goBack()">Cancel</button>'
    + '<button class="form-save" onclick="saveSauce()">✓ ' + (key ? t('btn_save_changes') : t('btn_add_catalog')) + '</button>'
    + '</div>';

  showS('form', key ? t('title_form_edit') : t('title_form_add'));
}

function frow(label, input) {
  return '<div class="fr2">' + (label ? '<label>' + label + '</label>' : '') + input + '</div>';
}
function dynRow(listId, val, idx) {
  return '<div class="dr" id="dr-' + listId + '-' + idx + '">'
    + '<input value="' + x(val) + '" placeholder="…">'
    + '<button class="dyn-del" onclick="delRow(\'' + listId + '\',' + idx + ')">✕</button></div>';
}
function addRow(listId) {
  var c = document.getElementById(listId);
  var idx = c.children.length;
  var div = document.createElement('div');
  div.innerHTML = dynRow(listId, '', idx);
  c.appendChild(div.firstChild);
}
function delRow(listId, idx) {
  var el = document.getElementById('dr-' + listId + '-' + idx);
  if (el) el.remove();
}
function getRows(listId) {
  var c = document.getElementById(listId); if (!c) return [];
  return Array.from(c.querySelectorAll('input')).map(function(i) { return i.value.trim(); }).filter(Boolean);
}

function handlePhoto(inp) {
  var file = inp.files[0]; if (!file) return;
  var img = new Image();
  img.onload = function() {
    var MAX = 800, w = img.width, h = img.height;
    if (w > MAX || h > MAX) { if (w > h) { h = Math.round(h*MAX/w); w = MAX; } else { w = Math.round(w*MAX/h); h = MAX; } }
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    photoData.data = c.toDataURL('image/jpeg', 0.75);
    var area = document.getElementById('fpa');
    var prev = document.getElementById('fpp');
    if (!prev) { area.innerHTML = '<img class="photo-preview" id="photo-prev" src="' + photoData.data + '" alt=""><input type="file" accept="image/*" onchange="handlePhoto(this)">'; }
    else { prev.src = photoData.data; }
  };
  img.src = URL.createObjectURL(file);
}

function saveSauce() {
  var nm = document.getElementById('f-nm').value.trim();
  if (!nm) { toast(t('btn_name_required')); return; }
  var R = allR();
  var key = editKey || (nm.toLowerCase().replace(/[^a-z0-9]+/g,'_') + '_' + Date.now());
  var existing = editKey ? R[editKey] : null;
  var sauce = {
    nm: nm,
    fr: document.getElementById('f-fr').value.trim() || nm,
    mo: document.getElementById('f-mo').value.trim() || '—',
    cat: document.getElementById('f-cat').value,
    cl: document.getElementById('f-cl').value.trim(),
    tp: document.getElementById('f-tp').value,
    tm: document.getElementById('f-tm').value,
    df: document.getElementById('f-df').value,
    ti: document.getElementById('f-ti').value.trim(),
    bs: document.getElementById('f-bs').value.trim() || '—',
    ig: { base: getRows('ig-base'), aromatics: getRows('ig-aromatics'), acid: getRows('ig-acid'), finish: getRows('ig-finish') },
    st: getRows('f-st'),
    rc: document.getElementById('f-rc').value.trim(),
    pr: document.getElementById('f-pr').value.split(',').map(function(s){return s.trim();}).filter(Boolean),
    dv: document.getElementById('f-dv').value.split(',').map(function(s){return s.trim();}).filter(Boolean),
    sm: document.getElementById('f-sm').value.split(',').map(function(s){return s.trim();}).filter(Boolean),
    photo: photoData.data || (existing ? existing.photo : '') || ''
  };
  custom[key] = sauce;
  saveUserData();
  rebuildTG();
  toast(editKey ? t('btn_changes_saved') : t('btn_sauce_added'));
  cur = key;
  openSauce(key);
}

// ── HELPER FUNCTIONS ─────────────────────────────────────────────────────────
function x(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function attrJson(v) {
  return JSON.stringify(v).replace(/"/g, '&quot;');
}

function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2200);
}

// ── START ─────────────────────────────────────────────────────────────
// Aliases для сумісності з index.html
var nTo = navTo;
var oS = openSauce;
var oSrch = onSearch;
var oForm = openForm;
var tFav = toggleFav;
var tNote = toggleNote;
var svNote = saveNote;
var doDel = doDelete;
var changeFontSize = function(delta) {
  var fontScale = userData.fs || 1;
  fontScale = Math.min(1.5, Math.max(0.7, +(fontScale + delta * 0.1).toFixed(1)));
  userData.fs = fontScale;
  saveUserData();
  document.documentElement.style.setProperty('--fs-scale', fontScale);
};

function applyLang() {
  var btn = document.getElementById('lang-label');
  if (btn) btn.textContent = currentLang === 'uk' ? 'UA' : 'EN';
  // Fill home grid card texts
  setText('nav-hierarchy',      t('nav_hierarchy'));
  setText('nav-hierarchy-desc', t('nav_hierarchy_desc'));
  setText('nav-dish',           t('nav_dish'));
  setText('nav-dish-desc',      t('nav_dish_desc'));
  setText('nav-technique',      t('nav_technique'));
  setText('nav-technique-desc', t('nav_technique_desc'));
  setText('nav-all',            t('nav_all'));
  setText('nav-all-desc',       t('nav_all_desc'));
  setText('browse-by',          t('browse_by'));
/*   var totalEl = document.getElementById('total-count');
  if (totalEl) totalEl.textContent = t('label_total_count') + ': ' + allSaucesList().length; */
var totalNumEl = document.getElementById('total-count-number');
if (totalNumEl) totalNumEl.textContent = t('label_total_count') + ': ' + allSaucesList().length;

var totalNoteEl = document.getElementById('total-count-note');
if (totalNoteEl) totalNoteEl.textContent = t('total_count_note');

  var sq = document.getElementById('sq');
  if (sq) sq.placeholder = t('search_placeholder');
  // Bottom nav
  setText('bnav-home',      t('bnav_home'));
  setText('bnav-structure', t('bnav_structure'));
  setText('bnav-all',       t('bnav_all'));
  setText('bnav-saved',     t('bnav_saved'));
}

function setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ── ALL SAUCES LIST ────────────────────────────────────────────────────
var allFilter = 'All';

function allSaucesList() {
  var R = allR();
  var nameMap = {};
  SD.cats.forEach(function(cat) {
    cat.subs.forEach(function(sub) {
      sub.s.forEach(function(nm) {
        var k = fKey(nm);
        // hasRecipe: either key found in R, or file exists (key matches slug)
        nameMap[nm] = { key: k || null, cat: cat.nm, hasRecipe: !!k };
      });
    });
  });
  Object.keys(R).forEach(function(k) {
    var s = R[k];
    var alreadyIn = Object.keys(nameMap).some(function(nm) {
      return nameMap[nm].key === k;
    });
    if (!alreadyIn) {
      nameMap[s.nm] = { key: k, cat: s.cat, hasRecipe: true };
    } else {
      // Update hasRecipe for already listed items
      Object.keys(nameMap).forEach(function(nm) {
        if (nameMap[nm].key === k) nameMap[nm].hasRecipe = true;
      });
    }
  });
  return Object.keys(nameMap).map(function(nm) {
    return { nm: nm, key: nameMap[nm].key, cat: nameMap[nm].cat, hasRecipe: nameMap[nm].hasRecipe };
  }).sort(function(a, b) { return a.nm.localeCompare(b.nm); });
}

function bAll(filter) {
  if (filter !== undefined) allFilter = filter;
  var list = allSaucesList();
  var cats = ['All'].concat(SD.cats.map(function(c) { return c.nm; }));

  var filterEl = document.getElementById('all-filter');
  if (filterEl) {
    filterEl.innerHTML = cats.map(function(c) {
      return '<button class="fc' + (allFilter === c ? ' on' : '') + '" onclick="bAll(\'' + c + '\')">' + c + '</button>';
    }).join('');
  }

  var isAll = (allFilter === 'All');
  var filtered = isAll ? list : list.filter(function(item) {
    return item.cat === allFilter;
  });

  var albEl = document.getElementById('alb');
  if (!albEl) return;

  var htEl = document.getElementById('ht');
  var allScreenActive = document.getElementById('s-all') && document.getElementById('s-all').classList.contains('active');
  if (htEl && allScreenActive) {
    htEl.textContent = t('title_all') + ' (' + filtered.length + ')';
  }

  albEl.innerHTML = '<div class="lb">' + filtered.map(function(item) {
    var isCustom = item.key && !!custom[item.key];
    return '<div class="all-item">'
      + '<div class="ai-main">'
      + '<div class="ai-nm" onclick="openSauce(\'' + x(item.key || item.nm) + '\')" style="cursor:pointer;color:var(--b2)">' + x(sName(item.nm)) + '</div>'
      + '<div class="ai-cat">' + x(trCat(item.cat)) + (!item.hasRecipe ? ' · <span style="color:#bbb0a0">no recipe</span>' : '') + '</div>'
      + '</div>'
      + '<div class="ai-btns">'
      + (item.key ? '<button class="ai-view" onclick="openSauce(\'' + x(item.key) + '\')">View</button>' : '')
      /* + '<button class="ai-edit" onclick="editSauce(\'' + x(item.nm) + '\')">Edit</button>' */
      + (isCustom ? '<button class="ai-del" onclick="doDelete(\'' + x(item.key) + '\')"><span class="iconify" data-icon="mdi:trash" style="font-size:28px"></span></button>' : '')
      + '</div>'
      + '</div>';
  }).join('') + '</div>';
}

var ALL_SAUCE_KEYS = [
  // A
  'Aioli (Ro)', 'Aioli Sauce (Es)', 'Albert Sauce (Es)', 'Albufera (Ro)', 'Allemande Grasse (Ro)', 'Allemande Maigre (Ro)', 'Allemande Sauce (Es)', 'Anchovy Sauce (Es)', 'Andalouse Sauce (Es)','Apple Sauce (Ro)', 'Apple Sauce (Es)','Aurora (Ro)', 'Aurore Sauce (Es)',

  // B
  'Bearnaise (Ro)', 'Bearnaise Sauce (Es)', 'Bechamel (Ro)', 'Bechamel (Es)', 'Bercy Butter (Es)', 'Bercy Fish (Ro)', 'Bercy Meat (Ro)', 'Bercy Sauce (Es)',
  'Beurre Blanc (Ro)', 'Beurre Nantais (Bo)', 'Bigarade (Ro)', 'Bigarade Sauce (Es)', 'Blackcurrant (Ro)', 'Black Butter (Es)', 'Bohemian Sauce','Bohemian Sauce (Es)', 
  'Bolognese (Ro)', 'Bonnefoy Sauce (Es)', 'Bontemps (Ro)', 'Bordelaise (Ro)', 'Bordelaise Sauce (Es)', 'Bourguignonne Fish (Ro)',
  'Bourguignonne Meat (Ro)', 'Bourguignonne Sauce (Es)', 'Bread Sauce (Es)','Breton (Ro)', 'Brown Chaud-Froid Sauce (Es)', 'Butter Sauce (Es)',

  // C
  'Cambridge (Ro)', 'Cambridge Sauce (Es)', 'Caper Sauce (Es)', 'Caramel (Ro)', 'Cardinal (Ro)', 'Cardinal Sauce (Es)', 'Celery Sauce (Es)', 'Chasseur (Ro)', 'Chasseur Sauce (Es)', 'Chateaubriand (Ro)', 'Chateaubriand Butter (Es)', 'Chateaubriand Sauce (Es)', 'Chaud-Froid Brown (Ro)', 'Chaud-Froid Duck (Es)', 'Chaud-Froid Fish (Es)', 'Chaud-Froid Game (Es)', 'Chaud-Froid Poultry', 'Chaud-Froid Sauce à l\'Aurore (Es)', 'Chaud-Froid Sauce au Vert-Pré (Es)', 'Chaud-Froid White (Ro)', 'Chevreuil (Ro)', 'Chivry Butter (Es)', 'Chocolate (Ro)', 'Choron (Ro)', 'Choron Sauce (Es)', 'Cold Andalusian (Ro)', 'Cold Russian (Ro)', 'Colbert (Ro)', 'Colbert Butter (Es)', 'Cranberry (Ro)', 'Cranberry Sauce (Es)', 'Crayfish Butter (Es)', 'Cumberland (Ro)', 'Cumberland Sauce (Es)',

  // D
  'Devilled Sauce (Es)', 'Diable (Ro)', 'Dijonnaise (Ro)', 'Duxelles (Ro)',

  // E
  'Egg Sauce (Es)','Espagnole (Es)',

  // F
  'Fennel Sauce (Es)','Financière', 'Fish Velouté (Es)', 'Foyot (Ro)', 'Foyot Sauce (Es)',

  // G
  'Genevoise (Ro)', 'Genevoise Sauce (Es)', 'Genoa Sauce (Es)', 'Gloucester Sauce (Es)','Godard (Ro)', 'Grand Veneur (Ro)', 'Grand Veneur Sauce (Es)',  'Green Colouring Butter (Es)', 'Green Sauce (Es)', 'Gribiche (Ro)','Gribiche Sauce (Es)',

  // H
  'Hachée (Ro)', 'Hazel-Nut Butter (Es)','Hollandaise (Ro)', 'Hollandaise Sauce (Es)', 'Horse-Radish Sauce (Es)','Hot Andalusian (Ro)', 'Hungarian (Ro)', 

  // I
  'Indian (Ro)', 'Italian Sauce (Es)', 'Ivory',
  
  //J
  'Joinville Sauce (Es)',

  // L
  'La Varenne (Ro)', 'Lemonette', 'Lenten Aurore Sauce (Es)', 'Lenten Espagnole (Es)', 'Lenten Italian Sauce (Es)', 'Lobster Butter (Es)','Lyonnaise (Ro)', 'Lyonnaise Sauce (Es)',

  // M
"Maître d'Hôtel Butter (Es)", 'Madeira (Ro)', 'Madeira Sauce (Es)', 'Maltese (Ro)', 'Maltese Sauce (Es)', 'Manied Butter (Es)', 'Marinière (Ro)', 'Marinière Sauce (Es)', 'Marrow Sauce (Es)', 'Matelote (Ro)', 'Matelote Sauce (Es)', 'Mayonnaise (Ro)', 'Mayonnaise Sauce (Es)', 'Melted Butter (Es)', 'Meunière Butter (Es)', 'Mint Sauce', 'Mint Sauce (Es)', 'Moelle (Ro)', 'Montpellier Butter (Es)', 'Mornay (Ro)', 'Mornay Sauce (Es)', 'Mousseline (Ro)', 'Mousseline Sauce (Es)', 'Mousseuse Sauce (Es)', 'Mushroom Sauce (Es)', 'Mustard Grill (Ro)', 'Mustard Sauce (Ro)', 'Mustard Sauce (Es)', 'Mustard Sauce Cold (Ro)',

  // N
  'Nantua (Ro)', 'Normandy (Ro)','Nantua Sauce (Es)', 'Newburg Sauce (Es)', 'Noisette Sauce (Es)', 'Normande Sauce (Es)',

  // O
  'Ordinary Chaud-Froid Sauce (Es)', 'Ordinary Poivrade Sauce (Es)', 'Oriental Sauce (Es)', 'Oxford Sauce', 'Oyster (Ro)','Oxford Sauce (Es)',

 // P
'Paloise (Ro)', 'Parsley Sauce (Es)', 'Peach Sauce (Ro)', 'Perigueux (Ro)', 'Perigueux Sauce (Es)', 'Pignons Sauce (Es)', 'Piquante (Ro)', 'Piquante Sauce (Es)', 'Pistachio Butter (Es)', 'Poivrade (Ro)', 'Poivrade Sauce for Venison (Es)', 'Porto', 'Poulette (Ro)', 'Poulette Sauce (Es)', 'Poultry Veloute', 'Printanier Butter (Es)', 'Provençale Sauce (Es)',

  // R
'Ravigote (Ro)', 'Ravigotte Sauce (Es)', 'Red Colouring Butter (Es)', 'Red Wine Sauce (Es)', 'Regency Sauce (Es)', 'Remoulade (Ro)', 'Remoulade Sauce (Es)', 'Robert (Ro)', 'Robert Sauce (Es)', 'Rouennaise (Ro)', 'Rouennaise Sauce (Es)', 'Rouille', 'Roux Brown', 'Roux Pale', 'Roux White', 'Royal (Ro)',

  // S
'Saint-Malo (Ro)', 'Sainte-Menehould (Ro)', 'Salmis Sauce (Es)', 'Sarladaise (Ro)', 'Scotch Egg Sauce (Es)', 'Shallot Butter (Es)', 'Shrimp Butter (Es)', 'Solferino (Ro)', 'Sorrel Sauce (Ro)', 'Soubise (Ro)', 'Soubise Rice Sauce (Es)', 'Soubise Sauce (Es)', 'Soubise Tomatee Sauce (Es)', 'Supreme (Ro)', 'Supreme Sauce (Es)',

  // T
'Tarragon (Ro)', 'Tarragon Butter (Es)', 'Tartar (Ro)', 'Thickened Gravy (Es)', 'Tomato', 'Tomato Coulis', 'Tomato Purée', 'Tomato Sauce (Es)', 'Tortue (Ro)', 'Tortue Sauce (Es)',

  // V
'Various Cullises (Es)', 'Veal Gravy Tomate (Es)', 'Veal Veloute', 'Venetian Sauce (Es)', 'Venison Sauce (Es)', 'Veron (Ro)', 'Villageoise', 'Villeroi (Ro)', 'Villeroy Sauce (Es)', 'Villeroy Soubisee Sauce (Es)', 'Villeroy Tomatee Sauce (Es)', 'Vinaigrette (Ro)', 'Vinaigrette Sauce (Es)', 'Vincent Sauce', 'Vincent Sauce (Es)',

  // W
  'Waterfish Cold (Ro)', 'Waterfish Hot (Ro)', 'White Chaud-Froid Sauce (Es)', 'Wine mustard','White Wine Sauce','Whisked Mayonnaise (Es)', 'White Wine Sauce (Es)',

  // Y
  'Yorkshire (Ro)',

  // Z
  'Zingara (Ro)'
];
//-----Sort keys------
ALL_SAUCE_KEYS.sort((a, b) =>
  a.localeCompare(b, ['uk', 'en'], { sensitivity: 'base' })
);

//----BANNER ---------
function randomHeroImage() {
const hero = document.querySelector('.hero');
  if (!hero) return;

  const count = 22;
  const n = Math.floor(Math.random() * count) + 1;

  const file = String(n).padStart(2, '0') + '.jpg';

  hero.style.backgroundImage = `
    linear-gradient(
      to top,
      rgba(26,15,6,.95) 0%,
      rgba(225,230,196,.50) 50%,
      rgba(0,0,0,0) 75%
    ),
    url('./bg/${file}')
  `;
  hero.style.backgroundPosition = `50% ${30 + Math.floor(Math.random() * 41)}%`;
}

function initApp() {
  SD = window.SD;
  document.documentElement.style.setProperty('--fs-scale', userData.fs || 1);
  applyLang();
  bHier();
  bUsage();
  bTech();
  bAll();

  // load banner
  randomHeroImage();
  
  // Preload all sauces in background
  window.SD.loadSauces(ALL_SAUCE_KEYS).then(function() {
    rebuildTG();
    bHier(); bUsage(); bTech(); bAll();
    applyLang(); // оновити "Всього соусів" тепер, коли всі дані довантажені
  }).catch(function(e){ console.warn('Preload partial:', e); });
}

document.addEventListener('DOMContentLoaded', function () {
  loadUserData().then(function () {
    currentLang = userData.lang || 'en';
    favs = userData.fav;
    notes = userData.nts;
    custom = userData.cst;
    initApp();
  });
});
