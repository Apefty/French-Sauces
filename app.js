// ── CONFIG ────────────────────────────────────────────────────────────
const CATS = ["White Sauces","Brown Sauces","Hot Emulsified","Cold Emulsified","Cold Sauces","Dessert Sauces"];
const TYPES = ["Emulsified","Cold Emulsified","Roux-based","Reduction","Tomato-based","Fruit-based","Unstable Emulsion","Dessert"];
const TEMPS = ["Hot","Cold","Hot/Cold"];
const DIFFS = ["Easy","Medium","Hard"];
const CICO = {"White Sauces":"🤍","Brown Sauces":"🟤","Hot Emulsified":"🫧","Cold Emulsified":"❄️","Cold Sauces":"🌿","Dessert Sauces":"🍮"};
const UICO = {"Fish / Seafood":"🐟","Meat":"🥩","Poultry":"🍗","Game":"🦌","Vegetables / Eggs":"🥦","Dessert":"🍮","Cold Sauces":"🌿","Hot Sauces":"🔥"};
const TICO = {"Emulsified (Hot)":"🌡️","Emulsified (Cold)":"❄️","Roux-based":"🥛","Reduction":"⬇️","Tomato-based":"🍅","Fruit-based":"🍊","Unstable Emulsion":"🫗","Dessert":"🍮"};

// ── STATE ─────────────────────────────────────────────────────────────
let stk = ["home"], cur = null, ntT = null, editKey = null, photoData = {};
let favs = [], notes = {}, custom = {};
let noteEditing = false;

function allR() { return Object.assign({}, D.r, custom); }

// Technique groups
const TG = {"Emulsified (Hot)":[],"Emulsified (Cold)":[],"Roux-based":[],"Reduction":[],"Tomato-based":[],"Fruit-based":[],"Unstable Emulsion":[],"Dessert":[]};
function rebuildTG() {
  Object.keys(TG).forEach(k => TG[k] = []);
  Object.entries(allR()).forEach(([k, s]) => {
    if (s.tp === "Emulsified") TG[s.tm === "Hot" ? "Emulsified (Hot)" : "Emulsified (Cold)"].push(k);
    else if (s.tp === "Cold Emulsified") TG["Emulsified (Cold)"].push(k);
    else if (TG[s.tp]) TG[s.tp].push(k);
  });
}

// ── FIREBASE ──────────────────────────────────────────────────────────
const FB_CFG = {
  apiKey: "AIzaSyAcRD5GzqvgtvBTEAm2MQWULrhmVsjyciE",
  authDomain: "sauce-app-c21f9.firebaseapp.com",
  projectId: "sauce-app-c21f9",
  storageBucket: "sauce-app-c21f9.firebasestorage.app",
  messagingSenderId: "992877586399",
  appId: "1:992877586399:web:0b25b8796cc7864e6a866a"
};

let _db = null;

async function getDB() {
  if (_db) return _db;
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
  const { getFirestore, doc, getDoc, setDoc, deleteDoc, collection, onSnapshot } =
    await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
  const app = initializeApp(FB_CFG);
  _db = { fs: getFirestore(app), doc, getDoc, setDoc, deleteDoc, collection, onSnapshot };
  return _db;
}

function syncStatus(msg, err = false) {
  const el = document.getElementById("sync-status");
  el.textContent = msg;
  el.className = "sync show" + (err ? " err" : "");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2500);
}

async function loadUserData() {
  try {
    const { fs, doc, getDoc } = await getDB();
    const snap = await getDoc(doc(fs, "userdata", "main"));
    if (snap.exists()) {
      const d = snap.data();
      favs = d.favs || [];
      notes = d.notes || {};
    }
  } catch(e) { console.warn("Could not load user data", e); }
}

async function saveUserData() {
  try {
    const { fs, doc, setDoc } = await getDB();
    await setDoc(doc(fs, "userdata", "main"), { favs, notes });
  } catch(e) { console.warn("Could not save user data", e); }
}

