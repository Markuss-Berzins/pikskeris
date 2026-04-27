/***********************
 * VISU ATTĒLU SARAKSTS
 ***********************/
const ALL_QUESTIONS = [
  {
    image: "images/q01.png",
    phishing: false,
    explanation: [
      "E-pasts nemudina spiest uz aizdomīgām pogām.",
      "Aicina lietotāju pašam manuāli doties uz bankas mājaslapu.",
      "Netiek prasīti personas dati vai paroles.",
      "Nav kliedzošu virsrakstu vai biedējošu termiņu.",
      "Tas atbilst drošas komunikācijas labajai praksei."
    ]
  },

  {
    image: "images/q02.png",
    phishing: false,
    explanation: [
      "Sūtītāja e-pasts sakrīt ar uzņēmuma nosaukumu.",
      "Saite ved uz mājaslapu ar HTTPS protokolu.",
      "Domēns sakrīt ar oficiālo uzņēmuma domēnu.",
      "Teksts ir informatīvs un mierīgs.",
      "Nav draudu vai prasību nekavējoties ievadīt datus."
    ]
  },

  {
    image: "images/q03.png",
    phishing: true,
    explanation: [
      "Sola nepamatotu laimestu (50 EUR dāvanu karte).",
      "Sūtītāja e‑pasta adrese nav saistīta ar zināmu uzņēmumu.",
      "Mēģina steidzināt lietotāju rīkoties nekavējoties.",
      "Aicina klikšķināt uz saites ārpus oficiālas vietnes.",
      "Iespējamais mērķis ir izkrāpt personas vai finanšu datus."
    ]
  },

  {
    image: "images/q04.png",
    phishing: true,
    explanation: [
      "Izmanto biedējošu brīdinājumu par IT kvotu.",
      "Sūtītāja nosaukums ir vispārīgs un nepārbaudāms.",
      "E‑pasta domēns neizskatās oficiāls.",
      "Aicina steidzami noklikšķināt uz saites.",
      "Saite ved uz aizdomīgu un neoficiālu vietni."
    ]
  },

  {
    image: "images/q05.png",
    phishing: true,
    explanation: [
      "Izmanto steidzamu paziņojumu, lai radītu paniku.",
      "Apgalvo, ka sūtījums ir aizturēts muitā.",
      "Pieprasa nelielu maksu, lai mazinātu aizdomas.",
      "Sūtītāja nosaukums nav identificējams.",
      "Saite ved uz ārēju, aizdomīgu maksājumu lapu."
    ]
  },

  {
    image: "images/q06.png",
    phishing: true,
    explanation: [
      "Sola lielu laimestu bez reāla pamata.",
      "Sūtītājs nav skaidri identificējams.",
      "Izmanto steidzamu termiņu (24 stundas).",
      "Lūdz ievadīt sensitīvus personas un bankas datus.",
      "Mērķis ir izkrāpt finanšu un identitātes informāciju."
    ]
  },

  {
    image: "images/q07.png",
    phishing: true,
    explanation: [
      "Izmanto biedējošu paziņojumu par neautorizētu piekļuvi.",
      "Draud ar konta bloķēšanu īsā laikā.",
      "Sūtītājs nav pārbaudāms.",
      "Aicina atjaunināt paroli caur saiti.",
      "Saite ved uz ārēju, neoficiālu vietni."
    ]
  },

  {
    image: "images/q08.png",
    phishing: true,
    explanation: [
      "Brīdina par pakalpojuma pārtraukšanu.",
      "Aicina atjaunināt maksājuma informāciju.",
      "Nav skaidra pamatojuma vai detaļu.",
      "Poga mudina klikšķināt uz saites.",
      "Saite nesakrīt ar oficiālu pakalpojuma domēnu."
    ]
  },

  {
    image: "images/q09.png",
    phishing: true,
    explanation: [
      "Piedāvā negaidītu darba piedāvājumu.",
      "Sola pievilcīgu algu ar minimālu informāciju.",
      "Uzruna nav personalizēta.",
      "Sūtītāja domēns nav uzticams.",
      "Pielikums var saturēt kaitīgu failu."
    ]
  },

  {
    image: "images/q10.png",
    phishing: true,
    explanation: [
      "Izmanto draudus par it kā nozagtiem datiem.",
      "Pieprasa izpirkuma maksu kriptovalūtā.",
      "Nepiedāvā pierādījumus par apgalvojumiem.",
      "Steidzina rīkoties ļoti īsā laikā.",
      "Mērķis ir izkrāpt naudu, izmantojot bailes."
    ]
  },

  {
    image: "images/q11.png",
    phishing: false,
    explanation: [
      "Sūtītāja e-pasts sakrīt ar parakstā norādīto domēnu.",
      "Pielikuma izmērs ir tipisks PDF dokumentam.",
      "Fails nav arhīvs vai izpildāms fails.",
      "Norādīts konkrēts rēķina numurs.",
      "Apmaksas termiņš ir standarta, ne steidzams."
    ]
  },

  {
    image: "images/q12.png",
    phishing: true,
    explanation: [
      "Izskatās kā oficiāls rēķins par piegādi.",
      "Mēģina radīt steidzamību ar termiņu.",
      "Aicina skatīt rēķinu caur saiti.",
      "Saite ved uz ārēju, aizdomīgu vietni.",
      "Trūkst konkrētas informācijas par pasūtījumu."
    ]
  },

  {
    image: "images/q13.png",
    phishing: true,
    explanation: [
      "Izmanto biedējošu brīdinājumu par bankas kontu.",
      "Draud ar konta slēgšanu īsā laikā.",
      "Sūtītājs uzdodas par bankas drošības komandu.",
      "Izmanto saīsinātas saites (piem., bit.ly).",
      "Mērķis ir izkrāpt bankas piekļuves datus."
    ]
  }
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

  let html = "";

  if (choice === q.phishing) {
    score++;
    html += "<p style='color:#22c55e'>✅ Pareizi.</p>";
  } else {
    html += "<p style='color:#ef4444'>❌ Nepareizi.</p>";
  }

  html += "<ul>";

  q.explanation.forEach(point => {
    html += `<li>${point}</li>`;
  });

  html += "</ul>";

  feedback.innerHTML = html;

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
