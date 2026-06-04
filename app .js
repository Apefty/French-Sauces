// ── все читається з window.SD (визначено в data.js) ───────────────────
var SD; // буде присвоєно після завантаження DOM

// ── СТАН ─────────────────────────────────────────────────────────────
var stk = ['home'], cur = null, noteEditing = false, editKey = null, photoData = {};
var favs = JSON.parse(localStorage.getItem('fav') || '[]');
var notes = JSON.parse(localStorage.getItem('nts') || '{}');
var custom = JSON.parse(localStorage.getItem('cst') || '{}');
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

// ── НАВІГАЦІЯ ─────────────────────────────────────────────────────────
var TITLES = {
  home:'French Sauces', hierarchy:'Sauce Hierarchy', usage:'By Dish / Product',
  technique:'By Technique', sublist:'Sauces', sauce:'Sauce',
  favs:'Saved Sauces', form:'Add Sauce'
};

function showS(id, title, push) {
  if (push !== false) stk.push(id);
  var all = document.querySelectorAll('.screen');
  for (var i = 0; i < all.length; i++) all[i].classList.remove('active');
  document.getElementById('s-' + id).classList.add('active');

  var R = allR();
  var t = title || (id === 'sauce' && cur ? (R[cur] ? R[cur].nm : 'Sauce') : TITLES[id] || id);
  document.getElementById('hdr-title').textContent = t;
  document.getElementById('btn-back').style.display = stk.length > 1 ? '' : 'none';
  document.getElementById('btn-fav-h').style.display = id === 'sauce' ? '' : 'none';
  document.getElementById('btn-add').style.display = id === 'form' ? 'none' : '';

  ['home','hierarchy','usage','favs'].forEach(function(n) {
    var el = document.getElementById('nb-' + n);
    if (el) el.classList.toggle('on', n === id);
  });
  updFavIco();
}

function navTo(id) {
  stk = [id];
  if (id === 'hierarchy') bHier();
  if (id === 'usage') bUsage();
  if (id === 'technique') bTech();
  if (id === 'favs') bFavs();
  showS(id, null, false);
}

function goBack() {
  if (stk.length <= 1) return;
  stk.pop();
  var id = stk[stk.length - 1];
  var all = document.querySelectorAll('.screen');
  for (var i = 0; i < all.length; i++) all[i].classList.remove('active');
  document.getElementById('s-' + id).classList.add('active');
  var R = allR();
  var t = id === 'sauce' && cur ? (R[cur] ? R[cur].nm : 'Sauce') : TITLES[id] || id;
  document.getElementById('hdr-title').textContent = t;
  document.getElementById('btn-back').style.display = stk.length > 1 ? '' : 'none';
  document.getElementById('btn-fav-h').style.display = id === 'sauce' ? '' : 'none';
  document.getElementById('btn-add').style.display = id === 'form' ? 'none' : '';
  ['home','hierarchy','usage','favs'].forEach(function(n) {
    var el = document.getElementById('nb-' + n);
    if (el) el.classList.toggle('on', n === id);
  });
  updFavIco();
}

// ── ПОШУК ─────────────────────────────────────────────────────────────
function onSearch(v) {
  var q = v.trim().toLowerCase();
  var res = document.getElementById('sres');
  var main = document.getElementById('home-main');
  if (!q) { res.style.display = 'none'; res.innerHTML = ''; main.style.display = ''; return; }
  res.style.display = 'block'; main.style.display = 'none';
  var R = allR();
  var ms = Object.keys(R).filter(function(k) {
    var s = R[k];
    return [s.nm, s.fr, s.cat, s.mo]
      .concat(s.pr || [])
      .concat(Object.values(s.ig || {}).reduce(function(a,b){ return a.concat(b); }, []))
      .concat([s.rc || ''])
      .join(' ').toLowerCase().indexOf(q) !== -1;
  });
  if (!ms.length) {
    res.innerHTML = '<div class="search-empty">No results for <b>' + x(v) + '</b></div>';
    return;
  }
  res.innerHTML = ms.map(function(k) {
    var s = R[k];
    return '<div class="search-result" onclick="openSauce(\'' + k + '\')">'
      + '<div class="sr-ico">' + (SD.cico[s.cat] || '🍶') + '</div>'
      + '<div><div class="sr-name">' + x(s.nm) + (custom[k] ? '<span class="custom-badge">custom</span>' : '') + '</div>'
      + '<div class="sr-cat">' + x(s.cat) + ' · ' + x(s.tp) + '</div></div>'
      + '<span style="margin-left:auto;color:var(--border)">›</span></div>';
  }).join('');
}

