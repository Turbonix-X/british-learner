/* British Learner: the interactive periodic table and element pages. */
window.BL = window.BL || {};

(function () {
  const t = BL.t;
  const CATEGORIES = {
    alkali: { en: "Alkali metals", fr: "Métaux alcalins", c: "#ffc4b8" },
    alkaline: { en: "Alkaline earth metals", fr: "Métaux alcalino-terreux", c: "#ffe3b3" },
    transition: { en: "Transition metals", fr: "Métaux de transition", c: "#8fe8d8" },
    post: { en: "Post-transition metals", fr: "Métaux pauvres", c: "#a9dcff" },
    metalloid: { en: "Metalloids", fr: "Métalloïdes", c: "#c4f5a8" },
    nonmetal: { en: "Other non-metals", fr: "Autres non-métaux", c: "#f5f59a" },
    halogen: { en: "Halogens", fr: "Halogènes", c: "#f5c2e7" },
    noble: { en: "Noble gases", fr: "Gaz nobles", c: "#7fd4f5" },
    lanthanide: { en: "Lanthanides", fr: "Lanthanides", c: "#cfe0ff" },
    actinide: { en: "Actinides", fr: "Actinides", c: "#e6d1ff" },
    unknown: { en: "Properties unknown", fr: "Propriétés inconnues", c: "#dbe7e7" },
  };
  const BLOCK = { s: "#ffc4b8", p: "#f5f59a", d: "#8fe8d8", f: "#7fd4f5" };
  const STATE = { Solid: "#8fe8d8", Liquid: "#7fd4f5", Gas: "#f5f59a" };
  const MODES = [
    { id: "category", label: "mCategory" },
    { id: "state", label: "mState" },
    { id: "block", label: "mBlock" },
    { id: "en", label: "mEn", key: "en", unit: "pauling" },
    { id: "radius", label: "mRadius", key: "radius", unit: "pm" },
    { id: "ie", label: "mIe", key: "ie", unit: "kJ/mol" },
  ];
  const DECAYS = {
    "A": { en: "Alpha decay", fr: "Désintégration alpha" }, "B-": { en: "Beta-minus decay", fr: "Désintégration bêta moins" }, "B+": { en: "Positron emission", fr: "Émission de positon" }, "EC": { en: "Electron capture", fr: "Capture électronique" }, "EC+B+": { en: "Electron capture or positron emission", fr: "Capture électronique ou émission de positon" }, "SF": { en: "Spontaneous fission", fr: "Fission spontanée" }, "P": { en: "Proton emission", fr: "Émission de proton" }, "N": { en: "Neutron emission", fr: "Émission de neutron" }, "2N": { en: "Two-neutron emission", fr: "Émission de deux neutrons" }, "2P": { en: "Two-proton emission", fr: "Émission de deux protons" }, "IT": { en: "Isomeric transition", fr: "Transition isomérique" }, "2B-": { en: "Double beta decay", fr: "Double désintégration bêta" }, "2EC": { en: "Double electron capture", fr: "Double capture électronique" }, "B-N": { en: "Beta decay with neutron emission", fr: "Désintégration bêta avec émission de neutron" }, "B-A": { en: "Beta decay with alpha emission", fr: "Désintégration bêta avec émission alpha" }, "2B+": { en: "Double positron emission", fr: "Double émission de positon" },
  };
  const BASICS = [
    { c: "#14d9a8", en: ["Proton", "A positively charged particle (+1) in the nucleus, with a relative mass of 1. The number of protons is the atomic number, and it decides which element an atom is."], fr: ["Proton", "Particule de charge positive (+1) située dans le noyau, de masse relative 1. Le nombre de protons est le numéro atomique : il détermine de quel élément il s'agit."] },
    { c: "#67c9e8", en: ["Neutron", "A neutral particle (charge 0) in the nucleus, with a relative mass of 1. Neutrons help hold the nucleus together. Atoms of one element can have different numbers of them."], fr: ["Neutron", "Particule neutre (charge 0) située dans le noyau, de masse relative 1. Les neutrons aident à maintenir le noyau. Les atomes d'un même élément peuvent en avoir un nombre différent."] },
    { c: "#ffffff", en: ["Electron", "A negatively charged particle (−1) with a tiny mass, about 1/1840 of a proton. Electrons move around the nucleus in shells and take part in chemical bonds."], fr: ["Électron", "Particule de charge négative (−1) à la masse minuscule, environ 1/1840 de celle d'un proton. Les électrons se déplacent autour du noyau dans des couches et participent aux liaisons chimiques."] },
    { c: "#0a6f93", en: ["Nucleus", "The tiny, dense centre of an atom, made of protons and neutrons. It holds nearly all of the atom's mass but only a minute fraction of its volume."], fr: ["Noyau", "Centre minuscule et dense de l'atome, formé de protons et de neutrons. Il contient presque toute la masse de l'atome, mais une infime partie de son volume."] },
    { c: "#08867b", en: ["Electron shell", "An energy level that electrons occupy around the nucleus. Inner shells fill first in simple models. The first holds up to 2 electrons, and the second up to 8."], fr: ["Couche électronique", "Niveau d'énergie occupé par des électrons autour du noyau. Dans les modèles simples, les couches internes se remplissent d'abord. La première contient jusqu'à 2 électrons, la deuxième jusqu'à 8."] },
    { c: "#ffc4b8", en: ["Outer (valence) electrons", "The electrons in the outermost shell. They largely control how an element reacts, which is why elements in the same main group behave similarly."], fr: ["Électrons de valence", "Électrons de la couche la plus externe. Ils déterminent en grande partie la réactivité d'un élément : c'est pourquoi les éléments d'un même groupe principal se ressemblent."] },
    { c: "#8fe8d8", en: ["Group", "A vertical column of the table, numbered 1 to 18. In the main groups, elements have the same number of outer electrons and similar chemical properties."], fr: ["Groupe", "Colonne verticale du tableau, numérotée de 1 à 18. Dans les groupes principaux, les éléments ont le même nombre d'électrons externes et des propriétés chimiques proches."] },
    { c: "#7fd4f5", en: ["Period", "A horizontal row of the table. An element's period number equals the number of electron shells its atoms occupy in the ground state."], fr: ["Période", "Ligne horizontale du tableau. Le numéro de période d'un élément correspond au nombre de couches électroniques occupées par ses atomes à l'état fondamental."] },
    { c: "#c4f5a8", en: ["Atomic number (Z)", "The number of protons in an atom's nucleus. Elements are arranged in order of atomic number."], fr: ["Numéro atomique (Z)", "Nombre de protons dans le noyau d'un atome. Les éléments sont rangés selon leur numéro atomique."] },
    { c: "#a9dcff", en: ["Mass number (A)", "The total number of protons and neutrons in a nucleus. Neutrons = mass number − atomic number."], fr: ["Nombre de masse (A)", "Nombre total de protons et de neutrons d'un noyau. Neutrons = nombre de masse − numéro atomique."] },
    { c: "#f5c2e7", en: ["Isotopes", "Atoms of the same element with different numbers of neutrons. They have the same chemical properties, but different masses, and some are radioactive."], fr: ["Isotopes", "Atomes d'un même élément ayant un nombre différent de neutrons. Ils ont les mêmes propriétés chimiques, mais des masses différentes, et certains sont radioactifs."] },
    { c: "#ffe3b3", en: ["Relative atomic mass (Ar)", "The average mass of an element's atoms, taking into account the abundance of its isotopes, compared with 1/12 of the mass of a carbon-12 atom."], fr: ["Masse atomique relative (Ar)", "Masse moyenne des atomes d'un élément, selon l'abondance de ses isotopes, comparée à 1/12 de la masse d'un atome de carbone 12."] },
    { c: "#f5f59a", en: ["Ion", "An atom or group of atoms with an overall charge because it has lost electrons (positive ion) or gained electrons (negative ion)."], fr: ["Ion", "Atome ou groupe d'atomes ayant une charge totale, parce qu'il a perdu des électrons (ion positif) ou en a gagné (ion négatif)."] },
    { c: "#e6d1ff", en: ["Half-life", "The time taken for half of the unstable nuclei in a sample to decay. It can range from a tiny fraction of a second to billions of years."], fr: ["Demi-vie", "Temps nécessaire pour que la moitié des noyaux instables d'un échantillon se désintègre. Elle va d'une infime fraction de seconde à des milliards d'années."] },
    { c: "#cfe0ff", en: ["Electronegativity", "How strongly an atom attracts the shared electrons in a covalent bond. Fluorine has the highest value, and it generally rises across a period and falls down a group."], fr: ["Électronégativité", "Force avec laquelle un atome attire les électrons partagés d'une liaison covalente. Le fluor a la valeur la plus élevée. Elle augmente en général le long d'une période et diminue en descendant un groupe."] },
    { c: "#dbe7e7", en: ["Ionisation energy", "The energy needed to remove one mole of electrons from one mole of gaseous atoms. It generally rises across a period and falls down a group."], fr: ["Énergie d'ionisation", "Énergie nécessaire pour arracher une mole d'électrons à une mole d'atomes gazeux. Elle augmente en général le long d'une période et diminue en descendant un groupe."] },
    { c: "#8fe8d8", en: ["Blocks (s, p, d, f)", "The regions of the table named after the type of orbital holding the highest-energy electrons in an atom."], fr: ["Blocs (s, p, d, f)", "Régions du tableau nommées d'après le type d'orbitale qui contient les électrons de plus haute énergie d'un atome."] },
    { c: "#ffe3b3", en: ["Metals and non-metals", "Metals, on the left and centre, are generally shiny conductors that form positive ions. Non-metals, on the right, are generally poor conductors that often form negative ions or share electrons."], fr: ["Métaux et non-métaux", "Les métaux, à gauche et au centre, sont en général brillants et conducteurs, et forment des ions positifs. Les non-métaux, à droite, conduisent mal et forment souvent des ions négatifs ou partagent des électrons."] },
  ];

  /* ---------- Reading the data in the current language ---------- */
  function fr() { return BL.lang === "fr"; }
  const DISCOVERY_FR = {
    "Ancient Egypt": "Égypte antique", "Ancient china": "Chine antique", "Bronze Age": "Âge du bronze", "India": "Inde", "Middle East": "Moyen-Orient",
    "Joint Institute for Nuclear Research": "Institut unifié de recherches nucléaires", "Lawrence Berkeley National Laboratory": "Laboratoire national Lawrence-Berkeley",
    "Gesellschaft für Schwerionenforschung": "Centre de recherche sur les ions lourds (GSI)",
  };
  function cleanPerson(name) { return String(name).replace(/ \(chemist\)$/, ""); }
  function discoveredBy(e) {
    const d = e.dis;
    if (!d) return t("unknown");
    if (!fr()) return cleanPerson(d).replace(/^unknown/, "Unknown").replace(/^Ancient china$/, "Ancient China");
    if (DISCOVERY_FR[d]) return DISCOVERY_FR[d];
    const before = d.match(/^unknown, before (\d+) BCE?$/);
    if (before) return "Inconnu, avant " + before[1] + " av. J.-C.";
    if (/^\d+ BC$/.test(d)) return "Vers " + d.replace(" BC", "") + " av. J.-C.";
    return cleanPerson(d);
  }
  function namedBy(e) {
    // The source data has a few page titles here instead of a person's name.
    if (!e.nb || /^Isotopes of /.test(e.nb)) return t("notRecorded");
    return cleanPerson(e.nb);
  }
  function wikiLink(e) { return fr() && e.ft ? "https://fr.wikipedia.org/wiki/" + encodeURIComponent(e.ft.replace(/ /g, "_")) : e.src; }
  function elName(e) { return fr() ? e.nf : e.n; }
  function elSummary(e) { return fr() && e.sf ? e.sf : e.su; }
  function elUses(e) {
    if (fr()) return BL.elementUsesFr[e.s] || t("research");
    return BL.elementUses[e.s] || t("research");
  }
  function compoundsOf(symbol) {
    const out = [];
    BL.compounds.forEach(function (c, i) {
      const found = c[0].replace(/<[^>]+>[^<]*<\/[^>]+>/g, "").match(/[A-Z][a-z]?/g) || [];
      if (found.indexOf(symbol) === -1) return;
      const f = BL.compoundsFr[i];
      out.push(fr() && f ? [c[0], f[0], f[1]] : c);
    });
    return out;
  }
  function categoryKey(e) {
    if (e.g === 17 && e.z <= 85) return "halogen";
    const c = e.c;
    if (c.indexOf("unknown") === 0) return "unknown";
    if (c === "alkali metal") return "alkali";
    if (c === "alkaline earth metal") return "alkaline";
    if (c === "transition metal") return "transition";
    if (c === "post-transition metal") return "post";
    if (c === "metalloid") return "metalloid";
    if (c === "noble gas") return "noble";
    if (c === "lanthanide") return "lanthanide";
    if (c === "actinide") return "actinide";
    return "nonmetal";
  }
  function radiusOf(e) { return e.ar && e.ar.length ? e.ar[0] : null; }
  function modeValue(e, mode) { return mode.key === "radius" ? radiusOf(e) : e[mode.key]; }
  function mixColor(v) {
    const stops = [[230, 255, 250], [20, 217, 168], [18, 181, 214]];
    const x = Math.max(0, Math.min(1, v)) * 2;
    const i = Math.min(1, Math.floor(x)), f = x - i;
    return "rgb(" + [0, 1, 2].map(function (k) { return Math.round(stops[i][k] + (stops[i + 1][k] - stops[i][k]) * f); }).join(",") + ")";
  }
  function num(v) { return fr() ? String(v).replace(".", ",") : String(v); }
  function fmt(value, suffix) { return value === null || value === undefined || value === "" ? t("unknown") : num(value) + (suffix || ""); }
  function kToC(k) { return Math.round((k - 273.15) * 10) / 10; }
  function mass(e) { return num(e.m < 10 ? e.m.toFixed(3) : e.m.toFixed(2)); }
  function stateName(ph) { return t(ph.toLowerCase()); }
  function sup(text) {
    const map = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "+": "⁺", "-": "⁻" };
    return String(text).split("").map(function (c) { return map[c] || c; }).join("");
  }
  function configHtml(text) { return String(text || "").replace(/([spdf])(\d+)/g, "$1<sup>$2</sup>"); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function halfLifeText(text) {
    if (!fr()) return text;
    return String(text).replace("years", "ans").replace("days", "jours").replace("hours", "heures").replace(/(\d)\.(\d)/g, "$1,$2");
  }
  function sourceNote() {
    return '<p class="source-note">' + t("sources") + (fr() ? " : " : ": ") + '<a href="https://github.com/Bowserinator/Periodic-Table-JSON" target="_blank" rel="noopener">Periodic-Table-JSON</a>, <a href="https://pubchem.ncbi.nlm.nih.gov/periodic-table/" target="_blank" rel="noopener">PubChem</a>, <a href="https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html" target="_blank" rel="noopener">' + (fr() ? "Carte des nucléides de l'AIEA" : "IAEA LiveChart of Nuclides") + '</a>. ' + t("sourceText") + "</p>";
  }
  function basicsHtml(list) {
    return '<div class="explain-grid">' + list.map(function (b, i) {
      const x = b[BL.lang];
      return '<div class="explain reveal" style="--c:' + b.c + ";--i:" + (i % 3) + '"><h3><i></i>' + x[0] + "</h3><p>" + x[1] + "</p></div>";
    }).join("") + "</div>";
  }

  /* ---------- The table ---------- */
  function renderTable(host) {
    const elements = window.BL_ELEMENTS;
    document.title = t("backPt") + " — British Learner";
    let mode = MODES[0], filter = null, query = "";

    let cells = "";
    for (let g = 1; g <= 18; g++) cells += '<button type="button" class="pt-label pt-group-btn" data-group="' + g + '" style="grid-column:' + (g + 1) + ';grid-row:1" title="' + t("highlightGroup") + " " + g + '">' + g + "</button>";
    for (let p = 1; p <= 7; p++) cells += '<button type="button" class="pt-label pt-period-btn" data-period="' + p + '" style="grid-column:1;grid-row:' + (p + 1) + '" title="' + t("highlightPeriod") + " " + p + '">' + p + "</button>";
    cells += '<div class="pt-preview" id="ptPreview" style="grid-column:4/14;grid-row:2/5"></div>';
    cells += '<div class="pt-label" style="grid-column:4;grid-row:7">57–71</div><div class="pt-label" style="grid-column:4;grid-row:8">89–103</div>';
    cells += '<div class="pt-gap" style="grid-row:9"></div>';
    elements.forEach(function (e) {
      // Cells appear in a wave spreading from the centre of the table.
      const wave = Math.round(Math.hypot(e.x - 9.5, (e.y - 5) * 1.3) * 45);
      cells += '<a class="pt-cell" href="#/chemistry/periodic-table/' + e.s + '" data-z="' + e.z + '" style="grid-column:' + (e.x + 1) + ";grid-row:" + (e.y + 1) + ";--wave:" + wave + '" aria-label="' + elName(e) + '"><span class="pt-z">' + e.z + '</span><span class="pt-s">' + e.s + '</span><span class="pt-n">' + elName(e) + "</span></a>";
    });

    host.innerHTML =
      '<a class="back-link" href="#/chemistry">← ' + t("chemistry") + "</a>" +
      '<header class="pt-head"><h1 class="page-title">' + BL.lettersHtml(t("ptCtaTitle")) + '</h1><p class="muted" style="margin-top:6px">' + t("ptIntro") + "</p></header>" +
      '<div class="pt-tools"><div class="pt-search"><input id="ptSearch" type="search" placeholder="' + t("search") + '" aria-label="' + t("search") + '" autocomplete="off"></div><div class="pt-modes" id="ptModes">' +
      MODES.map(function (m, i) { return '<button type="button" class="chip' + (i === 0 ? " active" : "") + '" data-m="' + m.id + '">' + t(m.label) + "</button>"; }).join("") + "</div></div>" +
      '<section class="card pt-card"><div class="pt-scroll"><div class="pt-grid" id="ptGrid">' + cells + '</div></div><div id="ptKey"></div></section>' +
      '<section class="card section-card"><h2>' + t("whatMeans") + "</h2>" + basicsHtml(BASICS) + sourceNote() + "</section>";

    const grid = host.querySelector("#ptGrid");
    const key = host.querySelector("#ptKey");
    const preview = host.querySelector("#ptPreview");
    const allCells = Array.prototype.slice.call(grid.querySelectorAll(".pt-cell"));
    const byZ = {};
    elements.forEach(function (e) { byZ[e.z] = e; });

    function colorOf(e) {
      if (mode.id === "category") return CATEGORIES[categoryKey(e)].c;
      if (mode.id === "state") return e.z >= 104 ? "#dbe7e7" : (STATE[e.ph] || "#dbe7e7");
      if (mode.id === "block") return BLOCK[e.b] || "#dbe7e7";
      const value = modeValue(e, mode);
      if (value === null || value === undefined) return "#dbe7e7";
      const vals = elements.map(function (x) { return modeValue(x, mode); }).filter(function (v) { return v !== null && v !== undefined; });
      const lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      return mixColor((value - lo) / (hi - lo));
    }
    function groupKey(e) {
      if (mode.id === "category") return categoryKey(e);
      if (mode.id === "state") return e.z >= 104 ? "Unknown" : e.ph;
      if (mode.id === "block") return e.b;
      return null;
    }
    function applyHighlights() {
      const q = query.trim().toLowerCase();
      allCells.forEach(function (cell) {
        const e = byZ[cell.dataset.z];
        let on = true;
        if (filter) on = filter(e);
        if (on && q) on = elName(e).toLowerCase().indexOf(q) === 0 || e.n.toLowerCase().indexOf(q) === 0 || e.s.toLowerCase() === q || String(e.z) === q;
        cell.classList.toggle("dim", !on);
      });
    }
    function clearLabels() {
      grid.querySelectorAll(".pt-group-btn, .pt-period-btn").forEach(function (l) { l.classList.remove("on"); });
    }
    function drawKey() {
      let items = [];
      if (mode.id === "category") items = Object.keys(CATEGORIES).map(function (k) { return [k, BL.pick(CATEGORIES[k]), CATEGORIES[k].c]; });
      if (mode.id === "state") items = [["Solid", t("solid"), STATE.Solid], ["Liquid", t("liquid"), STATE.Liquid], ["Gas", t("gas"), STATE.Gas], ["Unknown", t("unknownState"), "#dbe7e7"]];
      if (mode.id === "block") items = [["s", "s", BLOCK.s], ["p", "p", BLOCK.p], ["d", "d", BLOCK.d], ["f", "f", BLOCK.f]].map(function (i) { return [i[0], fr() ? "Bloc " + i[1] : i[1] + "-block", i[2]]; });
      if (items.length) {
        key.innerHTML = '<div class="pt-legend">' + items.map(function (i) { return '<button type="button" data-k="' + i[0] + '" style="--c:' + i[2] + '"><i></i>' + i[1] + "</button>"; }).join("") + "</div>";
        key.querySelectorAll("button").forEach(function (btn) {
          btn.addEventListener("click", function () {
            const already = btn.classList.contains("on");
            key.querySelectorAll("button").forEach(function (b) { b.classList.remove("on"); });
            clearLabels();
            if (already) { filter = null; } else {
              btn.classList.add("on");
              filter = function (e) { return groupKey(e) === btn.dataset.k; };
            }
            applyHighlights();
          });
        });
      } else {
        const vals = elements.map(function (x) { return modeValue(x, mode); }).filter(function (v) { return v !== null && v !== undefined; });
        const unit = mode.unit === "pauling" ? t("pauling") : mode.unit;
        key.innerHTML = '<div class="pt-scale"><span>' + t("low") + " " + num(Math.min.apply(null, vals)) + "</span><i></i><span>" + t("high") + " " + num(Math.max.apply(null, vals)) + " " + unit + "</span></div>";
      }
    }
    function paint() {
      allCells.forEach(function (cell) { cell.style.setProperty("--c", colorOf(byZ[cell.dataset.z])); });
      drawKey();
    }
    let shownZ = 0;
    function showPreview(e) {
      if (e.z === shownZ) return;
      shownZ = e.z;
      preview.innerHTML = '<div class="pt-preview-tile" style="--c:' + colorOf(e) + '"><span>' + e.z + "</span><b>" + e.s + "</b><span>" + mass(e) + '</span></div><div class="pt-preview-text"><strong>' + elName(e) + "</strong>" + BL.pick(CATEGORIES[categoryKey(e)]) + " · " + t("period") + " " + e.p + (e.y < 8 ? " · " + t("group") + " " + e.g : "") + "<br>" + configHtml(e.ec) + "</div>";
    }

    host.querySelector("#ptModes").addEventListener("click", function (ev) {
      const btn = ev.target.closest("button");
      if (!btn) return;
      mode = MODES.find(function (m) { return m.id === btn.dataset.m; });
      host.querySelectorAll("#ptModes .chip").forEach(function (c) { c.classList.toggle("active", c === btn); });
      filter = null;
      clearLabels();
      shownZ = 0;
      paint();
      applyHighlights();
    });
    grid.addEventListener("click", function (ev) {
      const btn = ev.target.closest(".pt-group-btn, .pt-period-btn");
      if (btn) {
        const wasOn = btn.classList.contains("on");
        clearLabels();
        key.querySelectorAll("button").forEach(function (b) { b.classList.remove("on"); });
        if (wasOn) { filter = null; }
        else if (btn.dataset.group) {
          const g = Number(btn.dataset.group);
          filter = function (e) { return e.g === g && e.y < 8; };
          btn.classList.add("on");
        } else {
          const p = Number(btn.dataset.period);
          filter = function (e) { return e.p === p; };
          btn.classList.add("on");
        }
        applyHighlights();
        return;
      }
      // The clicked cell becomes the big tile on the element page.
      const cell = ev.target.closest(".pt-cell");
      if (cell) cell.style.viewTransitionName = "el-tile";
    });

    // Dock effect: cells swell as the mouse gets close.
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    let mx = 0, my = 0, raf = 0, centres = null;
    function measure() {
      centres = allCells.map(function (cell) {
        const r = cell.getBoundingClientRect();
        return { cell: cell, x: r.left + r.width / 2, y: r.top + r.height / 2 };
      });
    }
    function dock() {
      raf = 0;
      if (!centres) return;
      centres.forEach(function (c) {
        const d = Math.hypot(c.x - mx, c.y - my);
        const s = d < 120 ? 1 + 0.45 * Math.pow(1 - d / 120, 2) : 1;
        c.cell.style.setProperty("--s", s.toFixed(3));
        c.cell.style.setProperty("--z", s > 1.2 ? 5 : s > 1 ? 2 : 0);
      });
    }
    function clearDock() {
      centres = null;
      allCells.forEach(function (cell) { cell.style.removeProperty("--s"); cell.style.removeProperty("--z"); });
    }
    if (finePointer && !BL.reducedMotion) {
      grid.addEventListener("pointerenter", measure);
      grid.addEventListener("pointermove", function (ev) {
        if (!centres) measure();
        mx = ev.clientX; my = ev.clientY;
        if (!raf) raf = requestAnimationFrame(dock);
      }, { passive: true });
      grid.addEventListener("pointerleave", clearDock);
      addEventListener("scroll", function () { if (centres && grid.isConnected) measure(); }, { passive: true });
    }
    function onHover(ev) {
      const cell = ev.target.closest(".pt-cell");
      if (cell) showPreview(byZ[cell.dataset.z]);
    }
    grid.addEventListener("mouseover", onHover);
    grid.addEventListener("focusin", onHover);

    const search = host.querySelector("#ptSearch");
    search.addEventListener("input", function () { query = search.value; applyHighlights(); });
    search.addEventListener("keydown", function (ev) {
      if (ev.key !== "Enter") return;
      const q = search.value.trim().toLowerCase();
      if (!q) return;
      const hit = elements.find(function (e) { return e.s.toLowerCase() === q || String(e.z) === q; }) || elements.find(function (e) { return elName(e).toLowerCase().indexOf(q) === 0 || e.n.toLowerCase().indexOf(q) === 0; });
      if (hit) location.hash = "#/chemistry/periodic-table/" + hit.s;
      else BL.toast(t("noMatch"));
    });

    paint();
    showPreview(byZ[6]);
  }

  /* ---------- Element page ---------- */
  function defaultIsotope(e) {
    const natural = e.iso.filter(function (i) { return i[3]; });
    if (natural.length) return natural.reduce(function (a, b) { return b[3] > a[3] ? b : a; });
    const target = Math.round(e.m);
    return e.iso.reduce(function (a, b) { return Math.abs(b[0] - target) < Math.abs(a[0] - target) ? b : a; });
  }
  function ionShells(shells, charge) {
    const out = shells.slice();
    let change = -charge;
    while (change < 0 && out.length) {
      const last = out.length - 1;
      out[last]--;
      change++;
      if (out[last] === 0) out.pop();
    }
    while (change > 0) {
      let last = out.length - 1;
      const n = out.length;
      if (last < 0 || out[last] >= 2 * n * n || (n > 1 && out[last] >= 8 && n <= 3)) { out.push(0); last++; }
      out[last]++;
      change--;
    }
    return out;
  }

  function drawAtom(svgHost, e, iso, charge, info) {
    const Z = e.z, N = iso[1], A = Z + N;
    const shells = ionShells(e.sh, charge);
    const size = Math.min(8.5, 62 / (1.12 * Math.sqrt(A)));
    const golden = Math.PI * (3 - Math.sqrt(5));
    let parts = "", protonsLeft = Z, nucleusR = size;
    for (let i = 0; i < A; i++) {
      const rho = size * 1.12 * Math.sqrt(i + 0.3);
      const th = i * golden;
      nucleusR = Math.max(nucleusR, rho + size);
      // Spreads protons evenly through the nucleus.
      const isProton = Math.floor((i + 1) * Z / A) > Math.floor(i * Z / A) && protonsLeft > 0;
      if (isProton) protonsLeft--;
      // Each particle flies in from far away when the atom is built.
      const fromA = i * 2.4;
      parts += '<circle class="' + (isProton ? "atom-p" : "atom-n") + '" data-kind="' + (isProton ? "p" : "n") + '" style="--i:' + Math.min(i, 120) + ";--dx:" + Math.round(Math.cos(fromA) * 280) + "px;--dy:" + Math.round(Math.sin(fromA) * 280) + 'px" cx="' + (250 + rho * Math.cos(th)).toFixed(1) + '" cy="' + (250 + rho * Math.sin(th)).toFixed(1) + '" r="' + size.toFixed(1) + '"/>';
    }
    const inner = nucleusR + 22, outer = 238;
    const gap = shells.length > 1 ? (outer - inner) / (shells.length - 1) : 0;
    let shellHtml = "", electrons = "";
    shells.forEach(function (count, s) {
      const r = shells.length > 1 ? inner + s * gap : Math.min(150, inner + 60);
      shellHtml += '<circle class="atom-shell" style="--s:' + s + '" data-shell="' + s + '" cx="250" cy="250" r="' + r.toFixed(1) + '"/><circle class="atom-shell-hit" data-shell="' + s + '" cx="250" cy="250" r="' + r.toFixed(1) + '"/>';
      const eSize = count > 18 ? 3 : count > 8 ? 3.8 : 5;
      let dots = "";
      for (let k = 0; k < count; k++) {
        const a = (k / count) * Math.PI * 2 + s * 0.4;
        const x = 250 + r * Math.cos(a), y = 250 + r * Math.sin(a);
        if (count <= 18) {
          // A short comet tail behind each electron.
          const b = a - Math.min(0.5, 1.6 / count);
          dots += '<path class="atom-trail" stroke-width="' + eSize * 0.9 + '" d="M' + (250 + r * Math.cos(b)).toFixed(1) + " " + (250 + r * Math.sin(b)).toFixed(1) + "A" + r.toFixed(1) + " " + r.toFixed(1) + " 0 0 1 " + x.toFixed(1) + " " + y.toFixed(1) + '"/>';
        }
        dots += '<circle class="atom-e" data-kind="e" data-shell="' + s + '" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + eSize + '"/>';
      }
      electrons += '<g class="atom-spin" style="--t:' + (5 + s * 3.5) + "s;--s:" + s + '">' + dots + "</g>";
    });
    const total = shells.reduce(function (a, b) { return a + b; }, 0);
    svgHost.innerHTML = '<svg viewBox="0 0 500 500" role="img" aria-label="' + elName(e) + ": " + Z + " " + t("protonsLower") + ", " + N + " " + t("neutronsLower") + ", " + total + " " + t("electronsLower") + '">' + shellHtml + '<g class="atom-nucleus">' + parts + "</g>" + electrons + "</svg>";

    svgHost.querySelector("svg").addEventListener("click", function (ev) {
      const el = ev.target;
      svgHost.querySelectorAll(".atom-shell").forEach(function (c) { c.classList.remove("hot"); });
      if (el.dataset.kind === "p") {
        info(t("proton"), fr()
          ? elName(e) + " : " + Z + " proton" + (Z === 1 ? "" : "s") + ". Chacun a une charge de +1 et une masse relative de 1. Changer ce nombre donnerait un autre élément."
          : e.n + " has " + Z + " proton" + (Z === 1 ? "" : "s") + ". Each has a charge of +1 and a relative mass of 1. Changing this number would make it a different element.");
      } else if (el.dataset.kind === "n") {
        info(t("neutron"), fr()
          ? "Cet isotope a " + N + " neutron" + (N === 1 ? "" : "s") + " (" + A + " − " + Z + "). Chacun n'a aucune charge et a une masse relative de 1."
          : "This isotope has " + N + " neutron" + (N === 1 ? "" : "s") + " (" + A + " − " + Z + "). Each has no charge and a relative mass of 1.");
      } else if (el.dataset.kind === "e" || el.dataset.shell !== undefined) {
        const s = Number(el.dataset.shell);
        svgHost.querySelector('.atom-shell[data-shell="' + s + '"]').classList.add("hot");
        const n = s + 1, cap = 2 * n * n, last = s === shells.length - 1;
        if (fr()) {
          info(el.dataset.kind === "e" ? "Électron de la couche " + n : "Couche " + n, "Cette couche contient " + shells[s] + " électron" + (shells[s] === 1 ? "" : "s") + ". La couche " + n + " peut en contenir jusqu'à " + cap + " au total (2n²)." + (last ? " C'est la couche externe : ses électrons sont les plus impliqués dans les réactions." : ""));
        } else {
          info(el.dataset.kind === "e" ? "Electron in shell " + n : "Shell " + n, "This shell holds " + shells[s] + " electron" + (shells[s] === 1 ? "" : "s") + ". Shell " + n + " can hold up to " + cap + " in total (2n²)." + (last ? " It's the outermost shell, so its electrons are the ones most involved in reactions." : ""));
        }
      }
    });
  }

  function readingAid(e, iso) {
    const outer = e.sh[e.sh.length - 1];
    if (fr()) {
      let g = "";
      if (e.y >= 8) g = "Il est dans le bloc f : on ne lui donne généralement pas de numéro de groupe standard.";
      else if (e.g === 18) g = "Il est dans le groupe 18, celui des gaz nobles" + (e.z === 2 ? ", même si l'hélium n'a que 2 électrons externes." : ", dont la couche externe est pleine et qui sont très peu réactifs.");
      else if (e.g <= 2 || e.g >= 13) g = "Il est dans le groupe " + e.g + " : ses atomes ont donc " + outer + " électron" + (outer === 1 ? "" : "s") + " externe" + (outer === 1 ? "" : "s") + ".";
      else g = "Il est dans le groupe " + e.g + ", dans le bloc d, où le nombre d'électrons externes ne suit pas le numéro de groupe aussi simplement.";
      return "<strong>" + e.nf + "</strong> a pour numéro atomique " + e.z + " : un atome neutre a donc <strong>" + e.z + " protons</strong> et <strong>" + e.z + " électrons</strong>. L'isotope " + e.nf.toLowerCase() + " " + iso[0] + " a <strong>" + iso[1] + " neutrons</strong> (" + iso[0] + " − " + e.z + "). Il est dans la période " + e.p + " : ses électrons occupent donc " + e.p + " couche" + (e.p === 1 ? "" : "s") + ". " + g;
    }
    let group = "";
    if (e.y >= 8) group = "It's in the f-block, so it isn't usually given a standard group number.";
    else if (e.g === 18) group = "It's in Group 18, the noble gases" + (e.z === 2 ? ", though helium has just 2 outer electrons." : ", which have full outer shells and are very unreactive.");
    else if (e.g <= 2 || e.g >= 13) group = "It's in Group " + e.g + ", so its atoms have " + outer + " outer electron" + (outer === 1 ? "" : "s") + ".";
    else group = "It's in Group " + e.g + ", in the d-block, where the number of outer electrons doesn't follow the group number in the same simple way.";
    return "<strong>" + e.n + "</strong> has atomic number " + e.z + ", so a neutral atom has <strong>" + e.z + " protons</strong> and <strong>" + e.z + " electrons</strong>. The isotope " + e.n.toLowerCase() + "-" + iso[0] + " has <strong>" + iso[1] + " neutrons</strong> (" + iso[0] + " − " + e.z + "). It's in Period " + e.p + ", so its electrons occupy " + e.p + " shell" + (e.p === 1 ? "" : "s") + ". " + group;
  }

  function renderElement(host, e) {
    const elements = window.BL_ELEMENTS;
    const prev = elements[e.z - 2], next = elements[e.z];
    document.title = elName(e) + " — British Learner";
    const color = CATEGORIES[categoryKey(e)].c;
    let iso = defaultIsotope(e);
    let charge = 0;
    const compounds = compoundsOf(e.s).slice(0, 8);
    const appearance = fr() ? e.af : e.ap;
    const density = e.d ? num(e.d) + (e.du ? " " + e.du.replace("g/cm3", "g/cm³") : "") : t("unknown");
    const facts = [
      [t("atomicNumber"), e.z], [t("relMass"), mass(e)], [t("group"), e.y >= 8 ? (fr() ? "Bloc f" : "f-block") : e.g], [t("period"), e.p], [t("block"), fr() ? "Bloc " + e.b : e.b + "-block"], [t("stateAt"), e.z >= 104 ? t("unknown") : stateName(e.ph)],
      [t("melting"), e.mp ? num(kToC(e.mp)) + " °C" : t("unknown")], [t("boiling"), e.bp ? num(kToC(e.bp)) + " °C" : t("unknown")], [t("density"), density],
      [t("electronegativity"), fmt(e.en)], [t("firstIon"), fmt(e.ie, " kJ/mol")], [t("affinity"), fmt(e.ea, " kJ/mol")], [t("radius"), fmt(radiusOf(e), " pm")], [t("oxidation"), e.ox || t("unknown")],
      [t("molarHeat"), fmt(e.mh, " J/(mol·K)")], [t("discovered"), discoveredBy(e)], [t("year"), e.yr === "Ancient" ? (fr() ? "Antiquité" : "Ancient") : (e.yr || t("unknown"))], [t("named"), namedBy(e)],
    ];

    host.innerHTML =
      '<div class="el-top"><a class="back-link" style="margin:0" href="#/chemistry/periodic-table" id="backToTable">← ' + t("backPt") + '</a><div class="el-nav">' +
      (prev ? '<a class="btn btn-small" href="#/chemistry/periodic-table/' + prev.s + '">← ' + elName(prev) + "</a>" : "") +
      (next ? '<a class="btn btn-small" href="#/chemistry/periodic-table/' + next.s + '">' + elName(next) + " →</a>" : "") + "</div></div>" +
      '<section class="card el-hero"><div class="el-tile" style="--c:' + color + '"><small>' + e.z + "</small><b>" + e.s + "</b><span>" + mass(e) + '</span></div><div><h1 class="el-name">' + BL.lettersHtml(elName(e)) + '</h1><div class="el-chips"><span>' + BL.pick(CATEGORIES[categoryKey(e)]) + "</span><span>" + configHtml(e.ec) + '</span></div><p class="el-summary">' + esc(elSummary(e)) + '</p><p class="el-summary" style="margin-top:8px"><strong>' + t("usedFor") + "</strong> " + elUses(e) + "</p></div></section>" +

      '<div class="el-columns"><section class="card"><h2>' + t("insideAtom") + '</h2><p class="muted small" style="margin-top:6px">' + t("atomHelp") + "</p>" +
      '<div class="atom-stage" id="atomStage"></div><div class="atom-legend"><span><i style="background:#14d9a8"></i>' + t("proton") + '</span><span><i style="background:#67c9e8"></i>' + t("neutron") + '</span><span><i style="background:#fff"></i>' + t("electron") + "</span></div>" +
      '<div class="atom-controls"><label>' + t("isotope") + ' <select id="isoSelect">' + e.iso.map(function (i) { return '<option value="' + i[0] + '"' + (i === iso ? " selected" : "") + ">" + elName(e) + (fr() ? " " : "-") + i[0] + "</option>"; }).join("") + "</select></label>" +
      '<div class="atom-stepper"><span>' + t("ionCharge") + '</span><button type="button" id="chargeDown" aria-label="' + t("addElectron") + '">−</button><span id="chargeValue">0</span><button type="button" id="chargeUp" aria-label="' + t("removeElectron") + '">+</button></div>' +
      '<button type="button" class="btn btn-small" id="atomPause">' + t("pause") + '</button></div><div class="atom-readout" id="atomReadout"></div><div class="atom-info" id="atomInfo"></div></section>' +

      '<section class="card"><h2>' + t("properties") + '</h2><div class="fact-grid">' + facts.map(function (f) { return '<div class="fact"><small>' + f[0] + "</small><b>" + esc(f[1]) + "</b></div>"; }).join("") + "</div><h3>" + t("electronsPerShell") + '</h3><div class="shell-bars">' + e.sh.map(function (c, i) { return "<span>" + t("shell") + " " + (i + 1) + " : ".slice(fr() ? 0 : 1) + c + "</span>"; }).join("") + "</div><h3>" + t("appearance") + '</h3><p class="small">' + esc(appearance || t("noAppearance")) + '</p><p class="small" style="margin-top:12px"><a href="' + wikiLink(e) + '" target="_blank" rel="noopener">' + t("readMore") + "</a></p></section></div>" +

      '<section class="card section-card reveal"><h2>' + t("readingEl") + '</h2><p id="readingAid" style="margin-top:10px;line-height:1.6"></p></section>' +

      '<section class="card section-card reveal"><h2>' + t("isotopes") + '</h2><p class="muted small" style="margin-top:6px">' + t("isoHelp") + '</p><div class="table-scroll"><table class="iso-table"><thead><tr><th>' + t("isotope") + "</th><th>" + t("protons") + "</th><th>" + t("neutrons") + "</th><th>" + t("atomicMass") + "</th><th>" + t("abundance") + "</th><th>" + t("stability") + "</th></tr></thead><tbody>" +
      e.iso.map(function (i) {
        return '<tr tabindex="0" data-a="' + i[0] + '"><td><strong>' + sup(i[0]) + e.s + "</strong></td><td>" + e.z + "</td><td>" + i[1] + "</td><td>" + num(i[2]) + "</td><td>" + (i[3] ? num(i[3]) + (fr() ? " %" : "%") : t("trace")) + "</td><td>" + (i[4] ? '<span class="iso-stable">' + t("stable") + "</span>" : t("halfLife") + " " + esc(halfLifeText(i[5])) + (i[6] ? '<br><small class="muted">' + (DECAYS[i[6]] ? BL.pick(DECAYS[i[6]]) : esc(i[6])) + "</small>" : "")) + "</td></tr>";
      }).join("") + "</tbody></table></div></section>" +

      '<section class="card section-card reveal"><h2>' + t("molecules") + "</h2>" +
      (compounds.length ? '<div class="mol-grid">' + compounds.map(function (c, i) { return '<div class="mol reveal" style="--i:' + i + '"><b>' + c[0] + "</b><strong>" + c[1] + "</strong><small>" + c[2] + "</small></div>"; }).join("") + "</div>"
        : '<p style="margin-top:10px">' + t("noCompounds") + "</p>") + "</section>" +

      '<section class="card section-card reveal"><h2>' + t("wordsMean") + "</h2>" + basicsHtml(BASICS.slice(0, 9)) + sourceNote() + "</section>";

    host.querySelector("#backToTable").addEventListener("click", function () { BL.morphToCell = e.z; });
    const stage = host.querySelector("#atomStage"), infoBox = host.querySelector("#atomInfo"), readout = host.querySelector("#atomReadout");
    const select = host.querySelector("#isoSelect");
    function setInfo(title, text) {
      infoBox.innerHTML = "<strong>" + title + "</strong>" + text;
      infoBox.classList.remove("flash");
      void infoBox.offsetWidth;
      infoBox.classList.add("flash");
    }
    function redraw() {
      drawAtom(stage, e, iso, charge, setInfo);
      const electrons = e.z - charge;
      const chargeText = charge === 0 ? "" : sup((Math.abs(charge) === 1 ? "" : Math.abs(charge)) + (charge > 0 ? "+" : "-"));
      readout.textContent = sup(iso[0]) + e.s + chargeText + (fr() ? " : " : ": ") + e.z + " " + t("protonsLower") + ", " + iso[1] + " " + t("neutronsLower") + ", " + electrons + " " + t("electronsLower") + " (" + t(charge === 0 ? "neutralAtom" : charge > 0 ? "positiveIon" : "negativeIon") + ")";
      host.querySelector("#chargeValue").textContent = charge > 0 ? "+" + charge : charge;
      host.querySelector("#readingAid").innerHTML = readingAid(e, iso);
      host.querySelectorAll(".iso-table tbody tr").forEach(function (tr) { tr.classList.toggle("on", Number(tr.dataset.a) === iso[0]); });
      select.value = iso[0];
    }
    function pickIso(a) {
      iso = e.iso.find(function (i) { return i[0] === Number(a); });
      redraw();
      const name = elName(e) + (fr() ? " " : "-") + iso[0];
      if (fr()) setInfo(name, iso[4] ? "Un isotope stable" + (iso[3] ? " qui représente " + num(iso[3]) + " % de l'élément à l'état naturel." : ".") : "Un isotope radioactif dont la demi-vie est de " + halfLifeText(iso[5]) + ".");
      else setInfo(name, iso[4] ? "A stable isotope" + (iso[3] ? " that makes up " + iso[3] + "% of natural " + e.n.toLowerCase() + "." : ".") : "A radioactive isotope with a half-life of " + iso[5] + ".");
    }
    select.addEventListener("change", function () { pickIso(select.value); });
    host.querySelectorAll(".iso-table tbody tr").forEach(function (tr) {
      tr.addEventListener("click", function () { pickIso(tr.dataset.a); stage.scrollIntoView({ behavior: "smooth", block: "center" }); });
      tr.addEventListener("keydown", function (ev) { if (ev.key === "Enter") { ev.preventDefault(); pickIso(tr.dataset.a); } });
    });
    host.querySelector("#chargeUp").addEventListener("click", function () {
      if (charge >= Math.min(4, e.z)) { BL.toast(t("maxRemoved")); return; }
      charge++; redraw();
      setInfo(t("posIon"), t("posIonText"));
    });
    host.querySelector("#chargeDown").addEventListener("click", function () {
      if (charge <= -4) { BL.toast(t("maxAdded")); return; }
      charge--; redraw();
      setInfo(t("negIon"), t("negIonText"));
    });
    const pause = host.querySelector("#atomPause");
    pause.addEventListener("click", function () {
      const paused = stage.classList.toggle("atom-paused");
      pause.textContent = t(paused ? "play" : "pause");
    });
    setInfo(t("exploreTitle"), t("exploreText"));
    redraw();
  }

  BL.bobPeriodic = function (symbol) {
    const element = symbol && window.BL_ELEMENTS.find(function (e) { return e.s === symbol; });
    if (element) BL.bob.element(elName(element));
    else BL.bob.table();
  };

  BL.renderPeriodic = function (host, symbol) {
    const element = symbol && window.BL_ELEMENTS.find(function (e) { return e.s === symbol; });
    if (element) { renderElement(host, element); return; }
    renderTable(host);
    // Coming back from an element, its tile shrinks into its own cell.
    if (BL.morphToCell) {
      const cell = host.querySelector('.pt-cell[data-z="' + BL.morphToCell + '"]');
      BL.morphToCell = null;
      if (cell) {
        cell.style.viewTransitionName = "el-tile";
        setTimeout(function () { cell.style.viewTransitionName = ""; }, 900);
      }
    }
  };
})();
