// ============ ÉTAT GLOBAL ============
let currentWord = null;
let revealed = false;
let scoreGood = 0;
let scoreTotal = 0;
let reviseFilteredWords = [];
let reviseDirection = "jp-fr";

// ============ NAVIGATION ============
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ============ FILTRES ============
function uniqueSorted(arr) {
  return [...new Set(arr)].sort();
}

function populateFilters(prefix) {
  const dates = uniqueSorted(VOCAB.map(v => v.cours));
  const levels = uniqueSorted(VOCAB.map(v => v.niveau));
  const topics = uniqueSorted(VOCAB.map(v => v.topic));

  const dateSel = document.getElementById(`${prefix}-filter-date`);
  const levelSel = document.getElementById(`${prefix}-filter-level`);
  const topicSel = document.getElementById(`${prefix}-filter-topic`);

  // On ne (re)remplit qu'une fois
  if (dateSel.options.length <= 1) {
    dates.forEach(d => dateSel.add(new Option(d, d)));
    levels.forEach(l => levelSel.add(new Option(l, l)));
    topics.forEach(t => topicSel.add(new Option(t, t)));
  }
}

function applyFilters(prefix) {
  const date = document.getElementById(`${prefix}-filter-date`).value;
  const level = document.getElementById(`${prefix}-filter-level`).value;
  const topic = document.getElementById(`${prefix}-filter-topic`).value;
  return VOCAB.filter(v =>
    (!date || v.cours === date) &&
    (!level || v.niveau === level) &&
    (!topic || v.topic === topic)
  );
}

// ============ MODE APPRENDRE ============
function renderLearnList() {
  const words = applyFilters("learn");
  const hide = document.getElementById("learn-hide").value;
  const list = document.getElementById("learn-list");
  list.innerHTML = "";

  words.forEach((w, i) => {
    const row = document.createElement("div");
    row.className = "learn-row";

    const jpCell = document.createElement("div");
    jpCell.className = "learn-cell jp";
    jpCell.textContent = w.jp;

    const frCell = document.createElement("div");
    frCell.className = "learn-cell fr";
    frCell.textContent = w.fr;

    if (hide === "jp") {
      jpCell.classList.add("hidden");
      jpCell.addEventListener("click", () => {
        jpCell.classList.remove("hidden");
        jpCell.classList.add("revealed");
      });
    } else if (hide === "fr") {
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

  if (words.length === 0) {
    list.innerHTML = '<p style="text-align:center; padding:20px; color:#888;">Aucun mot ne correspond aux filtres.</p>';
  }
}

// ============ MODE RÉVISION : SETUP ============
function updateSetupInfo() {
  const words = applyFilters("revise");
  document.getElementById("setup-info").textContent =
    `${words.length} mot(s) sélectionné(s)`;
}

function startRevise() {
  reviseFilteredWords = applyFilters("revise");
  if (reviseFilteredWords.length === 0) {
    alert("Aucun mot ne correspond aux filtres choisis.");
    return;
  }
  reviseDirection = document.getElementById("revise-direction").value;
  scoreGood = 0;
  scoreTotal = 0;
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
  document.getElementById("card-answer").style.display = "none";
  document.getElementById("card-hint").style.display = "block";
  document.getElementById("answer-buttons").style.display = "none";
}

function revealAnswer() {
  if (revealed) return;
  revealed = true;
  document.getElementById("card-answer").style.display = "block";
  document.getElementById("card-hint").style.display = "none";
  document.getElementById("answer-buttons").style.display = "grid";
}

function markAnswer(isRight) {
  scoreTotal++;
  if (isRight) scoreGood++;
  updateScore();
  nextWord();
}

function updateScore() {
  document.getElementById("score-good").textContent = scoreGood;
  document.getElementById("score-total").textContent = scoreTotal;
}

// ============ ACTIONS (event delegation) ============
document.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  if (!action) return;

  switch (action) {
    case "goto-home":
      showScreen("home-screen");
      break;
    case "goto-learn":
      populateFilters("learn");
      renderLearnList();
      showScreen("learn-screen");
      break;
    case "goto-revise-setup":
      populateFilters("revise");
      updateSetupInfo();
      showScreen("revise-setup-screen");
      break;
    case "start-revise":
      startRevise();
      break;
    case "stop-revise":
      showScreen("home-screen");
      break;
    case "mark-right":
      markAnswer(true);
      break;
    case "mark-wrong":
      markAnswer(false);
      break;
  }
});

// Carte cliquable pour révéler
document.getElementById("card").addEventListener("click", revealAnswer);

// Changements de filtres : mise à jour live
["learn-filter-date", "learn-filter-level", "learn-filter-topic", "learn-hide"]
  .forEach(id => document.getElementById(id).addEventListener("change", renderLearnList));

["revise-filter-date", "revise-filter-level", "revise-filter-topic"]
  .forEach(id => document.getElementById(id).addEventListener("change", updateSetupInfo));

// Initialisation
document.getElementById("word-count").textContent = `${VOCAB.length} mots dans la base`;