async function listenSauces(cb) {
  const { fs, collection, onSnapshot } = await getDB();
  return onSnapshot(collection(fs, "sauces"), snap => {
    const r = {};
    snap.forEach(d => { r[d.id] = d.data(); });
    cb(r);
  });
}

async function fbSaveSauce(key, data) {
  const { fs, doc, setDoc } = await getDB();
  await setDoc(doc(fs, "sauces", key), data);
}

async function fbDeleteSauce(key) {
  const { fs, doc, deleteDoc } = await getDB();
  await deleteDoc(doc(fs, "sauces", key));
}

// ── INIT ──────────────────────────────────────────────────────────────
window.initApp = async function() {
  rebuildTG();
  bHier(); bUsage(); bTech();

  await loadUserData();

  listenSauces(data => {
    custom = data;
    rebuildTG();
    const active = document.querySelector(".screen.active");
    if (active?.id === "s-hierarchy") bHier();
    if (active?.id === "s-usage") bUsage();
    if (active?.id === "s-technique") bTech();
    if (active?.id === "s-favs") bFavs();
    if (active?.id === "s-sauce" && cur) openSauce(cur, false);
  });
};

// Auto-start
window.initApp();

// ── NAVIGATION ────────────────────────────────────────────────────────
const TITLES = {
  home:"French Sauces", hierarchy:"Sauce Hierarchy", usage:"By Dish / Product",
  technique:"By Technique", sublist:"Sauces", sauce:"Sauce",
  favs:"Saved Sauces", form:"Add Sauce"
};

function showS(id, title, push = true) {
  document.querySelector(".screen.active")?.classList.remove("active");
  document.getElementById("s-" + id).classList.add("active");
  if (push) stk.push(id);
  const R = allR();
  document.getElementById("hdr-t").textContent = title || (id === "sauce" && cur ? R[cur]?.nm || "Sauce" : TITLES[id] || id);
  document.getElementById("btn-back").style.display = stk.length > 1 ? "" : "none";
  document.getElementById("btn-fav-h").style.display = id === "sauce" ? "" : "none";
  document.getElementById("btn-add").style.display = id === "form" ? "none" : "";
  ["home","hierarchy","usage","favs"].forEach(n => document.getElementById("nb-" + n)?.classList.toggle("on", n === id));
  updFavIco();
}

function navTo(id) {
  stk = [id];
  if (id === "hierarchy") bHier();
  if (id === "usage") bUsage();
  if (id === "technique") bTech();
  if (id === "favs") bFavs();
  showS(id, null, false);
  stk = [id];
}

function goBack() {
  if (stk.length <= 1) return;
  document.querySelector(".screen.active")?.classList.remove("active");
  stk.pop();
  const id = stk[stk.length - 1];
  document.getElementById("s-" + id).classList.add("active");
  const R = allR();
  const t = id === "sauce" && cur ? R[cur]?.nm || "Sauce" : TITLES[id] || id;
  document.getElementById("hdr-t").textContent = t;
  document.getElementById("btn-back").style.display = stk.length > 1 ? "" : "none";
  document.getElementById("btn-fav-h").style.display = id === "sauce" ? "" : "none";
  document.getElementById("btn-add").style.display = id === "form" ? "none" : "";
  ["home","hierarchy","usage","favs"].forEach(n => document.getElementById("nb-" + n)?.classList.toggle("on", n === id));
  updFavIco();
}

// ── SEARCH ────────────────────────────────────────────────────────────
function onSearch(v) {
  const q = v.trim().toLowerCase();
  const res = document.getElementById("sres");
  const main = document.getElementById("home-main");
  if (!q) { res.style.display = "none"; res.innerHTML = ""; main.style.display = ""; return; }
  res.style.display = "block"; main.style.display = "none";
  const R = allR();
  const ms = Object.entries(R).filter(([k, s]) =>
    [s.nm, s.fr, s.cat, s.mo, ...(s.pr || []), ...Object.values(s.ig || {}).flat(), s.rc || ""]
    .join(" ").toLowerCase().includes(q)
  );
  if (!ms.length) {
    res.innerHTML = `<div style="text-align:center;padding:30px 20px;color:#7A6050;font-size:14px">No results for "<b>${esc(v)}</b>"</div>`;
    return;
  }
  res.innerHTML = ms.map(([k, s]) => `
    <div class="sri" onclick="openSauce('${k}')">
      <div class="srio">${CICO[s.cat] || "🍶"}</div>
      <div>
        <div class="srn">${esc(s.nm)}${custom[k] ? '<span class="badgec">custom</span>' : ''}</div>
        <div class="src">${esc(s.cat)} · ${esc(s.tp)}</div>
      </div>
      <span style="margin-left:auto;color:#D4C4A0">›</span>
    </div>`).join("");
}

