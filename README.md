# British Learner

iGCSE, AS-Level and A-Level programmes for Maths, Physics, Chemistry, Biology and Computer Science, with Cambridge, Edexcel and AQA (OxfordAQA), plus an interactive periodic table. In English and French.

Most lessons are listed and marked as coming soon. Written lessons are in `js/lessons/`. The Exam Papers and AI Assistant tabs aren't open yet.

## Run it

Open `index.html`, or run a local server:

```bash
python -m http.server 8765
```

## Where things are

| File | Purpose |
|---|---|
| `js/data/curriculum.js` | iGCSE programmes, units and lesson names, in English and French |
| `js/data/curriculum-advanced.js` | AS-Level and A-Level programmes, units and lesson names, in English and French |
| `js/i18n.js` | Interface text in both languages |
| `js/lesson.js` | Lesson pages, and the list of written lessons |
| `js/lessons/` | Written lessons, in English and French |
| `js/app.js` | Tabs, programme bar, unit tables and page routing |
| `js/bob.js` | Bob, the robot |
| `js/fx.js` | Animations |
| `js/periodic.js` | Periodic table and element pages |
| `js/data/elements.js` | Data for the 118 elements and their isotopes |
| `js/data/compounds.js`, `js/data/compounds-fr.js` | Well-known compounds and element uses |

## Sources

Unit and lesson names follow the official Cambridge, Pearson Edexcel and OxfordAQA specifications. Some broad headings are split into several lessons.

Element data comes from Periodic-Table-JSON and PubChem, with summaries from Wikipedia and Wikipédia (CC BY-SA). Isotope data comes from the IAEA LiveChart of Nuclides.
