/***********************
 * VISU ATTĒLU SARAKSTS
 ***********************/
const ALL_QUESTIONS = [
  { image: "images/q01.png", phishing: false,  explanation: "Parasts bankas paziņojums, bez pielikumiem vai ļaunprātīgiem linkiem." },
  { image: "images/q02.png", phishing: false, explanation: "Parasts paziņojums no veikala. Links ved uz leģitīmu veikala mājaslapu." },
  { image: "images/q03.png", phishing: true,  explanation: "Sola nepamatotu laimestu (50 EUR dāvanu karte). Sūtītāja e‑pasta adrese nav saistīta ar zināmu uzņēmumu. Steidzina lietotāju nekavējoties rīkoties. Aicina klikšķināt uz saites ārpus oficiālas vietnes. Iespējams mērķis - izkrāpt personas vai finanšu datus." },
  { image: "images/q04.png", phishing: true, explanation: "Izmanto biedējošu brīdinājumu (IT kvota ir beigusies!), lai radītu paniku. Sūtītāja nosaukums Sistēmas Administrators ir neskaidrs un neidentificējams. E‑pasta adrese/domēns neizskatās pēc oficiāla uzņēmuma IT dienesta. Aicina steidzami klikšķināt uz saites (Palielināt Kvotu). Saites adrese (apakšā redzamā) ved uz aizdomīgu, neoficiālu tīmekļa vietni. Mērķis, visticamāk, ir iegūt piekļuves datus (kontam vai parolei)." },
  { image: "images/q05.png", phishing: true,  explanation: "Izmanto steidzamu paziņojumu (Jūsu rīcība ir nepieciešama!), lai izraisītu paniku. Apgalvo, ka sūtījums ir aizturēts muitā, kas ir bieži izmantots krāpnieku scenārijs. Pieprasa nelielu maksu (1,99 EUR), lai mazinātu aizdomas. Sūtītāja nosaukums Kurjera Dienests ir neskaidrs un nepārbaudāms. E‑pasta un saites domēns neatbilst reālam kurjerpasta uzņēmumam. Aicina klikšķināt uz pogas (Maksāt Nodevu Tūlīt). Saite ved uz aizdomīgu ārēju vietni, kur var tikt izkrāpti maksājumu dati." },
  { image: "images/q06.png", phishing: true,  explanation: "Nepazīstams sūtītājs." },
  { image: "images/q07.png", phishing: false, explanation: "Iekšējs paziņojums bez steigas." },
  { image: "images/q08.png", phishing: true,  explanation: "SMS ar saiti vai maksājumu." },
  { image: "images/q09.png", phishing: false, explanation: "Publiska informācija." },
  { image: "images/q10.png", phishing: true,  explanation: "Viltus dizains un spiediens." },

  /* ↑ pievieno līdz 30+ */
];

/***********************
 * RANDOM 10 JAUTĀJUMI
 ***********************/
function pickRandom(all, count) {
  return [...all].sort(() => Math.random() - 0.5).slice(0, count);
}

const questions = pickRandom(ALL_QUESTIONS, 10);
let current = 0;
let score = 0;

/***********************
 * RĀDA JAUTĀJUMU
 ***********************/
function showQuestion() {
  const q = questions[current];

  document.getElementById("questionImage").src = "../" + q.image;
  document.getElementById("counter").innerText =
    `Jautājums ${current + 1} no ${questions.length}`;

  document.getElementById("progressBar").style.width =
    (current / questions.length) * 100 + "%";
}

/***********************
 * ATBILDE
 ***********************/
function answer(choice) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");

  document.getElementById("btnPhish").disabled = true;
  document.getElementById("btnSafe").disabled = true;

  if (choice === q.phishing) {
    score++;
    feedback.innerText = "✅ Pareizi. " + q.explanation;
    feedback.style.color = "#22c55e";
  } else {
    feedback.innerText = "❌ Nepareizi. " + q.explanation;
    feedback.style.color = "#ef4444";
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

/***********************
 * NĀKAMAIS JAUTĀJUMS
 ***********************/
function nextQuestion() {
  document.getElementById("btnPhish").disabled = false;
  document.getElementById("btnSafe").disabled = false;
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("feedback").innerText = "";

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

/***********************
 * REZULTĀTS (tikai punkti)
 ***********************/
function showResult() {
  document.body.innerHTML = `
    <div class="container">
      <h2>Tests pabeigts</h2>
      <p><strong>${score}</strong> no ${questions.length}</p>
      <a class="btn" href="../">Atgriezties</a>
    </div>
  `;
}

showQuestion();
