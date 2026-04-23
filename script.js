const questions = [
  {
    text: "Jūs saņēmāt e‑pastu ar lūgumu steidzami apstiprināt kontu.",
    phishing: true
  },
  {
    text: "E‑pasts no kolēģa ar sapulces laiku.",
    phishing: false
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  document.getElementById("text").innerText = questions[current].text;
  document.getElementById("counter").innerText =
    `Jautājums ${current + 1} no ${questions.length}`;
}

function answer(choice) {
  if (choice === questions[current].phishing) {
    score++;
  }
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.body.innerHTML =
      `<h2>Rezultāts</h2><p>${score} no ${questions.length}</p>
       <a href="../index.html">Atpakaļ</a>`;
  }
}

showQuestion();