// ── ПОШУК КЛЮЧА ───────────────────────────────────────────────────────
function fKey(nm) {
  var R = allR();
  var l = nm.toLowerCase();
  return Object.keys(R).find(function(k) {
    return k.toLowerCase() === l
      || R[k].nm.toLowerCase() === l
      || R[k].nm.toLowerCase().indexOf(l) !== -1
      || l.indexOf(R[k].nm.toLowerCase().split(' ')[0]) !== -1;
  }) || null;
}

// ── ІЄРАРХІЯ ──────────────────────────────────────────────────────────
function bHier() {
  var ck = Object.keys(custom);
  var html = SD.cats.map(function(cat, ci) {
    return '<div class="cat-group">'
      + '<div class="cat-header" onclick="tC(' + ci + ')">'
      + '<div class="cat-ico">' + cat.ic + '</div>'
      + '<div class="cat-name"><div class="cat-name-main">' + cat.nm + '</div>'
      + '<div class="cat-name-fr">' + cat.fr + '</div></div>'
      + '<span class="cat-arrow" id="ca' + ci + '">›</span></div>'
      + '<div class="subcat-list" id="cl' + ci + '">'
      + cat.subs.map(function(sub, si) {
        return '<div class="subcat-item">'
          + '<div class="subcat-header" onclick="tS(' + ci + ',' + si + ')">'
          + '<div><div class="subcat-name">' + sub.nm + '</div>'
          + '<div class="subcat-mo">' + sub.mo + '</div></div>'
          + '<span class="subcat-arrow" id="sa' + ci + '_' + si + '">›</span></div>'
          + '<div class="sauce-list" id="sl' + ci + '_' + si + '">'
          + sub.s.map(function(nm) {
            var rk = fKey(nm);
            return '<div class="sauce-list-item"' + (rk ? ' onclick="openSauce(\'' + rk + '\')"' : '') + '>'
              + '<div class="sli-dot"></div>'
              + '<div class="sli-name">' + nm + '</div>'
              + (rk ? '<span class="sli-tag">Recipe</span><span style="color:var(--border)">›</span>' : '')
              + '</div>';
          }).join('')
          + '</div></div>';
      }).join('')
      + '</div></div>';
  }).join('');

  if (ck.length) {
    html += '<div class="cat-group">'
      + '<div class="cat-header" onclick="tCC()">'
      + '<div class="cat-ico">✏️</div>'
      + '<div class="cat-name"><div class="cat-name-main">My Sauces</div>'
      + '<div class="cat-name-fr">Custom (' + ck.length + ')</div></div>'
      + '<span class="cat-arrow" id="caC">›</span></div>'
      + '<div class="subcat-list" id="clC"><div class="subcat-item" style="padding-left:16px">'
      + '<div class="sauce-list open">'
      + ck.map(function(k) {
        return '<div class="sauce-list-item" onclick="openSauce(\'' + k + '\')">'
          + '<div class="sli-dot" style="background:var(--accent)"></div>'
          + '<div class="sli-name">' + x(custom[k].nm) + '</div>'
          + '<span class="sli-tag">Custom</span><span style="color:var(--border)">›</span></div>';
      }).join('') + '</div></div></div></div>';
  }

  document.getElementById('hier-b').innerHTML = html;
}
function tCC() { tog('clC','caC'); }
function tC(ci) { tog('cl'+ci,'ca'+ci); }
function tS(ci,si) { tog('sl'+ci+'_'+si,'sa'+ci+'_'+si); }
function tog(listId, arrowId) {
  document.getElementById(listId).classList.toggle('open');
  document.getElementById(arrowId).classList.toggle('open');
}

