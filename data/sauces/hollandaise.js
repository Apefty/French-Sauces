// data/sauces/hollandaise.js
// One file per sauce. Contains ALL localization data for this sauce.
// Loaded dynamically via window.SD.loadSauce('Hollandaise') -> import()

export default {
  "Hollandaise": {
    // ── English ──────────────────────────────────────────────
    nm: "Hollandaise Sauce",
    pr: ["fish", "eggs", "asparagus", "vegetables", "poultry"],
    ig: {
      base: ["egg yolks (5)", "clarified butter (300g)"],
      acid: ["lemon juice (1/2, optional)"],
      finish: ["fine salt", "white pepper"]
    },
    st: [
      "Clarify butter, keep warm. Combine yolks with 3 tbsp cold water, season.",
      "Place in bain-marie, heat gradually, whisk vigorously until foamy.",
      "Remove, whisk to cool. Gradually incorporate warm clarified butter.",
      "Strain. Keep at max 55°C."
    ],
    rc: "Clarify 300g butter and keep warm. Combine 5 egg yolks with 3 tbsp cold water in a bain-marie. Heat gradually, whisking vigorously until the mixture foams and thickens to a cream. Remove, whisk to cool slightly. Gradually pour in warm clarified butter. Strain. Keep at max 55°C.",

    // ── Ukrainian (UA) ───────────────────────────────────────
    nm_uk: "Соус Голландез",
    pr_uk: ["риба", "яйця", "спаржа", "овочі", "птиця"],
    ig_uk: {
      base: ["яєчні жовтки (5)", "перетоплене масло (300г)"],
      acid: ["лимонний сік (1/2, за бажанням)"],
      finish: ["дрібна сіль", "білий перець"]
    },
    st_uk: [
      "Перетопити масло, тримати теплим. Змішати жовтки з 3 ст.л. холодної води, приправити.",
      "Поставити на водяну баню, поступово нагрівати, енергійно збивати до спінення.",
      "Зняти з вогню, збивати щоб трохи охолонуло. Поступово ввести тепле перетоплене масло.",
      "Процідити. Тримати при температурі не вище 55°C."
    ],
    rc_uk: "Перетопити 300г масла і тримати теплим. Змішати 5 яєчних жовтків з 3 ст.л. холодної води на водяній бані. Поступово нагрівати, енергійно збиваючи, доки суміш не спіниться і не загусне до кремової консистенції. Зняти з вогню, збивати щоб трохи охолонуло. Поступово влити тепле перетоплене масло. Процідити. Тримати при температурі не вище 55°C.",

    // ── System fields (not localized) ───────────────────────
    fr: "Sauce Hollandaise",
    cat: "Hot Emulsified",
    mo: "Hollandaise",
    tp: "Emulsified",
    tm: "Hot",
    bs: "Butter/Egg",
    df: "Medium",
    ti: "15 min",
    dv: ["Mousseline", "Maltese"],
    sm: ["Bearnaise", "Mousseline", "Maltese"],
    photo: "./image/hollandaise.jpg"
  }
};