// ── KEY LOOKUP ────────────────────────────────────────────────────────
function fKey(nm) {
  const R = allR();
  const l = nm.toLowerCase();
  return Object.keys(R).find(k =>
    k.toLowerCase() === l ||
    R[k].nm.toLowerCase() === l ||
    R[k].nm.toLowerCase().includes(l) ||
    l.includes(R[k].nm.toLowerCase().split(" ")[0])
  ) || null;
}

// ── HIERARCHY ─────────────────────────────────────────────────────────
function bHier() {
  const ck = Object.keys(custom);
  document.getElementById("hier-b").innerHTML =
    D.cats.map((cat, ci) => `
      <div>
        <div class="ch" onclick="tC(${ci})">
          <div class="cico">${cat.ic}</div>
          <div class="cnm"><div class="cnm-m">${cat.nm}</div><div class="cnm-f">${cat.fr}</div></div>
          <span class="chev" id="cc${ci}">›</span>
        </div>
        <div class="csl" id="cs${ci}">
          ${cat.subs.map((sub, si) => `
            <div class="csi">
              <div class="csh" onclick="tS(${ci},${si})">
                <div><div class="csnm">${sub.nm}</div><div class="csmo">${sub.mo}</div></div>
                <span class="csch" id="sc${ci}_${si}">›</span>
              </div>
              <div class="css" id="sl${ci}_${si}">
                ${sub.s.map(nm => {
                  const rk = fKey(nm);
                  return `<div class="sli" ${rk ? `onclick="openSauce('${rk}')"` : ""}>
                    <div class="sld"></div>
                    <div class="sln">${nm}</div>
                    ${rk ? `<span class="slt">Recipe</span><span style="color:#D4C4A0">›</span>` : ""}
                  </div>`;
                }).join("")}
              </div>
            </div>`).join("")}
        </div>
      </div>`).join("") +
    (ck.length ? `
      <div>
        <div class="ch" onclick="tCC()">
          <div class="cico">✏️</div>
          <div class="cnm"><div class="cnm-m">My Sauces</div><div class="cnm-f">Custom additions (${ck.length})</div></div>
          <span class="chev" id="ccC">›</span>
        </div>
        <div class="csl" id="csC">
          <div class="csi" style="padding-left:16px">
            <div class="css open">
              ${ck.map(k => `
                <div class="sli" onclick="openSauce('${k}')">
                  <div class="sld" style="background:#C4742A"></div>
                  <div class="sln">${esc(custom[k].nm)}</div>
                  <span class="slt">Custom</span><span style="color:#D4C4A0">›</span>
                </div>`).join("")}
            </div>
          </div>
        </div>
      </div>` : "");
}
function tCC() { document.getElementById("csC").classList.toggle("open"); document.getElementById("ccC").classList.toggle("open"); }
function tC(ci) { document.getElementById(`cs${ci}`).classList.toggle("open"); document.getElementById(`cc${ci}`).classList.toggle("open"); }
function tS(ci, si) { document.getElementById(`sl${ci}_${si}`).classList.toggle("open"); document.getElementById(`sc${ci}_${si}`).classList.toggle("open"); }