// ── BY DISH ───────────────────────────────────────────────────────────
function bUsage() {
  document.getElementById('usage-b').innerHTML = '<div class="list-body">'
    + Object.keys(SD.usage).map(function(cat) {
      var sauces = SD.usage[cat];
      return '<div class="list-item" onclick="showSL(\'' + x(cat) + '\',' + JSON.stringify(sauces) + ')">'
        + '<div class="li-ico">' + (SD.uico[cat] || '🍶') + '</div>'
        + '<div class="li-name">' + cat + '</div>'
        + '<span class="li-count">' + sauces.length + '</span>'
        + '<span class="li-arrow">›</span></div>';
    }).join('') + '</div>';
}

// ── BY TECHNIQUE ──────────────────────────────────────────────────────
function bTech() {
  rebuildTG();
  document.getElementById('tech-b').innerHTML = '<div class="list-body">'
    + Object.keys(TG).filter(function(nm) { return TG[nm].length; }).map(function(nm) {
      var sauces = TG[nm];
      return '<div class="list-item" onclick="showSLK(\'' + x(nm) + '\',' + JSON.stringify(sauces) + ')">'
        + '<div class="li-ico">' + (SD.tico[nm] || '🍶') + '</div>'
        + '<div class="li-name">' + nm + '</div>'
        + '<span class="li-count">' + sauces.length + '</span>'
        + '<span class="li-arrow">›</span></div>';
    }).join('') + '</div>';
}

function showSL(title, items) {
  document.getElementById('sub-b').innerHTML = '<div class="list-body">'
    + items.map(function(nm) {
      var k = fKey(nm);
      return '<div class="list-item"' + (k ? ' onclick="openSauce(\'' + k + '\')"' : ' style="opacity:.55"') + '>'
        + '<div class="li-name">' + nm + '</div>'
        + (k ? '<span class="li-arrow">›</span>' : '<span style="font-size:11px;color:var(--muted)">no recipe</span>')
        + '</div>';
    }).join('') + '</div>';
  showS('sublist', title);
}

function showSLK(title, keys) {
  var R = allR();
  document.getElementById('sub-b').innerHTML = '<div class="list-body">'
    + keys.map(function(k) {
      var s = R[k]; if (!s) return '';
      return '<div class="list-item" onclick="openSauce(\'' + k + '\')">'
        + '<div style="flex:1"><div class="li-name">' + x(s.nm) + '</div>'
        + '<div class="li-sub">' + x(s.cat) + '</div></div>'
        + '<span class="li-arrow">›</span></div>';
    }).join('') + '</div>';
  showS('sublist', title);
}

// ── SAVED ─────────────────────────────────────────────────────────────
function bFavs() {
  var b = document.getElementById('favs-b');
  var R = allR();
  if (!favs.length) {
    b.innerHTML = '<div class="empty-state"><div class="empty-ico">🤍</div><p class="empty-text">No saved sauces yet.<br>Open any sauce and tap 🤍 to save.</p></div>';
    return;
  }
  b.innerHTML = '<div class="list-body">'
    + favs.map(function(k) {
      var s = R[k]; if (!s) return '';
      return '<div class="list-item" onclick="openSauce(\'' + k + '\')">'
        + '<div style="flex:1"><div class="li-name">' + x(s.nm) + '</div>'
        + '<div class="li-sub">' + x(s.cat) + (notes[k] ? ' · 📝' : '') + '</div></div>'
        + '<span class="li-arrow">›</span></div>';
    }).join('') + '</div>';
}

