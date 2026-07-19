/* <!-- ANDROID VERSION! --> */
/* build 1.2.5 — 2026-07-19 */

// data/data.js
// Global metadata only — no sauce recipes here.
// Each sauce is loaded on demand from data/sauces/<slug>.js

window.SD = {
cats: [
// ROUX   
    {
  id: "ru",
  nm: "Roux", nm_uk: "Ру", fr: "Roux",
  ic: '<span class="iconify data-ico" data-icon="fluent-emoji-high-contrast:butter"></span>',
  subs: [
// Basic Roux  
    { nm: "Basic Roux", nm_uk: "Базові ру", mo: "Roux",
      s: ["Roux White","Roux Pale","Roux Brown"],
      s_uk: ["Білий ру","Золотистий ру","Коричневий ру"] },
// Butters
    { nm: "Butters", nm_uk: "Масла", mo: "Butters",
      s: ["Bercy Butter (Es)", "Chivry Butter (Es)", "Chateaubriand Butter (Es)", "Colbert Butter (Es)", "Red Colouring Butter (Es)", "Green Colouring Butter (Es)", "Various Cullises (Es)", "Shrimp Butter (Es)", "Shallot Butter (Es)", "Crayfish Butter (Es)", "Tarragon Butter (Es)", "Lobster Butter (Es)", "Maître d'Hôtel Butter (Es)", "Manied Butter (Es)", "Melted Butter (Es)", "Meunière Butter (Es)", "Montpellier Butter (Es)", "Black Butter (Es)", "Hazel-Nut Butter (Es)", "Pistachio Butter (Es)", "Printanier Butter (Es)"],
      s_uk: ["Масло Берсі (Еск)", "Масло Шіврі (Еск)", "Масло Шатобріан (Еск)", "Масло Кольбер (Еск)", "Червоне забарвлювальне масло (Еск)", "Зелене забарвлювальне масло (Еск)", "Кулі різні (Еск)", "Креветкове масло (Еск)", "Масло з шалотом (Еск)", "Ракове масло (Еск)", "Тархунове масло (Еск)", "Масло з омара (Еск)", "Масло Метрдотель (Еск)", "Масло 'маньє' (Еск)", "Розтоплене масло (Еск)", "Масло 'меньєр' (Еск)", "Масло Монпельє (Еск)", "Чорне масло (Еск)", "Масло з ліщинового горіха (Еск)", "Фісташкове масло (Еск)", "Весняне масло (Еск)"] }
  ]
},
    {      id: "w",
      nm: "White Sauces", nm_uk: "Білі соуси", fr: "Sauces Blanches",
      ic: '<span class="iconify data-ico" data-icon="fluent-emoji-high-contrast:white-circle"></span>',
      subs: [
// Veal Velouté     
        { nm: "Veal Velouté", nm_uk: "Теляче Велюте", mo: "Velouté (veal)",
          s: ["Veal Veloute","Allemande Grasse (Ro)","Poulette (Ro)","Villageoise","Tarragon Sauce (Ro)","Villeroi (Ro)","Poulette Sauce (Es)", "Ravigotte Sauce (Es)", "Regency Sauce (Es)", "Villeroy Sauce (Es)", "Villeroy Soubisee Sauce (Es)", "Villeroy Tomatee Sauce (Es)"],
          s_uk: ["Теляче велюте (Роб)","Алеманд Грас (Роб)","Пулет (Роб)","Віллажуаз (Роб)","Тархуновий (Роб)","Вілеруа (Роб)","Соус Пулет (Еск)", "Соус Равігот гарячий (Еск)", "Соус Режанс (Еск)", "Соус Вілеруа (Еск)", "Соус Вілеруа Субізе (Еск)", "Соус Вілеруа томатний (Еск)"] },
//Poultry Velouté       
        { nm: "Poultry Velouté", nm_uk: "Велюте з птиці", mo: "Velouté (poultry)",
          s: ["Poultry Velouté (Ro)","Supreme (Ro)","Aurora (Ro)","Albufera (Ro)","Ivory","Royal (Ro)","Chaud-Froid Poultry","Chaud-Froid Duck (Es)","Aurore Sauce (Es)","Supreme Sauce (Es)"],
          s_uk: ["Велюте з птиці (Роб)","Сюпрем (Роб)","Аврора (Роб)","Альбуфера (Роб)","Айворі","Рояль (Роб)","Шо-фруа з птиці","Шо-фруа з качки (Еск)","Соус Аврора (Еск)","Соус Сюпрем (Еск)"] },
//Fish Velouté          
        { nm: "Fish Velouté", nm_uk: "Рибне Велюте", mo: "Velouté (fish)",
          s: ["Fish Velouté (Es)","Allemande Maigre (Ro)","Bercy Fish (Ro)","Normandy (Ro)","Cardinal (Ro)","Marinière (Ro)","Saint-Malo (Ro)","Veron (Ro)","Genevoise (Ro)","Oyster (Ro)","Breton (Ro)","White Wine Sauce","Chaud-Froid Fish (Es)","Genevoise Sauce (Es)","Lenten Italian Sauce (Es)","Anchovy Sauce (Es)","Lenten Aurore Sauce (Es)","Bercy Sauce (Es)","Bonnefoy Sauce (Es)","Cardinal Sauce (Es)","Joinville Sauce (Es)", "Marinière Sauce (Es)", "Normande Sauce (Es)", "Venetian Sauce (Es)", "White Wine Sauce (Es)"],
          s_uk: ["Рибне Велюте (Роб)","Алеманд Мегр (Роб)","Берсі (рибний) (Роб)","Нормандський (Роб)","Кардинал (Роб)","Мариньєр (Роб)","Сен-Мало (Роб)","Верон (Роб)","Женевуаз (Роб)","Устричний (Роб)","Бретонський (Роб)","Соус з білого вина)","Шо-фруа з риби (Еск)","Соус Женевуаз (Еск)","Пісний італійський соус (Еск)","Анчоусний соус (Еск)","Пісний соус Аврора (Еск)","Соус Берсі (Еск)","Соус Боннфуа (Еск)","Соус Кардинал (Еск)","Соус Жуанвіль (Еск)", "Соус Мариньєр (Еск)", "Соус Нормандський (Еск)", "Соус Венеціанський (Еск)", "Соус з білого вина (Еск)"] },
//Béchamel          
        { nm: "Béchamel", nm_uk: "Бешамель", mo: "Béchamel (milk)",
          s: ["Bechamel (Ro)","Bechamel (Es)","Mornay (Ro)","Soubise (Ro)","Nantua (Ro)","Mustard Sauce (Ro)","Mornay Sauce (Es)", "Nantua Sauce (Es)", "Soubise Sauce (Es)", "Soubise Rice Sauce (Es)", "Soubise Tomatee Sauce (Es)"],
          s_uk: ["Бешамель (Роб)","Бешамель (Еск)","Морне (Роб)","Субіз (Роб)","Нантюа (Роб)","Гірчичний (Роб)","Соус Морне (Еск)", "Соус Нантюа (Еск)", "Соус Субіз (Еск)", "Соус Субіз з рисом (Еск)", "Соус Субіз томатний (Еск)"] },
//Special White          
        { nm: "Special White", nm_uk: "Спеціальні білі", mo: "Various",
          s: ["Bontemps (Ro)","Hungarian (Ro)","Indian (Ro)","Sorrel Sauce (Ro)","Waterfish Hot (Ro)","Allemande Sauce (Es)","Butter Sauce (Es)","Caper Sauce (Es)","Mushroom Sauce (Es)","Mustard Sauce (Es)", "Apple Sauce (Es)", "Bread Sauce (Es)", "Celery Sauce (Es)", "Fennel Sauce (Es)", "Egg Sauce (Es)", "Scotch Egg Sauce (Es)", "Albert Sauce (Es)", "Parsley Sauce (Es)"],
          s_uk: ["Бонтан (Роб)","Угорський (Роб)","Індійський (Роб)","Щавлевий (Роб)","Ватерфіш гарячий (Роб)","Соус Алеманд (Еск)","Масляний соус (Еск)","Каперсовий соус (Еск)","Грибний соус (Еск)","Гірчичний соус (Еск)", "Яблучний соус (Еск)", "Соус з білого хліба (Еск)", "Селеровий соус (Еск)", "Фенхелевий соус (Еск)", "Яєчний соус (Еск)", "Соус з яйцями по-шотландськи (Еск)", "Соус Альберт (Еск)", "Петрушковий соус (Еск)"] }
      ]
    },
//Brown Sauces    
    {
      id: "b",
      nm: "Brown Sauces", nm_uk: "Коричневі соуси", fr: "Sauces Brunes",
      ic: '<span class="iconify data-ico" data-icon="openmoji:brown-circle"></span>',
      subs: [
//Espagnole / Demi-glace        
        { nm: "Espagnole / Demi-glace", nm_uk: "Еспаньол / Демі-гляс", mo: "Espagnole",
          s: ["Espagnole (Es)","Bordelaise (Ro)","Madeira (Ro)","Porto","Chateaubriand (Ro)","Perigueux (Ro)","Robert (Ro)","Piquante (Ro)","Diable (Ro)","Sainte-Menehould (Ro)","Zingara (Ro)","Financière","Hachée (Ro)","Lyonnaise (Ro)","Colbert (Ro)","Solferino (Ro)","Moelle (Ro)","Duxelles (Ro)","Tortue (Ro)","Godard (Ro)","Lenten Espagnole (Es)","Bordelaise Sauce (Es)","Chaud-Froid Game (Es)","Devilled Sauce (Es)","Lyonnaise Sauce (Es)","Madeira Sauce (Es)","Marrow Sauce (Es)","Perigueux Sauce (Es)","Piquante Sauce (Es)","Robert Sauce (Es)","Tortue Sauce (Es)","Chateaubriand Sauce (Es)"],
          s_uk: ["Еспаньйол (Роб)","Бордолез (Роб)","Мадера (Роб)","Порто","Шатобріан (Роб)","Періге (Роб)","Робер (Роб)","Піканте (Роб)","Дьябло (Роб)","Сент-Менегольд (Роб)","Дзінгара (Роб)","Фінансьєр","Аше (Роб)","Ліонський (Роб)","Кольбер (Роб)","Сольферіно (Роб)","Мозковий (Роб)","Дюксель (Роб)","Тортю (Роб)","Годар (Роб)","Пісний Еспаньйол (Еск)","Соус Бордолез (Еск)","Шо-фруа з дичини (Еск)","Соус Дьябло (Еск)","Соус Ліонський (Еск)","Соус Мадера (Еск)","Мозковий соус (Еск)","Соус Періге (Еск)","Соус Піканте (Еск)","Соус Робер (Еск)","Соус Тортю (Еск)","Соус Шатобріан (Еск)"] },
//Brown Poultry          
        { nm: "Brown Poultry", nm_uk: "Коричнева птиця", mo: "Brown poultry stock",
          s: ["Chasseur (Ro)","Bigarade (Ro)","Rouennaise (Ro)","Bigarade Sauce (Es)","Chasseur Sauce (Es)","Rouennaise Sauce (Es)"],
          s_uk: ["Шассер (Роб)","Бігарад (Роб)","Руанез (Роб)","Соус Бігарад (Еск)","Соус Шассер (Еск)","Соус Руанез (Еск)"] },
//Game Stock          
        { nm: "Game Stock", nm_uk: "Бульйон з дичини", mo: "Brown game stock",
          s: ["Poivrade (Ro)","Grand Veneur (Ro)","Chevreuil (Ro)","Grand Veneur Sauce (Es)","Pignons Sauce (Es)","Ordinary Poivrade Sauce (Es)","Poivrade Sauce for Venison (Es)","Salmis Sauce (Es)","Venison Sauce (Es)"],
          s_uk: ["Пуврад (Роб)","Гран-Венер (Роб)","Шеврьой","Соус Гран-Венер (Еск)","Соус Піньйон (Еск)","Звичайний соус Пуврад (Еск)","Соус Пуврад для оленини (Еск)","Соус Сальмі (Еск)","Соус для оленини (Еск)"] },
//Tomato          
        { nm: "Tomato", nm_uk: "Томатні", mo: "Tomat",
          s: ["Tomato","Bolognese (Ro)","Tomato Purée","Tomato Coulis","Hot Andalusian (Ro)","Tomato Sauce (Es)","Italian Sauce (Es)","Thickened Gravy (Es)","Veal Gravy Tomate (Es)","Provençale Sauce (Es)","Newburg Sauce (Es)", "Oriental Sauce (Es)"],
          s_uk: ["Томатний","Болоньєзе (Роб)","Томатне пюре","Томатний кулі","Андалузький гарячий (Роб)","Томатний соус (Еск)","Італійський соус (Еск)","Загущена підлива (Еск)","Телячий соус з томатом (Еск)","Провансальський соус (Еск)","Соус Ньюбург (Еск)", "Східний соус (Еск)"] },
//Wine-based          
        { nm: "Wine-based", nm_uk: "На основі вина", mo: "Red wine",
          s: ["Bourguignonne Meat (Ro)","Bourguignonne Fish (Ro)","Matelote (Ro)","Mustard Grill (Ro)","Bercy Meat (Ro)","Wine Mustard","Bourguignonne Sauce (Es)","Matelote Sauce (Es)","Red Wine Sauce (Es)"],
          s_uk: ["Бургундський м'ясний (Роб)","Бургундський рибний (Роб)","Мателот (Роб)","Гірчичний гриль (Роб)","Берсі м'ясний (Роб)", "Винний з гірчицєю","Соус Бургундський (Еск)","Соус Мателот (Еск)","Винний соус (Еск)"] }
      ]
    },
//Hot Emulsified    
    {
      id: "he",
      nm: "Hot Emulsified", nm_uk: "Гарячі емульсійні", fr: "Émulsionnées Chaudes",
      ic: '<span class="iconify data-ico" data-icon="healthicons:hot-meal-24px"></span>',
      subs: [
//Béarnaise Family        
        { nm: "Béarnaise Family", nm_uk: "Сім'я Беарнез", mo: "Béarnaise",
          s: ["Bearnaise (Ro)","Choron (Ro)","Foyot (Ro)","Paloise","Bearnaise Sauce (Es)","Foyot Sauce (Es)","Choron Sauce (Es)"],
          s_uk: ["Беарнез (Роб)","Шорон (Роб)","Фойо (Роб)","Палуаз (Роб)","Соус Беарнез (Еск)","Соус Фойо (Еск)","Соус Шорон (Еск)"] },
//Hollandaise Family          
        { nm: "Hollandaise Family", nm_uk: "Сім'я Голландез", mo: "Hollandaise",
          s: ["Hollandaise (Ro)","Mousseline (Ro)","Maltese (Ro)","Hollandaise Sauce (Es)","Maltese Sauce (Es)", "Mousseline Sauce (Es)", "Noisette Sauce (Es)"],
          s_uk: ["Голландез (Роб)","Мусселін (Роб)","Мальтійський","Соус Голландез (Еск)","Соус Мальтійський (Еск)", "Соус Мусселін (Еск)", "Соус Нуазет (Еск)"] },
//Butter Emulsions          
        { nm: "Butter Emulsions", nm_uk: "Масляні емульсії", mo: "Butter",
          s: ["Beurre Blanc (Ro)","Beurre Nantais (Bo)","Mousseuse Sauce (Es)"],
          s_uk: ["Бер-блан (Роб)","Бер-нантез (Бок)","Соус Мусеу (Еск)"] }
      ]
    },
//Cold Emulsified    
    {
      id: "ce",
      nm: "Cold Emulsified", nm_uk: "Холодні емульсійні", fr: "Émulsionnées Froides",
      ic: '<span class="iconify data-ico" data-icon="ep:cold-drink"></span>',
      subs: [
//Mayonnaise Family        
        { nm: "Mayonnaise Family", nm_uk: "Сім'я Майонез", mo: "Mayonnaise",
          s: ["Mayonnaise (Ro)","Remoulade (Ro)","Tartar (Ro)","Gribiche (Ro)","Cold Andalusian (Ro)","Aioli (Ro)","Rouille","Waterfish Cold (Ro)","La Varenne (Ro)","Vincent Sauce","Aioli Sauce (Es)", "Andalouse Sauce (Es)", "Gribiche Sauce (Es)", "Mayonnaise Sauce (Es)", "Whisked Mayonnaise (Es)", "Remoulade Sauce (Es)", "Green Sauce (Es)", "Vincent Sauce (Es)"],
          s_uk: ["Майонез (Роб)","Ремулад (Роб)","Тартар (Роб)","Грибіш (Роб)","Андалузький (холодний)","Айолі (Роб)","Руй","Ватерфіш холодний (Роб)","Ля Варенн (Роб)","Вінсент)","Соус Айолі (Еск)", "Соус Андалузький (Еск)", "Соус Грибіш (Еск)", "Соус Майонез (Еск)", "Збитий майонез (Еск)", "Соус Ремулад (Еск)", "Зелений соус (Еск)", "Соус Вінсент (Еск)"] },
//Vinaigrette Family          
        { nm: "Vinaigrette Family", nm_uk: "Сім'я Вінегрет", mo: "Vinaigrette",
          s: ["Vinaigrette (Ro)","Ravigote (Ro)","Lemonette","Vinaigrette Sauce (Es)"],
          s_uk: ["Вінегрет (Роб)","Равігот (Роб)","Лимонет (Роб)","Соус Вінегрет (Еск)"] },
//Special Cold          
        { nm: "Special Cold", nm_uk: "Спеціальні холодні", mo: "Various",
          s: ["Sarladaise (Ro)","Cambridge (Ro)","Bohemian Sauce","Dijonnaise (Ro)","Bohemian Sauce (Es)", "Genoa Sauce (Es)", "Cambridge Sauce (Es)", "Gloucester Sauce (Es)"],
          s_uk: ["Сарладез (Роб)","Кембридж (Роб)","Богемський","Діжонез (Роб)","Богемський соус (Еск)", "Генуезький соус (Еск)", "Кембриджський соус (Еск)", "Глостерський соус (Еск)"] }
      ]
    },
//Cold Sauces    
    {
      id: "cs",
      nm: "Cold Sauces", nm_uk: "Холодні соуси", fr: "Sauces Froides",
      ic: '<span class="iconify data-ico" data-icon="ep:cold-drink"></span>',
      subs: [
//Cold Misc        
        { nm: "Cold Misc", nm_uk: "Холодні різні", mo: "Various",
          s: ["Cumberland (Ro)","Yorkshire (Ro)","Cold Russian (Ro)","Mint Sauce","Chaud-Froid White (Ro)","Chaud-Froid Brown (Ro)","Mustard Sauce Cold (Ro)","Oxford Sauce","Brown Chaud-Froid Sauce (Es)","White Chaud-Froid Sauce (Es)","Ordinary Chaud-Froid Sauce (Es)","Chaud-Froid Sauce à l'Aurore (Es)","Chaud-Froid Sauce au Vert-Pré (Es)","Cumberland Sauce (Es)", "Mint Sauce (Es)", "Oxford Sauce (Es)", "Horse-Radish Sauce (Es)"],
          s_uk: ["Камберленд (Роб)","Йоркширський (Роб)","Холодний руський (Роб)","М'ятний)","Шо-фруа білий (Роб)","Шо-фруа коричневий (Роб)","Гірчичний холодний (Роб)","Оксфорд","Коричневий соус Шо-фруа (Еск)","Білий соус Шо-фруа (Еск)","Звичайний соус Шо-фруа (Еск)","Соус Шо-фруа à l'Aurore (Еск)","Соус Шо-фруа Вер-Пре (Еск)","Соус Камберленд (Еск)", "М'ятний соус (Еск)", "Оксфордський соус (Еск)", "Хроновий соус (Еск)"] }
      ]
    },
//Dessert Sauces    
    {
      id: "ds",
      nm: "Dessert Sauces", nm_uk: "Десертні соуси", fr: "Sauces Dessert",
      ic: '<span class="iconify data-ico" data-icon="emojione-monotone:ice-cream"></span>',
      subs: [
        { nm: "Sweet Sauces", nm_uk: "Солодкі соуси", mo: "Dessert",
          s: ["Caramel (Ro)","Blackcurrant (Ro)","Chocolate (Ro)","Cranberry (Ro)","Apple Sauce (Es)","Apple Sauce (Ro)","Peach Sauce (Ro)","Cranberry Sauce (Es)"],
          s_uk: ["Карамельний (Роб)","Смородиновий (Роб)","Шоколадний (Роб)","Журавлинний (Роб)","Яблучний (Еск)","Яблучний (Ро)","Персиковий","Журавлинний соус (Еск)"] }
      ]
    }
  ],

  usage: {
//Fish / Seafood"    
    "Fish / Seafood":   ["Albufera (Ro)","Cardinal (Ro)","Hollandaise (Ro)","Maltese (Ro)","Marinière (Ro)","Nantua (Ro)","Normandy (Ro)","Remoulade (Ro)","Bercy Fish (Ro)","Genevoise (Ro)","Poulette (Ro)","Oyster (Ro)","Veron (Ro)","Saint-Malo (Ro)","Waterfish Hot (Ro)","Waterfish Cold (Ro)","Bourguignonne Fish (Ro)","Matelote (Ro)","Mustard Sauce Cold (Ro)","Sorrel Sauce (Ro)","White Wine Sauce","Cold Russian (Ro)","Vincent Sauce","Lenten Espagnole (Es)","Hollandaise Sauce (Es)","Chaud-Froid Fish (Es)","Genevoise Sauce (Es)","Matelote Sauce (Es)","Red Wine Sauce (Es)","Lenten Italian Sauce (Es)","Anchovy Sauce (Es)","Lenten Aurore Sauce (Es)","Bercy Sauce (Es)","Butter Sauce (Es)","Bonnefoy Sauce (Es)","Caper Sauce (Es)","Cardinal Sauce (Es)","Mushroom Sauce (Es)","Joinville Sauce (Es)", "Marinière Sauce (Es)", "Mornay Sauce (Es)", "Nantua Sauce (Es)", "Normande Sauce (Es)", "Venetian Sauce (Es)", "White Wine Sauce (Es)", "Newburg Sauce (Es)", "Oriental Sauce (Es)", "Noisette Sauce (Es)", "Mousseline Sauce (Es)", "Mousseuse Sauce (Es)", "Mustard Sauce (Es)", "Fennel Sauce (Es)", "Egg Sauce (Es)", "Scotch Egg Sauce (Es)", "Parsley Sauce (Es)", "Genoa Sauce (Es)", "Gribiche Sauce (Es)", "Vincent Sauce (Es)", "Green Sauce (Es)", "Aioli Sauce (Es)"],
  //Meat
    "Meat":           ["Bearnaise (Ro)","Bordelaise (Ro)","Bolognese (Ro)","Chateaubriand (Ro)","Choron (Ro)","Cumberland (Ro)","Diable (Ro)","Foyot (Ro)","Madeira (Ro)","Mornay (Ro)","Mousseline (Ro)","Poivrade (Ro)","Robert (Ro)","Supreme (Ro)","Tomato","Zingara (Ro)","Porto","Hachée (Ro)","Lyonnaise (Ro)","Moelle (Ro)","Piquante (Ro)","Sainte-Menehould (Ro)","Solferino (Ro)","Colbert (Ro)","Mustard Grill (Ro)","Bourguignonne Meat (Ro)","Veloute (veal)","Hot Andalusian (Ro)","Bercy Meat (Ro)","Mustard Sauce (Ro)","Paloise","Oxford Sauce","Tomato Sauce (Es)","Bordelaise Sauce (Es)","Italian Sauce (Es)","Thickened Gravy (Es)","Veal Gravy Tomate (Es)","Lyonnaise Sauce (Es)","Madeira Sauce (Es)","Marrow Sauce (Es)","Perigueux Sauce (Es)","Piquante Sauce (Es)","Ordinary Poivrade Sauce (Es)","Robert Sauce (Es)","Tortue Sauce (Es)","Bearnaise Sauce (Es)","Foyot Sauce (Es)","Choron Sauce (Es)","Chateaubriand Sauce (Es)","Albert Sauce (Es)", "Villeroy Sauce (Es)", "Villeroy Soubisee Sauce (Es)", "Villeroy Tomatee Sauce (Es)", "Poulette Sauce (Es)", "Soubise Sauce (Es)", "Soubise Rice Sauce (Es)", "Soubise Tomatee Sauce (Es)", "Remoulade Sauce (Es)", "Cambridge Sauce (Es)", "Gloucester Sauce (Es)", "Horse-Radish Sauce (Es)", "Mint Sauce (Es)"],
//Poultry    
    "Poultry":        ["Albufera (Ro)","Aurora (Ro)","Chasseur (Ro)","Financière","Poulette (Ro)","Supreme (Ro)","Villeroi (Ro)","Royal (Ro)","Bigarade (Ro)","Rouennaise (Ro)","Hungarian (Ro)","Indian (Ro)","Veloute (veal)","Chaud-Froid Poultry","La Varenne (Ro)","Bigarade Sauce (Es)","Chasseur Sauce (Es)","Chaud-Froid Duck (Es)","Devilled Sauce (Es)","Thickened Gravy (Es)","Rouennaise Sauce (Es)","Aurore Sauce (Es)","Choron Sauce (Es)","Mushroom Sauce (Es)","White Chaud-Froid Sauce (Es)","Ordinary Chaud-Froid Sauce (Es)","Chaud-Froid Sauce à l'Aurore (Es)","Chaud-Froid Sauce au Vert-Pré (Es)","Supreme Sauce (Es)", "Regency Sauce (Es)", "Ravigotte Sauce (Es)", "Bread Sauce (Es)", "Celery Sauce (Es)", "Apple Sauce (Es)","Apple Sauce (Ro)"],
//Game    
    "Game":           ["Chevreuil (Ro)","Cumberland (Ro)","Grand Veneur (Ro)","Poivrade (Ro)","Rouennaise (Ro)","Zingara (Ro)","Yorkshire (Ro)","Chevreuil (Ro)","Tortue (Ro)","Oxford Sauce","Chaud-Froid Game (Es)","Grand Veneur Sauce (Es)","Pignons Sauce (Es)","Ordinary Poivrade Sauce (Es)","Poivrade Sauce for Venison (Es)","Salmis Sauce (Es)","Venison Sauce (Es)","Apple Sauce (Es)", "Apple Sauce (Ro)","Cumberland Sauce (Es)", "Oxford Sauce (Es)"],
//Vegetables / Eggs    
    "Vegetables / Eggs": ["Bechamel (Ro)","Gribiche (Ro)","Hollandaise (Ro)","Mornay (Ro)","Soubise (Ro)","Tartar (Ro)","Breton (Ro)","Hungarian (Ro)","Cold Andalusian (Ro)","Aioli Sauce (Es)","Aioli (Ro)","Allemande Sauce (Es)","Bourguignonne Sauce (Es)","Red Wine Sauce (Es)","Aurore Sauce (Es)","Butter Sauce (Es)","Maltese Sauce (Es)", "Egg Sauce (Es)", "Scotch Egg Sauce (Es)", "Soubise Sauce (Es)", "Poulette Sauce (Es)"],
//Dessert    
    "Dessert":        ["Caramel (Ro)","Blackcurrant (Ro)","Chocolate (Ro)","Cranberry (Ro)","Apple Sauce (Ro)","Peach Sauce (Ro)","Cranberry Sauce (Es)", "Apple Sauce (Es)"],
//Cold Sauces    
    "Cold Sauces":    ["Cumberland (Ro)","Gribiche (Ro)","Mint Sauce","Ravigote (Ro)","Remoulade (Ro)","Cold Russian (Ro)","Tartar (Ro)","Yorkshire (Ro)","Cambridge (Ro)","Dijonnaise (Ro)","Waterfish Cold (Ro)","Cold Andalusian (Ro)","Mustard Sauce Cold (Ro)","Chaud-Froid White (Ro)","Chaud-Froid Brown (Ro)","Chaud-Froid Poultry","Oxford Sauce","Sarladaise (Ro)","Bohemian Sauce","Brown Chaud-Froid Sauce (Es)","White Chaud-Froid Sauce (Es)","Ordinary Chaud-Froid Sauce (Es)","Chaud-Froid Sauce à l'Aurore (Es)","Chaud-Froid Sauce au Vert-Pré (Es)","Aioli Sauce (Es)", "Andalouse Sauce (Es)", "Bohemian Sauce (Es)", "Genoa Sauce (Es)", "Gribiche Sauce (Es)", "Mayonnaise Sauce (Es)", "Whisked Mayonnaise (Es)", "Vinaigrette Sauce (Es)", "Remoulade Sauce (Es)", "Green Sauce (Es)", "Vincent Sauce (Es)", "Cambridge Sauce (Es)", "Cumberland Sauce (Es)", "Gloucester Sauce (Es)", "Mint Sauce (Es)", "Oxford Sauce (Es)", "Horse-Radish Sauce (Es)"],
//Hot Sauces    
    "Hot Sauces":     ["Bearnaise (Ro)","Bordelaise (Ro)","Chasseur (Ro)","Diable (Ro)","Hollandaise (Ro)","Madeira (Ro)","Normandy (Ro)","Supreme (Ro)","Beurre Blanc (Ro)","Paloise","Hot Andalusian (Ro)","White Wine Sauce","Hollandaise Sauce (Es)","Chasseur Sauce (Es)","Devilled Sauce (Es)","Bearnaise Sauce (Es)","Maltese Sauce (Es)", "Mousseline Sauce (Es)", "Noisette Sauce (Es)", "Newburg Sauce (Es)", "Oriental Sauce (Es)", "Supreme Sauce (Es)", "White Wine Sauce (Es)", "Mustard Sauce (Es)"]
  },

 cico: {
    "Roux": '<span class="iconify data-ico" data-icon="fluent-emoji-high-contrast:butter"></span>',
    "White Sauces":    '<span class="iconify data-ico" data-icon="fluent-emoji-high-contrast:white-circle"></span>',
    "Brown Sauces":    '<span class="iconify data-ico" data-icon="openmoji:brown-circle"></span>',
    "Hot Emulsified":  '<span class="iconify data-ico" data-icon="healthicons:hot-meal-24px"></span>',
    "Cold Emulsified": '<span class="iconify data-ico" data-icon="ep:cold-drink"></span>',
    "Cold Sauces":     '<span class="iconify data-ico" data-icon="ep:cold-drink"></span>',
    "Dessert Sauces":  '<span class="iconify data-ico" data-icon="emojione-monotone:ice-cream"></span>'
  },

  uico: {
    "Fish / Seafood":    '<span class="iconify data-ico" data-icon="famicons:fish-sharp"></span>',
    "Meat":              '<span class="iconify data-ico" data-icon="temaki:meat"></span>',
    "Poultry":           '<span class="iconify data-ico" data-icon="streamline:chicken-grilled-stream"></span>',
    "Game":              '<span class="iconify data-ico" data-icon="game-icons:deer"></span>',
    "Vegetables / Eggs": '<span class="iconify data-ico" data-icon="dashicons:carrot"></span>',
    "Dessert":           '<span class="iconify data-ico" data-icon="emojione-monotone:ice-cream"></span>',
    "Cold Sauces":       '<span class="iconify data-ico" data-icon="ep:cold-drink"></span>',
    "Hot Sauces":        '<span class="iconify data-ico" data-icon="healthicons:hot-meal-24px"></span>'
  },

  tico: {
    "Emulsified (Hot)":  '<span class="iconify data-ico" data-icon="healthicons:hot-meal-24px"></span>',
    "Emulsified (Cold)": '<span class="iconify data-ico" data-icon="ep:cold-drink"></span>',
    "Roux-based":        '<span class="iconify data-ico" data-icon="fluent-emoji-high-contrast:butter"></span>',
    "Reduction":         '<span class="iconify data-ico" data-icon="hugeicons:pan-03"></span>',
    "Tomato-based":      '<span class="iconify data-ico" data-icon="emojione-monotone:tomato"></span>',
    "Fruit-based":       '<span class="iconify data-ico" data-icon="game-icons:cherry"></span>',
    "Unstable Emulsion": '<span class="iconify data-ico" data-icon="streamline:pathfinder-divide"></span>',
    "Dessert":           '<span class="iconify data-ico" data-icon="emojione-monotone:ice-cream"></span>'
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
  return String(name)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // é/è/ç etc. → e/e/c (strip accents, keep the base letter)
    .toLowerCase()
    .replace(/[\s-]+/g, '_')   // spaces AND hyphens → underscore
    .replace(/[^a-z0-9_]/g, '');
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

// ── Словник українських назв (будується з s_uk у кожному sub) ─────────
// Щоб додати переклад назви соусу для списків (Ієрархія / Всі соуси),
// допишіть паралельний масив s_uk поруч із s у потрібному підрозділі
// (той самий порядок і довжина; порожній рядок "" = показати англійську).
window.SD.nameUk = {};
(function buildNameUk() {
  window.SD.cats.forEach(function (cat) {
    cat.subs.forEach(function (sub) {
      if (sub.s_uk) {
        sub.s.forEach(function (nm, i) {
          if (sub.s_uk[i]) window.SD.nameUk[nm] = sub.s_uk[i];
        });
      }
    });
  });
})();