// ── USAGE ─────────────────────────────────────────────────────────────
function bUsage() {
  document.getElementById("usage-b").innerHTML = `<div class="cli-list">
    ${Object.entries(D.usage).map(([cat, sauces]) => `
      <div class="cli" onclick="showSL(${JSON.stringify(cat)}, ${JSON.stringify(sauces)})">
        <div class="clio">${UICO[cat] || "🍶"}</div>
        <div class="clnm">${cat}</div>
        <div class="clct">${sauces.length}</div>
        <span style="color:#D4C4A0">›</span>
      </div>`).join("")}
  </div>`;
}

// ── TECHNIQUE ─────────────────────────────────────────────────────────
function bTech() {
  rebuildTG();
  document.getElementById("tech-b").innerHTML = `<div class="cli-list">
    ${Object.entries(TG).filter(([, s]) => s.length).map(([nm, sauces]) => `
      <div class="cli" onclick="showSLK(${JSON.stringify(nm)}, ${JSON.stringify(sauces)})">
        <div class="clio">${TICO[nm] || "🍶"}</div>
        <div class="clnm">${nm}</div>
        <div class="clct">${sauces.length}</div>
        <span style="color:#D4C4A0">›</span>
      </div>`).join("")}
  </div>`;
}

function showSL(title, items) {
  document.getElementById("sub-b").innerHTML = `<div class="cli-list">
    ${items.map(nm => {
      const k = fKey(nm);
      return `<div class="cli" ${k ? `onclick="openSauce('${k}')"` : ""} style="${!k ? 'opacity:.55' : ''}">
        <div class="clnm">${nm}</div>
        ${k ? `<span style="color:#D4C4A0">›</span>` : `<span style="font-size:11px;color:#7A6050">no recipe</span>`}
      </div>`;
    }).join("")}
  </div>`;
  showS("sublist", title);
}

function showSLK(title, keys) {
  const R = allR();
  document.getElementById("sub-b").innerHTML = `<div class="cli-list">
    ${keys.map(k => {
      const s = R[k]; if (!s) return "";
      return `<div class="cli" onclick="openSauce('${k}')">
        <div style="flex:1"><div class="clnm">${esc(s.nm)}</div><div style="font-size:11px;color:#7A6050">${esc(s.cat)}</div></div>
        <span style="color:#D4C4A0">›</span>
      </div>`;
    }).join("")}
  </div>`;
  showS("sublist", title);
}

// ── FAVOURITES ────────────────────────────────────────────────────────
function bFavs() {
  const b = document.getElementById("favs-b"), R = allR();
  if (!favs.length) {
    b.innerHTML = `<div class="fe"><div class="fe-ico">♡</div><p>No saved sauces yet.<br>Open any sauce and tap ♡ to save.</p></div>`;
    return;
  }
  b.innerHTML = `<div class="cli-list">
    ${favs.map(k => {
      const s = R[k]; if (!s) return "";
      return `<div class="cli" onclick="openSauce('${k}')">
        <div style="flex:1">
          <div class="clnm">${esc(s.nm)}</div>
          <div style="font-size:11px;color:#7A6050">${esc(s.cat)}${notes[k]?.trim() ? " · 📝" : ""}</div>
        </div>
        <span style="color:#D4C4A0">›</span>
      </div>`;
    }).join("")}
  </div>`;
}

