/* British Learner: the site's animations.
   All of them switch off when the system asks for reduced motion. */
window.BL = window.BL || {};

(function () {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  BL.reducedMotion = reduced;

  /* ---------- Molecule network behind the page ---------- */
  function startCanvas() {
    const canvas = document.getElementById("fxCanvas");
    const ctx = canvas.getContext("2d");
    let width = 0, height = 0, nodes = [], frame = 0;
    const mouse = { x: -9999, y: -9999 };
    const LINK = 130;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = innerWidth; height = innerHeight;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, (width * height) / 22000));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width, y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: 1.5 + Math.random() * 3, green: Math.random() < 0.5,
        });
      }
    }
    function draw() {
      frame = 0;
      if (document.hidden) return;
      const dark = document.documentElement.dataset.theme === "dark";
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const mdx = a.x - mouse.x, mdy = a.y - mouse.y, md = Math.hypot(mdx, mdy);
        if (md < 150 && md > 0) { a.x += (mdx / md) * (150 - md) * 0.025; a.y += (mdy / md) * (150 - md) * 0.025; }
        a.x += a.vx; a.y += a.vy;
        if (a.x < -20) a.x = width + 20; else if (a.x > width + 20) a.x = -20;
        if (a.y < -20) a.y = height + 20; else if (a.y > height + 20) a.y = -20;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = "rgba(18,181,214," + (1 - d / LINK) * (dark ? 0.3 : 0.28) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = a.green ? "rgba(20,217,168,.75)" : "rgba(18,181,214,.75)";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    }
    resize();
    addEventListener("resize", resize);
    addEventListener("pointermove", function (e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener("visibilitychange", function () { if (!document.hidden && !frame) frame = requestAnimationFrame(draw); });
    frame = requestAnimationFrame(draw);
  }

  /* ---------- Soft glow that follows the mouse ---------- */
  function startGlow() {
    const glow = document.getElementById("cursorGlow");
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    addEventListener("pointermove", function (e) { tx = e.clientX; ty = e.clientY; glow.style.opacity = 1; }, { passive: true });
    (function loop() {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      glow.style.transform = "translate(" + (x - 200) + "px," + (y - 200) + "px)";
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Cards that tilt towards the mouse ---------- */
  function startTilt() {
    document.addEventListener("pointermove", function (e) {
      const card = e.target.closest ? e.target.closest("[data-tilt]") : null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--rx", ((0.5 - py) * 14).toFixed(2) + "deg");
      card.style.setProperty("--ry", ((px - 0.5) * 14).toFixed(2) + "deg");
      card.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--my", (py * 100).toFixed(1) + "%");
    }, { passive: true });
    document.addEventListener("pointerout", function (e) {
      const card = e.target.closest ? e.target.closest("[data-tilt]") : null;
      if (!card || (e.relatedTarget && card.contains(e.relatedTarget))) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    }, { passive: true });
  }

  /* ---------- Ripple when a button or link is pressed ---------- */
  function startRipple() {
    document.addEventListener("pointerdown", function (e) {
      const host = e.target.closest ? e.target.closest(".btn, .pb-btn, .subject-tab, .chip, .unit-head, .lesson-row, .choice-card, .subject-card, .periodic-cta") : null;
      if (!host) return;
      const r = host.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2;
      const dot = document.createElement("span");
      dot.className = "ripple";
      dot.style.width = dot.style.height = size + "px";
      dot.style.left = e.clientX - r.left - size / 2 + "px";
      dot.style.top = e.clientY - r.top - size / 2 + "px";
      host.appendChild(dot);
      dot.addEventListener("animationend", function () { dot.remove(); });
    }, { passive: true });
  }

  /* ---------- Scroll progress and elements that appear on scroll ---------- */
  function startScrollBar() {
    const bar = document.getElementById("scrollBar");
    function update() {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? scrollY / max : 0) + ")";
    }
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    BL.updateScrollBar = update;
  }

  let observer = null;
  if (!reduced && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px" });
  }
  BL.watchReveals = function (root) {
    root.querySelectorAll(".reveal").forEach(function (el) {
      if (observer) observer.observe(el); else el.classList.add("is-in");
    });
    if (BL.updateScrollBar) BL.updateScrollBar();
  };

  /* ---------- Numbers that count up ---------- */
  BL.countUp = function (root) {
    root.querySelectorAll("[data-count]").forEach(function (el) {
      const target = Number(el.dataset.count);
      if (reduced) { el.textContent = target; return; }
      const start = performance.now(), duration = 1400;
      (function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 4)));
        if (t < 1 && el.isConnected) requestAnimationFrame(tick);
      })(start);
    });
  };

  /* ---------- Splits a heading so each letter can animate ---------- */
  BL.lettersHtml = function (text, startDelay) {
    let i = startDelay || 0;
    return text.split(" ").map(function (word) {
      return '<span class="word">' + word.split("").map(function (ch) {
        return '<span class="letter" style="--l:' + i++ + '">' + ch + "</span>";
      }).join("") + "</span>";
    }).join(" ");
  };

  /* ---------- Particle burst ---------- */
  BL.burst = function (x, y, amount) {
    if (reduced) return;
    const colors = ["#14d9a8", "#12b5d6", "#ffffff", "#7ffbe0", "#67e8f9"];
    for (let k = 0; k < (amount || 34); k++) {
      const p = document.createElement("span");
      p.className = "bl-particle";
      p.style.background = colors[k % colors.length];
      p.style.left = x + "px"; p.style.top = y + "px";
      const size = 4 + Math.random() * 8;
      p.style.width = p.style.height = size + "px";
      document.body.appendChild(p);
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 170;
      p.animate([
        { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
        { transform: "translate(calc(-50% + " + Math.cos(a) * d + "px), calc(-50% + " + (Math.sin(a) * d + 50) + "px)) scale(.15) rotate(200deg)", opacity: 0 },
      ], { duration: 700 + Math.random() * 600, easing: "cubic-bezier(.15,.7,.3,1)" }).onfinish = function () { p.remove(); };
    }
  };

  /* ---------- Page changes: a circle grows from where you clicked ---------- */
  addEventListener("pointerdown", function (e) {
    document.documentElement.style.setProperty("--vx", e.clientX + "px");
    document.documentElement.style.setProperty("--vy", e.clientY + "px");
  }, { passive: true, capture: true });

  BL.transition = function (update) {
    if (reduced || !document.startViewTransition || document.visibilityState !== "visible") {
      update();
      return Promise.resolve();
    }
    const vt = document.startViewTransition(update);
    // A new page can interrupt a transition. The page still updates, so that's fine.
    const ignore = function () {};
    vt.ready.catch(ignore);
    vt.updateCallbackDone.catch(ignore);
    return vt.finished.catch(ignore);
  };

  startScrollBar();
  if (!reduced) {
    startCanvas();
    startRipple();
    if (finePointer) { startGlow(); startTilt(); }
  }
})();
