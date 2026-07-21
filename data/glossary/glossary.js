// build 1.5.2 — 2026-07-21
// Glossary data — culinary terms and definitions (bilingual EN/UK, UK fields optional).
// Each entry: { term_en, term_uk, defs: [ { def_en, def_uk }, ... ] }
// tf()-style fallback: if term_uk / def_uk is missing, UI shows the _en value.

const GLOSSARY = [
  {
    term_en: "Aerate",
    term_uk: "Аерувати",
    fr: "aérer",
    defs: [
      { def_en: "To whisk vigorously, incorporating air to lighten a mixture.",
        def_uk: "Енергійно збивати, вводячи повітря, щоб полегшити консистенцію суміші." }
    ]
  },
  {
    term_en: "Anglaise",
    term_uk: "Англез",
    fr: "anglaise",
    defs: [
      { def_en: "To cook à l'Anglaise means to cook plainly in water.",
        def_uk: "Готувати «по-англійськи» означає варити у простій воді без приправ." },
      { def_en: "A preparation of beaten eggs, oil and seasoning.",
        def_uk: "Суміш збитих яєць, олії та приправ." }
    ]
  },
  {
    term_en: "Aromatic",
    term_uk: "Ароматика",
    fr: "aromate",
    defs: [
      { def_en: "A fragrant ingredient (herb, plant or root) used to introduce a flavor and aroma to an ingredient or dish.",
        def_uk: "Запашний інгредієнт (трава, рослина чи корінь), що використовується для надання аромату та смаку продукту чи страві." }
    ]
  },
  {
    term_en: "Baba-moulds",
    term_uk: "Форми для баби",
    fr: "moule à baba",
    defs: [
      { def_en: "A kind of small deep cylindrical mould, slightly wider at the top than at the bottom.",
        def_uk: "Невелика глибока циліндрична форма, трохи ширша зверху, ніж знизу." }
    ]
  },
  {
    term_en: "Bain-Marie",
    term_uk: "Бен-марі",
    fr: "bain-marie",
    defs: [
      { def_en: "A hot-water bath in which utensils containing various culinary preparations are immersed to keep warm, or for the purpose of poaching or cooking.",
        def_uk: "Гаряча водяна баня, в яку занурюють посуд із кулінарними стравами для підтримання тепла або для варіння на парі й повільного приготування." }
    ]
  },
  {
    term_en: "Beurre Manié",
    term_uk: "Бер-маньє",
    fr: "beurre manié",
    defs: [
      { def_en: "Butter that has been softened by hand and mixed with flour; it is used to thicken a sauce that is too liquid.",
        def_uk: "Масло, розм'якшене вручну і змішане з борошном; використовується для загущення надто рідкого соусу." }
    ]
  },
  {
    term_en: "Bind",
    term_uk: "Зв'язувати",
    fr: "lier",
    defs: [
      { def_en: "To give body and gloss to a sauce or a soup, essentially by adding the yolk of an egg.",
        def_uk: "Надавати густоти та блиску соусу чи супу, як правило, додаючи яєчний жовток." }
    ]
  },
  {
    term_en: "Blanch",
    term_uk: "Бланшувати",
    fr: "blanchir",
    defs: [
      { def_en: "To undertake the first stage of cooking vegetables or meat in boiling or simmering water, starting either from hot or cold. Blanching helps to tenderize the food and fix the colour.",
        def_uk: "Проводити перший етап приготування овочів чи м'яса в кип'ячій або майже кип'ячій воді, починаючи з гарячої або холодної води. Бланшування допомагає пом'якшити продукт і закріпити колір." }
    ]
  },
  {
    term_en: "Bouquet Garni",
    term_uk: "Букет гарні",
    fr: "bouquet garni",
    defs: [
      { def_en: "A small bundle consisting of thyme, bay leaves, sprigs of parsley and celery sticks, wrapped in a green leek leaf or piece of muslin and tied with string. A thin slice of belly pork is also sometimes included. The bundle is added during cooking to increase the flavour of a dish.",
        def_uk: "Невеликий пучок із чебрецю, лаврового листя, гілочок петрушки та стебел селери, загорнутий у зелений листок цибулі-порею або марлю і перев'язаний ниткою. Іноді додають тонкий шматочок сирокопченої грудинки. Пучок кладуть під час варіння, щоб посилити аромат страви." }
    ]
  },
  {
    term_en: "Brown",
    term_uk: "Підрум'янювати",
    fr: "colorer",
    defs: [
      { def_en: "To cook ingredients or a dish very gently until attractively golden on the surface.",
        def_uk: "Готувати продукти чи страву на повільному вогні, доки поверхня не набуде привабливого золотистого кольору." }
    ]
  },
  {
    term_en: "Brunoise",
    term_uk: "Брюнуаз",
    fr: "brunoise",
    defs: [
      { def_en: "To cut a product into small dice.",
        def_uk: "Нарізати продукт дрібними кубиками." },
      { def_en: "Vegetables, usually firm-textured, that have been very precisely chopped into 2-3 mm (1/8 inch) dice.",
        def_uk: "Овочі, зазвичай щільної текстури, дуже точно нарізані кубиками 2-3 мм." }
    ]
  },
  {
    term_en: "Caramelize",
    term_uk: "Карамелізувати",
    fr: "caraméliser",
    defs: [
      { def_en: "To prolong the cooking of meat juices in order to obtain a flavour that is as intense as possible.",
        def_uk: "Продовжувати варіння м'ясних соків, щоб отримати максимально насичений смак." },
      { def_en: "To heat sugar until it becomes a golden brown liquid.",
        def_uk: "Нагрівати цукор, доки він не перетвориться на золотисто-коричневу рідину." }
    ]
  },
  {
    term_en: "Chill",
    term_uk: "Охолоджувати",
    fr: "refroidir",
    defs: [
      { def_en: "To cool a hot liquid or solid quickly to a low temperature.",
        def_uk: "Швидко охолоджувати гарячу рідину чи тверду страву до низької температури." }
    ]
  },
  {
    term_en: "Chinois",
    term_uk: "Шинуа",
    fr: "chinois",
    defs: [
      { def_en: "A fine-mesh conical strainer through which a mixture is passed to remove any large elements and ensure a smooth consistency.",
        def_uk: "Конічне сито з дрібною сіткою, крізь яке пропускають суміш, щоб прибрати великі частинки і забезпечити однорідну консистенцію." }
    ]
  },
  {
    term_en: "Clarified Butter",
    term_uk: "Перетоплене (освітлене) масло",
    fr: "beurre clarifié",
    defs: [
      { def_en: "Butter that has been melted over a very low heat or in a bain-marie to separate its impurities, which either sink or rise. The resulting butter is skimmed, then carefully ladled into a container.",
        def_uk: "Масло, розтоплене на дуже слабкому вогні або на водяній бані для відокремлення домішок, які осідають або спливають. Отримане масло знімають з поверхні і обережно переливають у ємність, оминаючи домішки, що осіли на дні." }
    ]
  },
  {
    term_en: "Clarify",
    term_uk: "Освітлювати",
    fr: "clarifier",
    defs: [
      { def_en: "To separate the impurities from butter to make it purer, more delicate and easier to digest.",
        def_uk: "Відокремлювати домішки від масла, щоб зробити його чистішим, делікатнішим і легшим для травлення." },
      { def_en: "To add egg whites to a jus or a stock in order to make it clear.",
        def_uk: "Додавати яєчні білки до соку від смаження чи бульйону, щоб зробити його прозорим." }
    ]
  },
  {
    term_en: "Deglaze",
    term_uk: "Деглазувати",
    fr: "déglacer",
    defs: [
      { def_en: "To dissolve the crusty cooking residue left in the bottom of a pan by adding water, wine or stock.",
        def_uk: "Розчиняти пригорілі частинки на дні сковороди, додаючи воду, вино чи бульйон." }
    ]
  },
  {
    term_en: "Degraisser",
    term_uk: "Дегресер (знежирювати)",
    fr: "dégraisser",
    defs: [
      { def_en: "A French term meaning to remove excess fat from an ingredient, liquid or a dish.",
        def_uk: "Французький термін, що означає видаляти зайвий жир з продукту, рідини чи страви." }
    ]
  },
  {
    term_en: "Demi-Glace",
    term_uk: "Дем-гляс",
    fr: "demi-glace",
    defs: [
      { def_en: "A rich, glossy brown, reduced sauce, typically flavoured with wine.",
        def_uk: "Насичений глянцевий коричневий уварений соус, зазвичай ароматизований вином." }
    ]
  },
  {
    term_en: "Discard",
    term_uk: "Викидати (непотрібне)",
    fr: "jeter",
    defs: [
      { def_en: "To throw away any element or ingredient no longer required, or any inedible waste.",
        def_uk: "Викидати будь-який елемент чи інгредієнт, що більше не потрібен, або неїстівні відходи." }
    ]
  },
  {
    term_en: "Duxelles",
    term_uk: "Дюксель",
    fr: "duxelles",
    defs: [
      { def_en: "A mixture of mushrooms cut into very fine dice and flavoured with aromatic herbs; an excellent base for making stuffings.",
        def_uk: "Суміш грибів, нарізаних дуже дрібними кубиками і приправлених ароматними травами; чудова основа для начинок." }
    ]
  },
  {
    term_en: "Filter",
    term_uk: "Фільтрувати",
    fr: "filtrer",
    defs: [
      { def_en: "To purify a more or less liquid mixture by passing it through a chinois or fine sieve.",
        def_uk: "Очищати більш-менш рідку суміш, пропускаючи її через шинуа або дрібне сито." }
    ]
  },
  {
    term_en: "Fine Herbes",
    term_uk: "Фін-зерб",
    fr: "fines herbes",
    defs: [
      { def_en: "A classic French blend of fresh herbs, usually including parsley, tarragon, chervil and chives; used to flavour egg, dairy and seafood dishes.",
        def_uk: "Класична французька суміш свіжих трав, зазвичай петрушки, естрагону, кервелю та цибулі-шніт; використовується для ароматизації яєчних, молочних страв та морепродуктів." }
    ]
  },
  {
    term_en: "Flamber",
    term_uk: "Фламбувати",
    fr: "flamber",
    defs: [
      { def_en: "A French term meaning to pour alcohol over food and ignite it; this is often done at the table to create a spectacle for the diners while enhancing the flavour of the dish.",
        def_uk: "Французький термін, що означає полити страву алкоголем і підпалити її; часто робиться прямо за столом для ефектного видовища і водночас посилення смаку страви." }
    ]
  },
  {
    term_en: "Fumet",
    term_uk: "Фюме",
    fr: "fumet",
    defs: [
      { def_en: "Very full-bodied cooking juices made exclusively from fish and game.",
        def_uk: "Дуже насичений відвар (концентрований бульйон), приготований виключно з риби та дичини." }
    ]
  },
  {
    term_en: "Giblets",
    term_uk: "Тельбухи (потрухи птиці)",
    fr: "abattis",
    defs: [
      { def_en: "The specific name for poultry offal: liver, gizzard, heart, feet, comb, etc.",
        def_uk: "Спеціальна назва для субпродуктів птиці: печінка, шлунок, серце, лапки, гребінець тощо." }
    ]
  },
  {
    term_en: "Glaze",
    term_uk: "Глазурувати",
    fr: "glacer",
    defs: [
      { def_en: "To cook vegetables in a little water with butter and sugar to give them a shiny surface. Vegetables glazed à brun are cooked until slightly caramelized to achieve a darker surface coloration; those cooked à blanc are not caramelized at all.",
        def_uk: "Готувати овочі в невеликій кількості води з маслом і цукром, щоб надати їм блискучої поверхні. Овочі, глазуровані «а брюн», готують до легкої карамелізації для темнішого відтінку поверхні; «а блан» — без карамелізації." }
    ]
  },
  {
    term_en: "Incorporate",
    term_uk: "Вводити (в суміш)",
    fr: "incorporer",
    defs: [
      { def_en: "To mix, introduce or blend an ingredient into a mixture.",
        def_uk: "Змішувати, вводити чи поєднувати інгредієнт із сумішшю." }
    ]
  },
  {
    term_en: "Infuse",
    term_uk: "Настоювати",
    fr: "infuser",
    defs: [
      { def_en: "To release flavours into a liquid (ideally just boiled) by allowing aromatic ingredients to steep in it.",
        def_uk: "Вивільняти аромати в рідину (в ідеалі щойно закип'ячену), дозволяючи ароматичним інгредієнтам настоюватися в ній." }
    ]
  },
  {
    term_en: "Ingredients",
    term_uk: "Інгредієнти",
    fr: "ingrédients",
    defs: [
      { def_en: "The items required for making a recipe, usually specified in exact amounts for a certain number of servings.",
        def_uk: "Складові, необхідні для приготування рецепту, зазвичай зазначені в точних кількостях для певної кількості порцій." }
    ]
  },
  {
    term_en: "Intensify",
    term_uk: "Посилювати (смак)",
    fr: "corser",
    defs: [
      { def_en: "To boost the flavour of a dish by reducing it over heat, or by adding aromatic ingredients that act as flavour enhancers.",
        def_uk: "Підсилювати смак страви шляхом уварювання на вогні або додаванням ароматичних інгредієнтів, які діють як підсилювачі смаку." }
    ]
  },
  {
    term_en: "Jellify",
    term_uk: "Желювати",
    fr: "gélifier",
    defs: [
      { def_en: "To add gelatine or agar-agar to give a softer texture to certain mixtures that have a tendency to go hard at room temperature or when chilled.",
        def_uk: "Додавати желатин або агар-агар, щоб надати м'якшу текстуру сумішам, які мають тенденцію тверднути за кімнатної температури або в охолодженому вигляді." }
    ]
  },
  {
    term_en: "Juices",
    term_uk: "Соки (м'ясні)",
    fr: "jus",
    defs: [
      { def_en: "The liquid that is released during the cooking of meat, poultry and certain vegetables. These juices are precious because they contain the very essence of the item's flavours and aromas.",
        def_uk: "Рідина, що виділяється під час приготування м'яса, птиці та деяких овочів. Ці соки цінні, оскільки містять саму суть смаку й аромату продукту." }
    ]
  },
  {
    term_en: "Julienne",
    term_uk: "Жульєн",
    fr: "julienne",
    defs: [
      { def_en: "To cut a product into match-shaped rods.",
        def_uk: "Нарізати продукт тонкою соломкою." },
      { def_en: "Vegetables cut into very thin sticks.",
        def_uk: "Овочі, нарізані дуже тонкими соломинками." }
    ]
  },
  {
    term_en: "Lard",
    term_uk: "Шпигувати",
    fr: "larder",
    defs: [
      { def_en: "To thread thin strips of bacon or ham through certain kinds of meat or fish to give them more flavour and succulence.",
        def_uk: "Протягувати тонкі смужки бекону чи шинки крізь певні види м'яса або риби, щоб надати їм більше смаку та соковитості." }
    ]
  },
  {
    term_en: "Let Down",
    term_uk: "Розводити (соус)",
    fr: "détendre",
    defs: [
      { def_en: "To add a liquid to a stock or a sauce to make it runnier.",
        def_uk: "Додавати рідину до бульйону чи соусу, щоб зробити його рідшим." }
    ]
  },
  {
    term_en: "Mirepoix",
    term_uk: "Мірпуа",
    fr: "mirepoix",
    defs: [
      { def_en: "[TODO: add definition — source only referenced \"see No. 228\"]",
        def_uk: "[TODO: додати визначення — у джерелі лише посилання «див. № 228»]" }
    ]
  },
  {
    term_en: "Mise-en-place",
    term_uk: "Мізан пляс",
    fr: "mise en place",
    defs: [
      { def_en: "A general name given to those elementary preparations which are constantly resorted to during the various stages of most culinary operations.",
        def_uk: "Загальна назва елементарних підготовчих операцій, до яких постійно вдаються на різних етапах більшості кулінарних процесів." }
    ]
  },
  {
    term_en: "Monter au Beurre",
    term_uk: "Монте о бер",
    fr: "monter au beurre",
    defs: [
      { def_en: "To finish with butter; this is usually done to sauces by whisking in small amounts of cold butter to make them smoother.",
        def_uk: "«Завершувати маслом» — зазвичай застосовується до соусів: вбивати невеликими порціями холодне масло, щоб зробити соус гладкішим." }
    ]
  },
  {
    term_en: "Muslin",
    term_uk: "Марля",
    fr: "étamine",
    defs: [
      { def_en: "A piece of fine cloth (also known as cheesecloth) through which liquids such as sauces and stocks are filtered and strained.",
        def_uk: "Шматок тонкої тканини (також відомої як сирна тканина), крізь яку фільтрують і проціджують такі рідини, як соуси та бульйони." }
    ]
  },
  {
    term_en: "Nap",
    term_uk: "Наппе",
    fr: "napper",
    defs: [
      { def_en: "To coat food evenly with a sauce.",
        def_uk: "Рівномірно покривати страву соусом." }
    ]
  },
  {
    term_en: "Paysanne",
    term_uk: "Пейзан",
    fr: "paysanne",
    defs: [
      { def_en: "To cut a product into triangles.",
        def_uk: "Нарізати продукт трикутниками." }
    ]
  },
  {
    term_en: "Pepper",
    term_uk: "Перець (горошком)",
    fr: "poivre",
    defs: [
      { def_en: "Small dried berries available as black, white or pink peppercorns; they should be freshly ground from a pepper mill or freshly cracked using a mortar and pestle.",
        def_uk: "Дрібні сушені ягоди, доступні як чорний, білий чи рожевий перець горошком; його слід свіжомолоти в млинку для перцю або свіжороздавлювати в ступці." }
    ]
  },
  {
    term_en: "Poivre Mignonette",
    term_uk: "Пуавр міньйонет",
    fr: "poivre mignonette",
    defs: [
      { def_en: "The French term for freshly cracked peppercorns.",
        def_uk: "Французький термін для свіжороздавленого перцю горошком." }
    ]
  },
  {
    term_en: "Reduce",
    term_uk: "Уварювати (редукувати)",
    fr: "réduire",
    defs: [
      { def_en: "To boil off water or other liquid, often from a sauce, in order to concentrate the flavour and aromas.",
        def_uk: "Випарювати воду чи іншу рідину, часто з соусу, щоб зконцентрувати смак і аромати." }
    ]
  },
  {
    term_en: "Roux",
    term_uk: "Ру",
    fr: "roux",
    defs: [
      { def_en: "A mixture of flour cooked in fat, which forms the base for a great number of cooked sauces.",
        def_uk: "Суміш борошна, обсмаженого в жирі, що є основою для великої кількості варених соусів." }
    ]
  },
  {
    term_en: "Season",
    term_uk: "Приправляти",
    fr: "assaisonner",
    defs: [
      { def_en: "To add condiments (usually salt and pepper) to a dish to bring out its flavour and aromas.",
        def_uk: "Додавати приправи (зазвичай сіль і перець) до страви, щоб розкрити її смак і аромати." }
    ]
  },
  {
    term_en: "Separate",
    term_uk: "Відокремлювати (білок від жовтка)",
    fr: "séparer",
    defs: [
      { def_en: "To divide the white of a raw egg from the yolk as you remove it from the shell.",
        def_uk: "Відділяти білок сирого яйця від жовтка під час вилучення яйця зі шкаралупи." }
    ]
  },
  {
    term_en: "Shred",
    term_uk: "Шаткувати",
    fr: "ciseler",
    defs: [
      { def_en: "To cut vegetables, such as cabbage, into fine strips.",
        def_uk: "Нарізати овочі, наприклад капусту, тонкими смужками." }
    ]
  },
  {
    term_en: "Simmer",
    term_uk: "Варити на повільному вогні",
    fr: "frémir",
    defs: [
      { def_en: "To cook very gently in liquid that is on the point of boiling; the surface will appear to be trembling.",
        def_uk: "Готувати дуже повільно в рідині, яка перебуває на межі кипіння; поверхня при цьому ледь тремтить." }
    ]
  },
  {
    term_en: "Skim",
    term_uk: "Знімати піну/жир",
    fr: "écumer",
    defs: [
      { def_en: "To remove the fat or foam that rises to the surface of a liquid during cooking; a skimmer or a ladle may be used for doing this.",
        def_uk: "Прибирати жир або піну, що піднімається на поверхню рідини під час готування; для цього можна використати шумівку чи ополоник." }
    ]
  },
  {
    term_en: "Skin",
    term_uk: "Знімати шкірку",
    fr: "monder",
    defs: [
      { def_en: "To immerse certain vegetables or fruit such as tomatoes in boiling water for a moment in order to remove the very thin outer covering.",
        def_uk: "Занурювати певні овочі чи фрукти, наприклад помідори, на мить у кип'ячу воду, щоб зняти дуже тонку зовнішню шкірку." }
    ]
  },
  {
    term_en: "Slice",
    term_uk: "Нарізати скибками",
    fr: "trancher",
    defs: [
      { def_en: "To cut meat, vegetables or fruit into thin, flat pieces of the same size.",
        def_uk: "Нарізати м'ясо, овочі чи фрукти на тонкі, пласкі шматочки однакового розміру." }
    ]
  },
  {
    term_en: "Stock",
    term_uk: "Бульйон (фонд)",
    fr: "fond",
    defs: [
      { def_en: "A flavoured liquid made by gently heating water, bones and vegetables; it forms the basis of many sauces and soups.",
        def_uk: "Ароматна рідина, отримана повільним нагріванням води, кісток та овочів; є основою для багатьох соусів і супів." }
    ]
  },
  {
    term_en: "Strain",
    term_uk: "Проціджувати",
    fr: "filtrer",
    defs: [
      { def_en: "To pass a liquid mixture through a chinois in order to separate out any solid matter.",
        def_uk: "Пропускати рідку суміш крізь шинуа, щоб відокремити тверді частинки." }
    ]
  },
  {
    term_en: "Strip",
    term_uk: "Обривати листя",
    fr: "effeuiller",
    defs: [
      { def_en: "To separate the leaves of plants and herbs from their stalks.",
        def_uk: "Відокремлювати листя рослин і трав від стебел." }
    ]
  },
  {
    term_en: "Stud",
    term_uk: "Шпигувати (спеціями)",
    fr: "clouter",
    defs: [
      { def_en: "To push one ingredient into another, such as cloves into an onion.",
        def_uk: "Встромляти один інгредієнт в інший, наприклад, гвоздику в цибулину." }
    ]
  },
  {
    term_en: "Sweat",
    term_uk: "Томити (потіти)",
    fr: "suer",
    defs: [
      { def_en: "To heat chopped vegetables very slowly without fat or water in a covered pan so that they release their own liquid.",
        def_uk: "Повільно нагрівати нарізані овочі без жиру чи води в накритій сковороді, щоб вони виділили власну рідину." },
      { def_en: "To cook meat and vegetables over a low heat with a little fat in a covered container to concentrate the flavours.",
        def_uk: "Готувати м'ясо та овочі на слабкому вогні з невеликою кількістю жиру в накритому посуді, щоб зконцентрувати смаки." }
    ]
  },
  {
    term_en: "Trim",
    term_uk: "Обрізати (зачищати)",
    fr: "parer",
    defs: [
      { def_en: "To cut off the unwanted or inedible parts of vegetables and fruit, e.g. leaves, stalks, pips, to improve their appearance.",
        def_uk: "Обрізати непотрібні чи неїстівні частини овочів і фруктів, наприклад листя, стебла, кісточки, щоб покращити їхній вигляд." },
      { def_en: "To remove excess fat from a piece of meat.",
        def_uk: "Видаляти зайвий жир зі шматка м'яса." },
      { def_en: "To cut off the small fins of fish using scissors.",
        def_uk: "Відрізати ножицями дрібні плавники риби." }
    ]
  },
  {
    term_en: "Whisk",
    term_uk: "Збивати (віночком)",
    fr: "fouetter",
    defs: [
      { def_en: "To mix or blend vigorously using a balloon whisk so that the mixture will aerate or become creamy.",
        def_uk: "Енергійно змішувати чи збивати за допомогою кулястого віночка, щоб суміш насичувалася повітрям або ставала кремоподібною." }
    ]
  },
  {
    term_en: "Zest",
    term_uk: "Цедра / цедрувати",
    fr: "zester",
    defs: [
      { def_en: "The coloured outer layer of citrus fruit.",
        def_uk: "Забарвлений зовнішній шар цитрусових." },
      { def_en: "To peel off the thin outer layer of citrus fruit using a zesting tool or a chef's knife.",
        def_uk: "Знімати тонкий зовнішній шар цитрусових за допомогою спеціального інструменту чи кухарського ножа." }
    ]
  },
    {
    term_en: "Arrowroot",
    term_uk: "Аррорут",
    fr: "arrow-root",
    defs: [
      { def_en: "A refined starch obtained from tropical rhizomes, used as a delicate thickening agent for sauces that require a clear, glossy finish.",
        def_uk: "Рафінований крохмаль, отриманий з тропічних кореневищ, використовується як делікатний загусник для соусів, що потребують прозорого глянцевого фінішу." },
      { def_en: "A refined starch extracted from tropical plants, valued for producing clear, glossy sauces without cloudiness.",
        def_uk: "Рафінований крохмаль з тропічних рослин, цінується за здатність надавати соусам прозорість і глянець без каламутності." },
    ]
  },
  {
    term_en: "Agar-Agar",
    term_uk: "Агар-агар",
    fr: "agar-agar",
    defs: [
      { def_en: "A vegetable gelling agent derived from seaweed, occasionally used to stabilize or gel modern sauce preparations.",
        def_uk: "Рослинний желювальний агент, отриманий з водоростей, іноді використовується для стабілізації чи желювання сучасних соусів." },
      { def_en: "A natural gelling agent derived from red seaweed, occasionally used in modern French sauces and culinary preparations.",
        def_uk: "Природний желювальний агент з червоних водоростей, іноді застосовується в сучасних французьких соусах і кулінарних препаратах." },
    ]
  },
  {
    term_en: "Armagnac",
    term_uk: "Арманьяк",
    fr: "armagnac",
    defs: [
      { def_en: "A French grape brandy from Gascony, used to deglaze pans and enrich classic sauces with a deep aromatic character.",
        def_uk: "Французький виноградний бренді з Гасконі, використовується для деглазування сковорід і збагачення класичних соусів глибоким ароматом." },
    ]
  },
  {
    term_en: "Assaisonnement",
    term_uk: "Приправляння (ассезонман)",
    fr: "assaisonnement",
    defs: [
      { def_en: "The seasoning of a preparation with salt, pepper, spices or other flavouring ingredients to achieve a balanced taste.",
        def_uk: "Приправляння препарату сіллю, перцем, спеціями чи іншими смаковими інгредієнтами для досягнення збалансованого смаку." },
    ]
  },
  {
    term_en: "Aromatic Garnish",
    term_uk: "Ароматна гарнітура",
    fr: "garniture aromatique",
    defs: [
      { def_en: "A combination of vegetables, herbs and aromatics cooked to provide the flavour base for stocks, sauces and braised dishes.",
        def_uk: "Суміш овочів, трав і ароматики, приготована для смакової основи бульйонів, соусів і тушкованих страв." },
    ]
  },
  {
    term_en: "Aromatics",
    term_uk: "Ароматика",
    fr: "aromates",
    defs: [
      { def_en: "Herbs, spices and flavouring vegetables used to perfume sauces and other culinary preparations.",
        def_uk: "Трави, спеції та ароматні овочі, що використовуються для ароматизації соусів та інших кулінарних препаратів." },
    ]
  },
  {
    term_en: "Balance",
    term_uk: "Ваги (баланс)",
    fr: "balance",
    defs: [
      { def_en: "A kitchen scale used for accurately weighing ingredients in sauce preparation.",
        def_uk: "Кухонні ваги для точного зважування інгредієнтів під час приготування соусу." },
    ]
  },
  {
    term_en: "Basil",
    term_uk: "Базилік",
    fr: "basilic",
    defs: [
      { def_en: "An aromatic herb valued for its sweet, fresh flavour, commonly used in tomato-based and Mediterranean sauces.",
        def_uk: "Ароматна трава з солодким свіжим смаком, часто використовується в томатних і середземноморських соусах." },
    ]
  },
  {
    term_en: "Bay Leaf",
    term_uk: "Лавровий лист",
    fr: "laurier",
    defs: [
      { def_en: "A fragrant leaf added to stocks, sauces and bouquet garni to impart a subtle herbal aroma.",
        def_uk: "Запашний лист, який додають у бульйони, соуси та букет гарні для тонкого трав'яного аромату." },
    ]
  },
  {
    term_en: "Béchamel",
    term_uk: "Бешамель",
    fr: "béchamel",
    defs: [
      { def_en: "One of the five classical French mother sauces, prepared from white roux and milk.",
        def_uk: "Один з п'яти класичних французьких материнських соусів, готується з білого ру та молока." },
    ]
  },
  {
    term_en: "Beef Stock",
    term_uk: "Яловичий бульйон",
    fr: "bouillon de bœuf",
    defs: [
      { def_en: "A seasoned broth prepared from beef bones and aromatics, used as a foundation for brown sauces.",
        def_uk: "Приправлений бульйон із яловичих кісток та ароматики, основа для коричневих соусів." },
    ]
  },
  {
    term_en: "Beurre",
    term_uk: "Масло (бер)",
    fr: "beurre",
    defs: [
      { def_en: "Butter, one of the fundamental ingredients of French sauce making, used for cooking, emulsifying and finishing.",
        def_uk: "Вершкове масло — один з фундаментальних інгредієнтів французької соусної кухні для готування, емульгування й фінішування." },
    ]
  },
  {
    term_en: "Beurre Clarifié",
    term_uk: "Перетоплене масло (бер-кларіфіє)",
    fr: "beurre clarifié",
    defs: [
      { def_en: "Clarified butter from which water and milk solids have been removed, allowing higher cooking temperatures.",
        def_uk: "Перетоплене масло, з якого видалено воду й молочні тверді частинки, дозволяє готувати за вищих температур." },
    ]
  },
  {
    term_en: "Beurre Colbert",
    term_uk: "Масло Кольбер",
    fr: "beurre Colbert",
    defs: [
      { def_en: "A compound butter traditionally flavoured with parsley and finished with meat glaze, served with grilled meats.",
        def_uk: "Складене масло, традиційно ароматизоване петрушкою і завершене м'ясним глясом, подається з грильованим м'ясом." },
    ]
  },
  {
    term_en: "Beurre Bercy",
    term_uk: "Масло Берсі",
    fr: "beurre Bercy",
    defs: [
      { def_en: "A compound butter flavoured with shallots, parsley and reduced white wine, commonly served with fish.",
        def_uk: "Складене масло, ароматизоване цибулею-шалот, петрушкою й уваром білого вина, зазвичай подається з рибою." },
    ]
  },
  {
    term_en: "Beurre Blanc",
    term_uk: "Бер-блан",
    fr: "beurre blanc",
    defs: [
      { def_en: "A warm butter emulsion made with reduced white wine and vinegar, renowned for its smooth texture.",
        def_uk: "Тепла масляна емульсія з увареного білого вина та оцту, відома своєю гладкою текстурою." },
    ]
  },
  {
    term_en: "Beurre Marchand de Vin",
    term_uk: "Масло Marchand de Vin",
    fr: "beurre Marchand de Vin",
    defs: [
      { def_en: "A compound butter flavoured with red wine reduction, shallots and parsley.",
        def_uk: "Складене масло, ароматизоване уваром червоного вина, цибулею-шалот і петрушкою." },
    ]
  },
  {
    term_en: "Beurre Noisette",
    term_uk: "Бер-нуазет",
    fr: "beurre noisette",
    defs: [
      { def_en: "Butter gently cooked until the milk solids become golden brown, producing a nutty aroma.",
        def_uk: "Масло, обсмажене до золотисто-коричневого кольору молочних часток, дає горіховий аромат." },
    ]
  },
  {
    term_en: "Beurre Noir",
    term_uk: "Бер-нуар",
    fr: "beurre noir",
    defs: [
      { def_en: "Butter cooked until dark brown, usually finished with vinegar or lemon juice.",
        def_uk: "Масло, обсмажене до темно-коричневого кольору, зазвичай завершене оцтом чи лимонним соком." },
    ]
  },
  {
    term_en: "Bigarade",
    term_uk: "Бігарад",
    fr: "bigarade",
    defs: [
      { def_en: "A bitter orange preparation traditionally associated with duck sauces.",
        def_uk: "Препарат з гіркого апельсина, традиційно пов'язаний із соусами до качки." },
    ]
  },
  {
    term_en: "Bisque",
    term_uk: "Біск",
    fr: "bisque",
    defs: [
      { def_en: "A rich, creamy shellfish soup often reduced and employed as the base of refined seafood sauces.",
        def_uk: "Насичений вершковий суп з молюсків/ракоподібних, часто уварюється й використовується як основа вишуканих соусів до морепродуктів." },
    ]
  },
  {
    term_en: "Blender",
    term_uk: "Блендер",
    fr: "blender",
    defs: [
      { def_en: "An electric appliance used to purée and emulsify sauces until perfectly smooth.",
        def_uk: "Електричний прилад для пюрування й емульгування соусів до ідеальної гладкості." },
    ]
  },
  {
    term_en: "Blend",
    term_uk: "Змішувати (міксувати)",
    fr: "mixer",
    defs: [
      { def_en: "To combine ingredients mechanically until a homogeneous texture is obtained.",
        def_uk: "Механічно поєднувати інгредієнти до однорідної текстури." },
    ]
  },
  {
    term_en: "Blue Cheese",
    term_uk: "Блакитний сир",
    fr: "bleu",
    defs: [
      { def_en: "A blue-veined cheese used to prepare rich cream sauces.",
        def_uk: "Сир із блакитними прожилками, використовується для приготування насичених вершкових соусів." },
    ]
  },
  {
    term_en: "Bouillon",
    term_uk: "Бульйон",
    fr: "bouillon",
    defs: [
      { def_en: "A seasoned broth serving as the base for numerous soups and sauces.",
        def_uk: "Приправлений бульйон, що є основою для багатьох супів і соусів." },
    ]
  },
  {
    term_en: "Bouquet",
    term_uk: "Букет (аромат)",
    fr: "bouquet",
    defs: [
      { def_en: "The combined aroma and fragrance of a finished sauce.",
        def_uk: "Сукупний аромат і запах готового соусу." },
    ]
  },
  {
    term_en: "Scald",
    term_uk: "Обшпарювати",
    fr: "ébouillanter",
    defs: [
      { def_en: "To pour boiling water over an ingredient or immerse it briefly in boiling water to facilitate peeling, soften its texture or prepare it for further cooking.",
        def_uk: "Полити продукт кип'ятком або коротко занурити в кип'ячу воду, щоб полегшити чищення, пом'якшити текстуру чи підготувати до подальшого приготування." },
    ]
  },
  {
    term_en: "Seasoning",
    term_uk: "Приправляння",
    fr: "assaisonnement",
    defs: [
      { def_en: "The balanced addition of salt, pepper, herbs, spices or other flavouring ingredients to enhance the taste of a sauce or other preparation.",
        def_uk: "Збалансоване додавання солі, перцю, трав, спецій чи інших смакових інгредієнтів для покращення смаку соусу чи іншого препарату." },
    ]
  },
  {
    term_en: "Shallot",
    term_uk: "Цибуля-шалот",
    fr: "échalote",
    defs: [
      { def_en: "A small, mild-flavoured onion widely used as an aromatic base for classical French sauces and reductions.",
        def_uk: "Невелика цибулина з м'яким смаком, широко використовується як ароматна основа класичних французьких соусів і уварів." },
    ]
  },
  {
    term_en: "Sherry",
    term_uk: "Херес",
    fr: "xérès",
    defs: [
      { def_en: "A fortified wine traditionally incorporated into selected brown, mushroom and cream sauces.",
        def_uk: "Кріплене вино, традиційно додається в окремі коричневі, грибні та вершкові соуси." },
    ]
  },
  {
    term_en: "Sieve",
    term_uk: "Сито",
    fr: "tamis",
    defs: [
      { def_en: "A fine mesh utensil used to sift dry ingredients or strain sauces to achieve a smooth texture.",
        def_uk: "Дрібносітчастий інструмент для просіювання сухих інгредієнтів чи проціджування соусів до гладкої текстури." },
    ]
  },
  {
    term_en: "Siphon",
    term_uk: "Сифон",
    fr: "siphon",
    defs: [
      { def_en: "A pressurised culinary dispenser used to produce light foams and aerated sauces.",
        def_uk: "Кулінарний диспенсер під тиском для отримання легких пін і аерованих соусів." },
    ]
  },
  {
    term_en: "Slice Thinly",
    term_uk: "Тонко нарізати (емінсе)",
    fr: "émincer",
    defs: [
      { def_en: "To cut vegetables, fruits or meats into thin, uniform slices.",
        def_uk: "Нарізати овочі, фрукти чи м'ясо тонкими однорідними скибками." },
    ]
  },
  {
    term_en: "Smooth",
    term_uk: "Гладкий",
    fr: "lisse",
    defs: [
      { def_en: "Describing a sauce that is perfectly homogeneous, free from lumps and silky in texture.",
        def_uk: "Опис соусу, що є абсолютно однорідним, без грудочок і шовковистим за текстурою." },
    ]
  },
  {
    term_en: "Sorrel",
    term_uk: "Щавель",
    fr: "oseille",
    defs: [
      { def_en: "A leafy herb with a naturally acidic flavour, classically used in sauces accompanying fish, eggs and poultry.",
        def_uk: "Листова трава з природньою кислинкою, класично використовується в соусах до риби, яєць і птиці." },
    ]
  },
  {
    term_en: "Soubise",
    term_uk: "Субіз",
    fr: "soubise",
    defs: [
      { def_en: "A classical onion sauce based on Béchamel and slowly cooked onions puréed to a smooth consistency.",
        def_uk: "Класичний цибулевий соус на основі бешамелю й повільно тушкованої, пюрованої цибулі." },
    ]
  },
  {
    term_en: "Spatula",
    term_uk: "Лопатка",
    fr: "spatule",
    defs: [
      { def_en: "A flat kitchen utensil used for stirring, folding, scraping and handling sauces during preparation.",
        def_uk: "Плаский кухонний інструмент для перемішування, згортання, зіскрібання й роботи з соусами під час приготування." },
    ]
  },
  {
    term_en: "Spanish Sauce",
    term_uk: "Іспанський соус (еспаньйол)",
    fr: "espagnole",
    defs: [
      { def_en: "One of the five classical French mother sauces, prepared from brown stock, brown roux, tomato purée and aromatic vegetables.",
        def_uk: "Один з п'яти класичних французьких материнських соусів, готується з коричневого бульйону, коричневого ру, томатного пюре й ароматних овочів." },
    ]
  },
  {
    term_en: "Spinach",
    term_uk: "Шпинат",
    fr: "épinard",
    defs: [
      { def_en: "A leafy green vegetable used fresh or puréed in green sauces and as a garnish.",
        def_uk: "Листовий зелений овоч, використовується свіжим чи пюрованим у зелених соусах та як гарнір." },
    ]
  },
  {
    term_en: "Star Anise",
    term_uk: "Бадьян",
    fr: "anis étoilé",
    defs: [
      { def_en: "An aromatic spice with a liquorice-like flavour, occasionally used in game sauces and reductions.",
        def_uk: "Ароматна спеція з присмаком лакриці, іноді використовується в соусах до дичини та уварах." },
    ]
  },
  {
    term_en: "Starch",
    term_uk: "Крохмаль",
    fr: "amidon",
    defs: [
      { def_en: "A carbohydrate used as a thickening agent in sauces, soups and other culinary preparations.",
        def_uk: "Вуглевод, що використовується як загусник у соусах, супах та інших кулінарних препаратах." },
    ]
  },
  {
    term_en: "Steep",
    term_uk: "Настоювати (інфузувати)",
    fr: "infuser",
    defs: [
      { def_en: "To extract flavour from herbs, spices or aromatics by allowing them to stand in a hot liquid.",
        def_uk: "Витягувати смак з трав, спецій чи ароматики, залишаючи їх у гарячій рідині." },
    ]
  },
  {
    term_en: "Straw Cut",
    term_uk: "Соломка (жульєн)",
    fr: "julienne",
    defs: [
      { def_en: "Ingredients cut into long, thin matchstick strips for use as garnishes or flavouring elements.",
        def_uk: "Інгредієнти, нарізані довгими тонкими смужками-соломкою для гарнірів чи ароматизації." },
    ]
  },
  {
    term_en: "Sucrе",
    term_uk: "Цукор",
    fr: "sucre",
    defs: [
      { def_en: "Sugar used to balance acidity, bitterness or excessive saltiness in selected sauces.",
        def_uk: "Цукор, використовується для балансування кислотності, гіркоти чи надмірної солоності в окремих соусах." },
    ]
  },
  {
    term_en: "Suer",
    term_uk: "Томити (сюер)",
    fr: "suer",
    defs: [
      { def_en: "To cook vegetables gently in butter or fat over low heat without allowing them to brown, in order to soften them and develop their natural sweetness.",
        def_uk: "Готувати овочі повільно в маслі чи жирі на слабкому вогні, не даючи їм підрум'янитися, щоб пом'якшити їх і розвинути природну солодкість." },
    ]
  },
  {
    term_en: "Supreme",
    term_uk: "Сюпрем",
    fr: "suprême",
    defs: [
      { def_en: "A classical derivative of Velouté enriched with cream, traditionally served with poultry.",
        def_uk: "Класична похідна велюте, збагачена вершками, традиційно подається з птицею." },
    ]
  },
  {
    term_en: "Sweetness",
    term_uk: "Солодкість",
    fr: "douceur",
    defs: [
      { def_en: "The perception of sweetness contributing to the balance and harmony of a finished sauce.",
        def_uk: "Відчуття солодкості, що сприяє балансу й гармонії готового соусу." },
    ]
  },
  {
    term_en: "Tapioca",
    term_uk: "Тапіока",
    fr: "tapioca",
    defs: [
      { def_en: "A starch extracted from cassava, occasionally used as a thickening agent in modern culinary applications.",
        def_uk: "Крохмаль з кассави, іноді використовується як загусник у сучасних кулінарних застосуваннях." },
    ]
  },
  {
    term_en: "Tarragon",
    term_uk: "Естрагон",
    fr: "estragon",
    defs: [
      { def_en: "An aromatic herb with a delicate anise flavour, essential in Béarnaise and many butter-based sauces.",
        def_uk: "Ароматна трава з делікатним анісовим смаком, необхідна в беарнезі й багатьох масляних соусах." },
    ]
  },
  {
    term_en: "Tartness",
    term_uk: "Кислинка",
    fr: "acidité",
    defs: [
      { def_en: "The perception of acidity that contributes freshness and balance to a sauce.",
        def_uk: "Відчуття кислотності, що надає свіжості й балансу соусу." },
    ]
  },
  {
    term_en: "Thicken",
    term_uk: "Загущувати",
    fr: "lier",
    defs: [
      { def_en: "To give body and consistency to a sauce by means of roux, beurre manié, liaison, starch or another thickening agent.",
        def_uk: "Надавати густоти й консистенції соусу за допомогою ру, бер-маньє, льєзону, крохмалю чи іншого загусника." },
    ]
  },
  {
    term_en: "Thyme",
    term_uk: "Чебрець",
    fr: "thym",
    defs: [
      { def_en: "An aromatic herb essential to bouquet garni, stocks, braises and numerous classical French sauces.",
        def_uk: "Ароматна трава, необхідна для букета гарні, бульйонів, тушкованих страв і багатьох класичних французьких соусів." },
    ]
  },
  {
    term_en: "Tomato",
    term_uk: "Помідор",
    fr: "tomate",
    defs: [
      { def_en: "A fundamental ingredient in French cookery, used fresh, concassé, puréed or concentrated in numerous classical and regional sauces.",
        def_uk: "Фундаментальний інгредієнт французької кухні, використовується свіжим, консасе, пюрованим чи концентрованим у багатьох соусах." },
    ]
  },
  {
    term_en: "Tomato Concassé",
    term_uk: "Помідор консасе",
    fr: "tomate concassée",
    defs: [
      { def_en: "Tomatoes that have been peeled, seeded and roughly chopped, commonly used in sauces, garnishes and braised dishes.",
        def_uk: "Помідори, очищені від шкірки й насіння та грубо нарізані, використовуються в соусах, гарнірах і тушкованих стравах." },
    ]
  },
  {
    term_en: "Tomato Purée",
    term_uk: "Томатне пюре",
    fr: "purée de tomate",
    defs: [
      { def_en: "A smooth preparation made by cooking and sieving tomatoes, used as the foundation of many tomato-based sauces.",
        def_uk: "Гладкий препарат, отриманий вварюванням і протиранням помідорів, основа багатьох томатних соусів." },
    ]
  },
  {
    term_en: "Tomato Paste",
    term_uk: "Томатна паста",
    fr: "concentré de tomate",
    defs: [
      { def_en: "A concentrated tomato product obtained by prolonged reduction, valued for its colour, richness and depth of flavour.",
        def_uk: "Концентрований томатний продукт, отриманий тривалим уварюванням, цінується за колір, насиченість і глибину смаку." },
    ]
  },
  {
    term_en: "Truffle",
    term_uk: "Трюфель",
    fr: "truffe",
    defs: [
      { def_en: "A highly prized subterranean fungus used to perfume refined sauces, especially those based on demi-glace or cream.",
        def_uk: "Високо цінований підземний гриб, використовується для ароматизації вишуканих соусів, особливо на основі дем-глясу чи вершків." },
    ]
  },
  {
    term_en: "Turmeric",
    term_uk: "Куркума",
    fr: "curcuma",
    defs: [
      { def_en: "A golden-yellow spice occasionally used to provide colour and a mild earthy flavour to contemporary French sauces.",
        def_uk: "Золотисто-жовта спеція, іноді використовується для надання кольору й м'якого землистого смаку сучасним французьким соусам." },
    ]
  },
  {
    term_en: "Turn Through a Sieve",
    term_uk: "Протирати крізь сито (фуле)",
    fr: "fouler",
    defs: [
      { def_en: "To press a preparation through a sieve or tamis using a spoon, ladle or pestle to obtain a fine, smooth texture.",
        def_uk: "Продавлювати препарат крізь сито чи там за допомогою ложки, ополоника чи товкача для отримання тонкої гладкої текстури." },
    ]
  },
  {
    term_en: "Velouté",
    term_uk: "Велюте",
    fr: "velouté",
    defs: [
      { def_en: "One of the five classical French mother sauces, prepared from a white stock thickened with white roux and finished to a smooth, velvety consistency.",
        def_uk: "Один з п'яти класичних французьких материнських соусів, готується з білого бульйону, загущеного білим ру, до гладкої оксамитової консистенції." },
    ]
  },
  {
    term_en: "Velvety",
    term_uk: "Оксамитовий",
    fr: "velouté",
    defs: [
      { def_en: "Describing a sauce with an exceptionally smooth, rich and silky texture.",
        def_uk: "Опис соусу з винятково гладкою, насиченою й шовковистою текстурою." },
      { def_en: "Describing a preparation that is rich, creamy and pleasingly smooth on the palate.",
        def_uk: "Опис препарату, що є насиченим, кремовим і приємно гладким на смак." },
    ]
  },
  {
    term_en: "Venison Marinade",
    term_uk: "Маринад для дичини (пуавраде)",
    fr: "poivrade",
    defs: [
      { def_en: "A classical brown sauce prepared with vinegar, wine, aromatic vegetables and pepper, traditionally served with game.",
        def_uk: "Класичний коричневий соус з оцтом, вином, ароматними овочами й перцем, традиційно подається з дичиною." },
    ]
  },
  {
    term_en: "Verjuice",
    term_uk: "Вержус",
    fr: "verjus",
    defs: [
      { def_en: "The acidic juice of unripe grapes, historically used in French sauces before the widespread adoption of vinegar and lemon juice.",
        def_uk: "Кислий сік недостиглого винограду, історично використовувався у французьких соусах до широкого поширення оцту й лимонного соку." },
    ]
  },
  {
    term_en: "Vermouth",
    term_uk: "Вермут",
    fr: "vermouth",
    defs: [
      { def_en: "An aromatised fortified wine used in selected fish, poultry and cream sauces.",
        def_uk: "Ароматизоване кріплене вино, використовується в окремих рибних, м'ясних (птиця) і вершкових соусах." },
    ]
  },
  {
    term_en: "Vinaigre Balsamique",
    term_uk: "Бальзамічний оцет",
    fr: "vinaigre balsamique",
    defs: [
      { def_en: "Balsamic vinegar used to provide sweetness, acidity and complexity in reductions and vinaigrettes.",
        def_uk: "Бальзамічний оцет, використовується для надання солодкості, кислотності й складності уварам і вінегретам." },
    ]
  },
  {
    term_en: "Vinaigre Blanc",
    term_uk: "Білий оцет",
    fr: "vinaigre blanc",
    defs: [
      { def_en: "White vinegar commonly used in marinades, pickling liquids and emulsified sauces.",
        def_uk: "Білий оцет, широко використовується в маринадах, розсолах і емульгованих соусах." },
    ]
  },
  {
    term_en: "Vinaigre de Vin",
    term_uk: "Винний оцет",
    fr: "vinaigre de vin",
    defs: [
      { def_en: "Wine vinegar, one of the principal acidic ingredients in French vinaigrettes and reductions.",
        def_uk: "Винний оцет — один з головних кислих інгредієнтів французьких вінегретів і уварів." },
    ]
  },
  {
    term_en: "Vinaigre de Xérès",
    term_uk: "Хересний оцет",
    fr: "vinaigre de xérès",
    defs: [
      { def_en: "Sherry vinegar valued for its rich, nutty aroma in vinaigrettes and brown sauces.",
        def_uk: "Хересний оцет, цінується за насичений горіховий аромат у вінегретах і коричневих соусах." },
    ]
  },
  {
    term_en: "Vinaigrette",
    term_uk: "Вінегрет (заправка)",
    fr: "vinaigrette",
    defs: [
      { def_en: "A cold emulsified dressing traditionally prepared from oil, vinegar, salt and pepper, often enhanced with mustard, herbs or shallots.",
        def_uk: "Холодна емульгована заправка, традиційно з олії, оцту, солі й перцю, часто збагачена гірчицею, травами чи цибулею-шалот." },
    ]
  },
  {
    term_en: "Walnut Oil",
    term_uk: "Горіхова олія",
    fr: "huile de noix",
    defs: [
      { def_en: "A fragrant oil obtained from walnuts, particularly valued in cold sauces and vinaigrettes.",
        def_uk: "Ароматна олія з волоських горіхів, особливо цінується в холодних соусах і вінегретах." },
    ]
  },
  {
    term_en: "Water",
    term_uk: "Вода",
    fr: "eau",
    defs: [
      { def_en: "The principal cooking liquid used in the preparation of stocks, court-bouillons and certain sauces.",
        def_uk: "Основна рідина для приготування, використовується для бульйонів, кур-буйонів та деяких соусів." },
    ]
  },
  {
    term_en: "Water Bath",
    term_uk: "Водяна баня",
    fr: "bain-marie",
    defs: [
      { def_en: "A gentle heating method in which a container is placed in hot water to prevent delicate sauces from curdling or overheating.",
        def_uk: "М'який метод нагрівання, коли ємність ставлять у гарячу воду, щоб делікатні соуси не згорталися й не перегрівалися." },
    ]
  },
  {
    term_en: "Whip",
    term_uk: "Збивати",
    fr: "fouetter",
    defs: [
      { def_en: "To beat ingredients vigorously with a whisk in order to blend, aerate or emulsify them.",
        def_uk: "Енергійно збивати інгредієнти віночком, щоб змішати, аерувати чи емульгувати їх." },
    ]
  },
  {
    term_en: "White Pepper",
    term_uk: "Білий перець",
    fr: "poivre blanc",
    defs: [
      { def_en: "Fully ripened peppercorns with the outer skin removed, preferred where a smooth, pale appearance is desired.",
        def_uk: "Повністю дозрілі горошини перцю з видаленою зовнішньою шкіркою, використовується там, де важливий блідий вигляд." },
    ]
  },
  {
    term_en: "White Roux",
    term_uk: "Білий ру",
    fr: "roux blanc",
    defs: [
      { def_en: "A roux cooked only briefly, retaining its pale colour and providing maximum thickening power for white sauces.",
        def_uk: "Ру, обсмажений лише коротко, зберігає блідий колір і дає максимальну загущувальну силу для білих соусів." },
    ]
  },
  {
    term_en: "White Stock",
    term_uk: "Білий бульйон",
    fr: "fond blanc",
    defs: [
      { def_en: "A stock prepared from unroasted bones and aromatic vegetables, forming the basis of veloutés and other delicate sauces.",
        def_uk: "Бульйон з необсмажених кісток і ароматних овочів, основа велюте та інших делікатних соусів." },
    ]
  },
  {
    term_en: "Whole Egg",
    term_uk: "Ціле яйце",
    fr: "œuf entier",
    defs: [
      { def_en: "An egg used in its entirety as a binding, thickening or emulsifying ingredient in selected sauces.",
        def_uk: "Яйце, використане цілком, як зв'язувальний, загущувальний чи емульгувальний інгредієнт в окремих соусах." },
    ]
  },
  {
    term_en: "Wine, Red",
    term_uk: "Вино червоне",
    fr: "vin rouge",
    defs: [
      { def_en: "Red wine used in reductions, marinades and numerous classical brown sauces.",
        def_uk: "Червоне вино, використовується в уварах, маринадах і багатьох класичних коричневих соусах." },
    ]
  },
  {
    term_en: "Wine, White",
    term_uk: "Вино біле",
    fr: "vin blanc",
    defs: [
      { def_en: "White wine commonly used in fish, poultry and cream sauces, as well as for deglazing.",
        def_uk: "Біле вино, широко використовується в рибних, м'ясних (птиця) і вершкових соусах, а також для деглазування." },
    ]
  },
  {
    term_en: "Yogurt",
    term_uk: "Йогурт",
    fr: "yaourt",
    defs: [
      { def_en: "A cultured dairy product occasionally incorporated into light contemporary sauces and dressings.",
        def_uk: "Кисломолочний продукт, іноді додається в легкі сучасні соуси й заправки." },
    ]
  },
  {
    term_en: "Acidity",
    term_uk: "Кислотність",
    fr: "acidité",
    defs: [
      { def_en: "The perception of sourness that contributes freshness, balance and structure to a finished sauce.",
        def_uk: "Відчуття кислоти, що надає свіжості, балансу й структури готовому соусу." },
    ]
  },
  {
    term_en: "Allemande",
    term_uk: "Алеманд",
    fr: "allemande",
    defs: [
      { def_en: "A classical derivative of Velouté enriched with liaison, lemon juice and cream, traditionally served with poultry and veal.",
        def_uk: "Класична похідна велюте, збагачена льєзоном, лимонним соком і вершками, традиційно подається з птицею й телятиною." },
    ]
  },
  {
    term_en: "American Sauce",
    term_uk: "Американський соус (амерікен)",
    fr: "américaine",
    defs: [
      { def_en: "A classical shellfish sauce prepared from tomatoes, white wine, Cognac, aromatics and fish stock, traditionally served with lobster and crayfish.",
        def_uk: "Класичний соус до молюсків/ракоподібних з помідорами, білим вином, коньяком, ароматикою й рибним бульйоном, традиційно подається з омаром і раками." },
    ]
  },
  {
    term_en: "Anchovy",
    term_uk: "Анчоус",
    fr: "anchois",
    defs: [
      { def_en: "A small cured fish used to impart depth, salinity and umami to numerous French sauces.",
        def_uk: "Дрібна солона риба, надає глибини, солоності й умамі багатьом французьким соусам." },
    ]
  },
  {
    term_en: "Aromatic Stock",
    term_uk: "Ароматний бульйон (фюме)",
    fr: "fumet",
    defs: [
      { def_en: "A highly flavoured stock, especially of fish, shellfish or mushrooms, reduced to provide an intense flavour base for delicate sauces.",
        def_uk: "Насичений бульйон, особливо рибний, з молюсків чи грибний, уварений для інтенсивної смакової основи делікатних соусів." },
    ]
  },
  {
    term_en: "Astringency",
    term_uk: "В'яжучість",
    fr: "astringence",
    defs: [
      { def_en: "The drying sensation perceived on the palate, contributing complexity and balance to certain sauces.",
        def_uk: "Відчуття сухості на піднебінні, додає складності й балансу окремим соусам." },
    ]
  },
  {
    term_en: "Balsamic Vinegar",
    term_uk: "Бальзамічний оцет",
    fr: "vinaigre balsamique",
    defs: [
      { def_en: "A vinegar aged from concentrated grape must, used in reductions and vinaigrettes for sweetness and acidity.",
        def_uk: "Оцет, витриманий з концентрованого виноградного сусла, використовується в уварах і вінегретах для солодкості та кислотності." },
    ]
  },
  {
    term_en: "Béarnaise",
    term_uk: "Беарнез",
    fr: "béarnaise",
    defs: [
      { def_en: "A classical emulsified butter sauce flavoured with tarragon, shallots and vinegar reduction, traditionally served with grilled meats.",
        def_uk: "Класичний емульгований масляний соус з естрагоном, цибулею-шалот і уваром оцту, традиційно подається з грильованим м'ясом." },
    ]
  },
  {
    term_en: "Bitterness",
    term_uk: "Гіркота",
    fr: "amertume",
    defs: [
      { def_en: "One of the fundamental taste sensations, contributing depth and balance when present in moderation.",
        def_uk: "Один з фундаментальних смаків, додає глибини й балансу за помірної присутності." },
    ]
  },
  {
    term_en: "Blend Smoothly",
    term_uk: "Розводити (детандр)",
    fr: "détendre",
    defs: [
      { def_en: "To loosen a preparation by gradually incorporating liquid until the desired consistency is achieved.",
        def_uk: "Розслабляти консистенцію препарату, поступово додаючи рідину до бажаної густини." },
    ]
  },
  {
    term_en: "Boiling",
    term_uk: "Кипіння",
    fr: "ébullition",
    defs: [
      { def_en: "The stage at which a liquid reaches its boiling point and produces continuous vigorous bubbles.",
        def_uk: "Стадія, коли рідина досягає точки кипіння й утворює безперервні активні бульбашки." },
    ]
  },
  {
    term_en: "Bouillon de Légumes",
    term_uk: "Овочевий бульйон",
    fr: "bouillon de légumes",
    defs: [
      { def_en: "A vegetable stock prepared from aromatic vegetables and herbs, used as a light base for sauces and soups.",
        def_uk: "Овочевий бульйон з ароматних овочів і трав, легка основа для соусів і супів." },
    ]
  },
  {
    term_en: "Calvados",
    term_uk: "Кальвадос",
    fr: "calvados",
    defs: [
      { def_en: "A Normandy apple brandy used to flavour cream, apple and poultry sauces.",
        def_uk: "Нормандський яблучний бренді, використовується для ароматизації вершкових, яблучних і соусів до птиці." },
    ]
  },
  {
    term_en: "Caper",
    term_uk: "Каперс",
    fr: "câpre",
    defs: [
      { def_en: "The unopened flower bud of Capparis spinosa, preserved in vinegar or salt and used in numerous classical sauces.",
        def_uk: "Нерозкрита квіткова бруньк каперсника, консервована в оцті чи солі, використовується в багатьох класичних соусах." },
    ]
  },
  {
    term_en: "Clove",
    term_uk: "Гвоздика",
    fr: "girofle",
    defs: [
      { def_en: "A strongly aromatic spice used sparingly in stocks, sauces and bouquet garni.",
        def_uk: "Сильно ароматна спеція, використовується помірно в бульйонах, соусах і букеті гарні." },
    ]
  },
  {
    term_en: "Comté",
    term_uk: "Конте",
    fr: "comté",
    defs: [
      { def_en: "A firm French cheese occasionally incorporated into cheese sauces and gratins.",
        def_uk: "Твердий французький сир, іноді додається в сирні соуси й гратени." },
    ]
  },
  {
    term_en: "Corail",
    term_uk: "Корай (ікра ракоподібних)",
    fr: "corail",
    defs: [
      { def_en: "The edible roe of lobster, crayfish or scallops, used to colour and enrich shellfish sauces.",
        def_uk: "Їстівна ікра омара, раків чи гребінців, використовується для забарвлення й збагачення соусів до морепродуктів." },
    ]
  },
  {
    term_en: "Cornstarch",
    term_uk: "Кукурудзяний крохмаль (майзена)",
    fr: "maïzena",
    defs: [
      { def_en: "A refined maize starch used as a quick thickening agent for sauces requiring a glossy finish.",
        def_uk: "Рафінований кукурудзяний крохмаль, швидкий загусник для соусів, що потребують глянцевого фінішу." },
    ]
  },
  {
    term_en: "Crab Stock",
    term_uk: "Крабовий бульйон (фюме з ракоподібних)",
    fr: "fumet de crustacés",
    defs: [
      { def_en: "A concentrated shellfish stock prepared from crustacean shells, forming the basis of refined seafood sauces.",
        def_uk: "Концентрований бульйон з панцирів ракоподібних, основа вишуканих соусів до морепродуктів." },
    ]
  },
  {
    term_en: "Duck Fat",
    term_uk: "Качиний жир",
    fr: "graisse de canard",
    defs: [
      { def_en: "Rendered duck fat used in regional French cuisine and certain traditional sauce preparations.",
        def_uk: "Перетоплений качиний жир, використовується в регіональній французькій кухні й деяких традиційних соусах." },
    ]
  },
  {
    term_en: "Egg Yolk",
    term_uk: "Яєчний жовток",
    fr: "jaune d'œuf",
    defs: [
      { def_en: "The yellow portion of the egg, widely employed as an emulsifier and thickening agent in classical sauces.",
        def_uk: "Жовта частина яйця, широко використовується як емульгатор і загусник у класичних соусах." },
    ]
  },
  {
    term_en: "Egg White",
    term_uk: "Яєчний білок",
    fr: "blanc d'œuf",
    defs: [
      { def_en: "The clear portion of the egg, primarily used in clarification and selected culinary preparations.",
        def_uk: "Прозора частина яйця, використовується переважно для освітлення й окремих кулінарних препаратів." },
    ]
  },
  {
    term_en: "Gooseberry?",
    term_uk: "Аґрус / смородина (грозей)",
    fr: "groseille",
    defs: [
      { def_en: "Redcurrant, occasionally used in fruit sauces accompanying game.",
        def_uk: "Червона смородина, іноді використовується у фруктових соусах до дичини." },
    ]
  },
  {
    term_en: "Horseradish",
    term_uk: "Хрін",
    fr: "raifort",
    defs: [
      { def_en: "A pungent root incorporated into selected cold cream and mayonnaise-based sauces.",
        def_uk: "Гострий корінь, додається в окремі холодні вершкові й майонезні соуси." },
    ]
  },
  {
    term_en: "Leek",
    term_uk: "Цибуля-порей",
    fr: "poireau",
    defs: [
      { def_en: "An aromatic vegetable used in bouquet garni, mirepoix and the preparation of delicate stocks and sauces.",
        def_uk: "Ароматний овоч, використовується в букеті гарні, мірпуа й приготуванні делікатних бульйонів і соусів." },
    ]
  },
  {
    term_en: "Lovage",
    term_uk: "Любисток",
    fr: "livèche",
    defs: [
      { def_en: "An aromatic herb with a pronounced celery flavour, used sparingly in stocks and regional sauces.",
        def_uk: "Ароматна трава з вираженим смаком селери, використовується помірно в бульйонах і регіональних соусах." },
    ]
  },
  {
    term_en: "Umami",
    term_uk: "Умамі",
    fr: "umami",
    defs: [
      { def_en: "The savoury taste associated with glutamates and naturally present in mushrooms, tomatoes, cheeses and meat reductions, contributing depth and complexity to sauces.",
        def_uk: "Пікантний смак, пов'язаний із глутаматами, природньо присутній у грибах, помідорах, сирах і м'ясних уварах, додає соусам глибини й складності." },
    ]
  },
  {
    term_en: "Brandy",
    term_uk: "Бренді (коньяк)",
    fr: "cognac",
    defs: [
      { def_en: "A French grape brandy traditionally used to flambé ingredients, deglaze pans and enrich classical sauces with depth and aroma.",
        def_uk: "Французький виноградний бренді, традиційно використовується для фламбування, деглазування й збагачення класичних соусів глибиною й ароматом." },
    ]
  },
  {
    term_en: "Brown Butter",
    term_uk: "Коричневе масло (бер-нуазет)",
    fr: "beurre noisette",
    defs: [
      { def_en: "Butter gently cooked until its milk solids turn golden brown, producing a characteristic nutty flavour used in numerous classical sauces.",
        def_uk: "Масло, обсмажене до золотисто-коричневого кольору молочних часток, дає характерний горіховий смак, використовується в багатьох класичних соусах." },
    ]
  },
  {
    term_en: "Brown Butter Sauce",
    term_uk: "Соус з коричневого масла (бер-нуар)",
    fr: "beurre noir",
    defs: [
      { def_en: "Butter cooked until dark brown and commonly finished with vinegar or lemon juice to accompany fish, eggs and vegetables.",
        def_uk: "Масло, обсмажене до темно-коричневого кольору, зазвичай завершене оцтом чи лимонним соком, подається з рибою, яйцями й овочами." },
    ]
  },
  {
    term_en: "Brown Stock",
    term_uk: "Коричневий бульйон",
    fr: "fond brun",
    defs: [
      { def_en: "A richly flavoured stock prepared from roasted bones and aromatic vegetables, forming the basis of classical brown sauces.",
        def_uk: "Насичений бульйон з обсмажених кісток і ароматних овочів, основа класичних коричневих соусів." },
    ]
  },
  {
    term_en: "Butter",
    term_uk: "Масло",
    fr: "beurre",
    defs: [
      { def_en: "One of the principal ingredients of French sauce making, used for cooking, emulsifying, enriching and finishing sauces.",
        def_uk: "Один з головних інгредієнтів французької соусної кухні, використовується для готування, емульгування, збагачення й фінішування соусів." },
    ]
  },
  {
    term_en: "Butter Bercy",
    term_uk: "Масло Берсі",
    fr: "beurre Bercy",
    defs: [
      { def_en: "A compound butter flavoured with shallots, parsley and reduced white wine, traditionally served with fish.",
        def_uk: "Складене масло, ароматизоване цибулею-шалот, петрушкою й уваром білого вина, традиційно подається з рибою." },
    ]
  },
  {
    term_en: "Butter Blanc",
    term_uk: "Бер-блан",
    fr: "beurre blanc",
    defs: [
      { def_en: "A warm emulsified butter sauce prepared by whisking cold butter into a reduction of white wine and vinegar.",
        def_uk: "Теплий емульгований масляний соус, приготований збиванням холодного масла в увар білого вина й оцту." },
    ]
  },
  {
    term_en: "Butter Clarified",
    term_uk: "Перетоплене масло",
    fr: "beurre clarifié",
    defs: [
      { def_en: "Butter from which water and milk solids have been removed, providing a pure cooking fat with a higher smoke point.",
        def_uk: "Масло, з якого видалено воду й молочні тверді частинки, дає чистий жир для готування з вищою точкою димлення." },
    ]
  },
  {
    term_en: "Butter Colbert",
    term_uk: "Масло Кольбер",
    fr: "beurre Colbert",
    defs: [
      { def_en: "A compound butter containing parsley and meat glaze, classically served with grilled meats.",
        def_uk: "Складене масло з петрушкою й м'ясним глясом, класично подається з грильованим м'ясом." },
    ]
  },
  {
    term_en: "Butter Manié",
    term_uk: "Бер-маньє",
    fr: "beurre manié",
    defs: [
      { def_en: "A paste of equal quantities of softened butter and flour, incorporated into hot liquids to thicken sauces.",
        def_uk: "Паста з рівних кількостей розм'якшеного масла й борошна, додається в гарячі рідини для загущення соусів." },
    ]
  },
  {
    term_en: "Butter Marchand de Vin",
    term_uk: "Масло Marchand de Vin",
    fr: "beurre Marchand de Vin",
    defs: [
      { def_en: "A compound butter flavoured with red wine reduction, shallots and parsley.",
        def_uk: "Складене масло, ароматизоване уваром червоного вина, цибулею-шалот і петрушкою." },
    ]
  },
  {
    term_en: "Capers",
    term_uk: "Каперси",
    fr: "câpres",
    defs: [
      { def_en: "The pickled flower buds of the caper bush, valued for their sharp, salty flavour in numerous French sauces.",
        def_uk: "Марковані квіткові бруньки каперсника, цінуються за гострий солоний смак у багатьох французьких соусах." },
    ]
  },
  {
    term_en: "Caramel",
    term_uk: "Карамель",
    fr: "caramel",
    defs: [
      { def_en: "Sugar heated until browned, used to provide colour, sweetness or bitterness in selected sauces.",
        def_uk: "Цукор, нагрітий до коричневого кольору, надає кольору, солодкості чи гіркоти окремим соусам." },
    ]
  },
  {
    term_en: "Carrot",
    term_uk: "Морква",
    fr: "carotte",
    defs: [
      { def_en: "A root vegetable widely used in mirepoix and other aromatic garnishes for stocks and sauces.",
        def_uk: "Коренеплід, широко використовується в мірпуа та інших ароматних гарнітурах для бульйонів і соусів." },
    ]
  },
  {
    term_en: "Cayenne Pepper",
    term_uk: "Перець кайєнський",
    fr: "poivre de Cayenne",
    defs: [
      { def_en: "A finely ground hot pepper used sparingly to add heat to sauces.",
        def_uk: "Дрібномелений гострий перець, використовується помірно для гостроти соусів." },
    ]
  },
  {
    term_en: "Celeriac/Celery",
    term_uk: "Селера",
    fr: "céleri",
    defs: [
      { def_en: "An aromatic vegetable forming one of the principal ingredients of mirepoix.",
        def_uk: "Ароматний овоч, один з головних інгредієнтів мірпуа." },
    ]
  },
  {
    term_en: "Champagne",
    term_uk: "Шампанське",
    fr: "champagne",
    defs: [
      { def_en: "Sparkling wine occasionally used in refined fish and poultry sauces.",
        def_uk: "Ігристе вино, іноді використовується у вишуканих рибних соусах і соусах до птиці." },
    ]
  },
  {
    term_en: "Chanterelle",
    term_uk: "Лисичка",
    fr: "girolle",
    defs: [
      { def_en: "An edible wild mushroom prized for its delicate flavour in cream and game sauces.",
        def_uk: "Їстівний дикий гриб, цінується за делікатний смак у вершкових соусах і соусах до дичини." },
    ]
  },
  {
    term_en: "Charcutière Sauce",
    term_uk: "Соус Шарк'ютьєр",
    fr: "charcutière",
    defs: [
      { def_en: "A derivative of Robert sauce finished with julienned gherkins, traditionally served with pork.",
        def_uk: "Похідна соусу Робер, завершена жульєном з корнішонів, традиційно подається зі свининою." },
    ]
  },
  {
    term_en: "Chasseur Sauce",
    term_uk: "Соус Шассер",
    fr: "chasseur",
    defs: [
      { def_en: "A classic brown sauce prepared with mushrooms, shallots, white wine and tomatoes, traditionally accompanying game and poultry.",
        def_uk: "Класичний коричневий соус з грибами, цибулею-шалот, білим вином і помідорами, традиційно супроводжує дичину й птицю." },
    ]
  },
  {
    term_en: "Chaud-froid",
    term_uk: "Шо-фруа",
    fr: "chaud-froid",
    defs: [
      { def_en: "A glossy coating sauce applied warm and served cold over cooked foods.",
        def_uk: "Глянцевий покривний соус, наноситься теплим і подається холодним поверх приготованих страв." },
    ]
  },
  {
    term_en: "Chervil",
    term_uk: "Кервель",
    fr: "cerfeuil",
    defs: [
      { def_en: "A delicate herb with a mild anise flavour, frequently used as a finishing herb in sauces.",
        def_uk: "Делікатна трава з м'яким анісовим смаком, часто використовується як фінішна трава в соусах." },
    ]
  },
  {
    term_en: "Chestnut Mushroom",
    term_uk: "Білий гриб (сеп)",
    fr: "cèpe",
    defs: [
      { def_en: "A porcini mushroom valued for its rich woodland flavour in brown sauces.",
        def_uk: "Трюфельний гриб (порчіні), цінується за насичений лісовий смак у коричневих соусах." },
    ]
  },
  {
    term_en: "Chiffonade",
    term_uk: "Шифонад",
    fr: "chiffonade",
    defs: [
      { def_en: "Thin ribbons of leafy herbs or vegetables used as a garnish or flavouring.",
        def_uk: "Тонкі стрічки листової зелені чи трав, використовуються як гарнір чи ароматизатор." },
    ]
  },
  {
    term_en: "Chinese Sieve",
    term_uk: "Конічне сито (шинуа)",
    fr: "chinois",
    defs: [
      { def_en: "A fine conical sieve used to strain sauces to a perfectly smooth consistency.",
        def_uk: "Дрібне конічне сито для проціджування соусів до ідеально гладкої консистенції." },
    ]
  },
  {
    term_en: "Chinois Étamine",
    term_uk: "Шинуа-етамін",
    fr: "chinois étamine",
    defs: [
      { def_en: "An extra-fine conical sieve lined with muslin for producing exceptionally smooth sauces.",
        def_uk: "Особливо дрібне конічне сито, викладене марлею, для отримання винятково гладких соусів." },
    ]
  },
  {
    term_en: "Chives",
    term_uk: "Цибуля-шніт",
    fr: "ciboulette",
    defs: [
      { def_en: "Fine aromatic leaves used to finish butter, cream and cold sauces.",
        def_uk: "Тонкі ароматні листочки, використовуються для фінішування масляних, вершкових і холодних соусів." },
    ]
  },
  {
    term_en: "Chop Finely",
    term_uk: "Дрібно нарізати (аше)",
    fr: "hacher",
    defs: [
      { def_en: "To cut ingredients into very small pieces for even cooking and flavour distribution.",
        def_uk: "Нарізати інгредієнти на дуже дрібні шматочки для рівномірного готування й розподілу смаку." },
    ]
  },
  {
    term_en: "Cinnamon",
    term_uk: "Кориця",
    fr: "cannelle",
    defs: [
      { def_en: "An aromatic spice occasionally used in classical game and sweet sauces.",
        def_uk: "Ароматна спеція, іноді використовується в класичних соусах до дичини й солодких соусах." },
    ]
  },
  {
    term_en: "Compound Butter",
    term_uk: "Складене масло",
    fr: "beurre composé",
    defs: [
      { def_en: "Butter blended with herbs, spices or other flavourings and used to finish sauces or accompany cooked foods.",
        def_uk: "Масло, змішане з травами, спеціями чи іншими ароматизаторами, використовується для фінішування соусів чи подачі до готових страв." },
    ]
  },
  {
    term_en: "Compote",
    term_uk: "Компотувати",
    fr: "compoter",
    defs: [
      { def_en: "To cook ingredients slowly until soft and concentrated while preserving their character.",
        def_uk: "Готувати інгредієнти повільно до м'якості й концентрації, зберігаючи їхній характер." },
    ]
  },
  {
    term_en: "Concassé",
    term_uk: "Консасе (подрібнювати)",
    fr: "concasser",
    defs: [
      { def_en: "To crush or roughly chop ingredients, especially tomatoes, peppercorns or spices.",
        def_uk: "Розтирати чи грубо нарізати інгредієнти, особливо помідори, горошини перцю чи спеції." },
    ]
  },
  {
    term_en: "Condiment",
    term_uk: "Приправа (кондимент)",
    fr: "condiment",
    defs: [
      { def_en: "A seasoning ingredient added to enhance or complement the flavour of a sauce.",
        def_uk: "Смаковий інгредієнт, доданий для покращення чи доповнення смаку соусу." },
    ]
  },
  {
    term_en: "Concentrate",
    term_uk: "Концентрований",
    fr: "concentré",
    defs: [
      { def_en: "Reduced in volume to intensify flavour and consistency.",
        def_uk: "Зменшений в об'ємі для посилення смаку й консистенції." },
    ]
  },
  {
    term_en: "Concentrated Tomato Purée",
    term_uk: "Концентроване томатне пюре",
    fr: "concentré de tomate",
    defs: [
      { def_en: "Tomato paste prepared by prolonged reduction, used to enrich the colour and flavour of sauces.",
        def_uk: "Томатна паста, приготована тривалим уварюванням, використовується для збагачення кольору й смаку соусів." },
    ]
  },
  {
    term_en: "Consommé",
    term_uk: "Консоме",
    fr: "consommé",
    defs: [
      { def_en: "A perfectly clarified stock renowned for its exceptional clarity and refined flavour.",
        def_uk: "Ідеально освітлений бульйон, відомий винятковою прозорістю й витонченим смаком." },
    ]
  },
  {
    term_en: "Cook Gently",
    term_uk: "М'яке готування",
    fr: "cuisson douce",
    defs: [
      { def_en: "Gentle cooking over low heat to preserve flavour, texture and stability.",
        def_uk: "М'яке готування на слабкому вогні для збереження смаку, текстури й стабільності." },
    ]
  },
  {
    term_en: "Coriander",
    term_uk: "Коріандр",
    fr: "coriandre",
    defs: [
      { def_en: "An aromatic herb or spice used sparingly in selected French sauce preparations.",
        def_uk: "Ароматна трава чи спеція, використовується помірно в окремих французьких соусних препаратах." },
    ]
  },
  {
    term_en: "Crab",
    term_uk: "Краб",
    fr: "crabe",
    defs: [
      { def_en: "A shellfish whose meat and cooking liquor are used in seafood sauces.",
        def_uk: "Ракоподібне, чиє м'ясо й варильна рідина використовуються в соусах до морепродуктів." },
    ]
  },
  {
    term_en: "Cream",
    term_uk: "Вершки",
    fr: "crème",
    defs: [
      { def_en: "The rich fatty portion of milk, widely employed to enrich and finish sauces.",
        def_uk: "Насичена жирна частина молока, широко використовується для збагачення й фінішування соусів." },
      { def_en: "To enrich a preparation by adding cream.",
        def_uk: "Збагачувати препарат додаванням вершків." },
    ]
  },
  {
    term_en: "Cream, Double",
    term_uk: "Вершки жирні (дабл-крем)",
    fr: "crème double",
    defs: [
      { def_en: "A thick cream with a high butterfat content, producing rich and stable sauces.",
        def_uk: "Густі вершки з високим вмістом жиру, дають насичені й стабільні соуси." },
    ]
  },
  {
    term_en: "Cream, Sour",
    term_uk: "Сметана (кислі вершки)",
    fr: "crème aigre",
    defs: [
      { def_en: "Fermented cream with a pleasant acidity, used in selected regional sauces.",
        def_uk: "Ферментовані вершки з приємною кислинкою, використовуються в окремих регіональних соусах." },
    ]
  },
  {
    term_en: "Crevette",
    term_uk: "Креветки",
    fr: "crevettes",
    defs: [
      { def_en: "Shrimp used in seafood stocks, bisques and shellfish sauces.",
        def_uk: "Креветки, використовуються в рибних бульйонах, біску та соусах до молюсків/ракоподібних." },
    ]
  },
  {
    term_en: "Crush",
    term_uk: "Розтирати (екразе)",
    fr: "écraser",
    defs: [
      { def_en: "To press ingredients until broken or flattened in order to release flavour.",
        def_uk: "Тиснути на інгредієнти, щоб зламати чи розплющити їх для вивільнення смаку." },
    ]
  },
  {
    term_en: "Cumin",
    term_uk: "Кумин (зіра)",
    fr: "cumin",
    defs: [
      { def_en: "An aromatic spice occasionally employed in regional French sauces.",
        def_uk: "Ароматна спеція, іноді використовується в регіональних французьких соусах." },
    ]
  },
  {
    term_en: "Curcuma",
    term_uk: "Куркума",
    fr: "curcuma",
    defs: [
      { def_en: "Turmeric, used chiefly for colour and mild earthy flavour.",
        def_uk: "Куркума, використовується головним чином для кольору й м'якого землистого смаку." },
    ]
  },
  {
    term_en: "Court-Bouillon",
    term_uk: "Кур-буйон",
    fr: "court-bouillon",
    defs: [
      { def_en: "A seasoned aromatic cooking liquid used primarily for poaching fish and shellfish before sauce preparation.",
        def_uk: "Приправлена ароматна рідина для готування, використовується переважно для варіння риби й молюсків/ракоподібних перед приготуванням соусу." },
    ]
  },
  {
    term_en: "Cut into Julienne",
    term_uk: "Нарізати жульєном",
    fr: "julienne",
    defs: [
      { def_en: "Fine matchstick strips of vegetables used as garnish or flavouring in classical sauces.",
        def_uk: "Тонкі соломкоподібні смужки овочів, використовуються як гарнір чи ароматизатор у класичних соусах." },
    ]
  },
  {
    term_en: "Decant",
    term_uk: "Декантувати",
    fr: "décanter",
    defs: [
      { def_en: "To separate a clear liquid from sediment without disturbing the deposit.",
        def_uk: "Відокремлювати прозору рідину від осаду, не порушуючи його." },
    ]
  },
  {
    term_en: "Decoction",
    term_uk: "Декокт (відвар)",
    fr: "décoction",
    defs: [
      { def_en: "An extract obtained by boiling aromatic ingredients in liquid to draw out flavour.",
        def_uk: "Екстракт, отриманий кип'ятінням ароматних інгредієнтів у рідині для витягування смаку." },
    ]
  },
  {
    term_en: "Deglazing",
    term_uk: "Деглазування",
    fr: "déglaçage",
    defs: [
      { def_en: "The process of recovering concentrated cooking juices from the bottom of a pan.",
        def_uk: "Процес отримання концентрованих соків готування з дна сковороди." },
    ]
  },
  {
    term_en: "Dilute",
    term_uk: "Розводити (деле)",
    fr: "délayer",
    defs: [
      { def_en: "To incorporate a liquid gradually into another ingredient until a smooth consistency is obtained.",
        def_uk: "Поступово вводити рідину в інший інгредієнт до отримання гладкої консистенції." },
    ]
  },
  {
    term_en: "Dill",
    term_uk: "Кріп",
    fr: "aneth",
    defs: [
      { def_en: "A fragrant herb commonly paired with fish and cream sauces.",
        def_uk: "Запашна трава, часто поєднується з рибними й вершковими соусами." },
    ]
  },
  {
    term_en: "Double Strain",
    term_uk: "Подвійне проціджування (етамін)",
    fr: "étamine",
    defs: [
      { def_en: "Fine muslin cloth used for producing exceptionally smooth sauces and stocks.",
        def_uk: "Тонка марлева тканина, використовується для отримання винятково гладких соусів і бульйонів." },
    ]
  },
  {
    term_en: "Émince",
    fr: "émincer",
    defs: [
      { def_en: "To cut an ingredient into thin, even slices. The term is commonly applied to vegetables, fruits and meats, and differs from julienne in producing broader slices rather than fine strips." },
    ]
  },
  {
    term_en: "Emulsify",
    fr: "émulsionner",
    defs: [
      { def_en: "To combine two liquids that do not naturally mix, such as oil and water, into a stable emulsion by vigorous whisking or blending, often with the aid of an emulsifying ingredient." },
    ]
  },
  {
    term_en: "Emulsion",
    fr: "émulsion",
    defs: [
      { def_en: "A stable or semi-stable mixture of two normally immiscible liquids, such as oil and vinegar or butter and a reduction, forming the basis of numerous classical French sauces." },
    ]
  },
  {
    term_en: "Endive",
    fr: "endive",
    defs: [
      { def_en: "A leafy vegetable occasionally used as a garnish or accompaniment for cream-based and regional sauces." },
    ]
  },
  {
    term_en: "English Spinach",
    fr: "épinard",
    defs: [
      { def_en: "Spinach, used fresh or puréed in a variety of green sauces and as an ingredient in sauce garnishes." },
    ]
  },
  {
    term_en: "Espagnole",
    fr: "espagnole",
    defs: [
      { def_en: "One of the five classical French mother sauces, prepared from brown stock, brown roux, tomato purée and a mirepoix, then slowly simmered to develop a rich, concentrated flavour." },
    ]
  },
  {
    term_en: "Essence",
    fr: "essence",
    defs: [
      { def_en: "A highly concentrated aromatic extract obtained by reducing stocks, vegetable juices or cooking liquids to intensify flavour." },
    ]
  },
  {
    term_en: "Estragon",
    fr: "estragon",
    defs: [
      { def_en: "Tarragon, an aromatic herb with a delicate anise flavour, widely used in Béarnaise, Tartare and numerous butter and cream sauces." },
    ]
  },
  {
    term_en: "Étamine",
    fr: "étamine",
    defs: [
      { def_en: "A fine muslin cloth used for straining sauces, stocks and consommés to obtain exceptional clarity and smoothness." },
    ]
  },
  {
    term_en: "Étouffer",
    fr: "étuver",
    defs: [
      { def_en: "To cook food slowly in a covered vessel with little or no added liquid, allowing it to cook gently in its own moisture." },
    ]
  },
  {
    term_en: "Evaporate",
    fr: "réduire",
    defs: [
      { def_en: "To concentrate a liquid by simmering until part of its water content has evaporated, thereby intensifying flavour and improving consistency." },
    ]
  },
  {
    term_en: "Fennel",
    fr: "fenouil",
    defs: [
      { def_en: "An aromatic vegetable whose bulb, stalks or seeds contribute a delicate anise flavour to fish stocks, seafood sauces and selected regional preparations." },
    ]
  },
  {
    term_en: "Fenugreek",
    fr: "fenugrec",
    defs: [
      { def_en: "An aromatic seed occasionally used in modern French cuisine and certain regional spice blends to provide a warm, slightly bitter flavour." },
    ]
  },
  {
    term_en: "Fine Salt",
    fr: "sel fin",
    defs: [
      { def_en: "Finely ground salt used for seasoning sauces and adjusting flavour during cooking." },
    ]
  },
  {
    term_en: "Finish",
    fr: "finition",
    defs: [
      { def_en: "The final stage in preparing a sauce, including adjustments to seasoning, consistency, texture and appearance before serving." },
    ]
  },
  {
    term_en: "Finish with Butter",
    fr: "finition au beurre",
    defs: [
      { def_en: "The practice of incorporating cold butter into a finished sauce immediately before serving to improve gloss, texture and richness." },
    ]
  },
  {
    term_en: "Finish with Cream",
    fr: "finition à la crème",
    defs: [
      { def_en: "The final enrichment of a sauce by the addition of cream, producing a smoother texture and a milder flavour." },
    ]
  },
  {
    term_en: "Finish with Herbs",
    fr: "finition aux herbes",
    defs: [
      { def_en: "The addition of freshly chopped herbs immediately before serving to preserve their colour, aroma and freshness." },
    ]
  },
  {
    term_en: "Fish Stock",
    fr: "fond de poisson",
    defs: [
      { def_en: "A light stock prepared from fish bones, aromatic vegetables and white wine, serving as the foundation of numerous seafood sauces." },
    ]
  },
  {
    term_en: "Flour",
    fr: "farine",
    defs: [
      { def_en: "Finely milled cereal grain used principally in the preparation of roux and beurre manié as a thickening agent." },
    ]
  },
  {
    term_en: "Foie Gras",
    fr: "foie gras",
    defs: [
      { def_en: "The fattened liver of duck or goose, used in refined classical sauces and luxury garnishes." },
    ]
  },
  {
    term_en: "Fold",
    fr: "incorporer",
    defs: [
      { def_en: "To gently combine one preparation with another using a spatula or spoon while preserving as much air and volume as possible." },
    ]
  },
  {
    term_en: "Fond Blanc",
    fr: "fond blanc",
    defs: [
      { def_en: "A white stock prepared from unroasted bones and aromatic vegetables, forming the basis of white sauces and delicate soups." },
    ]
  },
  {
    term_en: "Fond Brun",
    fr: "fond brun",
    defs: [
      { def_en: "A brown stock prepared from roasted bones and vegetables, providing the foundation for brown sauces and demi-glace." },
    ]
  },
  {
    term_en: "Fond de Veau",
    fr: "fond de veau",
    defs: [
      { def_en: "A white or brown veal stock highly prized in classical French cuisine for the preparation of refined sauces." },
    ]
  },
  {
    term_en: "Fond de Volaille",
    fr: "fond de volaille",
    defs: [
      { def_en: "A poultry stock prepared from chicken or other fowl, used as the base for light sauces and veloutés." },
    ]
  },
  {
    term_en: "Fouetter",
    fr: "fouetter",
    defs: [
      { def_en: "To beat a preparation vigorously with a whisk until it becomes smooth, homogeneous or aerated." },
    ]
  },
  {
    term_en: "Fresh Cream",
    fr: "crème fraîche",
    defs: [
      { def_en: "Cultured cream with a rich texture and mild acidity, frequently used to enrich and finish French sauces." },
    ]
  },
  {
    term_en: "Garlic",
    fr: "ail",
    defs: [
      { def_en: "A pungent aromatic bulb used to flavour countless classical and regional French sauces, either whole, crushed, sliced or finely chopped." },
    ]
  },
  {
    term_en: "Gelatine",
    fr: "gélatine",
    defs: [
      { def_en: "A protein-based gelling agent derived from collagen, used to stabilize certain cold sauces, chaud-froid preparations and aspics." },
    ]
  },
  {
    term_en: "Gherkin",
    fr: "cornichon",
    defs: [
      { def_en: "A small pickled cucumber used to garnish or flavour sauces such as Gribiche, Tartare and Charcutière." },
    ]
  },
  {
    term_en: "Giblet Stock",
    fr: "jus de volaille",
    defs: [
      { def_en: "A concentrated poultry cooking juice or stock used to enrich light sauces and reductions." },
    ]
  },
  {
    term_en: "Ginger",
    fr: "gingembre",
    defs: [
      { def_en: "An aromatic rhizome occasionally used in contemporary French sauces and certain classical sweet preparations." },
    ]
  },
  {
    term_en: "Girolle",
    fr: "girolle",
    defs: [
      { def_en: "The chanterelle mushroom, prized for its delicate aroma and commonly used in cream and game sauces." },
    ]
  },
  {
    term_en: "Glace de Poisson",
    fr: "glace de poisson",
    defs: [
      { def_en: "A highly concentrated fish stock reduced to a syrup-like consistency and used to strengthen seafood sauces." },
    ]
  },
  {
    term_en: "Glace de Viande",
    fr: "glace de viande",
    defs: [
      { def_en: "A concentrated meat glaze obtained by prolonged reduction of brown stock until thick and intensely flavoured." },
    ]
  },
  {
    term_en: "Glace de Volaille",
    fr: "glace de volaille",
    defs: [
      { def_en: "A concentrated poultry glaze prepared by reducing poultry stock to a rich, syrupy consistency." },
    ]
  },
  {
    term_en: "Glossy",
    fr: "brillant",
    defs: [
      { def_en: "Describing a sauce with a smooth, lustrous surface that indicates proper emulsification and finishing." },
    ]
  },
  {
    term_en: "Goat's Cheese",
    fr: "chèvre",
    defs: [
      { def_en: "Cheese made from goat's milk, occasionally incorporated into warm and cold cream sauces." },
    ]
  },
  {
    term_en: "Golden Roux",
    fr: "roux blond",
    defs: [
      { def_en: "A blond roux cooked until pale golden, providing moderate thickening power with a light nutty flavour." },
    ]
  },
  {
    term_en: "Goose Fat",
    fr: "graisse d'oie",
    defs: [
      { def_en: "Rendered goose fat valued for its rich flavour in traditional French cookery and certain regional sauce preparations." },
    ]
  },
  {
    term_en: "Grana Padano",
    fr: "grana padano",
    defs: [
      { def_en: "A hard Italian cheese occasionally used to enrich cream sauces and gratin preparations." },
    ]
  },
  {
    term_en: "Grand Marnier",
    fr: "Grand Marnier",
    defs: [
      { def_en: "An orange-flavoured liqueur occasionally incorporated into classic fruit and dessert sauces." },
    ]
  },
  {
    term_en: "Grate",
    fr: "râper",
    defs: [
      { def_en: "To reduce an ingredient into fine particles by rubbing it against the surface of a grater." },
    ]
  },
  {
    term_en: "Green Peppercorn",
    fr: "poivre vert",
    defs: [
      { def_en: "The unripe berry of the pepper vine, preserved fresh or in brine and widely used in pepper sauces." },
    ]
  },
  {
    term_en: "Grey Sea Salt",
    fr: "gros sel",
    defs: [
      { def_en: "Coarse salt used primarily for seasoning stocks, cooking liquids and large preparations." },
    ]
  },
  {
    term_en: "Gribiche",
    fr: "gribiche",
    defs: [
      { def_en: "A cold French sauce made with hard-boiled egg yolks, mustard, oil, vinegar and chopped herbs, commonly served with cold meats and fish." },
    ]
  },
  {
    term_en: "Grind",
    fr: "moudre",
    defs: [
      { def_en: "To reduce spices or other dry ingredients to a fine powder using a mill, grinder or mortar and pestle." },
    ]
  },
  {
    term_en: "Gruyère",
    fr: "gruyère",
    defs: [
      { def_en: "A firm Swiss-style cheese frequently incorporated into Mornay sauce and other cheese-based preparations." },
    ]
  },
  {
    term_en: "Herb Bouquet",
    fr: "bouquet garni",
    defs: [
      { def_en: "A tied bundle of aromatic herbs used to flavour stocks, soups and sauces during cooking and removed before serving." },
    ]
  },
  {
    term_en: "Herbs",
    fr: "herbes aromatiques",
    defs: [
      { def_en: "Fresh or dried aromatic plants used to season and finish sauces." },
    ]
  },
  {
    term_en: "Honey",
    fr: "miel",
    defs: [
      { def_en: "A natural sweetener occasionally used to balance acidity or bitterness in selected French sauces." },
    ]
  },
  {
    term_en: "Homard",
    fr: "homard",
    defs: [
      { def_en: "Lobster, whose meat, shells and cooking liquor are used in bisques and refined shellfish sauces." },
    ]
  },
  {
    term_en: "Hollandaise",
    fr: "hollandaise",
    defs: [
      { def_en: "One of the five classical French mother sauces, prepared by emulsifying egg yolks with clarified butter and acidulated reduction." },
    ]
  },
  {
    term_en: "Hot Stock",
    fr: "bouillon chaud",
    defs: [
      { def_en: "Stock maintained at serving temperature for incorporation into sauces without interrupting the cooking process." },
    ]
  },
  {
    term_en: "Huile d'Olive",
    fr: "huile d'olive",
    defs: [
      { def_en: "Olive oil used in vinaigrettes, Mediterranean sauces and numerous regional French preparations." },
    ]
  },
  {
    term_en: "Huile de Noisette",
    fr: "huile de noisette",
    defs: [
      { def_en: "Hazelnut oil valued for its delicate nutty flavour in cold sauces and vinaigrettes." },
    ]
  },
  {
    term_en: "Huile de Noix",
    fr: "huile de noix",
    defs: [
      { def_en: "Walnut oil commonly used in vinaigrettes and cold sauces, particularly in regional French cuisine." },
    ]
  },
  {
    term_en: "Infusion",
    fr: "infusion",
    defs: [
      { def_en: "A flavoured liquid obtained by steeping aromatic ingredients in water, stock, milk or cream to impart their characteristic flavour." },
    ]
  },
  {
    term_en: "Italian Parsley",
    fr: "persil",
    defs: [
      { def_en: "A fresh aromatic herb widely used in French cuisine to flavour and finish sauces, stocks and compound butters." },
    ]
  },
  {
    term_en: "Juniper Berry",
    fr: "genièvre",
    defs: [
      { def_en: "The dried berry of the juniper shrub, used sparingly to flavour game sauces, marinades and braising liquids." },
    ]
  },
  {
    term_en: "Jus",
    fr: "jus",
    defs: [
      { def_en: "The natural cooking juices of meat, poultry or vegetables, often reduced and enriched to produce a light, concentrated sauce." },
    ]
  },
  {
    term_en: "Jus Lié",
    fr: "jus lié",
    defs: [
      { def_en: "A lightly thickened meat juice prepared by binding a natural jus with a small quantity of starch or other thickening agent." },
    ]
  },
  {
    term_en: "Langoustine",
    fr: "langoustine",
    defs: [
      { def_en: "Norway lobster used in refined shellfish stocks, bisques and seafood sauces." },
    ]
  },
  {
    term_en: "Ladle",
    fr: "louche",
    defs: [
      { def_en: "A deep, long-handled utensil used for transferring sauces, soups and stocks." },
    ]
  },
  {
    term_en: "Ladle for Sauce",
    fr: "louche à sauce",
    defs: [
      { def_en: "A small ladle designed specifically for serving sauces neatly and accurately." },
    ]
  },
  {
    term_en: "Lait",
    fr: "lait",
    defs: [
      { def_en: "Milk, a fundamental ingredient in numerous classical white sauces, including Béchamel." },
    ]
  },
  {
    term_en: "Lait Entier",
    fr: "lait entier",
    defs: [
      { def_en: "Whole milk containing its natural butterfat, preferred for the preparation of rich white sauces." },
    ]
  },
  {
    term_en: "Lait Réduit",
    fr: "lait réduit",
    defs: [
      { def_en: "Milk concentrated by gentle evaporation to produce a fuller flavour and richer consistency." },
    ]
  },
  {
    term_en: "Laurier",
    fr: "laurier",
    defs: [
      { def_en: "Bay leaf, an essential aromatic used in bouquet garni, stocks and many classical French sauces." },
    ]
  },
  {
    term_en: "Lemon Balm",
    fr: "mélisse",
    defs: [
      { def_en: "An aromatic herb occasionally used in delicate herb and cream sauces." },
    ]
  },
  {
    term_en: "Lemon Juice",
    fr: "jus de citron",
    defs: [
      { def_en: "Freshly squeezed lemon juice used to provide acidity, balance richness and stabilize emulsified sauces." },
    ]
  },
  {
    term_en: "Liaison",
    fr: "liaison",
    defs: [
      { def_en: "A finishing mixture, commonly of egg yolks and cream, added to soups and sauces to enrich their texture and body without boiling." },
    ]
  },
  {
    term_en: "Lisse",
    fr: "lisse",
    defs: [
      { def_en: "Describing a sauce that is perfectly smooth, free from lumps and possessing a refined texture." },
    ]
  },
  {
    term_en: "Livèche",
    fr: "livèche",
    defs: [
      { def_en: "Lovage, an aromatic herb with a flavour reminiscent of celery, occasionally used in stocks and regional sauces." },
    ]
  },
  {
    term_en: "Longueur",
    fr: "longueur",
    defs: [
      { def_en: "The persistence and development of flavour remaining on the palate after tasting a sauce." },
    ]
  },
  {
    term_en: "Lobster",
    fr: "homard",
    defs: [
      { def_en: "A shellfish whose meat, shells and coral are used in the preparation of bisques, fumets and luxurious seafood sauces." },
    ]
  },
  {
    term_en: "Mace",
    fr: "macis",
    defs: [
      { def_en: "The dried outer covering of the nutmeg seed, valued for its delicate, warm aroma in cream and velouté sauces." },
    ]
  },
  {
    term_en: "Macedoine",
    fr: "macédoine",
    defs: [
      { def_en: "A uniform small dice of vegetables or fruits used as a garnish in selected classical preparations." },
    ]
  },
  {
    term_en: "Madeira",
    fr: "madère",
    defs: [
      { def_en: "Fortified wine from Madeira, traditionally used to flavour brown sauces and reductions." },
    ]
  },
  {
    term_en: "Marjoram",
    fr: "marjolaine",
    defs: [
      { def_en: "A fragrant herb with a mild, sweet flavour, used sparingly in selected French sauces." },
    ]
  },
  {
    term_en: "Maryse",
    fr: "maryse",
    defs: [
      { def_en: "A flexible rubber or silicone spatula used to scrape bowls and gently incorporate ingredients without waste." },
    ]
  },
  {
    term_en: "Matignon",
    fr: "matignon",
    defs: [
      { def_en: "A finely cut aromatic vegetable mixture gently cooked in butter, sometimes with ham, and used as a flavouring base for sauces, braised dishes and stocks." },
    ]
  },
  {
    term_en: "Marinate",
    fr: "macération",
    defs: [
      { def_en: "The process of soaking ingredients in a seasoned liquid to impart flavour, improve texture or prepare them for cooking." },
    ]
  },
  {
    term_en: "Marc",
    fr: "marc",
    defs: [
      { def_en: "A French pomace brandy distilled from grape skins and seeds, occasionally used to flavour reductions and regional sauces." },
    ]
  },
  {
    term_en: "Marmite",
    fr: "marmite",
    defs: [
      { def_en: "A large deep cooking pot used for preparing stocks, broths and other liquid foundations of sauces." },
    ]
  },
  {
    term_en: "Mash",
    fr: "écraser",
    defs: [
      { def_en: "To crush an ingredient into a coarse or smooth paste using pressure from a fork, pestle or other utensil." },
    ]
  },
  {
    term_en: "Mayonnaise",
    fr: "mayonnaise",
    defs: [
      { def_en: "A classical cold emulsified sauce prepared from egg yolks, oil, mustard and an acidic ingredient, serving as the foundation for numerous derivative sauces." },
    ]
  },
  {
    term_en: "Meat Glaze",
    fr: "glace de viande",
    defs: [
      { def_en: "A highly concentrated reduction of brown stock with a rich, syrup-like consistency, used to strengthen and finish sauces." },
    ]
  },
  {
    term_en: "Medium Heat",
    fr: "feu moyen",
    defs: [
      { def_en: "A moderate cooking temperature used to maintain steady simmering without scorching or over-reducing a sauce." },
    ]
  },
  {
    term_en: "Menthe",
    fr: "menthe",
    defs: [
      { def_en: "Mint, an aromatic herb occasionally incorporated into sauces accompanying lamb, vegetables and selected cold preparations." },
    ]
  },
  {
    term_en: "Mix",
    fr: "mixer",
    defs: [
      { def_en: "To combine two or more ingredients until evenly blended or homogeneous." },
    ]
  },
  {
    term_en: "Moelle",
    fr: "moelle",
    defs: [
      { def_en: "Bone marrow, valued for its rich flavour and traditionally used in certain classical brown sauces and garnishes." },
    ]
  },
  {
    term_en: "Moelle Osseuse",
    fr: "moelle osseuse",
    defs: [
      { def_en: "Bone marrow removed from beef or veal bones and used to enrich luxurious sauces and meat dishes." },
    ]
  },
  {
    term_en: "Morel",
    fr: "morille",
    defs: [
      { def_en: "A highly prized wild mushroom distinguished by its honeycomb cap, widely used in cream, poultry and game sauces." },
    ]
  },
  {
    term_en: "Mortar",
    fr: "mortier",
    defs: [
      { def_en: "A heavy bowl used with a pestle to crush herbs, spices and other ingredients into a paste." },
    ]
  },
  {
    term_en: "Mould",
    fr: "chemiser",
    defs: [
      { def_en: "To line the interior of a mould or vessel with another ingredient before filling. In sauce preparation, the term occasionally applies to coating containers for chaud-froid or aspic preparations." },
    ]
  },
  {
    term_en: "Mousseline",
    fr: "mousseline",
    defs: [
      { def_en: "A derivative of Hollandaise sauce finished with lightly whipped cream immediately before serving, producing a lighter texture." },
    ]
  },
  {
    term_en: "Mouthfeel",
    fr: "onctueux",
    defs: [
      { def_en: "Describing a sauce that is smooth, rich, creamy and pleasantly velvety on the palate." },
    ]
  },
  {
    term_en: "Moutarde à l'Ancienne",
    fr: "moutarde à l'ancienne",
    defs: [
      { def_en: "Whole-grain mustard prepared from partially crushed mustard seeds, used to flavour rustic sauces and vinaigrettes." },
    ]
  },
  {
    term_en: "Moutarde de Dijon",
    fr: "moutarde de Dijon",
    defs: [
      { def_en: "A smooth French mustard prepared from finely ground mustard seeds, widely used in emulsified sauces, vinaigrettes and marinades." },
    ]
  },
  {
    term_en: "Mushroom",
    fr: "champignon",
    defs: [
      { def_en: "A cultivated edible fungus commonly used in brown, cream and wine-based sauces." },
    ]
  },
  {
    term_en: "Muscade",
    fr: "muscade",
    defs: [
      { def_en: "Nutmeg, an aromatic spice traditionally added in small quantities to Béchamel, Mornay and other cream sauces." },
    ]
  },
  {
    term_en: "Mustard",
    fr: "moutarde",
    defs: [
      { def_en: "A pungent condiment prepared from mustard seeds, serving both as a seasoning and as a natural emulsifying agent in many sauces." },
    ]
  },
  {
    term_en: "Nappe",
    fr: "nappe",
    defs: [
      { def_en: "The ideal coating consistency of a finished sauce, sufficiently thick to cling evenly to the back of a spoon." },
    ]
  },
  {
    term_en: "Napper",
    fr: "napper",
    defs: [
      { def_en: "To coat food evenly with a layer of sauce or to cook a sauce until it reaches a coating consistency." },
    ]
  },
  {
    term_en: "Nantua",
    fr: "nantua",
    defs: [
      { def_en: "A classical French sauce based on Béchamel enriched with crayfish butter and cream, traditionally served with fish and quenelles." },
    ]
  },
  {
    term_en: "Natural Jus",
    fr: "jus",
    defs: [
      { def_en: "The concentrated juices released naturally during the cooking of meat or poultry, served without heavy thickening." },
    ]
  },
  {
    term_en: "Neutral Oil",
    fr: "huile neutre",
    defs: [
      { def_en: "An oil with little or no distinctive flavour, preferred for preparing mayonnaise and other emulsified sauces." },
    ]
  },
  {
    term_en: "Nut Oil",
    fr: "huile de noix",
    defs: [
      { def_en: "Walnut oil valued for its delicate nutty aroma in cold sauces and vinaigrettes." },
    ]
  },
  {
    term_en: "Nutmeg",
    fr: "muscade",
    defs: [
      { def_en: "The aromatic seed of Myristica fragrans, used sparingly to season white sauces, cream sauces and gratins." },
    ]
  },
  {
    term_en: "Nutty Butter",
    fr: "beurre noisette",
    defs: [
      { def_en: "Butter cooked until its milk solids become golden brown, developing a characteristic nut-like aroma and flavour." },
    ]
  },
  {
    term_en: "Oak Mushroom",
    fr: "cèpe",
    defs: [
      { def_en: "Porcini, a highly prized wild mushroom valued for its rich, earthy flavour in game, meat and cream sauces." },
    ]
  },
  {
    term_en: "Œuf Entier",
    fr: "œuf entier",
    defs: [
      { def_en: "Whole egg, used as a binding, thickening or emulsifying ingredient in selected classical sauces." },
    ]
  },
  {
    term_en: "Oil",
    fr: "huile",
    defs: [
      { def_en: "A cooking fat obtained from plant or seed sources, essential in vinaigrettes, mayonnaise and numerous emulsified sauces." },
    ]
  },
  {
    term_en: "Olive",
    fr: "olive",
    defs: [
      { def_en: "The fruit of the olive tree, used whole, sliced or chopped to flavour Mediterranean and Provençal sauces." },
    ]
  },
  {
    term_en: "Olive Oil",
    fr: "huile d'olive",
    defs: [
      { def_en: "Oil extracted from olives, widely used in vinaigrettes, cold sauces and regional French cuisine." },
    ]
  },
  {
    term_en: "Onion",
    fr: "oignon",
    defs: [
      { def_en: "One of the principal aromatic vegetables in French cookery, forming a fundamental component of mirepoix, stocks and sauces." },
    ]
  },
  {
    term_en: "Onctueux",
    fr: "onctueux",
    defs: [
      { def_en: "Describing a sauce that is rich, smooth, creamy and velvety in texture." },
    ]
  },
  {
    term_en: "Oregano",
    fr: "origan",
    defs: [
      { def_en: "A fragrant herb used primarily in southern French and Mediterranean sauces." },
    ]
  },
  {
    term_en: "Oseille",
    fr: "oseille",
    defs: [
      { def_en: "Sorrel, a leafy herb with a fresh acidic flavour, traditionally used in sauces accompanying fish and poultry." },
    ]
  },
  {
    term_en: "Paprika",
    fr: "paprika",
    defs: [
      { def_en: "A mild ground pepper spice used to provide colour and subtle sweetness to selected sauces." },
    ]
  },
  {
    term_en: "Parsley",
    fr: "persil",
    defs: [
      { def_en: "One of the most widely used culinary herbs in French cuisine, employed in bouquet garni, compound butters and numerous finished sauces." },
    ]
  },
  {
    term_en: "Parmesan",
    fr: "parmesan",
    defs: [
      { def_en: "A hard Italian cheese frequently incorporated into cream sauces, gratins and derivative Béchamel sauces." },
    ]
  },
  {
    term_en: "Parsnip Cut",
    fr: "paysanne",
    defs: [
      { def_en: "Thin, flat pieces of vegetables cut to match their natural shape, used in aromatic garnishes and stocks." },
    ]
  },
  {
    term_en: "Pass Through a Sieve",
    fr: "passer",
    defs: [
      { def_en: "To force a preparation through a sieve, chinois or tamis to obtain a perfectly smooth texture." },
    ]
  },
  {
    term_en: "Passette",
    fr: "passette",
    defs: [
      { def_en: "A small fine-mesh strainer used for filtering sauces and removing small particles." },
    ]
  },
  {
    term_en: "Passoire",
    fr: "passoire",
    defs: [
      { def_en: "A kitchen strainer used to separate liquids from solids during sauce preparation." },
    ]
  },
  {
    term_en: "Pectin",
    fr: "pectine",
    defs: [
      { def_en: "A natural gelling substance found in fruits, occasionally used in modern sauce preparation." },
    ]
  },
  {
    term_en: "Pepper, Black",
    fr: "poivre noir",
    defs: [
      { def_en: "Fully ripened and dried peppercorns valued for their pungent aroma and robust flavour." },
    ]
  },
  {
    term_en: "Pepper, White",
    fr: "poivre blanc",
    defs: [
      { def_en: "Peppercorns with the outer skin removed, preferred in white sauces where appearance is important." },
    ]
  },
  {
    term_en: "Pepper Mill",
    fr: "moulin à poivre",
    defs: [
      { def_en: "A mill used to grind whole peppercorns immediately before use, preserving maximum aroma." },
    ]
  },
  {
    term_en: "Périgueux",
    fr: "périgueux",
    defs: [
      { def_en: "A classical brown sauce flavoured with Madeira wine and black truffles, traditionally served with fine meat dishes." },
    ]
  },
  {
    term_en: "Périgourdine",
    fr: "périgourdine",
    defs: [
      { def_en: "A truffle-based derivative of brown sauce associated with the Périgord region and served with poultry and game." },
    ]
  },
  {
    term_en: "Pestle",
    fr: "pilon",
    defs: [
      { def_en: "A heavy handheld tool used with a mortar to crush herbs, spices and aromatics." },
    ]
  },
  {
    term_en: "Poach",
    fr: "pocher",
    defs: [
      { def_en: "To cook gently in liquid maintained below the boiling point, preserving tenderness and delicate flavour." },
    ]
  },
  {
    term_en: "Poêlon",
    fr: "poêlon",
    defs: [
      { def_en: "A small deep cooking pan used for gentle simmering and sauce preparation." },
    ]
  },
  {
    term_en: "Poivre de Cayenne",
    fr: "poivre de Cayenne",
    defs: [
      { def_en: "Cayenne pepper, used sparingly to add heat and complexity to sauces." },
    ]
  },
  {
    term_en: "Port",
    fr: "porto",
    defs: [
      { def_en: "A fortified wine frequently incorporated into brown sauces, reductions and game sauces." },
    ]
  },
  {
    term_en: "Potato Starch",
    fr: "fécule",
    defs: [
      { def_en: "A refined starch used as a thickening agent for sauces requiring a clear, glossy finish." },
    ]
  },
  {
    term_en: "Poultry Stock",
    fr: "fond de volaille",
    defs: [
      { def_en: "A stock prepared from poultry bones and aromatic vegetables, forming the base of many light sauces and veloutés." },
    ]
  },
  {
    term_en: "Preparation",
    fr: "préparation",
    defs: [
      { def_en: "The complete process of assembling, mixing and cooking ingredients to produce a finished culinary item." },
    ]
  },
  {
    term_en: "Purée",
    fr: "purée",
    defs: [
      { def_en: "A smooth preparation obtained by crushing or blending cooked ingredients, frequently used as a base or enrichment for sauces." },
    ]
  },
  {
    term_en: "Purée of Tomato",
    fr: "purée de tomate",
    defs: [
      { def_en: "Tomatoes cooked and passed through a sieve to produce a smooth purée used in classical and derivative tomato sauces." },
    ]
  },
  {
    term_en: "Purslane",
    fr: "pourpier",
    defs: [
      { def_en: "A succulent leafy herb occasionally used in regional French cuisine for cold sauces and garnishes." },
    ]
  },
  {
    term_en: "Reduction",
    fr: "réduction",
    defs: [
      { def_en: "A liquid that has been concentrated by evaporation to enhance its flavour, aroma and body." },
    ]
  },
  {
    term_en: "Refresh",
    fr: "rafraîchir",
    defs: [
      { def_en: "To plunge blanched ingredients into cold or iced water in order to stop the cooking process and preserve colour and texture." },
    ]
  },
  {
    term_en: "Ramekin",
    fr: "ramequin",
    defs: [
      { def_en: "A small ovenproof dish used for holding, baking or serving individual portions of sauces or condiments." },
    ]
  },
  {
    term_en: "Ravigote",
    fr: "ravigote",
    defs: [
      { def_en: "A cold French sauce prepared with vinaigrette and fresh herbs, traditionally served with cold meats, fish and vegetables." },
    ]
  },
  {
    term_en: "Rectify the Seasoning",
    fr: "rectifier l'assaisonnement",
    defs: [
      { def_en: "To adjust the seasoning of a finished preparation by correcting the balance of salt, acidity, sweetness, bitterness or spice." },
    ]
  },
  {
    term_en: "Rémoulade",
    fr: "rémoulade",
    defs: [
      { def_en: "A cold derivative of mayonnaise flavoured with mustard, herbs, capers, gherkins and anchovies." },
    ]
  },
  {
    term_en: "Rice Starch",
    fr: "amidon",
    defs: [
      { def_en: "A refined starch used as a thickening agent in delicate sauces and modern culinary preparations." },
    ]
  },
  {
    term_en: "Roquefort",
    fr: "roquefort",
    defs: [
      { def_en: "A French blue cheese traditionally used to prepare rich cream sauces for grilled meats and vegetables." },
    ]
  },
  {
    term_en: "Robert",
    fr: "robert",
    defs: [
      { def_en: "A classical brown sauce prepared with onions, white wine, mustard and demi-glace, traditionally served with pork." },
    ]
  },
  {
    term_en: "Roman Sage",
    fr: "sauge",
    defs: [
      { def_en: "Sage, an aromatic herb used sparingly to flavour butter sauces, poultry dishes and game sauces." },
    ]
  },
  {
    term_en: "Romarin",
    fr: "romarin",
    defs: [
      { def_en: "Rosemary, a fragrant evergreen herb widely used in regional French meat sauces and marinades." },
    ]
  },
  {
    term_en: "Rondeau",
    fr: "rondeau",
    defs: [
      { def_en: "A wide, shallow cooking pan used for preparing stocks, reductions and sauces." },
    ]
  },
  {
    term_en: "Russian Pan",
    fr: "russe",
    defs: [
      { def_en: "A deep straight-sided saucepan traditionally used in professional French kitchens for preparing sauces and reductions." },
    ]
  },
  {
    term_en: "Sabayon",
    fr: "sabayon",
    defs: [
      { def_en: "A light foamed preparation made by whisking egg yolks with wine or another liquid over gentle heat until thick and airy. It is served as a dessert sauce or forms the basis of certain savoury sauces." },
    ]
  },
  {
    term_en: "Saffron",
    fr: "safran",
    defs: [
      { def_en: "The dried stigma of Crocus sativus, prized for its distinctive colour, aroma and flavour in refined sauces." },
    ]
  },
  {
    term_en: "Salmis",
    fr: "salmis",
    defs: [
      { def_en: "A rich game sauce prepared from the roasting juices and carcass of roasted game birds, reduced and finished with wine or spirits." },
    ]
  },
  {
    term_en: "Salt, Fine",
    fr: "sel fin",
    defs: [
      { def_en: "Finely ground salt used for seasoning sauces and adjusting flavour throughout cooking." },
    ]
  },
  {
    term_en: "Salt, Coarse",
    fr: "gros sel",
    defs: [
      { def_en: "Coarse salt used primarily in stocks, cooking liquids and for seasoning large preparations." },
    ]
  },
  {
    term_en: "Salpicon",
    fr: "salpicon",
    defs: [
      { def_en: "A mixture of finely diced cooked ingredients used as a garnish or filling in classical French cuisine." },
    ]
  },
  {
    term_en: "Sarriette",
    fr: "sarriette",
    defs: [
      { def_en: "Savory, an aromatic herb occasionally used to flavour sauces, especially those accompanying beans, poultry and game." },
    ]
  },
  {
    term_en: "Sauce Boat",
    fr: "saucière",
    defs: [
      { def_en: "A serving vessel specifically designed for presenting sauces at the table." },
    ]
  },
  {
    term_en: "Saucier",
    fr: "saucier",
    defs: [
      { def_en: "The chef responsible for the preparation of sauces, stocks, soups and sautéed dishes in the classical French brigade system." },
    ]
  },
  {
    term_en: "Sauté Pan",
    fr: "sauteuse",
    defs: [
      { def_en: "A broad, straight-sided pan used for sautéing ingredients and preparing pan sauces." },
    ]
  },
];

// Sort alphabetically by English term (same convention as ALL_SAUCE_KEYS in app.js)
GLOSSARY.sort((a, b) => a.term_en.localeCompare(b.term_en, ['uk', 'en'], { sensitivity: 'base' }));
