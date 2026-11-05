/* British Learner: tabs, programme bar, unit tables and page routing.
   Addresses:
     #/                              home
     #/physics                       subject
     #/physics/edexcel               iGCSE programme
     #/physics/edexcel/lesson-slug   lesson page
     #/chemistry/periodic-table      periodic table
     #/chemistry/periodic-table/Fe   element page */
(function () {
  const view = document.getElementById("view");
  const bar = document.getElementById("programBar");
  const tabs = document.getElementById("subjectTabs");
  const CHOICE_KEY = "bl-board";
  const loaded = {};
  const t = BL.t, pick = BL.pick;
  let lastBobKey = "";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Keeps the programme bar directly under the header, whatever the header's height.
  const header = document.querySelector(".site-header");
  function measureHeader() { document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px"); }
  measureHeader();
  if (window.ResizeObserver) new ResizeObserver(measureHeader).observe(header);

  /* ---------- Small helpers ---------- */
  let toastTimer;
  BL.toast = function (message) {
    const el = document.getElementById("toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2600);
  };

  function getChoices() { try { return JSON.parse(localStorage.getItem(CHOICE_KEY)) || {}; } catch (e) { return {}; } }
  function setChoice(subject, board) {
    const all = getChoices();
    all[subject] = board;
    try { localStorage.setItem(CHOICE_KEY, JSON.stringify(all)); } catch (e) { /* storage unavailable */ }
  }
  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (resolve, reject) {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { delete loaded[src]; reject(new Error("Could not load " + src)); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }
  function subjectOf(id) { return BL.subjects.find(function (s) { return s.id === id; }); }
  function boardOf(id) { return BL.boards.find(function (b) { return b.id === id; }); }
  function countLessons() {
    let total = 0;
    BL.subjects.forEach(function (s) {
      BL.boards.forEach(function (b) {
        BL.getProgramme(s.id, b.id).units.forEach(function (u) { total += u.lessons.length; });
      });
    });
    return total;
  }
  // Bob comments only when the page really changes, not on a language switch.
  function bobOnce(key, fn) { if (key !== lastBobKey) { lastBobKey = key; fn(); } }

  /* ---------- Header tabs ---------- */
  function drawTabs() {
    tabs.setAttribute("aria-label", BL.lang === "fr" ? "Matières" : "Subjects");
    tabs.innerHTML = BL.subjects.map(function (s) {
      const short = BL.lang === "fr" ? s.shortFr : s.short;
      return '<a class="subject-tab" data-s="' + s.id + '" href="#/' + s.id + '"><span class="st-full">' + pick(s) + '</span><span class="st-short">' + (short || pick(s)) + "</span></a>";
    }).join("") + '<span class="tab-glider" aria-hidden="true"></span>';
  }
  function moveGlider() {
    const active = tabs.querySelector(".subject-tab.active");
    const glider = tabs.querySelector(".tab-glider");
    if (!glider) return;
    if (!active) { glider.style.opacity = 0; return; }
    glider.style.opacity = 1;
    glider.style.width = active.offsetWidth + "px";
    glider.style.transform = "translateX(" + active.offsetLeft + "px)";
    if (tabs.scrollWidth > tabs.clientWidth) tabs.scrollLeft = active.offsetLeft - (tabs.clientWidth - active.offsetWidth) / 2;
  }
  function setActiveTab(subject) {
    tabs.querySelectorAll(".subject-tab").forEach(function (tab) {
      const on = tab.dataset.s === subject;
      tab.classList.toggle("active", on);
      if (on) tab.setAttribute("aria-current", "page"); else tab.removeAttribute("aria-current");
    });
    moveGlider();
  }

  /* ---------- Language switch ---------- */
  const langSwitch = document.getElementById("langSwitch");
  function drawLang() {
    langSwitch.dataset.active = BL.lang;
    langSwitch.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === BL.lang)); });
    document.getElementById("rights").textContent = t("rights");
  }
  langSwitch.addEventListener("click", function (e) {
    const b = e.target.closest("button");
    if (b) BL.setLang(b.dataset.lang);
  });
  document.addEventListener("bl-lang", function () {
    drawLang();
    BL.transition(function () {
      drawTabs();
      renderRoute(true);
    });
    BL.bob.lang();
  });

  /* ---------- Programme bar ---------- */
  function drawBar(subject, board) {
    bar.hidden = false;
    let html = '<div class="pb-inner"><div class="pb-group" role="group" aria-label="' + t("board") + '"><span class="pb-label">' + t("board") + '</span><div class="pb-seg">' +
      BL.boards.map(function (b) {
        return '<a class="pb-btn' + (board === b.id ? " active" : "") + '" href="#/' + subject + "/" + b.id + '">' + b.name + "</a>";
      }).join("") + "</div></div>";
    if (board) {
      html += '<div class="pb-group pb-levels" role="group" aria-label="' + t("level") + '"><span class="pb-label">' + t("level") + '</span><div class="pb-seg">' +
        BL.levels.map(function (l) {
          if (l.open) return '<a class="pb-btn alt active" href="#/' + subject + "/" + board + '">' + l.name + "</a>";
          return '<button type="button" class="pb-btn locked" aria-disabled="true" title="' + t("soon") + '">' + l.name + "</button>";
        }).join("") + "</div></div>";
    }
    bar.innerHTML = html + "</div>";
    bar.querySelectorAll(".locked").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.classList.remove("nope");
        void btn.offsetWidth;
        btn.classList.add("nope");
        BL.bob.locked();
      });
    });
  }

  /* ---------- Pages ---------- */
  function finishPage(root) {
    BL.watchReveals(root);
    BL.countUp(root);
    moveGlider();
  }
  function setView(html) {
    view.innerHTML = html;
    view.classList.remove("view-in");
    void view.offsetWidth;
    view.classList.add("view-in");
    window.scrollTo({ top: 0, behavior: "auto" });
    finishPage(view);
  }

  function periodicButton() {
    return '<a class="periodic-cta reveal" data-tilt href="#/chemistry/periodic-table"><span class="pc-tiles" aria-hidden="true"><i>H</i><i>He</i><i>Li</i><i>C</i></span><span class="pc-text"><strong>' + t("ptCtaTitle") + "</strong><small>" + t("ptCtaText") + '</small></span><span class="pc-arrow" aria-hidden="true">→</span></a>';
  }

  const FLOATERS = ["E = mc²", "H₂O", "π", "x² + y² = r²", "F = ma", "DNA", "CO₂", "0101", "∑", "v = fλ", "NaCl", "sin θ", "C₆H₁₂O₆", "if (x)"];
  function homePage() {
    bar.hidden = true;
    setActiveTab(null);
    document.title = "British Learner";
    const floaters = FLOATERS.map(function (f, i) {
      // Formulas stay in the side margins, so they never sit behind the text.
      const left = i % 2 ? 87 + ((i * 5) % 9) : 1 + ((i * 7) % 9), top = 4 + ((i * 53) % 88);
      return '<span class="floater" style="left:' + left + "%;top:" + top + "%;--d:" + (5 + (i % 5)) + "s;--o:" + (i * 0.4) + 's">' + f + "</span>";
    }).join("");
    setView(
      '<section class="hero"><div class="hero-floaters" aria-hidden="true">' + floaters + '</div><h1 class="hero-title"><span class="hero-line">' + BL.lettersHtml(t("heroLine1")) + '</span><span class="hero-line gradient-text">' + BL.lettersHtml(t("heroLine2"), 12) + '</span></h1>' +
      '<p class="hero-sub">' + t("heroSub") + "</p>" +
      '<div class="stats"><div class="stat"><strong data-count="5">0</strong><span>' + t("statSubjects") + '</span></div><div class="stat"><strong data-count="3">0</strong><span>' + t("statBoards") + '</span></div><div class="stat"><strong data-count="' + countLessons() + '">0</strong><span>' + t("statLessons") + '</span></div><div class="stat"><strong data-count="118">0</strong><span>' + t("statElements") + "</span></div></div></section>" +
      '<section class="subject-grid">' + BL.subjects.map(function (s, i) {
        return '<a class="subject-card" data-tilt href="#/' + s.id + '" style="--i:' + i + '"><span class="card-shine" aria-hidden="true"></span><span class="sc-icon" aria-hidden="true">' + s.icon + "</span><strong>" + pick(s) + "</strong><small>" + t("chooseBoardCard") + "</small></a>";
      }).join("") + "</section>" + periodicButton()
    );
    bobOnce("home", BL.bob.hello);
  }

  function subjectPage(subject) {
    const s = subjectOf(subject);
    document.title = pick(s) + " — British Learner";
    drawBar(subject, null);
    const options = BL.boards.map(function (b, i) {
      return '<a class="choice-card" data-tilt style="--i:' + i + '" href="#/' + subject + "/" + b.id + '"><span class="card-shine" aria-hidden="true"></span><strong>' + b.name + "</strong><small>" + b.full + "</small></a>";
    }).join("");
    setView('<section class="choose"><span class="choose-icon" aria-hidden="true">' + s.icon + '</span><h1 class="page-title">' + BL.lettersHtml(pick(s)) + '</h1><p class="muted">' + t("chooseBoard") + '</p><div class="choice-grid">' + options + "</div></section>" + (subject === "chemistry" ? periodicButton() : ""));
    bobOnce("s/" + subject, function () { BL.bob.subject(subject); });
  }

  function programmePage(subject, board) {
    const p = BL.getProgramme(subject, board);
    let lessonCount = 0;
    p.units.forEach(function (u) { lessonCount += u.lessons.length; });
    document.title = pick(p) + " — British Learner";
    drawBar(subject, board);
    setChoice(subject, board);

    const units = p.units.map(function (u, i) {
      const rows = u.lessons.map(function (l, n) {
        return '<li style="--n:' + Math.min(n, 14) + '"><a class="lesson-row" href="#/' + subject + "/" + board + "/" + l.slug + '"><span>' + pick(l) + '</span><span class="lesson-badge">' + t("soon") + "</span></a></li>";
      }).join("");
      return '<div class="unit reveal" style="--i:' + Math.min(i, 8) + '"><button type="button" class="unit-head" aria-expanded="false"><span class="unit-chevron" aria-hidden="true"></span><span class="unit-title">' + pick(u) + '</span><span class="unit-count">' + u.lessons.length + " " + t(u.lessons.length === 1 ? "lesson" : "lessons") + '</span></button><div class="unit-body"><ul class="unit-lessons">' + rows + "</ul></div></div>";
    }).join("");

    setView(
      '<header class="prog-head"><div><div class="eyebrow">' + t("specification") + " " + p.code + '</div><h1 class="page-title">' + pick(p) + "</h1>" +
      '<p class="muted prog-note">' + (board === "aqa" ? t("aqaNote") + " " : "") + t("officialNote") + '</p></div><div class="prog-stats"><div><strong data-count="' + p.units.length + '">0</strong> ' + t("units") + '</div><div><strong data-count="' + lessonCount + '">0</strong> ' + t("lessons") + '</div><small>' + t("allSoon") + "</small></div></header>" +
      '<div class="prog-tools"><button type="button" class="btn btn-small" id="toggleAll">' + t("openAll") + "</button></div>" +
      '<section class="units">' + units + "</section>" + (subject === "chemistry" ? periodicButton() : "")
    );

    const heads = view.querySelectorAll(".unit-head");
    heads.forEach(function (head) {
      head.addEventListener("click", function () {
        const open = head.getAttribute("aria-expanded") !== "true";
        head.setAttribute("aria-expanded", String(open));
        head.parentElement.classList.toggle("open", open);
      });
    });
    const toggle = document.getElementById("toggleAll");
    let allOpen = false;
    toggle.addEventListener("click", function () {
      allOpen = !allOpen;
      heads.forEach(function (head) {
        head.setAttribute("aria-expanded", String(allOpen));
        head.parentElement.classList.toggle("open", allOpen);
      });
      toggle.textContent = t(allOpen ? "closeAll" : "openAll");
    });
    if (heads[0]) heads[0].click();
    bobOnce("p/" + subject + "/" + board, BL.bob.board);
  }

  function lessonPage(subject, board, slug) {
    const p = BL.getProgramme(subject, board);
    const flat = [];
    p.units.forEach(function (u) { u.lessons.forEach(function (l) { flat.push({ lesson: l, unit: u }); }); });
    const index = flat.findIndex(function (x) { return x.lesson.slug === slug; });
    if (index < 0) { notFound(); return; }
    const here = flat[index], prev = flat[index - 1], next = flat[index + 1];
    const base = "#/" + subject + "/" + board;
    drawBar(subject, board);
    document.title = pick(here.lesson) + " — British Learner";
    setView(
      '<a class="back-link" href="' + base + '">← ' + pick(p) + "</a>" +
      '<section class="card soon-card"><div class="eyebrow">' + pick(here.unit) + '</div><h1 class="page-title">' + BL.lettersHtml(pick(here.lesson)) + '</h1><div class="soon-loader" aria-hidden="true"><span></span></div><h2 class="soon-title">' + t("soonTitle") + "</h2><p>" + t("soonText") + "</p>" +
      '<div class="soon-nav">' +
      (prev ? '<a class="btn btn-small" href="' + base + "/" + prev.lesson.slug + '" title="' + t("prevLesson") + '">← ' + pick(prev.lesson) + "</a>" : "") +
      '<a class="btn btn-main" href="' + base + '">' + t("backUnits") + "</a>" +
      (next ? '<a class="btn btn-small" href="' + base + "/" + next.lesson.slug + '" title="' + t("nextLesson") + '">' + pick(next.lesson) + " →</a>" : "") +
      "</div></section>"
    );
    bobOnce("l/" + slug, BL.bob.soon);
  }

  function notFound() {
    bar.hidden = true;
    setActiveTab(null);
    document.title = t("notFound") + " — British Learner";
    setView('<section class="card soon-card"><h1 class="page-title">' + t("notFound") + "</h1><p>" + t("notFoundText") + '</p><div class="soon-nav"><a class="btn btn-main" href="#/">' + t("home") + "</a></div></section>");
  }

  /* ---------- Routing ---------- */
  let routeToken = 0;
  function parts() { return location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent); }

  function renderRoute(sameRoute) {
    const token = ++routeToken;
    const path = parts();
    const subject = path[0];
    if (!subject) { homePage(); return; }
    if (!subjectOf(subject)) { notFound(); return; }
    setActiveTab(subject);

    if (subject === "chemistry" && path[1] === "periodic-table") {
      bar.hidden = true;
      if (window.BL_ELEMENTS && BL.compounds && BL.compoundsFr) {
        view.classList.add("view-in");
        BL.renderPeriodic(view, path[2] || null);
        window.scrollTo({ top: sameRoute ? scrollY : 0, behavior: "auto" });
        finishPage(view);
        bobOnce("pt/" + (path[2] || ""), function () { BL.bobPeriodic(path[2] || null); });
        return;
      }
      view.innerHTML = '<div class="loading">' + t("loading") + "</div>";
      Promise.all([loadScript("js/data/elements.js"), loadScript("js/data/compounds.js"), loadScript("js/data/compounds-fr.js")]).then(function () {
        if (token === routeToken) BL.transition(function () { renderRoute(); });
      }).catch(function () {
        setView('<section class="card soon-card"><h1 class="page-title">' + t("loadError") + "</h1><p>" + t("loadErrorText") + "</p></section>");
      });
      return;
    }

    if (path.length === 1 && !sameRoute) {
      const saved = getChoices()[subject];
      if (saved && boardOf(saved)) { location.replace("#/" + subject + "/" + saved); return; }
    }
    const board = path[1], slug = path[2];
    if (board && !boardOf(board)) { notFound(); return; }
    if (slug) lessonPage(subject, board, slug);
    else if (board) programmePage(subject, board);
    else subjectPage(subject);
  }

  addEventListener("hashchange", function () { BL.transition(function () { renderRoute(); }); });
  addEventListener("resize", moveGlider);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveGlider);
  drawTabs();
  drawLang();
  renderRoute();
})();
