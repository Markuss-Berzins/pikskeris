const questions = [
  {
    text: "E‑pasts: “Steidzami apstipriniet savu bankas kontu, pretējā gadījumā tas tiks bloķēts.”",
    phishing: true,
    explanation: "Bankas nekad neprasa apstiprināt kontu caur e‑pastu."
  },
  {
    text: "E‑pasts no kolēģa ar sapulces laiku un vietu.",
    phishing: false,
    explanation: "Nav steidzamības, nav aizdomīgu saišu."
  },
  {
    text: "SMS: “Jūsu sūtījums aizturēts. Samaksājiet 1,99 €.”",
    phishing: true,
    explanation: "Piegādes uzņēmumi nelūdz maksājumus ar SMS."
  },
  {
    text: "Paziņojums par sistēmas plānoto apkopi no IT nodaļas.",
    phishing: false,
    explanation: "Informējošs teksts bez draudiem."
  },
  {
    text: "E‑pasts ar pielikumu “Rēķins.pdf.exe”.",
    phishing: true,
    explanation: "Izpildāmi faili e‑pastos ir augsta riska pazīme."
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];

  document.getElementById("text").innerText = q.text;
  document.getElementById("counter").innerText =
    `Jautājums ${current + 1} no ${questions.length}`;

  const percent = ((current) / questions.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

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

function showResult() {
  let level = "Iesācējs";
  if (score >= 4) level = "Vidējais zinātājs";
  if (score === questions.length) level = "Eksperts";

  document.body.innerHTML = `
    <div class="container">
      <h2>Rezultāts</h2>
      <p><strong>${score}</strong> no ${questions.length}</p>
      <p>Tavs līmenis: <strong>${level}</strong></p>
      <a class="btn" href="../">Atpakaļ uz sākumu</a>
    </div>
  `;
}

showQuestion();