// ── SAUCE DETAIL ──────────────────────────────────────────────────────
function openSauce(key, push = true) {
  const R = allR();
  const s = R[key]; if (!s) return;
  cur = key;
  const fav = favs.includes(key);
  const isCust = !!custom[key];
  const photo = s.photo || "";
  const nt_ = notes[key] || "";

  // Breadcrumbs
  const bcItems = [];
  if (s.mo && s.mo !== "—" && s.mo !== s.nm) {
    const moKey = fKey(s.mo);
    if (moKey && moKey !== key) {
      bcItems.push(`<span class="bci" onclick="openSauce('${moKey}')">${esc(s.mo)}</span><span class="bcsep">›</span>`);
    } else {
      bcItems.push(`<span class="bci plain">${esc(s.mo)}</span><span class="bcsep">›</span>`);
    }
  }
  bcItems.push(`<span class="bci plain" style="font-weight:500;color:var(--b)">${esc(s.nm)}</span>`);

  const ingr = s.ig ? `<div class="ig">
    ${Object.entries(s.ig).filter(([, v]) => v?.length).map(([lbl, items]) => `
      <div class="igg">
        <div class="igt">${lbl}</div>
        ${items.map(i => `<div class="igi">${esc(i)}</div>`).join("")}
      </div>`).join("")}
  </div>` : "";

  const steps = s.st?.length ? `<div class="stps">
    ${s.st.map((t, i) => `
      <div class="stp">
        <div class="stn">${i + 1}</div>
        <div class="stx">${esc(t)}</div>
      </div>`).join("")}
  </div>` : "";

  const deriv = s.dv?.length ? `<div class="dt">
    <div class="dtm">${esc(s.nm)}</div>
    <div class="dtl"></div>
    <div class="dtc">
      ${s.dv.map(d => {
        const dk = fKey(d);
        return `<div class="dtch${dk === key ? " cur" : ""}" onclick="${dk ? `openSauce('${dk}')` : ""}">${esc(d)}</div>`;
      }).join("")}
    </div>
  </div>` : "";

  const sim = s.sm?.length ? `<div class="rl">
    ${s.sm.filter(n => { const sk = fKey(n); return sk && sk !== key; }).map(n => {
      const sk = fKey(n);
      return `<div class="rli" onclick="openSauce('${sk}')">
        <span style="font-size:13px">${esc(R[sk]?.nm || n)}</span>
        <span style="color:#D4C4A0">›</span>
      </div>`;
    }).join("")}
  </div>` : "";

  document.getElementById("sauce-b").innerHTML = `
    <div class="sauce-hero">
      ${photo ? `<img class="shimg" src="${photo}" alt="">` : ""}
      <div class="shc">
        <div class="scat">${CICO[s.cat] || "🍶"} ${esc(s.cat)}${isCust ? '<span class="badgec">custom</span>' : ""}</div>
        <div class="snm2">${esc(s.nm)}</div>
        ${s.fr && s.fr !== s.nm ? `<div class="sfr">${esc(s.fr)}</div>` : ""}
      </div>
    </div>

    <div class="sec">
      <div class="stl">Classification</div>
      <div class="bc">${bcItems.join("")}</div>
    </div>

    <div class="sec">
      <div class="stl">Properties</div>
      <div class="mg">
        <div class="mi"><div class="ml">Type</div><div class="mv">${esc(s.tp || "—")}</div></div>
        <div class="mi"><div class="ml">Temperature</div><div class="mv">${esc(s.tm || "—")}</div></div>
        <div class="mi"><div class="ml">Difficulty</div><div class="mv">${esc(s.df || "—")}</div></div>
        <div class="mi"><div class="ml">Time</div><div class="mv">${esc(s.ti || "—")}</div></div>
        <div class="mi"><div class="ml">Base</div><div class="mv">${esc(s.bs || "—")}</div></div>
        <div class="mi"><div class="ml">Classic</div><div class="mv">${esc(s.cl || "Escoffier")}</div></div>
      </div>
    </div>

    ${s.pr?.length ? `<div class="sec"><div class="stl">Pairs with</div><div class="tgs">${s.pr.map(p => `<span class="tg2">${esc(p)}</span>`).join("")}</div></div>` : ""}
    ${ingr ? `<div class="sec"><div class="stl">Ingredients</div>${ingr}</div>` : ""}
    ${steps ? `<div class="sec"><div class="stl">Technique</div>${steps}</div>` : ""}
    ${s.rc ? `<div class="sec"><div class="stl">Full recipe</div><div class="rb"><div class="rt">${esc(s.rc)}</div></div></div>` : ""}
    ${deriv ? `<div class="sec"><div class="stl">Derivative sauces</div>${deriv}</div>` : ""}
    ${sim ? `<div class="sec"><div class="stl">Similar sauces</div>${sim}</div>` : ""}

    <div class="sec">
      <div class="stl">My notes</div>
      <div class="notes-view${nt_ ? "" : " empty"}" id="notes-view">${nt_ ? esc(nt_) : "No notes yet. Tap Edit to add."}</div>
      <textarea class="nta" id="nta" placeholder="Write your notes, tips, personal variations…">${esc(nt_)}</textarea>
      <div class="notes-btns">
        <button class="btn-act btn-note" id="btn-note-edit" onclick="toggleNoteEdit()">✎ Edit notes</button>
        <button class="btn-act btn-save-note" id="btn-note-save" onclick="commitNote('${key}')">✓ Save notes</button>
      </div>
    </div>

    <div class="sec">
      <div class="btn-row">
        <button class="btn-act btn-fav${fav ? " on" : ""}" id="fb" onclick="toggleFav()">
          ${fav ? "♥ Saved" : "♡ Save"}
        </button>
        <button class="btn-act btn-edit" onclick="openForm('${key}')">✎ Edit</button>
        ${isCust ? `<button class="btn-act btn-del" onclick="doDeleteSauce('${key}')">🗑</button>` : ""}
      </div>
    </div>

    <div style="height:40px"></div>`;

  document.getElementById("sauce-b").scrollTop = 0;
  if (push) showS("sauce", s.nm);
  else document.getElementById("hdr-t").textContent = s.nm;
  updFavIco();
}

