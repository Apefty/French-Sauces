// build 1.3.0 — 2026-07-19
// Glossary data — culinary terms and definitions (bilingual EN/UK, UK fields optional).
// Each entry: { term_en, term_uk, defs: [ { def_en, def_uk }, ... ] }
// tf()-style fallback: if term_uk / def_uk is missing, UI shows the _en value.

const GLOSSARY = [
  {
    term_en: "Anglaise",
    defs: [
      { def_en: "To cook à l'Anglaise means to cook plainly in water." },
      { def_en: "A preparation of beaten eggs, oil and seasoning." }
    ]
  },
  {
    term_en: "Baba-moulds",
    defs: [
      { def_en: "A kind of small deep cylindrical mould, slightly wider at the top than at the bottom." }
    ]
  },
  {
    term_en: "Bain-Marie",
    defs: [
      { def_en: "A hot-water bath in which utensils containing various culinary preparations are immersed to keep warm, or for the purpose of poaching or cooking." }
    ]
  },
  {
    term_en: "Cut, Brunoise-fashion",
    defs: [
      { def_en: "To cut a product into small dice." }
    ]
  },
  {
    term_en: "Cut, Julienne-fashion",
    defs: [
      { def_en: "To cut a product into match-shaped rods." }
    ]
  },
  {
    term_en: "Cut, Paysanne-fashion",
    defs: [
      { def_en: "To cut a product into triangles." }
    ]
  },
  {
    term_en: "Fondue",
    defs: [
      { def_en: "A cheese preparation." },
      { def_en: "A pulpy state to which such vegetables as tomatoes, sorrel, etc., are reduced by cooking." }
    ]
  },
  {
    term_en: "Fumet",
    defs: [
      { def_en: "A kind of essence extracted from fish, game, etc." }
    ]
  },
  {
    term_en: "Mirepoix",
    defs: [
      { def_en: "[TODO: add definition — source only referenced \"see No. 228\"]" }
    ]
  },
  {
    term_en: "Mise-en-place",
    defs: [
      { def_en: "A general name given to those elementary preparations which are constantly resorted to during the various stages of most culinary operations." }
    ]
  }
];

// Sort alphabetically by English term (same convention as ALL_SAUCE_KEYS in app.js)
GLOSSARY.sort((a, b) => a.term_en.localeCompare(b.term_en, ['uk', 'en'], { sensitivity: 'base' }));