// ── КАРТКА СОУСУ ──────────────────────────────────────────────────────
function openSauce(key, push) {
  var R = allR();
  var s = R[key]; if (!s) return;
  cur = key;
  var fav = favs.indexOf(key) !== -1;
  var isCust = !!custom[key];
  var nt = notes[key] || '';
  var photo = s.photo || '';

  // Breadcrumbs
  var bc = '';
  if (s.mo && s.mo !== '—' && s.mo !== s.nm) {
    var moKey = fKey(s.mo);
    if (moKey && moKey !== key) {
      bc += '<span class="bc-item" onclick="openSauce(\'' + moKey + '\')">' + x(s.mo) + '</span>'
        + '<span class="bc-sep">›</span>';
    } else {
      bc += '<span class="bc-item plain">' + x(s.mo) + '</span><span class="bc-sep">›</span>';
    }
  }
  bc += '<span class="bc-item current">' + x(s.nm) + '</span>';

  // Ingredients
  var ingr = '';
  if (s.ig) {
    var groups = Object.keys(s.ig).filter(function(g) { return s.ig[g] && s.ig[g].length; });
    if (groups.length) {
      ingr = '<div class="ingr-grid">'
        + groups.map(function(g) {
          return '<div class="ingr-group"><div class="ingr-group-title">' + g + '</div>'
            + s.ig[g].map(function(i) { return '<div class="ingr-item">' + x(i) + '</div>'; }).join('')
            + '</div>';
        }).join('') + '</div>';
    }
  }

  // Steps
  var steps = '';
  if (s.st && s.st.length) {
    steps = s.st.map(function(t, i) {
      return '<div class="step"><div class="step-num">' + (i+1) + '</div>'
        + '<div class="step-text">' + x(t) + '</div></div>';
    }).join('');
  }

  // Derivatives
  var deriv = '';
  if (s.dv && s.dv.length) {
    deriv = '<div class="deriv-tree"><div class="deriv-root">' + x(s.nm) + '</div>'
      + '<div class="deriv-line"></div><div class="deriv-children">'
      + s.dv.map(function(d) {
        var dk = fKey(d);
        return '<div class="deriv-child' + (dk === key ? ' current' : '') + '"'
          + (dk ? ' onclick="openSauce(\'' + dk + '\')"' : '') + '>' + x(d) + '</div>';
      }).join('') + '</div></div>';
  }

  // Similar
  var sim = '';
  if (s.sm && s.sm.length) {
    var simItems = s.sm.filter(function(n) { var sk = fKey(n); return sk && sk !== key; });
    if (simItems.length) {
      sim = '<div class="relatives">'
        + simItems.map(function(n) {
          var sk = fKey(n);
          return '<div class="relative-item" onclick="openSauce(\'' + sk + '\')">'
            + '<span style="font-size:13px">' + x(R[sk] ? R[sk].nm : n) + '</span>'
            + '<span style="color:var(--border)">›</span></div>';
        }).join('') + '</div>';
    }
  }

  document.getElementById('sauce-b').innerHTML =
    '<div class="sauce-hero">'
    + (photo ? '<img class="sauce-hero-img" src="' + photo + '" alt="">' : '<div class="sauce-hero-img-placeholder"></div>')
    + '<div class="sauce-hero-body">'
    + '<div class="sauce-badge">' + (SD.cico[s.cat] || '🍶') + ' ' + x(s.cat)
    + (isCust ? '<span class="custom-badge">custom</span>' : '') + '</div>'
    + '<div class="sauce-title">' + x(s.nm) + '</div>'
    + (s.fr && s.fr !== s.nm ? '<div class="sauce-title-fr">' + x(s.fr) + '</div>' : '')
    + '</div></div>'

    + '<div class="sauce-sec"><div class="sauce-sec-title">Classification</div>'
    + '<div class="breadcrumbs">' + bc + '</div></div>'

    + '<div class="sauce-sec"><div class="sauce-sec-title">Properties</div>'
    + '<div class="meta-grid">'
    + cell('Type', s.tp) + cell('Temperature', s.tm) + cell('Difficulty', s.df)
    + cell('Time', s.ti) + cell('Base', s.bs) + cell('Classic', s.cl || 'Escoffier')
    + '</div></div>'

    + (s.pr && s.pr.length ? '<div class="sauce-sec"><div class="sauce-sec-title">Pairs with</div>'
      + '<div class="tags-wrap">' + s.pr.map(function(p) { return '<span class="tag">' + x(p) + '</span>'; }).join('') + '</div></div>' : '')

    + (ingr ? '<div class="sauce-sec"><div class="sauce-sec-title">Ingredients</div>' + ingr + '</div>' : '')
    + (steps ? '<div class="sauce-sec"><div class="sauce-sec-title">Technique</div>' + steps + '</div>' : '')
    + (s.rc ? '<div class="sauce-sec"><div class="sauce-sec-title">Full recipe</div><div class="recipe-box"><div class="recipe-text">' + x(s.rc) + '</div></div></div>' : '')
    + (deriv ? '<div class="sauce-sec"><div class="sauce-sec-title">Derivative sauces</div>' + deriv + '</div>' : '')
    + (sim ? '<div class="sauce-sec"><div class="sauce-sec-title">Similar sauces</div>' + sim + '</div>' : '')

    + '<div class="sauce-sec"><div class="sauce-sec-title">My notes</div>'
    + '<div class="notes-view' + (nt ? '' : ' empty') + '" id="notes-view">' + (nt ? x(nt) : 'No notes yet. Tap Edit to add.') + '</div>'
    + '<textarea class="notes-edit-area" id="notes-ta" placeholder="Write your notes…">' + x(nt) + '</textarea>'
    + '<div class="notes-buttons">'
    + '<button class="action-btn btn-note-edit" id="btn-note-edit" onclick="toggleNote()">✎ Edit notes</button>'
    + '<button class="action-btn btn-note-save" id="btn-note-save" onclick="saveNote(\'' + key + '\')">✓ Save</button>'
    + '</div></div>'

    + '<div class="sauce-sec"><div class="action-row">'
    + '<button class="action-btn btn-save' + (fav ? ' on' : '') + '" id="btn-fav-card" onclick="toggleFav()">' + (fav ? '♥ Saved' : '🤍 Save') + '</button>'
    + '<button class="action-btn btn-edit" onclick="openForm(\'' + key + '\')">✎ Edit</button>'
    + (isCust ? '<button class="action-btn btn-delete" onclick="doDelete(\'' + key + '\')">🗑</button>' : '')
    + '</div></div>'
    + '<div style="height:40px"></div>';

  document.getElementById('sauce-b').scrollTop = 0;
  if (push !== false) showS('sauce', s.nm);
  else document.getElementById('hdr-title').textContent = s.nm;
  updFavIco();
}