// ── NOTES ─────────────────────────────────────────────────────────────
function toggleNoteEdit() {
  noteEditing = !noteEditing;
  const view = document.getElementById("notes-view");
  const ta = document.getElementById("nta");
  const btnE = document.getElementById("btn-note-edit");
  const btnS = document.getElementById("btn-note-save");
  if (noteEditing) {
    view.style.display = "none";
    ta.style.display = "block";
    ta.focus();
    btnE.textContent = "✕ Cancel";
    btnS.style.display = "flex";
  } else {
    view.style.display = "";
    ta.style.display = "none";
    btnE.textContent = "✎ Edit notes";
    btnS.style.display = "none";
  }
}

async function commitNote(key) {
  const val = document.getElementById("nta").value.trim();
  notes[key] = val;
  const view = document.getElementById("notes-view");
  view.textContent = val || "No notes yet. Tap Edit to add.";
  view.className = "notes-view" + (val ? "" : " empty");
  toggleNoteEdit();
  syncStatus("Saving…");
  await saveUserData();
  syncStatus("Notes saved ✓");
}

// ── FAVOURITES & FAV ICON ─────────────────────────────────────────────
function updFavIco() {
  const btn = document.getElementById("btn-fav-h");
  if (!btn || !cur) return;
  btn.textContent = favs.includes(cur) ? "♥" : "♡";
  btn.style.color = favs.includes(cur) ? "#E8A96A" : "";
}

async function toggleFav() {
  if (!cur) return;
  const i = favs.indexOf(cur);
  if (i === -1) favs.push(cur); else favs.splice(i, 1);
  updFavIco();
  const fb = document.getElementById("fb");
  if (fb) { const f = favs.includes(cur); fb.className = "btn-act btn-fav" + (f ? " on" : ""); fb.textContent = f ? "♥ Saved" : "♡ Save"; }
  syncStatus("Saving…");
  await saveUserData();
  syncStatus("Saved ✓");
}

// ── DELETE SAUCE ──────────────────────────────────────────────────────
async function doDeleteSauce(key) {
  if (!confirm("Delete this sauce from the catalog?")) return;
  syncStatus("Deleting…");
  try {
    await fbDeleteSauce(key);
    syncStatus("Deleted ✓");
    showToast("Sauce deleted");
    goBack();
  } catch(e) {
    syncStatus("Error deleting", true);
  }
}

