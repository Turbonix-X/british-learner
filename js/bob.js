/* British Learner: Bob, the funny little robot from Devine le Nombre, in turquoise. */
window.BL = window.BL || {};

(function () {
  const LINES = {
    hello: { en: ["Hi, I'm Bob! Your robot revision buddy.", "Hello! Pick a subject and let's go exploring."], fr: ["Salut, moi c'est Bob ! Ton robot de révisions.", "Coucou ! Choisis une matière et on part explorer."] },
    pokes: {
      en: ["Hey, that tickles!", "I'm Bob, not a button!", "My jet is very sensitive. Gently!", "Click me once more and I'll recite all 118 elements.", "I've read every syllabus. Twice. I need a holiday.", "Beep boop. That means 'hello' in maths.", "Careful, I've just had my circuits polished!", "Fun fact: I failed my driving test. I can only fly."],
      fr: ["Hé, ça chatouille !", "Je suis Bob, pas un bouton !", "Mon réacteur est très sensible, doucement !", "Clique encore et je récite les 118 éléments.", "J'ai lu tous les programmes. Deux fois. J'ai besoin de vacances.", "Bip boup. Ça veut dire « bonjour » en maths.", "Attention, je viens de faire polir mes circuits !", "Le savais-tu ? J'ai raté mon permis. Je sais seulement voler."],
    },
    idle: {
      en: ["Still here! Just recharging my brain.", "Did you know you can click my antenna? Well, all of me, really.", "Revision tip: drink some water. I'd join you, but I'd short-circuit.", "I could explain gravity, but I'd rather float."],
      fr: ["Toujours là ! Je recharge mon cerveau.", "Tu savais que tu pouvais cliquer sur mon antenne ? Enfin, sur tout moi, en fait.", "Conseil de révision : bois de l'eau. Je t'accompagnerais bien, mais je ferais un court-circuit.", "Je pourrais t'expliquer la gravité, mais je préfère flotter."],
    },
    locked: {
      en: ["AS-Level and A-Level aren't ready yet. Patience, my friend!", "Locked! I've hidden the key inside my jet.", "Not yet! iGCSEs first."],
      fr: ["L'AS-Level et l'A-Level ne sont pas encore prêts. Patience, mon ami !", "C'est verrouillé ! J'ai caché la clé dans mon réacteur.", "Pas encore ! Les iGCSE d'abord."],
    },
    soon: {
      en: ["This one's still in my to-do list. It's a very long list.", "Coming soon! I'm typing as fast as my tiny hands allow.", "This lesson is loading… slowly… very slowly…"],
      fr: ["Celle-ci est encore sur ma liste. Une très longue liste.", "Bientôt ! Je tape aussi vite que mes petites mains le permettent.", "Cette leçon charge… lentement… très lentement…"],
    },
    subject: {
      maths: { en: "Maths! My favourite number is 2. It's so even.", fr: "Les maths ! Mon nombre préféré, c'est 2. Il est tellement pair." },
      physics: { en: "Physics! I'm personally defying gravity right now.", fr: "La physique ! Là, je défie personnellement la gravité." },
      chemistry: { en: "Chemistry! Don't forget the periodic table at the bottom.", fr: "La chimie ! N'oublie pas le tableau périodique tout en bas." },
      biology: { en: "Biology! I have no cells, but I do have batteries.", fr: "La biologie ! Je n'ai pas de cellules, mais j'ai des piles." },
      cs: { en: "Computer Science! Careful, you're talking about my family.", fr: "L'informatique ! Attention, tu parles de ma famille." },
    },
    board: { en: "Good choice! All the units are in here.", fr: "Bon choix ! Toutes les unités sont là." },
    table: { en: "118 elements! Click one, and watch the atom appear.", fr: "118 éléments ! Clique sur l'un d'eux et regarde l'atome apparaître." },
    element: { en: "{name}! Try clicking the particles in its atom.", fr: "{name} ! Essaie de cliquer sur les particules de son atome." },
    lang: { en: "English it is! Beep boop.", fr: "Va pour le français ! Bip boup." },
  };

  const SVG = '<svg viewBox="0 0 160 190" aria-hidden="true"><defs>' +
    '<linearGradient id="bobShell" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ffbe0"/><stop offset=".55" stop-color="#14c9b0"/><stop offset="1" stop-color="#0a8fb0"/></linearGradient>' +
    '<linearGradient id="bobRim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#67e8f9"/><stop offset="1" stop-color="#12b5d6"/></linearGradient>' +
    '<linearGradient id="bobJetFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#67e8f9"/><stop offset="1" stop-color="#14d9a8" stop-opacity="0"/></linearGradient>' +
    '<radialGradient id="bobVisor" cx=".5" cy=".35" r=".8"><stop offset="0" stop-color="#0a4a57"/><stop offset="1" stop-color="#03222a"/></radialGradient></defs>' +
    '<ellipse class="bob-shadow" cx="80" cy="183" rx="38" ry="5"/><g class="bob-rig"><path class="bob-jet" d="M67 150q13 36 26 0z"/>' +
    '<path class="bob-body" d="M50 114q0-12 12-12h36q12 0 12 12v20q0 24-30 24t-30-24z"/><rect class="bob-chest" x="63" y="113" width="34" height="27" rx="9"/>' +
    '<g class="bob-atom"><ellipse cx="80" cy="126.500" rx="12" ry="4.500"/><ellipse cx="80" cy="126.500" rx="12" ry="4.500" transform="rotate(60 80 126.500)"/><ellipse cx="80" cy="126.500" rx="12" ry="4.500" transform="rotate(120 80 126.500)"/><circle cx="80" cy="126.500" r="2.200"/></g>' +
    '<path class="bob-scarf" d="M50 101q30 13 60 0l2 9q-32 14-64 0zM90 112l13 25-11-2-10-19z"/><g class="bob-head">' +
    '<path class="bob-spring" d="M80 28q-7-3 0-6t0-6 0-6"/><circle class="bob-tip" cx="80" cy="7" r="6.500"/>' +
    '<rect class="bob-ear" x="12" y="50" width="14" height="30" rx="7"/><rect class="bob-ear" x="134" y="50" width="14" height="30" rx="7"/>' +
    '<rect class="bob-face" x="22" y="26" width="116" height="82" rx="28"/><path class="bob-gloss" d="M38 35q42-8 84 0-5-3-12-3H50q-7 0-12 3z"/><rect class="bob-visor" x="33" y="38" width="94" height="59" rx="19"/>' +
    '<circle class="bob-cheek" cx="47" cy="80" r="6.500"/><circle class="bob-cheek" cx="113" cy="80" r="6.500"/>' +
    '<g class="bob-eyes"><g class="bob-eye-open"><g class="bob-eye"><ellipse cx="60" cy="62" rx="10.500" ry="12.500"/><circle class="bob-shine" cx="64" cy="57" r="3.400"/></g><g class="bob-eye"><ellipse cx="100" cy="62" rx="10.500" ry="12.500"/><circle class="bob-shine" cx="104" cy="57" r="3.400"/></g></g><path class="bob-eye-happy" d="M49 66q11-15 22 0M89 66q11-15 22 0"/></g>' +
    '<path class="bob-brow bob-brow-l" d="M49 47q11-5 22 0"/><path class="bob-brow bob-brow-r" d="M89 47q11-5 22 0"/>' +
    '<path class="m m-neutral" d="M71 82q9 5 18 0"/><path class="m m-happy" d="M65 77h30q-1 15-15 15t-15-15z"/><ellipse class="m m-shock" cx="80" cy="83" rx="7" ry="8.500"/><ellipse class="m m-talk" cx="80" cy="83" rx="9" ry="6"/>' +
    '<g class="bob-cap"><path d="M42 30l38-16 38 16-38 15z"/><path class="bob-cap-tassel" d="M112 30v19"/><circle class="bob-cap-end" cx="112" cy="51" r="3.500"/></g></g>' +
    '<g class="bob-arm bob-arm-l"><path class="bob-limb" d="M52 116q-20 5-26 24"/><circle class="bob-hand" cx="25" cy="144" r="8.500"/></g><g class="bob-arm bob-arm-r"><path class="bob-limb" d="M108 116q20 5 26 24"/><circle class="bob-hand" cx="135" cy="144" r="8.500"/></g></g></svg>';

  const wrap = document.createElement("div");
  wrap.className = "bob-wrap";
  wrap.innerHTML = '<div class="bob-bubble" id="bobBubble" role="status" aria-live="polite"></div><button type="button" class="bob" id="bob" data-mood="hello">' + SVG + "</button>";
  document.body.appendChild(wrap);

  const bob = wrap.querySelector("#bob");
  const bubble = wrap.querySelector("#bobBubble");
  const eyes = bob.querySelector(".bob-eyes");
  let hideTimer = 0, moodTimer = 0, typeTimer = 0, idleTimer = 0, lastPoke = -1;

  function pickLine(group) {
    const list = group[BL.lang];
    return list[Math.floor(Math.random() * list.length)];
  }
  function setMood(mood, ms) {
    bob.dataset.mood = mood;
    clearTimeout(moodTimer);
    if (ms) moodTimer = setTimeout(function () { bob.dataset.mood = "neutral"; }, ms);
  }
  function say(text, mood) {
    clearTimeout(hideTimer);
    clearInterval(typeTimer);
    bubble.classList.add("show");
    setMood(mood || "talk", 2200);
    if (BL.reducedMotion) {
      bubble.textContent = text;
    } else {
      // Bob "types" the sentence one letter at a time.
      let i = 0;
      bubble.textContent = "";
      typeTimer = setInterval(function () {
        i += 1;
        bubble.textContent = text.slice(0, i);
        if (i >= text.length) clearInterval(typeTimer);
      }, 18);
    }
    hideTimer = setTimeout(function () { bubble.classList.remove("show"); }, 3200 + text.length * 40);
    scheduleIdle();
  }
  function scheduleIdle() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (!document.hidden) say(pickLine(LINES.idle), "happy");
      else scheduleIdle();
    }, 40000 + Math.random() * 30000);
  }
  function replay(cls) {
    bob.classList.remove(cls);
    void bob.offsetWidth;
    bob.classList.add(cls);
    setTimeout(function () { bob.classList.remove(cls); }, 1000);
  }

  bob.setAttribute("aria-label", "Bob");
  bob.addEventListener("click", function (e) {
    const list = LINES.pokes[BL.lang];
    let n = Math.floor(Math.random() * list.length);
    if (n === lastPoke) n = (n + 1) % list.length;
    lastPoke = n;
    say(list[n], "shock");
    replay("flip");
    const r = bob.getBoundingClientRect();
    BL.burst(r.left + r.width / 2, r.top + r.height / 3);
    e.stopPropagation();
  });

  // Bob watches the mouse.
  if (!BL.reducedMotion) {
    document.addEventListener("pointermove", function (e) {
      const r = bob.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height * 0.42);
      const len = Math.hypot(dx, dy) || 1, reach = Math.min(1, len / 240);
      eyes.style.transform = "translate(" + (dx / len) * 6 * reach + "px," + (dy / len) * 4 * reach + "px)";
      bob.style.setProperty("--look", ((dx / len) * reach).toFixed(2));
    }, { passive: true });
  }

  BL.bob = {
    say: say,
    hello: function () { say(pickLine(LINES.hello), "hello"); },
    locked: function () { say(pickLine(LINES.locked), "shock"); replay("shake"); },
    soon: function () { say(pickLine(LINES.soon), "think"); },
    subject: function (id) { say(LINES.subject[id][BL.lang], "happy"); },
    board: function () { say(LINES.board[BL.lang], "happy"); replay("hop"); },
    table: function () { say(LINES.table[BL.lang], "hello"); },
    element: function (name) { say(LINES.element[BL.lang].replace("{name}", name), "happy"); },
    lang: function () { say(LINES.lang[BL.lang], "happy"); replay("flip"); },
  };
})();