function cell(label, val) {
  return '<div class="meta-cell"><div class="meta-label">' + label + '</div>'
    + '<div class="meta-value">' + x(val || '—') + '</div></div>';
}

// ── НОТАТКИ ───────────────────────────────────────────────────────────
function toggleNote() {
  noteEditing = !noteEditing;
  var view = document.getElementById('notes-view');
  var ta = document.getElementById('notes-ta');
  var btnE = document.getElementById('btn-note-edit');
  var btnS = document.getElementById('btn-note-save');
  if (noteEditing) {
    view.style.display = 'none';
    ta.style.display = 'block';
    ta.focus();
    btnE.textContent = '✕ Cancel';
    btnS.style.display = 'flex';
  } else {
    view.style.display = '';
    ta.style.display = 'none';
    btnE.textContent = '✎ Edit notes';
    btnS.style.display = 'none';
  }
}

function saveNote(key) {
  var val = document.getElementById('notes-ta').value.trim();
  notes[key] = val;
  localStorage.setItem('nts', JSON.stringify(notes));
  var view = document.getElementById('notes-view');
  view.textContent = val || 'No notes yet. Tap Edit to add.';
  view.className = 'notes-view' + (val ? '' : ' empty');
  toggleNote();
  toast('Notes saved ✓');
}