// ── FORM ──────────────────────────────────────────────────────────────
function openForm(key) {
  editKey = key;
  const R = allR();
  const s = key ? R[key] : null;
  photoData = {};

  document.getElementById("form-b").innerHTML = `
    <div class="fs">
      <div class="fst">Photo</div>
      <div class="fpa" id="photo-area">
        ${s?.photo ? `<img class="fpp" id="photo-prev" src="${s.photo}" alt="">` : `<div class="fpai">📷</div><span class="fpas">Tap to upload photo</span>`}
        <input type="file" accept="image/*" onchange="handlePhoto(this)">
      </div>
    </div>

    <div class="fs">
      <div class="fst">Basic information</div>
      <div class="fr2"><label>Name (English) *</label><input id="f-nm" value="${esc(s?.nm || "")}" placeholder="e.g. Béarnaise Sauce"></div>
      <div class="fr2"><label>Name (French)</label><input id="f-fr" value="${esc(s?.fr || "")}" placeholder="e.g. Sauce Béarnaise"></div>
      <div class="fr2"><label>Mother sauce / Base</label><input id="f-mo" value="${esc(s?.mo || "")}" placeholder="e.g. Béarnaise, Hollandaise, —"></div>
      <div class="f2col">
        <div class="fr2"><label>Category *</label>
          <select id="f-cat">${CATS.map(c => `<option${s?.cat === c ? " selected" : ""}>${c}</option>`).join("")}</select>
        </div>
        <div class="fr2"><label>Cuisine</label><input id="f-cl" value="${esc(s?.cl || "French")}" placeholder="French"></div>
      </div>
    </div>

    <div class="fs">
      <div class="fst">Properties</div>
      <div class="f2col">
        <div class="fr2"><label>Type *</label>
          <select id="f-tp">${TYPES.map(t => `<option${s?.tp === t ? " selected" : ""}>${t}</option>`).join("")}</select>
        </div>
        <div class="fr2"><label>Temperature</label>
          <select id="f-tm">${TEMPS.map(t => `<option${s?.tm === t ? " selected" : ""}>${t}</option>`).join("")}</select>
        </div>
      </div>
      <div class="f2col">
        <div class="fr2"><label>Difficulty</label>
          <select id="f-df">${DIFFS.map(d => `<option${s?.df === d ? " selected" : ""}>${d}</option>`).join("")}</select>
        </div>
        <div class="fr2"><label>Time</label><input id="f-ti" value="${esc(s?.ti || "")}" placeholder="e.g. 30 min"></div>
      </div>
      <div class="fr2"><label>Base stock</label><input id="f-bs" value="${esc(s?.bs || "")}" placeholder="e.g. Butter/Egg, Fish stock, Milk"></div>
    </div>

    <div class="fs">
      <div class="fst">Ingredients</div>
      ${["base","aromatics","acid","finish"].map(grp => `
        <div class="fr2">
          <label style="text-transform:capitalize">${grp}</label>
          <div class="dl" id="ig-${grp}">
            ${(s?.ig?.[grp] || [""]).map((v, i) => dynRow(`ig-${grp}`, v, i)).join("")}
          </div>
          <button class="dra" onclick="addDynRow('ig-${grp}')">+ Add item</button>
        </div>`).join("")}
    </div>

    <div class="fs">
      <div class="fst">Technique steps</div>
      <div class="dl" id="f-st">
        ${(s?.st || [""]).map((v, i) => dynRow("f-st", v, i)).join("")}
      </div>
      <button class="dra" onclick="addDynRow('f-st')">+ Add step</button>
    </div>

    <div class="fs">
      <div class="fst">Full recipe</div>
      <div class="fr2"><textarea id="f-rc" rows="5" placeholder="Write the full recipe text…">${esc(s?.rc || "")}</textarea></div>
    </div>

    <div class="fs">
      <div class="fst">Relations</div>
      <div class="fr2"><label>Pairs with (comma-separated)</label>
        <input id="f-pr" value="${esc((s?.pr || []).join(", "))}" placeholder="steak, eggs, asparagus…">
      </div>
      <div class="fr2"><label>Derivative sauces (comma-separated)</label>
        <input id="f-dv" value="${esc((s?.dv || []).join(", "))}" placeholder="Choron, Foyot…">
      </div>
      <div class="fr2"><label>Similar sauces (comma-separated)</label>
        <input id="f-sm" value="${esc((s?.sm || []).join(", "))}" placeholder="Hollandaise, Foyot…">
      </div>
    </div>

    <div class="fa">
      <button class="bcn" onclick="goBack()">Cancel</button>
      <button class="bsv" onclick="saveSauce()">✓ ${key ? "Save changes" : "Add to catalog"}</button>
    </div>`;

  showS("form", key ? "Edit Sauce" : "Add New Sauce");
}

