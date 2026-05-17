// ============ ÉTAT GLOBAL ============
let currentWord = null;
let revealed    = false;
let scoreGood   = 0;
let scoreMid    = 0;
let scoreTotal  = 0;
let reviseFilteredWords = [];
let reviseDirection = "jp-fr";

// Sélections multi (Set vide = Tous)
const learnSel = { cours: new Set(), topic: new Set() };
const revSel   = { cours: new Set(), topic: new Set() };

// ============ NAVIGATION ============
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ============ ORDRE CHRONOLOGIQUE DES COURS ============
// On garde l'ordre d'apparition dans VOCAB (déjà trié par date dans le CSV)
function orderedUnique(arr) {
  const seen = new Set();
  return arr.filter(v => seen.has(v) ? false : (seen.add(v), true));
}

function uniqueSorted(arr) {
  return [...new Set(arr)].sort();
}

// ============ CHIPS ============
function buildChips(containerId, values, selSet, onChange) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const allChip = document.createElement("button");
  allChip.className = "chip" + (selSet.size === 0 ? " active" : "");
  allChip.textContent = "Tous";
  allChip.addEventListener("click", () => {
    selSet.clear();
    buildChips(containerId, values, selSet, onChange);
    onChange();
  });
  container.appendChild(allChip);

  values.forEach(val => {
    const chip = document.createElement("button");
    chip.className = "chip" + (selSet.has(val) ? " active" : "");
    chip.textContent = val;
    chip.addEventListener("click", () => {
      if (selSet.has(val)) selSet.delete(val);
      else selSet.add(val);
      buildChips(containerId, values, selSet, onChange);
      onChange();
    });
    container.appendChild(chip);
  });
}

function initLearnChips() {
  const cours  = orderedUnique(VOCAB.map(v => v.cours));
  const topics = uniqueSorted(VOCAB.map(v => v.topic));
  buildChips("learn-chips-cours", cours,  learnSel.cours,  renderLearnList);
  buildChips("learn-chips-topic", topics, learnSel.topic,  renderLearnList);
}

function initRevChips() {
  const cours  = orderedUnique(VOCAB.map(v => v.cours));
  const topics = uniqueSorted(VOCAB.map(v => v.topic));
  buildChips("rev-chips-cours", cours,  revSel.cours,  updateSetupInfo);
  buildChips("rev-chips-topic", topics, revSel.topic,  updateSetupInfo);
}

// ============ FILTRAGE ============
function applyLearnFilters() {
  return VOCAB.filter(v =>
    (learnSel.cours.size === 0 || learnSel.cours.has(v.cours)) &&
    (learnSel.topic.size === 0 || learnSel.topic.has(v.topic))
  );
}

function applyRevFilters() {
  return VOCAB.filter(v =>
    (revSel.cours.size === 0 || revSel.cours.has(v.cours)) &&
    (revSel.topic.size === 0 || revSel.topic.has(v.topic))
  );
}

// ============ MODE APPRENDRE ============
let learnFilterOpen = false;

document.getElementById("learn-filter-toggle").addEventListener("click", () => {
  learnFilterOpen = !learnFilterOpen;
  document.getElementById("learn-filter-panel").style.display = learnFilterOpen ? "flex" : "none";
  document.getElementById("learn-filter-toggle").classList.toggle("active", learnFilterOpen);
});

function renderLearnList() {
  const words  = applyLearnFilters();
  const hideJP = document.getElementById("hide-jp").checked;
  const hideFR = document.getElementById("hide-fr").checked;
  const list   = document.getElementById("learn-list");

  document.getElementById("learn-count").textContent = words.length + " mot(s) affiché(s)";
  list.innerHTML = "";

  if (words.length === 0) {
    list.innerHTML = '<p style="text-align:center;padding:20px;color:#aaa">Aucun mot ne correspond aux filtres.</p>';
    return;
  }

  words.forEach(w => {
    const row = document.createElement("div");
    row.className = "learn-row";

    const jpCell = document.createElement("div");
    jpCell.className = "learn-cell jp";
    jpCell.textContent = w.jp;

    const frCell = document.createElement("div");
    frCell.className = "learn-cell fr";
    frCell.textContent = w.fr;

    if (hideJP) {
      jpCell.classList.add("hidden");
      jpCell.addEventListener("click", () => {
        jpCell.classList.remove("hidden");
        jpCell.classList.add("revealed");
      });
    }
    if (hideFR) {
      frCell.classList.add("hidden");
      frCell.addEventListener("click", () => {
        frCell.classList.remove("hidden");
        frCell.classList.add("revealed");
      });
    }

    row.appendChild(jpCell);
    row.appendChild(frCell);
    list.appendChild(row);
  });
}

["hide-jp", "hide-fr"].forEach(id =>
  document.getElementById(id).addEventListener("change", renderLearnList)
);

// ============ MODE RÉVISION : SETUP ============
function updateSetupInfo() {
  const n = applyRevFilters().length;
  document.getElementById("rev-count").textContent = n + " mot(s) sélectionné(s)";
}

function startRevise() {
  reviseFilteredWords = applyRevFilters();
  if (reviseFilteredWords.length === 0) {
    alert("Aucun mot ne correspond aux filtres choisis.");
    return;
  }
  reviseDirection = document.querySelector("input[name='rev-dir']:checked").value;
  scoreGood = scoreMid = scoreTotal = 0;
  updateScore();
  showScreen("revise-game-screen");
  nextWord();
}

// ============ MODE RÉVISION : JEU ============
function nextWord() {
  const idx = Math.floor(Math.random() * reviseFilteredWords.length);
  currentWord = reviseFilteredWords[idx];
  revealed = false;

  const promptText = reviseDirection === "jp-fr" ? currentWord.jp : currentWord.fr;
  const answerText = reviseDirection === "jp-fr" ? currentWord.fr : currentWord.jp;

  document.getElementById("card-prompt").textContent = promptText;
  document.getElementById("card-answer").textContent = answerText;
  document.getElementById("card-answer").style.display  = "none";
  document.getElementById("card-hint").style.display    = "block";
  document.getElementById("answer-buttons").style.display = "none";
}

function revealAnswer() {
  if (revealed) return;
  revealed = true;
  document.getElementById("card-answer").style.display   = "block";
  document.getElementById("card-hint").style.display     = "none";
  document.getElementById("answer-buttons").style.display = "grid";
}

function markAnswer(result) {
  scoreTotal++;
  if (result === "right")   scoreGood++;
  if (result === "middle")  scoreMid++;
  updateScore();
  nextWord();
}

function updateScore() {
  document.getElementById("score-good").textContent    = scoreGood;
  document.getElementById("score-mid-val").textContent = scoreMid;
  document.getElementById("score-total").textContent   = scoreTotal;
}

// ============ EVENT DELEGATION ============
document.addEventListener("click", e => {
  const action = e.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  switch (action) {
    case "goto-home":    showScreen("home-screen"); break;
    case "goto-learn":
      initLearnChips();
      renderLearnList();
      showScreen("learn-screen");
      break;
    case "goto-revise-setup":
      initRevChips();
      updateSetupInfo();
      showScreen("revise-setup-screen");
      break;
    case "start-revise": startRevise(); break;
    case "stop-revise":  showScreen("home-screen"); break;
    case "mark-right":   markAnswer("right");  break;
    case "mark-middle":  markAnswer("middle"); break;
    case "mark-wrong":   markAnswer("wrong");  break;
  }
});

document.getElementById("card").addEventListener("click", revealAnswer);

// Initialisation
document.getElementById("word-count").textContent = VOCAB.length + " mots dans la base";