// ── УЛЮБЛЕНІ ──────────────────────────────────────────────────────────
function updFavIco() {
  var btn = document.getElementById('btn-fav-h');
  if (!btn || !cur) return;
  btn.textContent = favs.indexOf(cur) !== -1 ? '♥' : '🤍';
}

function toggleFav() {
  if (!cur) return;
  var i = favs.indexOf(cur);
  if (i === -1) favs.push(cur); else favs.splice(i, 1);
  localStorage.setItem('fav', JSON.stringify(favs));
  updFavIco();
  var btn = document.getElementById('btn-fav-card');
  if (btn) { var f = favs.indexOf(cur) !== -1; btn.className = 'action-btn btn-save' + (f ? ' on' : ''); btn.textContent = f ? '♥ Saved' : '🤍 Save'; }
}

// ── ВИДАЛЕННЯ ─────────────────────────────────────────────────────────
function doDelete(key) {
  if (!confirm('Delete this sauce?')) return;
  delete custom[key];
  localStorage.setItem('cst', JSON.stringify(custom));
  rebuildTG();
  toast('Sauce deleted');
  goBack();
}

// ── ФОРМА ─────────────────────────────────────────────────────────────
var CATS = ['White Sauces','Brown Sauces','Hot Emulsified','Cold Emulsified','Cold Sauces','Dessert Sauces'];
var TYPES = ['Emulsified','Cold Emulsified','Roux-based','Reduction','Tomato-based','Fruit-based','Unstable Emulsion','Dessert'];
var TEMPS = ['Hot','Cold','Hot/Cold'];
var DIFFS = ['Easy','Medium','Hard'];