function dynRow(listId, val, idx) {
  return `<div class="dr" id="dr-${listId}-${idx}">
    <input value="${esc(val)}" placeholder="…">
    <button class="drd" onclick="delDynRow('${listId}',${idx})" title="Remove">✕</button>
  </div>`;
}
function addDynRow(listId) {
  const c = document.getElementById(listId);
  const idx = c.children.length;
  c.insertAdjacentHTML("beforeend", dynRow(listId, "", idx));
}
function delDynRow(listId, idx) {
  document.getElementById(`dr-${listId}-${idx}`)?.remove();
}
function getDynVals(listId) {
  const c = document.getElementById(listId); if (!c) return [];
  return Array.from(c.querySelectorAll("input")).map(i => i.value.trim()).filter(Boolean);
}

function handlePhoto(inp) {
  const file = inp.files[0]; if (!file) return;
  // Resize to max 800px and compress
  const img = new Image();
  img.onload = () => {
    const MAX = 800;
    let w = img.width, h = img.height;
    if (w > MAX || h > MAX) {
      if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
      else { w = Math.round(w * MAX / h); h = MAX; }
    }
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0, w, h);
    const data = canvas.toDataURL("image/jpeg", 0.75);
    photoData.data = data;
    const area = document.getElementById("photo-area");
    const prev = document.getElementById("photo-prev");
    if (!prev) {
      area.innerHTML = `<img class="fpp" id="photo-prev" src="${data}" alt=""><input type="file" accept="image/*" onchange="handlePhoto(this)">`;
    } else {
      prev.src = data;
    }
  };
  img.src = URL.createObjectURL(file);
}

async function saveSauce() {
  const nm = document.getElementById("f-nm").value.trim();
  if (!nm) { showToast("Name is required"); return; }

  const R = allR();
  const key = editKey || (nm.toLowerCase().replace(/[^a-z0-9]+/g, "_") + "_" + Date.now());
  const existing = editKey ? R[editKey] : null;

  const sauce = {
    nm,
    fr: document.getElementById("f-fr").value.trim() || nm,
    mo: document.getElementById("f-mo").value.trim() || "—",
    cat: document.getElementById("f-cat").value,
    cl: document.getElementById("f-cl").value.trim() || "French",
    tp: document.getElementById("f-tp").value,
    tm: document.getElementById("f-tm").value,
    df: document.getElementById("f-df").value,
    ti: document.getElementById("f-ti").value.trim(),
    bs: document.getElementById("f-bs").value.trim() || "—",
    ig: {
      base: getDynVals("ig-base"),
      aromatics: getDynVals("ig-aromatics"),
      acid: getDynVals("ig-acid"),
      finish: getDynVals("ig-finish")
    },
    st: getDynVals("f-st"),
    rc: document.getElementById("f-rc").value.trim(),
    pr: document.getElementById("f-pr").value.split(",").map(s => s.trim()).filter(Boolean),
    dv: document.getElementById("f-dv").value.split(",").map(s => s.trim()).filter(Boolean),
    sm: document.getElementById("f-sm").value.split(",").map(s => s.trim()).filter(Boolean),
    photo: photoData.data || existing?.photo || "",
  };

  syncStatus("Saving…");
  try {
    await fbSaveSauce(key, sauce);
    syncStatus("Saved ✓");
    showToast(editKey ? "Changes saved ✓" : "Sauce added ✓");
    cur = key;
    openSauce(key);
  } catch(e) {
    syncStatus("Error saving", true);
    showToast("Error: " + e.message);
  }
}

// ── HELPERS ───────────────────────────────────────────────────────────
function esc(s) {
  return String(s || "").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
