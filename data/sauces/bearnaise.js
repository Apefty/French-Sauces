// data/sauces/bearnaise.js
// One file per sauce. Contains ALL localization data for this sauce.
// Loaded dynamically via window.SD.loadSauce('Bearnaise') -> import()
// English fields: nm, pr, ig, st, rc
// Ukrainian fields: nm_uk, pr_uk, ig_uk, st_uk, rc_uk
// Non-translated (system) fields stay as-is: fr, cat, mo, tp, tm, bs, df, ti, dv, sm

export default {
  "Bearnaise": {
    // ── English ──────────────────────────────────────────────
    nm: "Bearnaise Sauce",
    pr: ["steak", "eggs", "asparagus", "veal", "fish"],
    ig: {
      base: ["egg yolks (5)", "clarified butter (250g)"],
      aromatics: ["shallots (50g)", "tarragon (3 tbsp)", "chervil (1 tbsp)"],
      acid: ["tarragon vinegar (10cl)", "dry white wine (5cl)"],
      finish: ["fresh tarragon", "chervil", "salt", "cracked pepper"]
    },
    st: [
      "Reduce vinegar, wine, shallots, tarragon, chervil, pepper by two-thirds. Cool.",
      "Add 5 egg yolks + cold water. Whisk over low heat 55°C.",
      "Remove from heat, gradually incorporate 250g warm clarified butter.",
      "Strain through chinois, finish with fresh tarragon and chervil."
    ],
    rc: "Reduce 10cl tarragon vinegar, 5cl dry white wine, 50g finely chopped shallots, 3 tbsp chopped tarragon, 1 tbsp chervil, 5g cracked pepper by two-thirds. Cool. Add 5 egg yolks and a little water; whisk vigorously over low heat (55°C). Remove from heat, gradually incorporate 250g warm clarified butter. Strain and finish with 1 tbsp each chopped tarragon and chervil.",

    // ── Ukrainian (UA) ───────────────────────────────────────
    nm_uk: "Соус Беарнез",
    pr_uk: ["стейк", "яйця", "спаржа", "телятина", "риба"],
    ig_uk: {
      base: ["яєчні жовтки (5)", "перетоплене масло (250г)"],
      aromatics: ["шалот (50г)", "тархун (3 ст.л.)", "кервель (1 ст.л.)"],
      acid: ["тархуновий оцет (10 мл)", "сухе біле вино (5 мл)"],
      finish: ["свіжий тархун", "кервель", "сіль", "крупно мелений перець"]
    },
    st_uk: [
      "Редукувати оцет, вино, шалот, тархун, кервель, перець на дві третини. Охолодити.",
      "Додати 5 жовтків і трохи холодної води. Збивати на слабкому вогні при 55°C.",
      "Зняти з вогню, поступово вводити 250г теплого перетопленого масла.",
      "Процідити через сито, додати свіжий тархун і кервель."
    ],
    rc_uk: "Редукувати на дві третини 10 мл тархунового оцту, 5 мл сухого білого вина, 50г дрібно нарізаного шалоту, 3 ст.л. нарізаного тархуну, 1 ст.л. кервелю, 5г крупно меленого перцю. Охолодити. Додати 5 яєчних жовтків і трохи води; енергійно збивати на слабкому вогні (55°C). Зняти з вогню, поступово ввести 250г теплого перетопленого масла. Процідити та додати по 1 ст.л. нарізаного тархуну і кервелю.",

    // ── System fields (not localized) ───────────────────────
    fr: "Sauce Bearnaise",
    cat: "Hot Emulsified",
    mo: "Bearnaise",
    tp: "Emulsified",
    tm: "Hot",
    bs: "Butter/Egg",
    df: "Medium",
    ti: "30 min",
    dv: ["Choron", "Foyot", "Paloise"],
    sm: ["Hollandaise", "Foyot", "Choron"],
    photo: "./image/bearnaise.jpg"
  }
};