function openForm(key) {
  editKey = key;
  var R = allR();
  var s = key ? R[key] : null;
  photoData = {};

  function sel(opts, val) {
    return opts.map(function(o) { return '<option' + (o === val ? ' selected' : '') + '>' + o + '</option>'; }).join('');
  }
  function dynList(id, items) {
    return '<div class="dyn-list" id="' + id + '">'
      + (items.length ? items : ['']).map(function(v, i) { return dynRow(id, v, i); }).join('')
      + '</div><button class="dyn-add" onclick="addRow(\'' + id + '\')">+ Add item</button>';
  }
  var existPhoto = s && s.photo ? '<img class="photo-preview" id="photo-prev" src="' + s.photo + '" alt="">' : '';

  document.getElementById('form-b').innerHTML =
    '<div class="form-section"><div class="form-section-title">Photo</div>'
    + '<div class="photo-area" id="photo-area">'
    + (existPhoto || '<div class="photo-ico">📷</div><span class="photo-hint">Tap to upload</span>')
    + '<input type="file" accept="image/*" onchange="handlePhoto(this)"></div></div>'

    + '<div class="form-section"><div class="form-section-title">Basic information</div>'
    + frow('Name (English) *', '<input id="f-nm" value="' + x(s ? s.nm : '') + '" placeholder="e.g. Béarnaise Sauce">')
    + frow('Name (French)', '<input id="f-fr" value="' + x(s ? s.fr : '') + '" placeholder="e.g. Sauce Béarnaise">')
    + frow('Mother sauce', '<input id="f-mo" value="' + x(s ? s.mo : '') + '" placeholder="e.g. Béarnaise, Hollandaise">')
    + '<div class="form-2col">'
    + frow('Category *', '<select id="f-cat">' + sel(CATS, s ? s.cat : '') + '</select>')
    + frow('Cuisine', '<input id="f-cl" value="' + x(s ? (s.cl || 'French') : 'French') + '">')
    + '</div></div>'

    + '<div class="form-section"><div class="form-section-title">Properties</div>'
    + '<div class="form-2col">'
    + frow('Type *', '<select id="f-tp">' + sel(TYPES, s ? s.tp : '') + '</select>')
    + frow('Temperature', '<select id="f-tm">' + sel(TEMPS, s ? s.tm : '') + '</select>')
    + '</div><div class="form-2col">'
    + frow('Difficulty', '<select id="f-df">' + sel(DIFFS, s ? s.df : '') + '</select>')
    + frow('Time', '<input id="f-ti" value="' + x(s ? s.ti : '') + '" placeholder="30 min">')
    + '</div>'
    + frow('Base stock', '<input id="f-bs" value="' + x(s ? s.bs : '') + '" placeholder="e.g. Butter/Egg, Fish stock">')
    + '</div>'

    + '<div class="form-section"><div class="form-section-title">Ingredients</div>'
    + ['base','aromatics','acid','finish'].map(function(g) {
      return frow(g.charAt(0).toUpperCase() + g.slice(1), dynList('ig-'+g, s && s.ig && s.ig[g] ? s.ig[g] : []));
    }).join('') + '</div>'

    + '<div class="form-section"><div class="form-section-title">Technique steps</div>'
    + dynList('f-st', s && s.st ? s.st : [])
    + '</div>'

    + '<div class="form-section"><div class="form-section-title">Full recipe</div>'
    + frow('', '<textarea id="f-rc" rows="5" placeholder="Full recipe text…">' + x(s ? s.rc : '') + '</textarea>')
    + '</div>'

    + '<div class="form-section"><div class="form-section-title">Relations</div>'
    + frow('Pairs with (comma-separated)', '<input id="f-pr" value="' + x(s && s.pr ? s.pr.join(', ') : '') + '">')
    + frow('Derivative sauces', '<input id="f-dv" value="' + x(s && s.dv ? s.dv.join(', ') : '') + '">')
    + frow('Similar sauces', '<input id="f-sm" value="' + x(s && s.sm ? s.sm.join(', ') : '') + '">')
    + '</div>'

    + '<div class="form-actions">'
    + '<button class="form-cancel" onclick="goBack()">Cancel</button>'
    + '<button class="form-save" onclick="saveSauce()">✓ ' + (key ? 'Save changes' : 'Add to catalog') + '</button>'
    + '</div>';

  showS('form', key ? 'Edit Sauce' : 'Add New Sauce');
}

function frow(label, input) {
  return '<div class="form-row">' + (label ? '<label>' + label + '</label>' : '') + input + '</div>';
}
function dynRow(listId, val, idx) {
  return '<div class="dyn-row" id="dr-' + listId + '-' + idx + '">'
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
    var area = document.getElementById('photo-area');
    var prev = document.getElementById('photo-prev');
    if (!prev) { area.innerHTML = '<img class="photo-preview" id="photo-prev" src="' + photoData.data + '" alt=""><input type="file" accept="image/*" onchange="handlePhoto(this)">'; }
    else { prev.src = photoData.data; }
  };
  img.src = URL.createObjectURL(file);
}

function saveSauce() {
  var nm = document.getElementById('f-nm').value.trim();
  if (!nm) { toast('Name is required'); return; }
  var R = allR();
  var key = editKey || (nm.toLowerCase().replace(/[^a-z0-9]+/g,'_') + '_' + Date.now());
  var existing = editKey ? R[editKey] : null;
  var sauce = {
    nm: nm,
    fr: document.getElementById('f-fr').value.trim() || nm,
    mo: document.getElementById('f-mo').value.trim() || '—',
    cat: document.getElementById('f-cat').value,
    cl: document.getElementById('f-cl').value.trim() || 'French',
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
  localStorage.setItem('cst', JSON.stringify(custom));
  rebuildTG();
  toast(editKey ? 'Changes saved ✓' : 'Sauce added ✓');
  cur = key;
  openSauce(key);
}

// ── ДОПОМІЖНІ ─────────────────────────────────────────────────────────
function x(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2200);
}

// ── СТАРТ ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  SD = window.SD;
  rebuildTG();
  bHier(); bUsage(); bTech();
});
