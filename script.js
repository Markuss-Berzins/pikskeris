/***********************
 * VISI PIEEJAMIE ATTĒLI
 * (paplašini šo sarakstu, kad pievieno jaunus)
 ***********************/
const ALL_QUESTIONS = [
  { image: "images/q01.png", phishing: true,  explanation: "Steidzams pieprasījums – klasiska pazīme." },
  { image: "images/q02.png", phishing: false, explanation: "Parasts informatīvs paziņojums bez draudiem." },
  { image: "images/q03.png", phishing: true,  explanation: "Saite aicina veikt maksājumu." },
  { image: "images/q04.png", phishing: false, explanation: "Nav saites, nav steidzamības." },
  { image: "images/q05.png", phishing: true,  explanation: "Prasa personas datus." },
  { image: "images/q06.png", phishing: true,  explanation: "Nepazīstams sūtītājs + pielikums." },
  { image: "images/q07.png", phishing: false, explanation: "Iekšējs darba paziņojums." },
  { image: "images/q08.png", phishing: true,  explanation: "SMS ar maksājuma pieprasījumu." },
  { image: "images/q09.png", phishing: false, explanation: "Publisks paziņojums bez darbības." },
  { image: "images/q10.png", phishing: true,  explanation: "Maldinošs bankas dizains." },

  /* ← turpini līdz 30+ */
];

/***********************
 * IZVĒLAMIES RANDOM 10
 ***********************/
function getRandomQuestions(all, count) {
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const questions = getRandomQuestions(ALL_QUESTIONS, 10);

let current = 0;
let score = 0;

/***********************
 * PARĀDA JAUTĀJUMU
 ***********************/
function showQuestion() {
  const q = questions[current];

  document.getElementById("questionImage").src = "../" + q.image;
  document.getElementById("counter").innerText =
    `Jautājums ${current + 1} no ${questions.length}`;

  const percent = (current / questions.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

/***********************
 * ATBILDES APSTRĀDE
 ***********************/
function answer(choice) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");

  if (choice === q.phishing) {
    score++;
    feedback.innerText = "✅ Pareizi. " + q.explanation;
    feedback.style.color = "#22c55e";
  } else {
    feedback.innerText = "❌ Nepareizi. " + q.explanation;
    feedback.style.color = "#ef4444";
  }

  setTimeout(() => {
    feedback.innerText = "";
    current++;

    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1800);
}

/***********************
 * REZULTĀTS
 ***********************/
function showResult() {
  let level = "Iesācējs";
  if (score >= 7) level = "Vidējs līmenis";
  if (score >= 9) level = "Eksperts";

  document.body.innerHTML = `
    <div class="container">
      <h2>Rezultāts</h2>
      <p><strong>${score}</strong> no ${questions.length}</p>
      <p>Tavs līmenis: <strong>${level}</strong></p>
      <a href="../" class="btn">Atpakaļ uz sākumu</a>
    </div>
  `;
}

showQuestion();
