// build 1.3.0 — 2026-07-19
// Glossary data — culinary terms and definitions (bilingual EN/UK, UK fields optional).
// Each entry: { term_en, term_uk, defs: [ { def_en, def_uk }, ... ] }
// tf()-style fallback: if term_uk / def_uk is missing, UI shows the _en value.

const GLOSSARY = [
  {
    term_en: "Aerate",
    term_uk: "Аерувати",
    defs: [
      { def_en: "To whisk vigorously, incorporating air to lighten a mixture.",
        def_uk: "Енергійно збивати, вводячи повітря, щоб полегшити консистенцію суміші." }
    ]
  },
  {
    term_en: "Anglaise",
    term_uk: "Англез",
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
    defs: [
      { def_en: "A fragrant ingredient (herb, plant or root) used to introduce a flavor and aroma to an ingredient or dish.",
        def_uk: "Запашний інгредієнт (трава, рослина чи корінь), що використовується для надання аромату та смаку продукту чи страві." }
    ]
  },
  {
    term_en: "Baba-moulds",
    term_uk: "Форми для баби",
    defs: [
      { def_en: "A kind of small deep cylindrical mould, slightly wider at the top than at the bottom.",
        def_uk: "Невелика глибока циліндрична форма, трохи ширша зверху, ніж знизу." }
    ]
  },
  {
    term_en: "Bain-Marie",
    term_uk: "Бен-марі",
    defs: [
      { def_en: "A hot-water bath in which utensils containing various culinary preparations are immersed to keep warm, or for the purpose of poaching or cooking.",
        def_uk: "Гаряча водяна баня, в яку занурюють посуд із кулінарними стравами для підтримання тепла або для варіння на парі й повільного приготування." }
    ]
  },
  {
    term_en: "Beurre Manié",
    term_uk: "Бер-маньє",
    defs: [
      { def_en: "Butter that has been softened by hand and mixed with flour; it is used to thicken a sauce that is too liquid.",
        def_uk: "Масло, розм'якшене вручну і змішане з борошном; використовується для загущення надто рідкого соусу." }
    ]
  },
  {
    term_en: "Bind",
    term_uk: "Зв'язувати",
    defs: [
      { def_en: "To give body and gloss to a sauce or a soup, essentially by adding the yolk of an egg.",
        def_uk: "Надавати густоти та блиску соусу чи супу, як правило, додаючи яєчний жовток." }
    ]
  },
  {
    term_en: "Blanch",
    term_uk: "Бланшувати",
    defs: [
      { def_en: "To undertake the first stage of cooking vegetables or meat in boiling or simmering water, starting either from hot or cold. Blanching helps to tenderize the food and fix the colour.",
        def_uk: "Проводити перший етап приготування овочів чи м'яса в кип'ячій або майже кип'ячій воді, починаючи з гарячої або холодної води. Бланшування допомагає пом'якшити продукт і закріпити колір." }
    ]
  },
  {
    term_en: "Bouquet Garni",
    term_uk: "Букет гарні",
    defs: [
      { def_en: "A small bundle consisting of thyme, bay leaves, sprigs of parsley and celery sticks, wrapped in a green leek leaf or piece of muslin and tied with string. A thin slice of belly pork is also sometimes included. The bundle is added during cooking to increase the flavour of a dish.",
        def_uk: "Невеликий пучок із чебрецю, лаврового листя, гілочок петрушки та стебел селери, загорнутий у зелений листок цибулі-порею або марлю і перев'язаний ниткою. Іноді додають тонкий шматочок сирокопченої грудинки. Пучок кладуть під час варіння, щоб посилити аромат страви." }
    ]
  },
  {
    term_en: "Brown",
    term_uk: "Підрум'янювати",
    defs: [
      { def_en: "To cook ingredients or a dish very gently until attractively golden on the surface.",
        def_uk: "Готувати продукти чи страву на повільному вогні, доки поверхня не набуде привабливого золотистого кольору." }
    ]
  },
  {
    term_en: "Brunoise",
    term_uk: "Брюнуаз",
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
    defs: [
      { def_en: "To cool a hot liquid or solid quickly to a low temperature.",
        def_uk: "Швидко охолоджувати гарячу рідину чи тверду страву до низької температури." }
    ]
  },
  {
    term_en: "Chinois",
    term_uk: "Шинуа",
    defs: [
      { def_en: "A fine-mesh conical strainer through which a mixture is passed to remove any large elements and ensure a smooth consistency.",
        def_uk: "Конічне сито з дрібною сіткою, крізь яке пропускають суміш, щоб прибрати великі частинки і забезпечити однорідну консистенцію." }
    ]
  },
  {
    term_en: "Clarified Butter",
    term_uk: "Перетоплене (освітлене) масло",
    defs: [
      { def_en: "Butter that has been melted over a very low heat or in a bain-marie to separate its impurities, which either sink or rise. The resulting butter is skimmed, then carefully ladled into a container.",
        def_uk: "Масло, розтоплене на дуже слабкому вогні або на водяній бані для відокремлення домішок, які осідають або спливають. Отримане масло знімають з поверхні і обережно переливають у ємність, оминаючи домішки, що осіли на дні." }
    ]
  },
  {
    term_en: "Clarify",
    term_uk: "Освітлювати",
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
    defs: [
      { def_en: "To dissolve the crusty cooking residue left in the bottom of a pan by adding water, wine or stock.",
        def_uk: "Розчиняти пригорілі частинки на дні сковороди, додаючи воду, вино чи бульйон." }
    ]
  },
  {
    term_en: "Degraisser",
    term_uk: "Дегресер (знежирювати)",
    defs: [
      { def_en: "A French term meaning to remove excess fat from an ingredient, liquid or a dish.",
        def_uk: "Французький термін, що означає видаляти зайвий жир з продукту, рідини чи страви." }
    ]
  },
  {
    term_en: "Demi-Glace",
    term_uk: "Дем-гляс",
    defs: [
      { def_en: "A rich, glossy brown, reduced sauce, typically flavoured with wine.",
        def_uk: "Насичений глянцевий коричневий уварений соус, зазвичай ароматизований вином." }
    ]
  },
  {
    term_en: "Discard",
    term_uk: "Викидати (непотрібне)",
    defs: [
      { def_en: "To throw away any element or ingredient no longer required, or any inedible waste.",
        def_uk: "Викидати будь-який елемент чи інгредієнт, що більше не потрібен, або неїстівні відходи." }
    ]
  },
  {
    term_en: "Duxelles",
    term_uk: "Дюксель",
    defs: [
      { def_en: "A mixture of mushrooms cut into very fine dice and flavoured with aromatic herbs; an excellent base for making stuffings.",
        def_uk: "Суміш грибів, нарізаних дуже дрібними кубиками і приправлених ароматними травами; чудова основа для начинок." }
    ]
  },
  {
    term_en: "Filter",
    term_uk: "Фільтрувати",
    defs: [
      { def_en: "To purify a more or less liquid mixture by passing it through a chinois or fine sieve.",
        def_uk: "Очищати більш-менш рідку суміш, пропускаючи її через шинуа або дрібне сито." }
    ]
  },
  {
    term_en: "Fine Herbes",
    term_uk: "Фін-зерб",
    defs: [
      { def_en: "A classic French blend of fresh herbs, usually including parsley, tarragon, chervil and chives; used to flavour egg, dairy and seafood dishes.",
        def_uk: "Класична французька суміш свіжих трав, зазвичай петрушки, естрагону, кервелю та цибулі-шніт; використовується для ароматизації яєчних, молочних страв та морепродуктів." }
    ]
  },
  {
    term_en: "Flamber",
    term_uk: "Фламбувати",
    defs: [
      { def_en: "A French term meaning to pour alcohol over food and ignite it; this is often done at the table to create a spectacle for the diners while enhancing the flavour of the dish.",
        def_uk: "Французький термін, що означає полити страву алкоголем і підпалити її; часто робиться прямо за столом для ефектного видовища і водночас посилення смаку страви." }
    ]
  },
  {
    term_en: "Fumet",
    term_uk: "Фюме",
    defs: [
      { def_en: "Very full-bodied cooking juices made exclusively from fish and game.",
        def_uk: "Дуже насичений відвар (концентрований бульйон), приготований виключно з риби та дичини." }
    ]
  },
  {
    term_en: "Giblets",
    term_uk: "Тельбухи (потрухи птиці)",
    defs: [
      { def_en: "The specific name for poultry offal: liver, gizzard, heart, feet, comb, etc.",
        def_uk: "Спеціальна назва для субпродуктів птиці: печінка, шлунок, серце, лапки, гребінець тощо." }
    ]
  },
  {
    term_en: "Glaze",
    term_uk: "Глазурувати",
    defs: [
      { def_en: "To cook vegetables in a little water with butter and sugar to give them a shiny surface. Vegetables glazed à brun are cooked until slightly caramelized to achieve a darker surface coloration; those cooked à blanc are not caramelized at all.",
        def_uk: "Готувати овочі в невеликій кількості води з маслом і цукром, щоб надати їм блискучої поверхні. Овочі, глазуровані «а брюн», готують до легкої карамелізації для темнішого відтінку поверхні; «а блан» — без карамелізації." }
    ]
  },
  {
    term_en: "Incorporate",
    term_uk: "Вводити (в суміш)",
    defs: [
      { def_en: "To mix, introduce or blend an ingredient into a mixture.",
        def_uk: "Змішувати, вводити чи поєднувати інгредієнт із сумішшю." }
    ]
  },
  {
    term_en: "Infuse",
    term_uk: "Настоювати",
    defs: [
      { def_en: "To release flavours into a liquid (ideally just boiled) by allowing aromatic ingredients to steep in it.",
        def_uk: "Вивільняти аромати в рідину (в ідеалі щойно закип'ячену), дозволяючи ароматичним інгредієнтам настоюватися в ній." }
    ]
  },
  {
    term_en: "Ingredients",
    term_uk: "Інгредієнти",
    defs: [
      { def_en: "The items required for making a recipe, usually specified in exact amounts for a certain number of servings.",
        def_uk: "Складові, необхідні для приготування рецепту, зазвичай зазначені в точних кількостях для певної кількості порцій." }
    ]
  },
  {
    term_en: "Intensify",
    term_uk: "Посилювати (смак)",
    defs: [
      { def_en: "To boost the flavour of a dish by reducing it over heat, or by adding aromatic ingredients that act as flavour enhancers.",
        def_uk: "Підсилювати смак страви шляхом уварювання на вогні або додаванням ароматичних інгредієнтів, які діють як підсилювачі смаку." }
    ]
  },
  {
    term_en: "Jellify",
    term_uk: "Желювати",
    defs: [
      { def_en: "To add gelatine or agar-agar to give a softer texture to certain mixtures that have a tendency to go hard at room temperature or when chilled.",
        def_uk: "Додавати желатин або агар-агар, щоб надати м'якшу текстуру сумішам, які мають тенденцію тверднути за кімнатної температури або в охолодженому вигляді." }
    ]
  },
  {
    term_en: "Juices",
    term_uk: "Соки (м'ясні)",
    defs: [
      { def_en: "The liquid that is released during the cooking of meat, poultry and certain vegetables. These juices are precious because they contain the very essence of the item's flavours and aromas.",
        def_uk: "Рідина, що виділяється під час приготування м'яса, птиці та деяких овочів. Ці соки цінні, оскільки містять саму суть смаку й аромату продукту." }
    ]
  },
  {
    term_en: "Julienne",
    term_uk: "Жульєн",
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
    defs: [
      { def_en: "To thread thin strips of bacon or ham through certain kinds of meat or fish to give them more flavour and succulence.",
        def_uk: "Протягувати тонкі смужки бекону чи шинки крізь певні види м'яса або риби, щоб надати їм більше смаку та соковитості." }
    ]
  },
  {
    term_en: "Let Down",
    term_uk: "Розводити (соус)",
    defs: [
      { def_en: "To add a liquid to a stock or a sauce to make it runnier.",
        def_uk: "Додавати рідину до бульйону чи соусу, щоб зробити його рідшим." }
    ]
  },
  {
    term_en: "Mirepoix",
    term_uk: "Мірпуа",
    defs: [
      { def_en: "[TODO: add definition — source only referenced \"see No. 228\"]",
        def_uk: "[TODO: додати визначення — у джерелі лише посилання «див. № 228»]" }
    ]
  },
  {
    term_en: "Mise-en-place",
    term_uk: "Мізан пляс",
    defs: [
      { def_en: "A general name given to those elementary preparations which are constantly resorted to during the various stages of most culinary operations.",
        def_uk: "Загальна назва елементарних підготовчих операцій, до яких постійно вдаються на різних етапах більшості кулінарних процесів." }
    ]
  },
  {
    term_en: "Monter au Beurre",
    term_uk: "Монте о бер",
    defs: [
      { def_en: "To finish with butter; this is usually done to sauces by whisking in small amounts of cold butter to make them smoother.",
        def_uk: "«Завершувати маслом» — зазвичай застосовується до соусів: вбивати невеликими порціями холодне масло, щоб зробити соус гладкішим." }
    ]
  },
  {
    term_en: "Muslin",
    term_uk: "Марля",
    defs: [
      { def_en: "A piece of fine cloth (also known as cheesecloth) through which liquids such as sauces and stocks are filtered and strained.",
        def_uk: "Шматок тонкої тканини (також відомої як сирна тканина), крізь яку фільтрують і проціджують такі рідини, як соуси та бульйони." }
    ]
  },
  {
    term_en: "Nap",
    term_uk: "Наппе",
    defs: [
      { def_en: "To coat food evenly with a sauce.",
        def_uk: "Рівномірно покривати страву соусом." }
    ]
  },
  {
    term_en: "Paysanne",
    term_uk: "Пейзан",
    defs: [
      { def_en: "To cut a product into triangles.",
        def_uk: "Нарізати продукт трикутниками." }
    ]
  },
  {
    term_en: "Pepper",
    term_uk: "Перець (горошком)",
    defs: [
      { def_en: "Small dried berries available as black, white or pink peppercorns; they should be freshly ground from a pepper mill or freshly cracked using a mortar and pestle.",
        def_uk: "Дрібні сушені ягоди, доступні як чорний, білий чи рожевий перець горошком; його слід свіжомолоти в млинку для перцю або свіжороздавлювати в ступці." }
    ]
  },
  {
    term_en: "Poivre Mignonette",
    term_uk: "Пуавр міньйонет",
    defs: [
      { def_en: "The French term for freshly cracked peppercorns.",
        def_uk: "Французький термін для свіжороздавленого перцю горошком." }
    ]
  },
  {
    term_en: "Reduce",
    term_uk: "Уварювати (редукувати)",
    defs: [
      { def_en: "To boil off water or other liquid, often from a sauce, in order to concentrate the flavour and aromas.",
        def_uk: "Випарювати воду чи іншу рідину, часто з соусу, щоб зконцентрувати смак і аромати." }
    ]
  },
  {
    term_en: "Roux",
    term_uk: "Ру",
    defs: [
      { def_en: "A mixture of flour cooked in fat, which forms the base for a great number of cooked sauces.",
        def_uk: "Суміш борошна, обсмаженого в жирі, що є основою для великої кількості варених соусів." }
    ]
  },
  {
    term_en: "Season",
    term_uk: "Приправляти",
    defs: [
      { def_en: "To add condiments (usually salt and pepper) to a dish to bring out its flavour and aromas.",
        def_uk: "Додавати приправи (зазвичай сіль і перець) до страви, щоб розкрити її смак і аромати." }
    ]
  },
  {
    term_en: "Separate",
    term_uk: "Відокремлювати (білок від жовтка)",
    defs: [
      { def_en: "To divide the white of a raw egg from the yolk as you remove it from the shell.",
        def_uk: "Відділяти білок сирого яйця від жовтка під час вилучення яйця зі шкаралупи." }
    ]
  },
  {
    term_en: "Shred",
    term_uk: "Шаткувати",
    defs: [
      { def_en: "To cut vegetables, such as cabbage, into fine strips.",
        def_uk: "Нарізати овочі, наприклад капусту, тонкими смужками." }
    ]
  },
  {
    term_en: "Simmer",
    term_uk: "Варити на повільному вогні",
    defs: [
      { def_en: "To cook very gently in liquid that is on the point of boiling; the surface will appear to be trembling.",
        def_uk: "Готувати дуже повільно в рідині, яка перебуває на межі кипіння; поверхня при цьому ледь тремтить." }
    ]
  },
  {
    term_en: "Skim",
    term_uk: "Знімати піну/жир",
    defs: [
      { def_en: "To remove the fat or foam that rises to the surface of a liquid during cooking; a skimmer or a ladle may be used for doing this.",
        def_uk: "Прибирати жир або піну, що піднімається на поверхню рідини під час готування; для цього можна використати шумівку чи ополоник." }
    ]
  },
  {
    term_en: "Skin",
    term_uk: "Знімати шкірку",
    defs: [
      { def_en: "To immerse certain vegetables or fruit such as tomatoes in boiling water for a moment in order to remove the very thin outer covering.",
        def_uk: "Занурювати певні овочі чи фрукти, наприклад помідори, на мить у кип'ячу воду, щоб зняти дуже тонку зовнішню шкірку." }
    ]
  },
  {
    term_en: "Slice",
    term_uk: "Нарізати скибками",
    defs: [
      { def_en: "To cut meat, vegetables or fruit into thin, flat pieces of the same size.",
        def_uk: "Нарізати м'ясо, овочі чи фрукти на тонкі, пласкі шматочки однакового розміру." }
    ]
  },
  {
    term_en: "Stock",
    term_uk: "Бульйон (фонд)",
    defs: [
      { def_en: "A flavoured liquid made by gently heating water, bones and vegetables; it forms the basis of many sauces and soups.",
        def_uk: "Ароматна рідина, отримана повільним нагріванням води, кісток та овочів; є основою для багатьох соусів і супів." }
    ]
  },
  {
    term_en: "Strain",
    term_uk: "Проціджувати",
    defs: [
      { def_en: "To pass a liquid mixture through a chinois in order to separate out any solid matter.",
        def_uk: "Пропускати рідку суміш крізь шинуа, щоб відокремити тверді частинки." }
    ]
  },
  {
    term_en: "Strip",
    term_uk: "Обривати листя",
    defs: [
      { def_en: "To separate the leaves of plants and herbs from their stalks.",
        def_uk: "Відокремлювати листя рослин і трав від стебел." }
    ]
  },
  {
    term_en: "Stud",
    term_uk: "Шпигувати (спеціями)",
    defs: [
      { def_en: "To push one ingredient into another, such as cloves into an onion.",
        def_uk: "Встромляти один інгредієнт в інший, наприклад, гвоздику в цибулину." }
    ]
  },
  {
    term_en: "Sweat",
    term_uk: "Томити (потіти)",
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
    defs: [
      { def_en: "To mix or blend vigorously using a balloon whisk so that the mixture will aerate or become creamy.",
        def_uk: "Енергійно змішувати чи збивати за допомогою кулястого віночка, щоб суміш насичувалася повітрям або ставала кремоподібною." }
    ]
  },
  {
    term_en: "Zest",
    term_uk: "Цедра / цедрувати",
    defs: [
      { def_en: "The coloured outer layer of citrus fruit.",
        def_uk: "Забарвлений зовнішній шар цитрусових." },
      { def_en: "To peel off the thin outer layer of citrus fruit using a zesting tool or a chef's knife.",
        def_uk: "Знімати тонкий зовнішній шар цитрусових за допомогою спеціального інструменту чи кухарського ножа." }
    ]
  }
];

// Sort alphabetically by English term (same convention as ALL_SAUCE_KEYS in app.js)
GLOSSARY.sort((a, b) => a.term_en.localeCompare(b.term_en, ['uk', 'en'], { sensitivity: 'base' }));
