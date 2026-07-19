# Changelog
## v1.3.0 — 2026-07-19 (in progress)

### Added
- New **Glossary** screen (`s-glossary`) — bilingual (EN/UK) culinary terms
  reference with live search across term + all definitions.
  - New data file `data/glossary.js` (`GLOSSARY` array, term/defs structure,
    multiple definitions per term supported).
  - New `bGlossary()` renderer in `data/app.js`, wired into `navTo()`.
  - 5th bottom-nav button (Home / Structure / All / Saved / **Glossary**).
  - New CSS block `.gl-item` / `.gl-term` / `.gl-def`.
  - New offline icon added to `icons/icons-data.js`
    (`streamline:dictionary-language-book-solid`).

### Fixed
- Per-sauce hero photo (`.sauce-hero-img` in `openSauce()`) no longer uses
  CSS `object-fit: cover` (which cropped photos of varying sizes/ratios).
  Now scales via JS (`sizeSauceHero()`, called on `img.onload`):
  - Default: scales to exactly 300px height, width proportional.
  - If that would leave the photo narrower than the screen, scales to
    fill screen width instead (height then exceeds 300px).
  - Centered via `margin: 0 auto` on `.sauce-hero-img`.

  
## [1.2.5] — 2026-07-19

### Додано
- Система OTA-оновлень (over-the-air) через `@capgo/capacitor-updater` (ручний режим, `autoUpdate:false`) — Android-застосунок тепер сам перевіряє наявність нових версій через GitHub Releases цього репозиторію (`github.com/Apefty/French-Sauces`) і оновлюється без перевстановлення APK. Перевірка відбувається автоматично при відкритті/поверненні з фону, а також вручну — з нової кнопки на сторінці "About".
- Сторінку "About" переведено з pop-up вікна на повноцінний екран (`s-about`), узгоджений з навігацією решти застосунку (кнопка "Назад" тощо), із живим статусом перевірки оновлень ("Перевірка оновлень...", "У вас остання версія", "Знайдено оновлення, завантаження...", "Оновлення встановлено — перезапуск").

### Виправлено
- Прибрано дублювання елемента `#about-overlay` у `index.html` (два окремі блоки з однаковим `id`, залишок від попередньої правки About) — тепер лише один повноцінний екран.

## [1.2.4] — 2026-07-18

### Виправлено
- Головна сторінка показувала занижену кількість соусів ("Всього соусів: 239") порівняно з розділом "Всі соуси" (241) — лічильник на головній оновлювався до завершення повного фонового довантаження даних. Тепер оновлюється ще раз після завершення завантаження.
- Виправлено 7 застарілих записів у `ALL_SAUCE_KEYS` (`app.js`), що більше не відповідали жодному реальному файлу після перейменування Robuchon-соусів:
  `Allemande Maigre`, `Mayonnaise` (бракувало суфікса `(Ro)`) та `Poultry Veloute (Ro)`, `Roux Brown (Ro)`, `Roux Pale (Ro)`, `Roux White (Ro)`, `Wine mustard (Ro)` (застарілі "фантомні" записи без відповідного файлу).

## [1.2.3] — 2026-07-18

### Виправлено
- Кнопка "Всі" в нижній навігації не змінювала колір при активації — масив, що перемикає CSS-клас `.on`, не містив ідентифікатор `'all'`.

## [1.2.2] — 2026-07-18

### Додано
- Масове перейменування 91 файлу соусів Robuchon (`data/sauces/*_ro.js`) — узгодження ключа, `nm`, `nm_uk` (суфікс `(Роб)`) та імені файлу; посилання в `data.js`/`app.js` оновлено автоматично (скрипт `rename-robuchon.js`).
- Нормалізація полів `mo:`/`dv:` для 16 канонічних материнських категорій (Béarnaise, Béchamel, Espagnole, Hollandaise, Mayonnaise, Velouté та ін.) — заповнено пропущені зворотні посилання на похідні соуси (скрипт `fix-mo-dv.js`).

### Відомо
- `russian_cold.js` тимчасово залишений без змін (колізія назви з `cold_russian.js`) — очікує на рішення про власну назву.

## [1.2.1] — 2026-07-16

### Виправлено
- Розділи "За стравою"/"За технікою" не відкривались, а фото на головній (`.hero`) не з'являлось — з `data.js` випадково зникли словники іконок `cico`/`uico`/`tico`, через що `bUsage()` завершувався помилкою й переривав виконання `initApp()` до того, як встигали запуститись `bTech()`, `bAll()` і `randomHeroImage()`. Словники відновлено.
- Застарілий запис `'Aioli'` (без суфікса) в `ALL_SAUCE_KEYS` замінено на `'Aioli (Ro)'` — через нього стабільно обривався повний preload соусів при кожному запуску.
- 3 нові Escoffier-файли перейменовано під назву, яку очікує алгоритм `_slug()` (`chaud_froid_sauce_a_laurore_es.js`, `chaud_froid_sauce_au_vert_pre_es.js`, `poivrade_sauce_for_venison_es.js`).

## [1.2.0] — 2026-07-16

### Виправлено
- Пошук працював лише англійською — тепер перевіряє й українські поля (`nm_uk`, `pr_uk`, `ig_uk`, `rc_uk`, переклад категорії/материнського соусу) незалежно від обраної мови інтерфейсу.
- Повідомлення "No results for" було захардкоджене англійською — тепер використовує ключ перекладу `search_no_results`.
- Кнопка "Додати до збережених" не оновлювала текст/іконку одразу при натисканні — невірний `id` в `toggleFav()` (`bfc` замість `btn-fav-card`).
- Кнопка "Назад" при переході між соусами через "Деривативи"/"Схожі соуси" вела не на попередній соус, а одразу в меню — додано окремий стек `sauceHistory` для коректного відновлення попереднього соусу.
- Виправлено дублювання кнопки "Додати до збережених" і відновлено кнопку "✓ Зберегти" для нотаток, що зникла через неправильну вставку коду.

### Додано
- Лічильник "Всього соусів" на головній сторінці, поруч із "Перегляд за".

## [1.1.0] — 2026-07-15

### Додано
- Повноцінний Android-порт застосунку (Capacitor), протестований через USB на реальному пристрої (Redmi 9).
- Власна іконка застосунку.

### Виправлено
- Прибрано CDN-залежності (Font Awesome, Iconify) — застосунок тепер повністю офлайн, однаково для Windows і Android.
