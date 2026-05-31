const SAUCES_DATA = {
  categories: [
    {
      id: "white-sauces",
      name: "White Sauces",
      nameFr: "Sauces Blanches",
      icon: "🤍",
      subcategories: [
        {
          id: "velute-veal",
          name: "Veal Velouté",
          motherSauce: "Velouté (veal stock)",
          sauces: ["Parisienne / Allemande Grasse", "Poulette", "Villageoise", "Tarragon Sauce", "Herb Sauce", "Hot Andalusian Sauce", "Villeroi (meat)"]
        },
        {
          id: "velute-poultry",
          name: "Poultry Velouté",
          motherSauce: "Velouté (poultry stock)",
          sauces: ["Supreme", "Aurora", "Ivory", "Albufera", "Hot-cold Sauce"]
        },
        {
          id: "velute-fish",
          name: "Fish Velouté",
          motherSauce: "Velouté (fish stock)",
          sauces: ["Bercy Fish", "Normandy", "Cardinal", "Marinière", "Saint-Malo", "Véron", "Breton", "Shrimp", "Genevoise", "Villeroi (fish)"]
        },
        {
          id: "bechamel",
          name: "Béchamel",
          motherSauce: "Béchamel (milk-based)",
          sauces: ["Mornay", "Soubise", "Nantua"]
        }
      ]
    },
    {
      id: "brown-sauces",
      name: "Brown Sauces",
      nameFr: "Sauces Brunes",
      icon: "🟤",
      subcategories: [
        {
          id: "espagnole",
          name: "Espagnole / Demi-glace",
          motherSauce: "Espagnole / Demi-glace",
          sauces: ["Bercy (meat)", "Madeira", "Porto", "Chateaubriand", "Godard", "Périgueux", "Bordelaise", "Robert", "Piquante", "Diable", "Sainte-Menehould", "Zingara"]
        },
        {
          id: "poultry-brown",
          name: "Brown Poultry Stock",
          motherSauce: "Brown poultry stock",
          sauces: ["Chasseur", "Bigarade", "Rouennaise"]
        },
        {
          id: "game-stock",
          name: "Game Stock",
          motherSauce: "Brown game stock",
          sauces: ["Poivrade", "Grand Veneur", "Venison / Chevreuil"]
        },
        {
          id: "shellfish",
          name: "Shellfish Based",
          motherSauce: "Shellfish",
          sauces: ["American", "Nantua", "Crawfish (Carême)"]
        },
        {
          id: "tomato-based",
          name: "Tomato Based",
          motherSauce: "Tomat",
          sauces: ["Crushed Tomato", "Tomato Purée", "Tomato Coulis", "Tomato", "Bolognese"]
        }
      ]
    },
    {
      id: "hot-emulsified",
      name: "Hot Emulsified",
      nameFr: "Émulsionnées Chaudes",
      icon: "🫧",
      subcategories: [
        {
          id: "bearnaise-family",
          name: "Béarnaise Family",
          motherSauce: "Béarnaise",
          sauces: ["Béarnaise", "Choron", "Foyot", "Paloise"]
        },
        {
          id: "hollandaise-family",
          name: "Hollandaise Family",
          motherSauce: "Hollandaise",
          sauces: ["Hollandaise", "Mousseline", "Mustard (Hollandaise)", "Maltese"]
        },
        {
          id: "emulsified-butter",
          name: "Emulsified Butter",
          motherSauce: "Butter emulsions",
          sauces: ["Melted Butter", "Beurre Blanc", "Beurre Nantais"]
        }
      ]
    },
    {
      id: "cold-emulsified",
      name: "Cold Emulsified",
      nameFr: "Émulsionnées Froides",
      icon: "❄️",
      subcategories: [
        {
          id: "mayonnaise-family",
          name: "Mayonnaise Family",
          motherSauce: "Mayonnaise",
          sauces: ["Mayonnaise", "Remoulade", "Tartar", "Gribiche", "Cold Andalusian", "Cocktail", "Vincent", "Aioli", "Rouille"]
        },
        {
          id: "vinaigrette-family",
          name: "Vinaigrette Family",
          motherSauce: "Vinaigrette",
          sauces: ["Vinaigrette", "Mustard Vinaigrette", "Ravigote", "Lemonette", "Cream Dressing"]
        }
      ]
    },
    {
      id: "cold-sauces-misc",
      name: "Cold Sauces",
      nameFr: "Sauces Froides Diverses",
      icon: "🌿",
      subcategories: [
        {
          id: "cold-misc",
          name: "Cold Miscellaneous",
          motherSauce: "Various",
          sauces: ["Cumberland", "Yorkshire", "Gribiche", "Cambridge", "Cold Russian", "Sarladaise", "Dijonnaise", "Mint Sauce"]
        }
      ]
    },
    {
      id: "dessert-sauces",
      name: "Dessert Sauces",
      nameFr: "Sauces Dessert",
      icon: "🍮",
      subcategories: [
        {
          id: "sweet",
          name: "Sweet Sauces",
          motherSauce: "Dessert",
          sauces: ["Caramel", "Blackcurrant", "Chocolate", "Raw Peach", "Cranberry", "Apple Sauce"]
        }
      ]
    }
  ],

  byUsage: {
    "Fish / Seafood": ["Albufera", "Allemande Maigre", "Hot Andalusian", "Cold Andalusian", "Aurora", "Cambridge", "Cardinal", "White Chaud-Froid", "Poultry Chaud-Froid", "Crawfish", "Genevoise", "Hollandaise", "Hungarian", "Oyster", "Maltese", "Marinière", "Matelote", "Nantua", "Normandy", "Oursinade", "Poulette", "Cold Horseradish", "Ravigote", "Remoulade", "Veron", "Villeroi", "Hot Waterfish", "Cold Waterfish", "Bercy Fish"],
    "Meat": ["Allemande Grasse", "Béarnaise", "Bechamel", "Bigarade", "Bolognese", "Bontemps", "Bordelaise", "Breton", "Chateaubriand", "Choron", "Cumberland", "Diable", "English Diable", "Duxelles", "Financière", "Foyot", "Godard", "Hachée", "La Varenne", "Lyonnaise", "Madeira", "À La Moelle", "Mornay", "Mousseline", "Poivrade", "Robert", "Solferino", "Supreme", "Tomato", "Zingara", "Yorkshire"],
    "Poultry": ["Albufera", "Allemande Grasse", "Aurora", "White Chaud-Froid", "Poultry Chaud-Froid", "Financière", "Poulette", "Supreme", "Royal", "Veron", "Villeroi", "Chasseur"],
    "Game": ["Bigarade", "Chevreuil / Venison", "Cumberland", "Grand Veneur", "Poivrade", "Rouennaise", "Tortue", "Zingara"],
    "Vegetables / Eggs": ["Bechamel", "Cambridge", "Gribiche", "Hollandaise", "Indian", "Mint Sauce", "Soubise", "Tartar", "Cold Russian", "Mornay"],
    "Dessert": ["Sweet and Sour", "Cranberry", "Apple Sauce", "Caramel", "Blackcurrant", "Chocolate", "Raw Peach"],
    "Cold Sauces": ["Cold Andalusian", "Cambridge", "Gribiche", "Mint Sauce", "Cold Horseradish", "Ravigote", "Remoulade", "Cold Russian", "Tartar", "Sarladaise", "Sauce Verte", "Cumberland", "Yorkshire", "Dijonnaise"],
    "Hot Sauces": ["Allemande Grasse", "Béarnaise", "Hollandaise", "Diable", "Financière", "Genevoise", "Madeira", "Normandy", "Poulette", "Villeroi", "Zingara", "Supreme", "Chasseur", "Bordelaise"]
  },

  recipes: {
    "Béarnaise": {
      name: "Béarnaise Sauce",
      nameFr: "Sauce Béarnaise",
      category: "Hot Emulsified",
      motherSauce: "Béarnaise",
      type: "Emulsified",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Butter / Egg",
      texture: "Emulsion",
      difficulty: "Medium",
      time: "30 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["steak", "eggs", "asparagus", "veal", "fish"],
      ingredients: {
        base: ["egg yolks (5)", "clarified butter (250g)"],
        aromatics: ["shallots, finely chopped (50g)", "tarragon, chopped (3 tbsp)", "chervil, chopped (1 tbsp)"],
        acid: ["tarragon vinegar (10cl)", "dry white wine (5cl)"],
        finish: ["fresh tarragon (1 tbsp)", "chervil (1 tbsp)", "salt", "cracked black pepper (5g)"]
      },
      technique: [
        "Reduce vinegar, wine, shallots, tarragon, chervil, pepper by two-thirds. Cool.",
        "Add egg yolks and a little water, whisk vigorously over low heat (55°C / 131°F).",
        "Remove from heat, gradually incorporate 250g warm clarified butter while whisking.",
        "Strain through fine chinois, finish with fresh tarragon and chervil. Serve immediately."
      ],
      derivatives: ["Choron", "Foyot", "Paloise"],
      similar: ["Hollandaise", "Foyot", "Choron"],
      recipe: "Put in an appropriately sized heavy-bottomed sauté pan 10 cl of tarragon vinegar, 5 cl of dry white wine, 50 g of finely chopped shallots, 3 tablespoons of chopped tarragon, and 1 tablespoon of chopped chervil, 5 g of cracked black pepper, and a pinch of salt. Reduce the mixture by two-thirds, then allow it to cool. Add 5 egg yolks and a little water, and whisk vigorously over low heat (55 °C / 131 °F). Remove from the heat and gradually incorporate 250 g of clarified warm butter while whisking. Strain the sauce through a fine sieve (chinois) and finish by adding 1 tablespoon of chopped tarragon and chervil. Serve immediately."
    },

    "Hollandaise": {
      name: "Hollandaise Sauce",
      nameFr: "Sauce Hollandaise",
      category: "Hot Emulsified",
      motherSauce: "Hollandaise",
      type: "Emulsified",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Butter / Egg",
      texture: "Emulsion",
      difficulty: "Medium",
      time: "15 min",
      classic: "Escoffier",
      stability: "Low",
      pairingsWith: ["fish", "eggs", "asparagus", "vegetables", "poultry"],
      ingredients: {
        base: ["egg yolks (5)", "clarified butter (300g)"],
        aromatics: [],
        acid: ["lemon juice (optional, 1/2)"],
        finish: ["fine salt", "white pepper"]
      },
      technique: [
        "Clarify butter and keep warm. Separate egg yolks.",
        "Combine yolks with 3 tbsp cold water, season. Place in bain-marie.",
        "Heat gradually, whisking vigorously until mixture foams and thickens to cream consistency.",
        "Remove from bain-marie, continue whisking to cool slightly. Gradually pour in warm clarified butter. Strain. Keep at max 55°C."
      ],
      derivatives: ["Mousseline", "Maltese"],
      similar: ["Béarnaise", "Mousseline", "Maltese"],
      recipe: "Clarify 300 g of butter and keep warm. Separate the yolk of 5 eggs. Combine them with 3 tablespoons of cold water in a sauté pan or stainless-steel saucepan. Season with fine salt and white pepper. Place the saucepan in a double boiler, heat gradually, whisking vigorously and continuously. The mixture should foam to thicken and take on the consistency of a cream. At this point, remove the saucepan from the bain-marie and continue whisking to cool the mixture noticeably. Remove from the heat, gradually pour in the warm clarified butter until fully incorporated. Check the seasoning and strain this sauce through a sieve. Depending on the use, you can add the juice of 1/2 lemon. Set the sauce aside in a bain-marie without exceeding 55°C."
    },

    "Bechamel": {
      name: "Béchamel Sauce",
      nameFr: "Sauce Béchamel",
      category: "White Sauces",
      motherSauce: "Béchamel",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Milk",
      texture: "Smooth",
      difficulty: "Easy",
      time: "15 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["pasta", "vegetables", "eggs", "poultry", "fish"],
      ingredients: {
        base: ["butter (60g)", "flour (60g)", "milk (1L)"],
        aromatics: ["nutmeg, grated"],
        acid: [],
        finish: ["fine salt", "cayenne pepper"]
      },
      technique: [
        "Melt butter, add flour, cook 1 min without browning (white roux). Cool.",
        "Bring milk to boil, pour gradually over cold roux, whisking constantly to prevent lumps.",
        "Bring to boil, cook 4–5 min. Season with salt, cayenne, nutmeg.",
        "Strain through sieve cheesecloth. Dot surface with butter to prevent skin."
      ],
      derivatives: ["Mornay", "Soubise", "Nantua"],
      similar: ["Mornay", "Soubise", "Nantua"],
      recipe: "Melt 60 g of butter in a heavy saucepan then add 60 g of flour; Mix to obtain a smooth preparation. Cook over low heat for about 1 minute to obtain a white roux without browning, then cool it. Bring 1 litre of milk to the boil, then gradually pour it over the cold roux, whisking constantly with a small sauce whisk to prevent lumps from forming. Bring to the boil and cook the Béchamel sauce for 4 or 5 minutes. Season with fine salt, cayenne pepper and a few grated nutmegs. Strain the sauce through a sieve cheesecloth. If not to be used immediately, dab the surface with a knob of butter to prevent the formation of a skin, then keep warm in a double boiler."
    },

    "Bordelaise": {
      name: "Bordelaise Sauce",
      nameFr: "Sauce Bordelaise",
      category: "Brown Sauces",
      motherSauce: "Demi-glace",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Demi-glace",
      texture: "Smooth",
      difficulty: "Medium",
      time: "30 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["steak", "beef", "veal", "lamb"],
      ingredients: {
        base: ["demi-glace (20cl)", "red wine (20cl)"],
        aromatics: ["shallot, chopped (1 tbsp)", "thyme (1 sprig)", "bay leaf"],
        acid: [],
        finish: ["bone marrow, poached (25g)", "butter (25g)", "parsley, chopped (1 tsp)", "salt", "pepper"]
      },
      technique: [
        "Cube and poach bone marrow; drain and set aside.",
        "Reduce shallot with red wine, thyme, bay, salt by two-thirds.",
        "Add demi-glace, reduce by one-third.",
        "Off heat, add butter and strain. Add marrow and parsley at last moment."
      ],
      derivatives: [],
      similar: ["Madeira", "Robert", "Périgueux"],
      recipe: "Cut 25 g of bone marrow into cubes, let it drain, then poach; drain again. Chop 1 tablespoon of shallot. Mix with 20 cl of red wine, 1 sprig of thyme, a piece of bay leaf, and a pinch of salt. Reduce by two-thirds. Deglaze with 20 cl of demi-glace and reduce by one-third. Off the heat, add 25 g of butter and strain through a chinois. At the last moment, add the bone marrow and 1 teaspoon of chopped parsley."
    },

    "Madeira": {
      name: "Madeira Sauce",
      nameFr: "Sauce Madère",
      category: "Brown Sauces",
      motherSauce: "Demi-glace",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Brown veal stock",
      texture: "Smooth",
      difficulty: "Medium",
      time: "60 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["beef", "veal", "ham", "mushrooms", "foie gras"],
      ingredients: {
        base: ["brown veal stock (1L)", "Madeira wine (10cl + 1 tsp)"],
        aromatics: ["shallot, finely chopped (1 tbsp)", "celery (2 stalks)", "garlic (1 clove)", "tomatoes, fresh (200g)", "tomato paste (1 tbsp)"],
        acid: [],
        finish: ["butter (10g)", "salt", "pepper"]
      },
      technique: [
        "Prepare flavored brown veal stock (celery, garlic, tomatoes, paste). Strain and reduce by three-quarters.",
        "Reduce shallot with 10cl Madeira by two-thirds. Add reduced veal stock.",
        "Simmer 10 min, skimming as needed. Strain through chinois.",
        "Season, add 1 tsp Madeira and finish by whisking in butter."
      ],
      derivatives: ["Porto Sauce"],
      similar: ["Bordelaise", "Périgueux", "Financière"],
      recipe: "Prepare 1 litre of brown veal stock, flavored with 2 celery stalks and 1 clove of garlic, and add 200 g fresh tomatoes and 1 tablespoon tomato paste. Strain the stock and reduce by three-quarters. Peel and finely chop 1 tablespoon of shallot. In a sauté pan, combine the chopped shallot with 10 cl of Madeira wine, reducing by two-thirds, then add the reduced veal stock. Simmer gently for 10 minutes, skimming as needed. Strain through a chinois, season with fine salt and freshly ground pepper. Add 1 teaspoon of Madeira wine and finish by whisking in 10 g of butter."
    },

    "Choron": {
      name: "Choron Sauce",
      nameFr: "Sauce Choron",
      category: "Hot Emulsified",
      motherSauce: "Béarnaise",
      type: "Emulsified",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Béarnaise",
      texture: "Emulsion",
      difficulty: "Medium",
      time: "35 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["steak", "eggs", "fish", "veal"],
      ingredients: {
        base: ["béarnaise sauce (20cl)"],
        aromatics: [],
        acid: [],
        finish: ["tomato purée, very reduced and sieved (2 tbsp)"]
      },
      technique: [
        "Prepare béarnaise sauce.",
        "Add warm, very reduced and sieved tomato purée.",
        "Mix gently and serve immediately."
      ],
      derivatives: [],
      similar: ["Béarnaise", "Foyot", "Paloise"],
      recipe: "Add 20 cl of béarnaise sauce to 2 tablespoons of warm tomato puree, very reduced and passed through a sieve."
    },

    "Foyot": {
      name: "Foyot Sauce (Valois)",
      nameFr: "Sauce Foyot / Valois",
      category: "Hot Emulsified",
      motherSauce: "Béarnaise",
      type: "Emulsified",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Béarnaise",
      texture: "Emulsion",
      difficulty: "Medium",
      time: "35 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["steak", "veal", "sweetbreads"],
      ingredients: {
        base: ["béarnaise sauce (20cl)"],
        aromatics: [],
        acid: [],
        finish: ["meat glaze (2 tbsp)"]
      },
      technique: [
        "Prepare béarnaise sauce and strain.",
        "Stir in 2 tablespoons of meat glaze."
      ],
      derivatives: [],
      similar: ["Béarnaise", "Choron", "Paloise"],
      recipe: "Prepare 20 cl of béarnaise sauce. Strain it and add 2 tablespoons of meat glaze, stirring."
    },

    "Mousseline": {
      name: "Mousseline Sauce (Chantilly)",
      nameFr: "Sauce Mousseline",
      category: "Hot Emulsified",
      motherSauce: "Hollandaise",
      type: "Emulsified",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Hollandaise",
      texture: "Light Emulsion",
      difficulty: "Medium",
      time: "20 min",
      classic: "Escoffier",
      stability: "Low",
      pairingsWith: ["asparagus", "fish", "vegetables", "eggs"],
      ingredients: {
        base: ["hollandaise sauce (20cl)"],
        aromatics: [],
        acid: [],
        finish: ["firm whipped cream"]
      },
      technique: [
        "Prepare hollandaise sauce, keep tight.",
        "At moment of serving, fold in firm whipped cream."
      ],
      derivatives: [],
      similar: ["Hollandaise", "Maltese"],
      recipe: "Prepare a tight hollandaise sauce by adding firm whipped cream to 20 cl of hollandaise sauce when ready to serve."
    },

    "Maltese": {
      name: "Maltese Sauce",
      nameFr: "Sauce Maltaise",
      category: "Hot Emulsified",
      motherSauce: "Hollandaise",
      type: "Emulsified",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Hollandaise",
      texture: "Emulsion",
      difficulty: "Medium",
      time: "20 min",
      classic: "Escoffier",
      stability: "Low",
      pairingsWith: ["asparagus", "fish", "vegetables"],
      ingredients: {
        base: ["hollandaise sauce (20cl)"],
        aromatics: [],
        acid: ["orange juice (1/2 orange)"],
        finish: ["orange zest, blanched fine julienne (1 orange)"]
      },
      technique: [
        "Prepare hollandaise sauce.",
        "Blanch orange zest into fine julienne strips.",
        "Add warm orange juice and blanched zest to hollandaise."
      ],
      derivatives: [],
      similar: ["Hollandaise", "Mousseline"],
      recipe: "Prepare a Hollandaise sauce. Cut the zest of 1 orange into very fine julienne strips and blanch them thoroughly. Squeeze the juice of half an orange and warm it slightly. Add the orange zest and juice to the Hollandaise sauce."
    },

    "Mornay": {
      name: "Mornay Sauce",
      nameFr: "Sauce Mornay",
      category: "White Sauces",
      motherSauce: "Béchamel",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Milk",
      texture: "Smooth, Cheesy",
      difficulty: "Easy",
      time: "20 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["pasta", "vegetables", "eggs", "fish", "poultry"],
      ingredients: {
        base: ["béchamel (50cl)", "gruyère, grated and sifted (70g)"],
        aromatics: [],
        acid: [],
        finish: ["egg yolks (2)", "cream (optional)"]
      },
      technique: [
        "Heat béchamel.",
        "Off heat, add beaten egg yolks with cream. Reheat briefly for a few seconds.",
        "Gently fold in sifted grated gruyère without whisking.",
        "Tamponner (dot with butter to prevent skin)."
      ],
      derivatives: [],
      similar: ["Béchamel", "Soubise", "Nantua"],
      recipe: "Heat 50 cl of béchamel. Off the heat, add 2 beaten egg yolks with, if necessary, a little cream. Reheat for a few seconds. Gently fold in 70 g of sifted grated Gruyère cheese without whisking. Tamponner."
    },

    "Soubise": {
      name: "Soubise Sauce",
      nameFr: "Sauce Soubise",
      category: "White Sauces",
      motherSauce: "Béchamel",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Milk / Onion",
      texture: "Smooth, Velvety",
      difficulty: "Easy",
      time: "60 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["lamb", "veal", "eggs", "vegetables"],
      ingredients: {
        base: ["thick béchamel (1 part)", "white onions (1 kg)", "butter (100g)"],
        aromatics: ["pinch of sugar"],
        acid: [],
        finish: ["butter (75g)", "double cream (10cl)", "salt", "pepper"]
      },
      technique: [
        "Blanch onions. Sweat in butter 30–40 min without browning.",
        "Add thick béchamel, cook 20 min more.",
        "Adjust seasoning and pass through very fine sieve.",
        "Finish with butter and double cream."
      ],
      derivatives: [],
      similar: ["Béchamel", "Mornay"],
      recipe: "Peel and thinly slice 1 kg of white onions and immerse them in plenty of salted water. Bring to a boil, then drain the onions and place them in a saucepan with 100 g of butter, salt, pepper, and a pinch of sugar. Cover and sweat for 30–40 minutes without browning. Add one-quarter of their volume of thick béchamel to the onions, mix well, and cook for another 20 minutes. Adjust seasoning and pass through a very fine sieve. Finish by adding 75 g of butter and 10 cl of double cream."
    },

    "Supreme": {
      name: "Supreme Sauce",
      nameFr: "Sauce Suprême",
      category: "White Sauces",
      motherSauce: "Velouté (poultry)",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "White poultry stock",
      texture: "Smooth, Creamy",
      difficulty: "Medium",
      time: "45 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["poultry", "veal", "mushrooms", "eggs"],
      ingredients: {
        base: ["white poultry velouté", "crème fraîche (30–40cl)"],
        aromatics: [],
        acid: [],
        finish: ["butter (50g)"]
      },
      technique: [
        "Prepare rich, well-flavored white poultry velouté.",
        "Reduce by at least half.",
        "Add crème fraîche, reduce until 60cl remains and coats spoon.",
        "Off heat, add butter. Strain through sieve cheesecloth."
      ],
      derivatives: ["Aurora", "Albufera"],
      similar: ["Velouté", "Aurora", "Albufera"],
      recipe: "Prepare a velouté with a white roux and dense and well-flavored white poultry stock. Reduce by at least half. Add 30 or 40 cl of crème fraîche and reduce until 60 cl of sauce is obtained; This should coat the spoon. Off the heat, add 50 g of butter. Strain through a sieve cheesecloth."
    },

    "Allemande Grasse": {
      name: "Allemande Sauce (Rich)",
      nameFr: "Sauce Allemande Grasse / Parisienne",
      category: "White Sauces",
      motherSauce: "Velouté (veal)",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "White veal stock",
      texture: "Smooth, Creamy",
      difficulty: "Medium",
      time: "40 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["veal", "poultry", "mushrooms", "eggs"],
      ingredients: {
        base: ["white veal or poultry stock (40cl)", "velouté (50cl)", "egg yolks (3–4)"],
        aromatics: ["mushroom cooking liquid (10cl)", "lemon juice (dash)", "crushed peppercorns", "nutmeg (pinch)"],
        acid: [],
        finish: ["fresh butter (50g)"]
      },
      technique: [
        "Combine stock, mushroom liquid, lemon, pepper, nutmeg and velouté. Reduce.",
        "Off heat, add egg yolk liaison loosened with a little velouté.",
        "Bring back to boil, adjust acidity.",
        "Strain through muslin-lined chinois, incorporate butter."
      ],
      derivatives: ["Poulette", "Villeroi", "Tarragon Sauce"],
      similar: ["Velouté", "Supreme", "Poulette"],
      recipe: "Combine in a heavy-bottomed saucepan 40 cl of white veal or poultry stock, 10 cl of mushroom cooking liquid, a dash of lemon juice, a few crushed peppercorns, a pinch of nutmeg, and 50 cl of velouté. Mix well and reduce. Off the heat, add a liaison made from 3 or 4 egg yolks loosened with a little velouté. Bring back to the boil, adjust acidity, strain through a chinois lined with muslin, and finish by incorporating 50 g of fresh butter."
    },

    "Normandy": {
      name: "Normandy Sauce",
      nameFr: "Sauce Normande",
      category: "White Sauces",
      motherSauce: "Velouté (fish)",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Fish stock",
      texture: "Smooth, Creamy",
      difficulty: "Medium",
      time: "30 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["sole", "turbot", "fish", "oysters", "mussels"],
      ingredients: {
        base: ["sole velouté (20cl)", "fish fumet (10cl)", "mushroom cooking liquid (10cl)"],
        aromatics: [],
        acid: [],
        finish: ["egg yolks (2)", "cream (2 tbsp + 3 tbsp thick)", "butter (50g)", "mussel/oyster liquid (optional)"]
      },
      technique: [
        "Heat sole velouté, fish fumet and mushroom liquid in heavy saucepan.",
        "Beat egg yolks with cream, add to pan, reduce by one-third.",
        "Add butter in pieces and thick cream. Optionally add mussel/oyster cooking liquid."
      ],
      derivatives: ["Veron"],
      similar: ["Bercy Fish", "Cardinal", "Marinière"],
      recipe: "Heat in a heavy-bottomed saucepan 20 cl of sole velouté, 10 cl of fish fumet, and 10 cl of mushroom cooking liquid. Beat 2 egg yolks with 2 tablespoons of cream, add them to the pan, and reduce by one-third. Add at once 50 g of butter in pieces and 3 tablespoons of thick cream, and optionally a little cooking liquid from mussels or oysters."
    },

    "Cardinal": {
      name: "Cardinal Sauce",
      nameFr: "Sauce Cardinal",
      category: "White Sauces",
      motherSauce: "Velouté (fish)",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Fish stock",
      texture: "Smooth, Creamy",
      difficulty: "Medium",
      time: "30 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["lobster", "fish", "seafood"],
      ingredients: {
        base: ["lean velouté (20cl)", "fish stock (10cl)", "cream (10cl)"],
        aromatics: ["truffle essence or chopped truffle (1 tbsp)"],
        acid: ["cayenne pepper"],
        finish: ["lobster butter (50g)"]
      },
      technique: [
        "Reduce velouté maigre and fish stock by half.",
        "Add cream and stir.",
        "Off heat, stir in lobster butter. Season with cayenne and strain.",
        "Flavor with truffle essence or garnish with chopped truffle."
      ],
      derivatives: [],
      similar: ["Nantua", "Normandy", "Bercy Fish"],
      recipe: "Reduce 20 cl of velouté maigre and 10 cl of fish stock by half. Add 10 cl of cream and stir. Off the heat, stir in 50 g of lobster butter. Season with a touch of cayenne pepper and strain through a sieve cheesecloth. Flavor with truffle essence or garnish with 1 tablespoon of chopped truffle."
    },

    "Nantua": {
      name: "Nantua Sauce",
      nameFr: "Sauce Nantua",
      category: "White Sauces",
      motherSauce: "Béchamel",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Milk / Crayfish",
      texture: "Smooth, Creamy",
      difficulty: "Medium",
      time: "45 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["fish", "quenelles", "seafood", "eggs"],
      ingredients: {
        base: ["béchamel or fish velouté (equal parts)", "cooked crayfish (equal parts)", "cream (equal parts)"],
        aromatics: [],
        acid: ["lemon (dash)", "cognac (1 tsp)"],
        finish: ["crayfish butter (100g)", "cayenne pepper"]
      },
      technique: [
        "Combine béchamel/velouté, crayfish, cream in equal parts.",
        "Reduce by one-third.",
        "Into boiling mixture, whisk crayfish butter, cognac, cayenne.",
        "Strain through very fine sieve."
      ],
      derivatives: [],
      similar: ["Cardinal", "Mornay"],
      recipe: "Prepare a béchamel or a light fish velouté. Add the same amount of cooked crayfish and the same amount of cream. Reduce everything by a third. Whisk 100 g of crayfish butter, 1 teaspoon of cognac and a dash of cayenne pepper into the boiling mixture. Strain through a very fine sieve."
    },

    "Tomato": {
      name: "Tomato Sauce",
      nameFr: "Sauce Tomat",
      category: "Brown Sauces",
      motherSauce: "Tomat",
      type: "Tomato-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "White stock / Tomato",
      texture: "Smooth",
      difficulty: "Easy",
      time: "2 hours",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["pasta", "meat", "vegetables", "eggs", "fish"],
      ingredients: {
        base: ["fresh tomatoes (2kg) or tomato paste (200g)", "white stock (1L)", "flour (60g)"],
        aromatics: ["carrot, diced (100g)", "onion, diced (100g)", "garlic (2 cloves)", "bouquet garni", "lean ham (150g)", "pork belly (100g)"],
        acid: [],
        finish: ["butter (lukewarm, melted)", "sugar (20g)", "salt", "pepper"]
      },
      technique: [
        "Blanch, drain and brown pork belly in butter. Add carrot and onion, cook 10–15 min.",
        "Sprinkle with flour, cook until lightly blond. Add tomatoes, garlic, bouquet, ham, stock, sugar. Season.",
        "Bring to boil, cover and simmer 2 hours.",
        "Remove garlic, bouquet, ham. Pass through fine chinois. Finish with lukewarm melted butter."
      ],
      derivatives: [],
      similar: ["Bolognese", "Duxelles"],
      recipe: "Cut 100 g of fresh pork belly into small dice; blanch, drain, and brown them in 3–4 tablespoons of butter. Add 100 g of peeled, diced carrots and 100 g of peeled, diced onions; cover and cook for 10–15 minutes, allowing slight browning. Sprinkle with 60 g of sifted flour and cook until lightly blond. Add 2 kg of fresh peeled, seeded, and crushed tomatoes (or 200 g tomato paste), 2 crushed garlic cloves, 1 bouquet garni, and 150 g of blanched lean ham. Add 1 litre of white stock; season with salt, pepper, and 20 g of sugar. Bring to a boil, stirring, then cover and simmer for 2 hours. Remove the garlic, bouquet garni, and ham. Pass the sauce through a fine chinois, place in a bain-marie, and finish by gently incorporating a little lukewarm melted butter."
    },

    "Mayonnaise": {
      name: "Mayonnaise",
      nameFr: "Mayonnaise",
      category: "Cold Emulsified",
      motherSauce: "Mayonnaise",
      type: "Cold Emulsified",
      temperature: "Cold",
      cuisine: "French",
      baseStock: "—",
      texture: "Thick Emulsion",
      difficulty: "Easy",
      time: "10 min",
      classic: "Classic",
      stability: "Medium",
      pairingsWith: ["fish", "seafood", "eggs", "vegetables", "cold meats"],
      ingredients: {
        base: ["egg yolk (1)", "oil (25cl)"],
        aromatics: [],
        acid: ["vinegar (1cl)", "mustard (5g)"],
        finish: ["fine salt", "freshly ground pepper"]
      },
      technique: [
        "Whisk egg yolk with mustard, vinegar, salt and pepper.",
        "Incorporate oil very gradually while whisking constantly until emulsified."
      ],
      derivatives: ["Remoulade", "Tartar", "Gribiche", "Cold Andalusian", "Cocktail"],
      similar: ["Remoulade", "Tartar", "Aioli"],
      recipe: "Whisk together 1 egg yolk, 5g mustard, 1cl vinegar, fine salt and freshly ground pepper. Incorporate 25cl of oil gradually while whisking constantly until fully emulsified."
    },

    "Remoulade": {
      name: "Remoulade Sauce",
      nameFr: "Sauce Rémoulade",
      category: "Cold Emulsified",
      motherSauce: "Mayonnaise",
      type: "Cold Emulsified",
      temperature: "Cold",
      cuisine: "French",
      baseStock: "Mayonnaise",
      texture: "Thick",
      difficulty: "Easy",
      time: "15 min",
      classic: "Classic",
      stability: "Medium",
      pairingsWith: ["crab", "shrimp", "fish", "cold meats", "vegetables"],
      ingredients: {
        base: ["egg yolk (1)", "oil (25cl)", "strong mustard (10g)"],
        aromatics: ["chervil, chopped (1 tbsp)", "tarragon, chopped (1 tbsp)", "parsley, chopped", "chives, chopped"],
        acid: ["vinegar (1cl)"],
        finish: ["gherkins, chopped (20g)", "capers, drained (10g)", "anchovy essence (few drops)", "salt", "pepper"]
      },
      technique: [
        "Prepare mayonnaise using 10g mustard.",
        "Add chopped herbs, capers, gherkins and anchovy essence."
      ],
      derivatives: [],
      similar: ["Tartar", "Mayonnaise", "Gribiche"],
      recipe: "Prepare a mayonnaise with 25 cl of oil; Add 2 gherkins cut into very small cubes, 2 tablespoons of chopped herbs (parsley, chives, chervil and tarragon), 1 tablespoon of drained capers and a few drops of anchovy essence."
    },

    "Tartar": {
      name: "Tartar Sauce",
      nameFr: "Sauce Tartare",
      category: "Cold Emulsified",
      motherSauce: "Mayonnaise",
      type: "Cold Emulsified",
      temperature: "Cold",
      cuisine: "French",
      baseStock: "Mayonnaise (hard-boiled)",
      texture: "Thick",
      difficulty: "Easy",
      time: "15 min",
      classic: "Classic",
      stability: "Medium",
      pairingsWith: ["fried fish", "seafood", "cold meats"],
      ingredients: {
        base: ["hard-boiled egg yolk (1)", "oil (25cl)", "mustard (10g)"],
        aromatics: ["chervil, chopped (1 tbsp)", "tarragon, chopped (1 tbsp)", "spring onion, chopped", "chives, chopped"],
        acid: ["vinegar (1cl)"],
        finish: ["capers, chopped (10g)", "gherkins, chopped (20g)", "sweet onion, chopped (45g)", "salt", "pepper"]
      },
      technique: [
        "Prepare mayonnaise using hard-boiled (not raw) egg yolk.",
        "Add chives, spring onion, capers, parsley, chervil and tarragon."
      ],
      derivatives: [],
      similar: ["Remoulade", "Gribiche", "Mayonnaise"],
      recipe: "Prepare a mayonnaise by replacing the raw egg yolk with hard-boiled egg yolk. Add chopped chives and chopped spring onion, chopped capers, parsley, chopped chervil and tarragon."
    },

    "Gribiche": {
      name: "Gribiche Sauce",
      nameFr: "Sauce Gribiche",
      category: "Cold Emulsified",
      motherSauce: "Mayonnaise",
      type: "Cold Emulsified",
      temperature: "Cold",
      cuisine: "French",
      baseStock: "Egg-based",
      texture: "Emulsion",
      difficulty: "Easy",
      time: "15 min",
      classic: "Classic",
      stability: "Medium",
      pairingsWith: ["cold fish", "offal", "vegetables", "eggs"],
      ingredients: {
        base: ["barely hard-boiled egg yolk (1)", "oil (25cl)"],
        aromatics: ["parsley, chopped (1 tbsp)", "tarragon, chopped (1 tbsp)", "chervil, chopped"],
        acid: ["vinegar (2 tbsp)"],
        finish: ["capers (1 tbsp) or gherkins", "hard-boiled egg white, julienne", "salt", "pepper"]
      },
      technique: [
        "Mash barely hard-boiled egg yolk to a very fine paste.",
        "Whisk gradually with oil.",
        "Add vinegar, salt, pepper, capers/gherkins, herbs and egg white julienne."
      ],
      derivatives: [],
      similar: ["Tartar", "Remoulade"],
      recipe: "Mash 1 barely hard-boiled egg yolk well to reduce it to a very fine paste. Whisk it little by little with 25 cl of oil. Add 2 tablespoons of vinegar, salt, pepper, 1 tablespoon of capers or gherkins, as much chopped parsley, chervil and tarragon, and the white of the hard-boiled egg cut into julienne."
    },

    "Vinaigrette": {
      name: "Classic Vinaigrette",
      nameFr: "Sauce Vinaigrette",
      category: "Cold Emulsified",
      motherSauce: "Vinaigrette",
      type: "Unstable Emulsion",
      temperature: "Cold",
      cuisine: "French",
      baseStock: "—",
      texture: "Liquid",
      difficulty: "Easy",
      time: "5 min",
      classic: "Classic",
      stability: "Low",
      pairingsWith: ["salads", "vegetables", "fish", "cold meats"],
      ingredients: {
        base: ["oil(s) (15cl)"],
        aromatics: ["shallot (optional)", "herbs (optional)", "garlic (optional)"],
        acid: ["vinegar(s) (5cl)"],
        finish: ["fine salt", "freshly ground pepper"]
      },
      technique: [
        "Dissolve salt in vinegar.",
        "Whisk in oil. Season with pepper.",
        "Add optional aromatics: shallot, herbs, capers, garlic, anchovies, onions."
      ],
      derivatives: ["Mustard Vinaigrette", "Ravigote"],
      similar: ["Ravigote"],
      recipe: "Mix vinegar(s) (5cl) with fine salt and freshly ground pepper. Whisk in oil(s) (15cl). Various elements can be added: shallot, herbs, capers, garlic, anchovies, onions, etc."
    },

    "Ravigote": {
      name: "Ravigote Sauce",
      nameFr: "Sauce Ravigote",
      category: "Cold Emulsified",
      motherSauce: "Vinaigrette",
      type: "Unstable Emulsion",
      temperature: "Cold",
      cuisine: "French",
      baseStock: "—",
      texture: "Liquid",
      difficulty: "Easy",
      time: "10 min",
      classic: "Classic",
      stability: "Low",
      pairingsWith: ["offal", "fish", "cold meats", "vegetables"],
      ingredients: {
        base: ["oil (30cl)", "vinegar (10cl)"],
        aromatics: ["chervil, chopped (1/2 tsp)", "chives, chopped (1/2 tsp)", "tarragon, chopped (1/2 tsp)", "parsley, chopped (1/2 tsp)", "white onion, chopped (45g)", "capers, chopped (20g)"],
        acid: ["white mustard (1 tbsp)"],
        finish: ["fine salt", "white pepper"]
      },
      technique: [
        "Prepare vinaigrette with mustard.",
        "Stir in very finely chopped white onion, capers and herbs."
      ],
      derivatives: [],
      similar: ["Vinaigrette", "Gribiche"],
      recipe: "Prepare a vinaigrette sauce with 10 cl of vinegar, 30 cl of oil, 1 tablespoon of white mustard, fine salt and white pepper. Stir in 30 g of very finely chopped white onions, then 2 teaspoons of small capers and chopped herbs."
    },

    "Chasseur": {
      name: "Chasseur Sauce",
      nameFr: "Sauce Chasseur",
      category: "Brown Sauces",
      motherSauce: "Brown poultry stock",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Brown veal stock",
      texture: "Smooth",
      difficulty: "Medium",
      time: "30 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["chicken", "rabbit", "veal", "pork"],
      ingredients: {
        base: ["brown veal stock, lightly bound and tomatoed (40cl)", "mushrooms (150g)", "cognac (4cl)"],
        aromatics: ["shallots (2)", "white wine (10cl)"],
        acid: [],
        finish: ["butter (30g)", "tarragon, chervil, parsley, chopped (1 tbsp)", "salt", "pepper"]
      },
      technique: [
        "Brown chopped mushrooms and shallots in butter.",
        "Add white wine, reduce by half. Flambé with cognac.",
        "Add lightly bound tomatoed veal stock. Reduce gently 10 min.",
        "Finish with butter and mixed chopped herbs."
      ],
      derivatives: [],
      similar: ["Bigarade", "Rouennaise"],
      recipe: "Chop 150 g of mushrooms (mushrooms, if possible) and chop 2 shallots. Brown everything in butter, then pour in 10 cl of white wine and reduce by half. Flambé with 4 cl of cognac. Then add 40 cl of lightly bound and tomato brown veal stock. Reduce gently for about ten minutes, adding 30 g of butter and 1 tablespoon of chopped herbs (tarragon, chervil, parsley)."
    },

    "Robert": {
      name: "Robert Sauce",
      nameFr: "Sauce Robert",
      category: "Brown Sauces",
      motherSauce: "Espagnole",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Espagnole / Demi-glace",
      texture: "Smooth",
      difficulty: "Medium",
      time: "30 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["pork", "grilled meats", "offal"],
      ingredients: {
        base: ["espagnole or demi-glace (1/2 quart)"],
        aromatics: ["onions, finely chopped (2)", "butter (25g)"],
        acid: ["white wine (20cl)", "vinegar (10cl)"],
        finish: ["white mustard (1 tbsp)"]
      },
      technique: [
        "Brown finely chopped onions in butter.",
        "Add wine and vinegar, reduce almost to dryness.",
        "Add demi-glace/espagnole, adjust seasoning.",
        "Off heat, add mustard diluted with a little sauce. Finish with butter (tamponner)."
      ],
      derivatives: [],
      similar: ["Bordelaise", "Lyonnaise", "Diable"],
      recipe: "Brown 2 finely chopped onions in 25 g of butter. Add 20 cl of white wine and 10 cl of vinegar, and reduce almost dry. Add 1/2 quart of Espagnole sauce or demi-glace. Adjust the seasoning. Dilute 1 large tablespoon of white mustard with a little sauce, then, off the heat, add it to the rest of the sauce and mix well. Finish by dotting with butter (tamponner)."
    },

    "Bolognese": {
      name: "Bolognese Sauce",
      nameFr: "Sauce Bolognaise",
      category: "Brown Sauces",
      motherSauce: "Tomato",
      type: "Tomato-based",
      temperature: "Hot",
      cuisine: "French/Italian",
      baseStock: "Brown veal stock",
      texture: "Chunky",
      difficulty: "Easy",
      time: "2.5 hours",
      classic: "Classic",
      stability: "High",
      pairingsWith: ["pasta", "gnocchi", "polenta"],
      ingredients: {
        base: ["braising beef, roughly chopped (500g)", "fresh tomatoes (crushed)"],
        aromatics: ["onions (5 large)", "celery (4 stalks)", "garlic (4–5 cloves)", "bouquet garni", "sage (4 leaves)", "rosemary (2 sprigs)"],
        acid: [],
        finish: ["brown veal stock (35cl)", "dry white wine (20cl)", "olive oil (5 tbsp)", "salt", "pepper"]
      },
      technique: [
        "Brown meat in olive oil. Add onions, celery, garlic; sauté.",
        "Add crushed tomatoes, melt 10 min.",
        "Add bouquet, stock, wine, seasoning. Cover and simmer 2 hours over very low heat.",
        "Adjust seasoning."
      ],
      derivatives: [],
      similar: ["Tomato Sauce"],
      recipe: "Slice and chop 4 celery stalks. Peel and chop 5 large onions. Add to 1 traditional bouquet garni 4 sage leaves and 2 sprigs of rosemary. Roughly chop 500 g of braising beef. Peel and crush a dozen beautiful tomatoes. Peel and crush 4 or 5 cloves of garlic. Heat 5 tablespoons of olive oil in a casserole dish. Brown the meat, then the onions, celery and garlic. Add the tomatoes and melt for 10 minutes. Finally, add the bouquet garni, 35 cl of brown veal stock, 20 cl of dry white wine, salt and pepper. Cover and cook for 2 hours over very low heat, adding a little water from time to time. Adjust the seasoning."
    },

    "Cumberland": {
      name: "Cumberland Sauce",
      nameFr: "Sauce Cumberland",
      category: "Cold Sauces",
      motherSauce: "—",
      type: "Fruit-based",
      temperature: "Cold",
      cuisine: "English/French",
      baseStock: "Redcurrant jelly",
      texture: "Liquid-jam",
      difficulty: "Easy",
      time: "20 min",
      classic: "Classic",
      stability: "High",
      pairingsWith: ["game", "venison", "ham", "duck", "lamb"],
      ingredients: {
        base: ["redcurrant jelly (20cl)", "port (10cl)"],
        aromatics: ["shallot, chopped and blanched (1 tsp)", "orange zest julienne (2 tsp)", "lemon zest"],
        acid: ["orange juice (1 orange)", "lemon juice (1 small lemon)"],
        finish: ["mustard (1 tbsp)", "salt", "cayenne", "ground ginger (optional)"]
      },
      technique: [
        "Blanch and drain shallot and zests.",
        "Mix shallot and 2 tsp zest with mustard.",
        "Melt jelly, add port, bring to boil with other ingredients. Add citrus juices. Strain.",
        "Add cooked julienne."
      ],
      derivatives: [],
      similar: ["Yorkshire Sauce", "Grand Veneur"],
      recipe: "Blanch and drain 1 teaspoon of chopped shallot. Peel orange and lemon zest, blanch, pat dry, and cut into julienne strips. Mix the chopped shallot and 2 teaspoons of julienned zest with 1 tablespoon of mustard. Melt 20 cl of red currant jelly and add it to the mixture, along with 10 cl of port and the juice of 1 orange and 1 small lemon. Season with salt, a pinch of Cayenne pepper, and optionally a little ground ginger."
    },

    "Grand Veneur": {
      name: "Grand Veneur Sauce",
      nameFr: "Sauce Grand Veneur",
      category: "Brown Sauces",
      motherSauce: "Poivrade",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Poivrade / Game stock",
      texture: "Smooth",
      difficulty: "Hard",
      time: "1 hour",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["venison", "game", "wild boar"],
      ingredients: {
        base: ["poivrade sauce (from venison trimmings, min. 20cl)"],
        aromatics: [],
        acid: [],
        finish: ["redcurrant jelly (1 tbsp)", "crème fraîche (2 tbsp)"]
      },
      technique: [
        "Reduce poivrade sauce made with venison trimmings to at least 20cl.",
        "Strain the sauce.",
        "Gently whisk in redcurrant jelly and crème fraîche."
      ],
      derivatives: [],
      similar: ["Poivrade", "Cumberland"],
      recipe: "Reduce a poivrade sauce made with the trimmings from the cooked venison piece until you have at least 20 cl. Strain the sauce, then gently whisk in 1 tablespoon of red currant jelly and 2 tablespoons of crème fraîche."
    },

    "Périgueux": {
      name: "Périgueux Sauce",
      nameFr: "Sauce Périgueux",
      category: "Brown Sauces",
      motherSauce: "Demi-glace",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Demi-glace",
      texture: "Smooth",
      difficulty: "Hard",
      time: "30 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["beef", "veal", "foie gras", "eggs", "poultry"],
      ingredients: {
        base: ["rich, concentrated demi-glace (75cl)"],
        aromatics: ["chopped truffles (100g)"],
        acid: [],
        finish: ["truffle essence (15cl)"]
      },
      technique: [
        "Reduce rich demi-glace.",
        "Add truffle essence and chopped truffles."
      ],
      derivatives: [],
      similar: ["Madeira", "Financière"],
      recipe: "Add to 75 cl of rich, concentrated demi-glace 15 cl of truffle essence and 100 g of chopped truffles."
    },

    "Caramel": {
      name: "Caramel Sauce",
      nameFr: "Sauce Caramel",
      category: "Dessert Sauces",
      motherSauce: "—",
      type: "Dessert",
      temperature: "Hot/Cold",
      cuisine: "French",
      baseStock: "Sugar",
      texture: "Smooth, Liquid",
      difficulty: "Easy",
      time: "15 min",
      classic: "Classic",
      stability: "High",
      pairingsWith: ["ice cream", "crêpes", "apple tart", "panna cotta", "profiteroles"],
      ingredients: {
        base: ["powdered sugar (100g)", "liquid cream (120g)"],
        aromatics: [],
        acid: [],
        finish: ["semi-salted butter (20g)"]
      },
      technique: [
        "Melt sugar until caramel with enough flavor.",
        "Add butter, cook briefly.",
        "Add boiled liquid cream. Reboil briefly.",
        "Transfer to basin in bain-marie of ice cubes."
      ],
      derivatives: [],
      similar: ["Chocolate Sauce"],
      recipe: "In a saucepan, melt 100 g of powdered sugar; cook until caramel has enough flavor. Cook it with 20 g of butter, preferably semi-salted, then add 120 g of boiled liquid cream. Boil again for a few moments and remove to a basin immersed in a double boiler of ice cubes."
    },

    "Blackcurrant": {
      name: "Blackcurrant Sauce (Cassis)",
      nameFr: "Sauce au Cassis",
      category: "Dessert Sauces",
      motherSauce: "—",
      type: "Dessert",
      temperature: "Cold",
      cuisine: "French",
      baseStock: "Fruit",
      texture: "Smooth, Liquid",
      difficulty: "Easy",
      time: "15 min",
      classic: "Classic",
      stability: "High",
      pairingsWith: ["ice cream", "panna cotta", "cheesecake", "sorbet"],
      ingredients: {
        base: ["blackcurrants (250g)", "sugar cubes (about 10)"],
        aromatics: [],
        acid: ["lemon juice (1)"],
        finish: ["water (7cl)"]
      },
      technique: [
        "Melt sugar cubes in 7cl water, boil until syrup forms.",
        "Rinse and dry blackcurrants, crush in blender.",
        "Pass through fine sieve with pestle. Mix syrup with purée. Add lemon juice."
      ],
      derivatives: [],
      similar: ["Caramel Sauce", "Chocolate Sauce"],
      recipe: "Place about ten sugar cubes in a saucepan with 7 cl of water; melt and then boil until a syrup forms. Rinse 250 g of blackcurrants under cold water, dry them, and crush in a blender. Pass the resulting purée through a fine sieve, pressing with a pestle. Mix the syrup with the fruit purée, adding the juice of 1 lemon."
    },

    "Chocolate": {
      name: "Chocolate Sauce",
      nameFr: "Sauce Chocolat",
      category: "Dessert Sauces",
      motherSauce: "—",
      type: "Dessert",
      temperature: "Hot/Cold",
      cuisine: "French",
      baseStock: "Chocolate",
      texture: "Smooth, Liquid",
      difficulty: "Easy",
      time: "20 min",
      classic: "Classic",
      stability: "High",
      pairingsWith: ["ice cream", "profiteroles", "pears", "crêpes", "mousse"],
      ingredients: {
        base: ["dark chocolate, chopped (130g)", "water (25cl)", "heavy cream (12.5cl)"],
        aromatics: [],
        acid: [],
        finish: ["granulated sugar (70g)"]
      },
      technique: [
        "Combine chocolate, water, sugar and cream in saucepan.",
        "Bring to boil over medium heat, stirring.",
        "Reduce over low heat until sauce coats back of spoon.",
        "Cool to room temperature."
      ],
      derivatives: [],
      similar: ["Caramel Sauce"],
      recipe: "Over medium heat, bring to a boil while stirring 130 g of chopped chocolate, 25 cl of water, 70 g of granulated sugar, and 12.5 cl of heavy cream. Reduce over low heat. Stir until the sauce coats the back of a spoon. Let cool to room temperature."
    },

    "Aurora": {
      name: "Aurora Sauce",
      nameFr: "Sauce Aurore",
      category: "White Sauces",
      motherSauce: "Velouté (poultry)",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Poultry stock",
      texture: "Smooth, Pink",
      difficulty: "Medium",
      time: "30 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["poultry", "eggs", "fish", "sweetbreads"],
      ingredients: {
        base: ["supreme sauce (50cl)"],
        aromatics: [],
        acid: [],
        finish: ["tomato fondue, very tight (50cl)"]
      },
      technique: [
        "Prepare supreme sauce.",
        "Add very tight tomato fondue.",
        "Strain through sieve cheesecloth."
      ],
      derivatives: [],
      similar: ["Supreme", "Albufera"],
      recipe: "Add 50 cl of very tight tomato fondue to 1/2 litre of supreme sauce. Strain through a sieve cheesecloth."
    },

    "Albufera": {
      name: "Albufera Sauce",
      nameFr: "Sauce Albufera",
      category: "White Sauces",
      motherSauce: "Velouté (poultry)",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Poultry stock",
      texture: "Smooth, Creamy",
      difficulty: "Hard",
      time: "45 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["poultry", "fish", "sweetbreads"],
      ingredients: {
        base: ["supreme sauce (50cl)"],
        aromatics: ["red bell pepper, seeded, strips (150g)", "butter (50g + 150g)"],
        acid: [],
        finish: ["light meat glaze (5 tbsp)"]
      },
      technique: [
        "Sweat pepper strips in 50g butter. Cool, blend, add 150g butter, strain through fine sieve (pepper butter).",
        "To supreme sauce, add meat glaze and 1 tbsp pepper butter.",
        "Strain through muslin-lined chinois."
      ],
      derivatives: [],
      similar: ["Supreme", "Aurora"],
      recipe: "Prepare a supreme sauce. Sweat 150 g of seeded bell pepper, cut into strips, in 50 g of butter. Let cool. Grind the pepper in a blender. Add 150 g of butter and strain through a fine sieve. To 50 cl of supreme sauce, add 5 tablespoons of light meat glaze and 1 tablespoon of pepper butter. Strain through a chinois lined with muslin."
    },

    "Bercy Fish": {
      name: "Bercy Sauce (Fish)",
      nameFr: "Sauce Bercy (Poisson)",
      category: "White Sauces",
      motherSauce: "Velouté (fish)",
      type: "Roux-based",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Fish stock",
      texture: "Smooth",
      difficulty: "Medium",
      time: "25 min",
      classic: "Escoffier",
      stability: "Medium",
      pairingsWith: ["fish", "seafood"],
      ingredients: {
        base: ["fish velouté (20cl)", "fish fumet (10cl)", "white wine (10cl)"],
        aromatics: ["shallots (3–4), finely chopped"],
        acid: [],
        finish: ["butter, softened (50g)", "parsley, chopped", "salt", "pepper"]
      },
      technique: [
        "Sweat shallots in butter without coloring.",
        "Deglaze with white wine and fish fumet, reduce by half.",
        "Add fish velouté, boil briefly over high heat.",
        "Off heat, swirl in softened butter. Add chopped parsley. Season."
      ],
      derivatives: ["Marinière"],
      similar: ["Normandy", "Cardinal", "Saint-Malo"],
      recipe: "Peel and finely chop 3 or 4 shallots; sweat them gently in 1 tablespoon of butter without allowing them to color. Deglaze with 10 cl of white wine and 10 cl of fish fumet, and reduce by half. Add 20 cl of fish velouté and boil briefly over high heat. Chop some parsley. Off the heat, incorporate 50 g of softened butter, then swirl. Finally, add the chopped parsley, season with salt and pepper."
    },

    "Diable": {
      name: "Diable Sauce",
      nameFr: "Sauce Diable",
      category: "Brown Sauces",
      motherSauce: "Demi-glace",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Demi-glace",
      texture: "Smooth",
      difficulty: "Medium",
      time: "25 min",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["grilled chicken", "grilled meats", "offal"],
      ingredients: {
        base: ["tomatoed demi-glace (20cl)"],
        aromatics: ["shallot, finely chopped (1 tbsp)", "white wine (15cl)", "vinegar (1 tbsp)", "thyme (1 sprig)", "bay leaf (1/4)"],
        acid: ["freshly ground pepper (generous pinch)"],
        finish: ["fine herbs, chopped (1 tbsp)"]
      },
      technique: [
        "Reduce wine, vinegar, shallot, thyme, bay, pepper by two-thirds.",
        "Add tomatoed demi-glace, reduce 5 min over low heat.",
        "Strain through chinois. Add chopped fine herbs at last moment."
      ],
      derivatives: [],
      similar: ["Robert", "Sainte-Menehould"],
      recipe: "Mix 15 cl of dry white wine, 1 tablespoon of vinegar, 1 tablespoon of finely chopped shallot, 1 sprig of thyme, 1/4 bay leaf, and a generous pinch of freshly ground pepper. Reduce by two-thirds. Add 20 cl of tomatoed demi-glace and let reduce for 5 minutes over low heat. Strain through a chinois. At the last moment, add 1 tablespoon of chopped fine herbs."
    },

    "Poivrade": {
      name: "Poivrade Sauce",
      nameFr: "Sauce Poivrade",
      category: "Brown Sauces",
      motherSauce: "Espagnole / Game",
      type: "Reduction",
      temperature: "Hot",
      cuisine: "French",
      baseStock: "Demi-glace / Game",
      texture: "Smooth",
      difficulty: "Hard",
      time: "1 hour",
      classic: "Escoffier",
      stability: "High",
      pairingsWith: ["venison", "game", "wild boar", "hare"],
      ingredients: {
        base: ["demi-glace or game stock (1L)"],
        aromatics: ["carrot tops (150g)", "onions (100g)", "fresh pork belly (100g)", "celery (50g)", "thyme (1 sprig)", "bay leaf (1/2)"],
        acid: ["vinegar (30cl)", "marinade (20cl + extra for finishing)"],
        finish: ["peppercorns (10, crushed)", "butter", "cayenne"]
      },
      technique: [
        "Dice mirepoix. Sweat 20 min in butter with thyme, bay, pepper.",
        "Add vinegar and marinade, reduce by half.",
        "Add demi-glace/game stock, simmer 30 min.",
        "Add crushed peppercorns, infuse 5 min. Adjust with marinade. Strain through fine chinois. Tamponner."
      ],
      derivatives: ["Grand Veneur"],
      similar: ["Grand Veneur"],
      recipe: "Dice 150 g of carrot tops, 100 g of onions, and 100 g of fresh pork belly; slice 50 g of celery stalks. Sweat for 20 minutes with 30 g of butter, 1 sprig of thyme, 1/2 bay leaf, and ground pepper (mignonnette). Add 30 cl of vinegar and 20 cl of marinade, then reduce by half. Add 1 litre of demi-glace or lightly thickened brown game stock (depending on use) and simmer gently for 30 minutes. Crush about ten peppercorns, add to the sauce, and let infuse for 5 minutes. Adjust creaminess if needed with a little marinade. Strain through a fine chinois and tamponner."
    }
  }
};
