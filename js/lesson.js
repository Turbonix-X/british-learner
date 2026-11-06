/* British Learner: lesson pages, with the lesson plan on the left. */
window.BL = window.BL || {};

(function () {
  // Written lessons, and the file that holds each one.
  BL.writtenLessons = {
    "biology/edexcel/igcse/characteristics-of-living-organisms": "js/lessons/biology-edexcel-igcse.js?v=7",
  };
  BL.lessons = {};
  BL.addLesson = function (key, lesson) { BL.lessons[key] = lesson; };

  const ICONS = {
    nutrition: '<path d="M12 7c-3-2-8-1-8 5 0 5 3 9 5 9 1 0 2-.7 3-.7s2 .7 3 .7c2 0 5-4 5-9 0-6-5-7-8-5z"/><path d="M12 7c0-2 1-4 3-4"/>',
    respiration: '<path d="M13 2 4 14h7l-1 8 10-13h-7z"/>',
    excretion: '<path d="M9 3c3 4 5 6.500 5 9.500a5 5 0 0 1-10 0C4 9.500 6 7 9 3z"/><path d="M16 12h6M19 9l3 3-3 3"/>',
    response: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    movement: '<path d="M12 3v18M3 12h18M12 3 9 6M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/>',
    control: '<path d="M14 14.500V5a2 2 0 0 0-4 0v9.500a4 4 0 1 0 4 0z"/><path d="M12 9v8"/>',
    reproduction: '<circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M10.500 8.600 7.500 15.400M13.500 8.600l3 6.800"/>',
    growth: '<path d="M12 22V10"/><path d="M12 12C12 7 8 5 3 5c0 5 4 7 9 7z"/><path d="M12 15c0-4 3-6 9-6 0 5-4 6-9 6z"/><path d="M6 22h12"/>',
  };
  function icon(name) { return '<svg class="lesson-icon" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + "</svg>"; }

  BL.renderLesson = function (host, lesson, context) {
    const c = lesson[BL.lang];
    const t = BL.t;
    const L = c.labels;

    const plan =
      '<li><button type="button" class="plan-link" data-target="intro">' + t("planIntro") + "</button></li>" +
      '<li><button type="button" class="plan-link" data-target="keywords">' + t("planKeywords") + "</button></li>" +
      '<li><button type="button" class="plan-link" data-target="characteristics">' + t("planCharacteristics") + '</button><ol class="plan-sub">' +
      c.characteristics.map(function (x, i) {
        return '<li><button type="button" class="plan-link plan-link-sub" data-target="' + x.id + '"><span class="plan-num">' + (i + 1) + "</span>" + x.title + "</button></li>";
      }).join("") + "</ol></li>" +
      '<li><button type="button" class="plan-link" data-target="conclusion">' + t("planConclusion") + "</button></li>";

    const overview = c.characteristics.map(function (x, i) {
      return '<button type="button" class="overview-tile plan-jump" data-target="' + x.id + '" style="--i:' + i + '"><span class="overview-icon">' + icon(x.icon) + "</span><span>" + (i + 1) + ". " + x.title + "</span></button>";
    }).join("");

    const characteristics = c.characteristics.map(function (x, i) {
      return '<article class="trait reveal" id="' + x.id + '"><header class="trait-head"><span class="trait-icon">' + icon(x.icon) + '</span><div><div class="eyebrow">' + t("characteristic") + " " + (i + 1) + " / 8" + "</div><h3>" + x.title + '</h3><p class="trait-description">' + x.description + "</p></div></header>" +
        '<div class="trait-grid"><div class="trait-block"><h4>' + L.what + "</h4><p>" + x.what + '</p></div><div class="trait-block"><h4>' + L.why + "</h4><p>" + x.why + "</p></div></div>" +
        '<div class="trait-grid"><div class="trait-block example"><h4>' + L.animals + "</h4><p>" + x.animals + '</p></div><div class="trait-block example"><h4>' + L.plants + "</h4><p>" + x.plants + "</p></div></div>" +
        '<div class="trait-chain"><span class="chain-label">' + L.chain + '</span><div class="chain-steps">' + x.chain.map(function (s) { return "<span>" + s + "</span>"; }).join('<i aria-hidden="true">→</i>') + "</div></div>" +
        '<p class="callout"><strong>' + L.remember + " :</strong> ".slice(BL.lang === "fr" ? 0 : 1) + x.remember + "</p>" +
        (x.trap ? '<p class="callout warn"><strong>' + L.trap + " :</strong> ".slice(BL.lang === "fr" ? 0 : 1) + x.trap + "</p>" : "") +
        "</article>";
    }).join("");

    host.innerHTML =
      '<a class="back-link" href="' + context.backHref + '">← ' + context.backLabel + "</a>" +
      '<header class="lesson-top"><div class="eyebrow">' + context.unit + " · " + c.spec + '</div><h1 class="page-title">' + BL.lettersHtml(context.title) + "</h1></header>" +
      '<div class="lesson-layout">' +
      '<aside class="lesson-plan"><div class="plan-card"><button type="button" class="plan-toggle" aria-expanded="false"><span>' + t("lessonPlan") + '</span><span class="unit-chevron" aria-hidden="true"></span></button><div class="plan-progress" aria-hidden="true"><span id="planBar"></span></div><nav aria-label="' + t("lessonPlan") + '"><ol class="plan-list">' + plan + "</ol></nav></div></aside>" +
      '<div class="lesson-content">' +
      '<section class="card lesson-section" id="intro"><h2>' + t("planIntro") + '</h2><p class="lesson-lead">' + c.intro.lead + "</p>" + c.intro.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      '<div class="goals"><h3>' + c.intro.goalsTitle + "</h3><ul>" + c.intro.goals.map(function (g) { return "<li>" + g + "</li>"; }).join("") + "</ul></div>" +
      "<h3>" + c.intro.overview + '</h3><div class="overview-grid">' + overview + "</div></section>" +

      '<section class="card lesson-section reveal" id="keywords"><h2>' + t("planKeywords") + '</h2><p class="muted">' + c.keywordsIntro + '</p><dl class="keyword-list">' +
      c.keywords.map(function (k) {
        return '<div class="keyword"><dt>' + k.t + (k.en ? "<small>" + k.en + "</small>" : "") + "</dt><dd>" + k.d + "</dd></div>";
      }).join("") + "</dl></section>" +

      '<section class="card lesson-section reveal" id="characteristics"><h2>' + t("planCharacteristics") + '</h2><p class="muted">' + c.characteristicsIntro + "</p></section>" +
      '<div class="trait-list">' + characteristics + "</div>" +

      '<section class="card lesson-section reveal" id="conclusion"><h2>' + t("planConclusion") + '</h2><p class="lesson-lead">' + c.conclusion.lead + '</p><div class="table-scroll"><table class="summary-table"><thead><tr><th>' + c.conclusion.tableHead[0] + "</th><th>" + c.conclusion.tableHead[1] + "</th></tr></thead><tbody>" +
      c.conclusion.table.map(function (r, i) { return '<tr><td><span class="plan-num">' + (i + 1) + "</span>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      '<div class="callout mnemonic"><strong>' + c.conclusion.mnemonicTitle + "</strong><p>" + c.conclusion.mnemonic + "</p></div><p>" + c.conclusion.closing + "</p>" + context.navHtml + "</section>" +
      "</div></div>";

    /* Going to a section */
    const planCard = host.querySelector(".plan-card");
    const toggle = host.querySelector(".plan-toggle");
    toggle.addEventListener("click", function () {
      const open = planCard.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    host.querySelectorAll(".plan-link, .plan-jump").forEach(function (btn) {
      btn.addEventListener("click", function () {
        // Close the plan first: on a phone, closing it changes the page's height.
        planCard.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        const section = document.getElementById(btn.dataset.target);
        section.classList.add("is-in");
        section.scrollIntoView({ behavior: BL.reducedMotion ? "auto" : "smooth", block: "start" });
      });
    });

    /* The plan follows your reading position */
    const links = Array.prototype.slice.call(host.querySelectorAll(".plan-link"));
    const sections = links.map(function (l) { return document.getElementById(l.dataset.target); });
    const bar = host.querySelector("#planBar");
    let scheduled = false;
    function update() {
      scheduled = false;
      if (!host.contains(bar)) { removeEventListener("scroll", onScroll); return; }
      const line = innerHeight * 0.3;
      let current = 0;
      sections.forEach(function (s, i) { if (s.getBoundingClientRect().top <= line) current = i; });
      links.forEach(function (l, i) {
        const on = i === current;
        l.classList.toggle("active", on);
        if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
      });
      const content = host.querySelector(".lesson-content").getBoundingClientRect();
      const done = (line - content.top) / Math.max(1, content.height - innerHeight * 0.4);
      bar.style.transform = "scaleX(" + Math.max(0, Math.min(1, done)) + ")";
    }
    function onScroll() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    }
    addEventListener("scroll", onScroll, { passive: true });
    update();
  };
})();
