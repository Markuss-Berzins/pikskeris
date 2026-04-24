/***********************
 * VISU ATTĒLU SARAKSTS
 ***********************/
const ALL_QUESTIONS = [
  { image: "images/q01.png", phishing: false,  explanation: "E-pasts nemudina spiest uz aizdomīgām pogām, bet aicina lietotāju pašam manuāli doties uz bankas mājaslapu. Tā ir drošas komunikācijas labā prakse. Tas neprasa datus vai paroles, bet tikai informē par jaunu ziņu internetbankas iekšienē.Nav kliedzošu virsrakstu vai biedējošu termiņu, kas raksturīgi krāpniekiem." },
  { image: "images/q02.png", phishing: false, explanation: "Sūtītāja e-pasts sakrīt ar uzņēmuma nosaukumu.Attēla apakšējā kreisajā stūrī redzams, ka saite Skatīt Pasūtījumu ved uz mājaslapu. Tā izmanto HTTPS un sakrīt ar oficiālo domēnu. Teksts ir informatīvs un mierīgs, bez draudiem bloķēt kontu vai prasībām tūlītēji ievadīt datus." },
  { image: "images/q03.png", phishing: true,  explanation: "Sola nepamatotu laimestu (50 EUR dāvanu karte). Sūtītāja e‑pasta adrese nav saistīta ar zināmu uzņēmumu. Steidzina lietotāju nekavējoties rīkoties. Aicina klikšķināt uz saites ārpus oficiālas vietnes. Iespējams mērķis - izkrāpt personas vai finanšu datus." },
  { image: "images/q04.png", phishing: true, explanation: "Izmanto biedējošu brīdinājumu (IT kvota ir beigusies!), lai radītu paniku. Sūtītāja nosaukums Sistēmas Administrators ir neskaidrs un neidentificējams. E‑pasta adrese/domēns neizskatās pēc oficiāla uzņēmuma IT dienesta. Aicina steidzami klikšķināt uz saites (Palielināt Kvotu). Saites adrese (apakšā redzamā) ved uz aizdomīgu, neoficiālu tīmekļa vietni. Mērķis, visticamāk, ir iegūt piekļuves datus (kontam vai parolei)." },
  { image: "images/q05.png", phishing: true,  explanation: "Izmanto steidzamu paziņojumu (Jūsu rīcība ir nepieciešama!), lai izraisītu paniku. Apgalvo, ka sūtījums ir aizturēts muitā, kas ir bieži izmantots krāpnieku scenārijs. Pieprasa nelielu maksu (1,99 EUR), lai mazinātu aizdomas. Sūtītāja nosaukums Kurjera Dienests ir neskaidrs un nepārbaudāms. E‑pasta un saites domēns neatbilst reālam kurjerpasta uzņēmumam. Aicina klikšķināt uz pogas (Maksāt Nodevu Tūlīt). Saite ved uz aizdomīgu ārēju vietni, kur var tikt izkrāpti maksājumu dati." },
  { image: "images/q06.png", phishing: true,  explanation: "Sola lielu laimestu (24 stundās 1000 EUR dāvanu karte) bez reāla pamata. Apgalvo, ka e‑pasta adrese ir nejauši izvēlēta, kas ir tipisks krāpnieku attaisnojums. Sūtītājs/organizators nav skaidri identificējams vai pārbaudāms. Aicina steidzami rīkoties (24 stundu laikā), lai neļautu kritiski padomāt. Lūdz ievadīt sensitīvus datus (personas kodu, bankas kartes numuru, internetbankas datus). Piedāvā datu ievadi caur ārēju saiti, neoficiālā vietnē. Mērķis ir izkrāpt personas un bankas informāciju, nevis izsniegt balvu." },
  { image: "images/q07.png", phishing: true, explanation: "Izmanto steidzamu un biedējošu tematu (Neautorizēta piekļuve Jūsu kontam!). Draud ar konta bloķēšanu 24 stundu laikā, lai radītu paniku. Sūtītājs Sistēmas administrators ir neskaidrs un nepārbaudāms. E‑pasta domēns neizskatās oficiāls IT vai Microsoft/Outlook pakalpojumiem. Aicina klikšķināt uz pogas (Atjaunināt Paroli Tagad). Saite ved uz ārēju, aizdomīgu vietni, nevis oficiālu servisu. Iespējamais mērķis - izkrāpt paroles un konta piekļuves datus." },
  { image: "images/q08.png", phishing: true,  explanation: "Izmanto biedējošu paziņojumu par pakalpojuma pārtraukumu, lai radītu steidzamību. Aicina atjaunināt maksājuma informāciju bez konkrēta iemesla vai detaļām. Poga mudina noklikšķināt uz saites. Saite ved uz aizdomīgu ārēju vietni, kas nesakrīt ar e-pasta adreses domēnu. Mērķis ir izkrāpt maksājuma vai konta piekļuves datus." },
  { image: "images/q09.png", phishing: true, explanation: "Izmanto negaidītu darba piedāvājumu bez iepriekšējas pieteikšanās. Sola pievilcīgu algu ar minimālām detaļām par uzņēmumu. Uzruna ir vispārīga un nav personalizēta. Sūtītāja e‑pasta domēns neizskatās saistīts ar zināmu vai pārbaudāmu uzņēmumu. Steidzina rīkoties pēc iespējas ātrāk. Aicina lejupielādēt pielikumu, kas var saturēt kaitīgu failu. Pašā e‑pastā redzams brīdinājums, ka fails ir aizdomīgs. Iespējamais mērķis ir inficēt datoru vai izkrāpt personas datus" },
  { image: "images/q10.png", phishing: true,  explanation: "Izmanto draudus un iebiedēšanu par it kā nozagtiem datiem un video. Pieprasa izpirkuma maksu kriptovalūtā, kas ir tipiska krāpniecības pazīme. Nemaz nepierāda apgalvoto piekļuvi datiem. Uzruna ir vispārīga un nav personalizēta. Sūtītāja e‑pasta adrese nav uzticama vai pārbaudāma. Steidzina samaksu ļoti īsā laikā. Aicina klikšķināt uz saites maksājuma veikšanai. Saite ved uz aizdomīgu ārēju vietni. Mērķis ir izkrāpt naudu, izmantojot bailes." },
  { image: "images/q11.png", phishing: false,  explanation: "Sūtītāja e-pasts pilnībā sakrīt ar parakstā norādīto tīmekļa vietni. Pielikuma izmērs (184 KB) ir ļoti tipisks parastam PDF dokumentam ar attēliem (logotipu) un tekstu. Pikšķerēšanas faili bieži ir vai nu aizdomīgi mazi (daži KB), vai arī tie ir arhīvi (.zip, .7z), lai slēptu izpildāmos failus. E-pastā ir norādīts konkrēts rēķina numurs (RV-2024-05-1357) un precīzs apmaksas termiņš. Krāpnieki bieži izmanto steidzināšanas taktiku (Apmaksāt tūlīt!), bet šeit ir norādīts standarta termiņš (20. maijs), kas raksturīgs grāmatvedības procesiem." },
  { image: "images/q12.png", phishing: true, explanation: "Izmanto šķietami oficiālu rēķinu par piegādi, lai radītu ticamības iespaidu. Mudina apmaksāt rēķinu līdz noteiktam termiņam, radot steidzamību. Aicina noklikšķināt uz saites rēķina skatīšanai. Saite ved uz aizdomīgu ārēju vietni, nevis oficiālu uzņēmuma portālu. Trūkst konkrētas informācijas par pasūtījumu vai saņēmēju. Mērķis ir izkrāpt maksājumu vai konta piekļuves datus." },
  { image: "images/q13.png", phishing: true, explanation: "Izmanto biedējošu brīdinājumu par aizdomīgām darbībām bankas kontā, lai radītu paniku. Draud ar konta slēgšanu, ja netiks rīkotsies īsā laikā. Sūtītājs uzdodas par bankas drošības komandu bez pārbaudāmas identitātes. Aicina nekavējoties klikšķināt uz saites. Izmanto saīsinātas saites, piemēram bit.ly, tinyurl.com, t.co vai short.link, kas slēpj īsto galamērķa adresi un neļauj pārbaudīt vietnes drošumu. Lūdz apstiprināt identitāti ārpus bankas oficiālajiem kanāliem. Mērķis ir izkrāpt bankas piekļuves datus." }, 
  
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
