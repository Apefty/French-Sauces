// data/data.js
// Global metadata only — no sauce recipes here.
// Each sauce is loaded on demand from data/sauces/<slug>.js

window.SD = {
  cats: [
    {
      id: "w",
      nm: "White Sauces", fr: "Sauces Blanches",
      ic: '<span class="iconify" data-icon="fluent-emoji-high-contrast:white-circle"></span>',
      subs: [
        { nm: "Veal Velouté", mo: "Velouté (veal)",
          s: ["Allemande Grasse","Poulette","Villageoise","Tarragon Sauce","Villeroi"] },
        { nm: "Poultry Velouté", mo: "Velouté (poultry)",
          s: ["Supreme","Aurora","Albufera","Ivory","Royal"] },
        { nm: "Fish Velouté", mo: "Velouté (fish)",
          s: ["Bercy Fish","Normandy","Cardinal","Marinière","Saint-Malo","Veron","Genevoise","Oyster","Waterfish Hot","Breton"] },
        { nm: "Béchamel", mo: "Béchamel (milk)",
          s: ["Mornay","Soubise","Nantua"] },
        { nm: "Special White", mo: "Various",
          s: ["Bontemps","Hungarian","Indian","Chaud-Froid White"] }
      ]
    },
    {
      id: "b",
      nm: "Brown Sauces", fr: "Sauces Brunes",
      ic: '<span class="iconify" data-icon="openmoji:brown-circle"></span>',
      subs: [
        { nm: "Espagnole / Demi-glace", mo: "Espagnole",
          s: ["Bordelaise","Madeira","Porto","Chateaubriand","Perigueux","Robert","Piquante","Diable","Sainte-Menehould","Zingara","Financière","Hachée","Lyonnaise","Colbert","Solferino","Sarladaise","Moelle","Duxelles","Tortue","Godard"] },
        { nm: "Brown Poultry", mo: "Brown poultry stock",
          s: ["Chasseur","Bigarade","Rouennaise"] },
        { nm: "Game Stock", mo: "Brown game stock",
          s: ["Poivrade","Grand Veneur","Chevreuil"] },
        { nm: "Tomato", mo: "Tomat",
          s: ["Tomato","Bolognese","Tomato Purée","Tomato Coulis"] },
        { nm: "Wine-based", mo: "Red wine",
          s: ["Bourguignonne Meat","Bourguignonne Fish","Matelote","Mustard Grill"] }
      ]
    },
    {
      id: "he",
      nm: "Hot Emulsified", fr: "Émulsionnées Chaudes",
      ic: '<span class="iconify" data-icon="healthicons:hot-meal-24px"></span>',
      subs: [
        { nm: "Béarnaise Family", mo: "Béarnaise",
          s: ["Bearnaise","Choron","Foyot","Paloise"] },
        { nm: "Hollandaise Family", mo: "Hollandaise",
          s: ["Hollandaise","Mousseline","Maltese"] },
        { nm: "Butter Emulsions", mo: "Butter",
          s: ["Beurre Blanc","Beurre Nantais"] }
      ]
    },
    {
      id: "ce",
      nm: "Cold Emulsified", fr: "Émulsionnées Froides",
      ic: '<span class="iconify" data-icon="ep:cold-drink"></span>',
      subs: [
        { nm: "Mayonnaise Family", mo: "Mayonnaise",
          s: ["Mayonnaise","Remoulade","Tartar","Gribiche","Cold Andalusian","Aioli","Rouille","Dijonnaise","Cambridge","Waterfish Cold"] },
        { nm: "Vinaigrette Family", mo: "Vinaigrette",
          s: ["Vinaigrette","Ravigote","Lemonette"] }
      ]
    },
    {
      id: "cs",
      nm: "Cold Sauces", fr: "Sauces Froides",
      ic: '<span class="iconify" data-icon="ep:cold-drink"></span>',
      subs: [
        { nm: "Cold Misc", mo: "Various",
          s: ["Cumberland","Yorkshire","Cambridge","Cold Russian","Mint Sauce","Chaud-Froid White","Chaud-Froid Brown"] }
      ]
    },
    {
      id: "ds",
      nm: "Dessert Sauces", fr: "Sauces Dessert",
      ic: '<span class="iconify" data-icon="emojione-monotone:ice-cream"></span>',
      subs: [
        { nm: "Sweet Sauces", mo: "Dessert",
          s: ["Caramel","Blackcurrant","Chocolate","Cranberry","Apple Sauce"] }
      ]
    }
  ],

  usage: {
    "Fish / Seafood": ["Albufera","Cardinal","Hollandaise","Maltese","Marinière","Nantua","Normandy","Remoulade","Bercy Fish","Genevoise","Poulette","Oyster","Veron","Saint-Malo","Waterfish Hot","Waterfish Cold","Bourguignonne Fish","Matelote"],
    "Meat":           ["Bearnaise","Bordelaise","Bolognese","Chateaubriand","Choron","Cumberland","Diable","Foyot","Madeira","Mornay","Mousseline","Poivrade","Robert","Supreme","Tomato","Zingara","Porto","Hachée","Lyonnaise","Moelle","Piquante","Sainte-Menehould","Solferino","Colbert","Mustard Grill","Bourguignonne Meat"],
    "Poultry":        ["Albufera","Aurora","Chasseur","Financière","Poulette","Supreme","Villeroi","Royal","Bigarade","Rouennaise","Hungarian","Indian"],
    "Game":           ["Chevreuil","Cumberland","Grand Veneur","Poivrade","Rouennaise","Zingara","Yorkshire","Chevreuil","Tortue"],
    "Vegetables / Eggs": ["Bechamel","Gribiche","Hollandaise","Mornay","Soubise","Tartar","Breton","Hungarian"],
    "Dessert":        ["Caramel","Blackcurrant","Chocolate","Cranberry","Apple Sauce"],
    "Cold Sauces":    ["Cumberland","Gribiche","Mint Sauce","Ravigote","Remoulade","Cold Russian","Tartar","Yorkshire","Cambridge","Dijonnaise","Waterfish Cold"],
    "Hot Sauces":     ["Bearnaise","Bordelaise","Chasseur","Diable","Hollandaise","Madeira","Normandy","Supreme","Beurre Blanc","Paloise"]
  },

  cico: {
    "White Sauces":    '<span class="iconify" data-icon="fluent-emoji-high-contrast:white-circle"></span>',
    "Brown Sauces":    '<span class="iconify" data-icon="openmoji:brown-circle"></span>',
    "Hot Emulsified":  '<span class="iconify" data-icon="healthicons:hot-meal-24px"></span>',
    "Cold Emulsified": '<span class="iconify" data-icon="ep:cold-drink"></span>',
    "Cold Sauces":     '<span class="iconify" data-icon="ep:cold-drink"></span>',
    "Dessert Sauces":  '<span class="iconify" data-icon="emojione-monotone:ice-cream"></span>'
  },

  uico: {
    "Fish / Seafood":    '<span class="iconify" data-icon="famicons:fish-sharp"></span>',
    "Meat":              '<span class="iconify" data-icon="temaki:meat"></span>',
    "Poultry":           '<span class="iconify" data-icon="streamline:chicken-grilled-stream"></span>',
    "Game":              '<span class="iconify" data-icon="game-icons:deer"></span>',
    "Vegetables / Eggs": '<span class="iconify" data-icon="dashicons:carrot"></span>',
    "Dessert":           '<span class="iconify" data-icon="emojione-monotone:ice-cream"></span>',
    "Cold Sauces":       '<span class="iconify" data-icon="ep:cold-drink"></span>',
    "Hot Sauces":        '<span class="iconify" data-icon="healthicons:hot-meal-24px"></span>'
  },

  tico: {
    "Emulsified (Hot)":  '<span class="iconify" data-icon="healthicons:hot-meal-24px"></span>',
    "Emulsified (Cold)": '<span class="iconify" data-icon="ep:cold-drink"></span>',
    "Roux-based":        '<span class="iconify" data-icon="fluent-emoji-high-contrast:butter"></span>',
    "Reduction":         '<span class="iconify" data-icon="hugeicons:pan-03"></span>',
    "Tomato-based":      '<span class="iconify" data-icon="emojione-monotone:tomato"></span>',
    "Fruit-based":       '<span class="iconify" data-icon="game-icons:cherry"></span>',
    "Unstable Emulsion": '<span class="iconify" data-icon="streamline:pathfinder-divide"></span>',
    "Dessert":           '<span class="iconify" data-icon="emojione-monotone:ice-cream"></span>'
  },

  r: {}
};

// ── Lazy-load helpers ─────────────────────────────────────────────────
window.SD._saucesBasePath = (function () {
  if (typeof document !== 'undefined' && document.currentScript && document.currentScript.src) {
    return document.currentScript.src.replace(/[^/]*$/, '') + 'sauces/';
  }
  return './data/sauces/';
})();

function _slug(name) {
  return String(name).toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

window.SD.loadSauce = async function (name) {
  if (!name) throw new Error('sauce name required');
  if (window.SD.r[name]) return window.SD.r[name];
  const slug = _slug(name);
  const path = window.SD._saucesBasePath + slug + '.js';
  try {
    const mod = await import(path);
    const data = mod.default || mod;
    const key = Object.keys(data)[0];
    window.SD.r[key] = data[key];
    return window.SD.r[key];
  } catch (err) {
    console.error('Failed loading sauce:', name, path, err);
    throw err;
  }
};

window.SD.loadSauces = async function (list) {
  if (!Array.isArray(list)) return Promise.reject(new Error('provide array of sauce names'));
  return Promise.all(list.map(n => window.SD.loadSauce(n)));
};
