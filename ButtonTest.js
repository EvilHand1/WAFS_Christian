// docent heeft dit uitgelegd
const baseURL = "https://fdnd.directus.app/items/person/?filter={%22id%22:196}";
const response = await fetch(baseURL);
const lookForMyData = await response.json();

const myInformation = document.getElementById("informationContent");
const myInformationTitle = document.getElementById("informationTitle");
const removeBlocksButton = document.getElementById("removeBlocks");
const informationBox = document.getElementById("Informationtextbox");
const allButtons = document.getElementById("AllButtons");

function MyInformation(){
  myInformation.innerHTML = "Hallo, mijn naam is " + lookForMyData.data[0].name + " maar je mag me ook " + lookForMyData.data[0].nickname + " noemen. Ik ben geboren op " + lookForMyData.data[0].birthdate + ". Ik ben een derde jaars gamedevelopment student en heb voornamelijk ervaring met C# en Unity. Ik gebruik nog ouderwetse emojis zoals " + lookForMyData.data[0].fav_emoji + " omdat ik die leuker vind.";
  myInformationTitle.innerHTML = "Wie ben ik?"
 createBlocks();
}

function LearningGoals(){
  myInformation.innerHTML = "Eerste leerdoel: <br> css en html leren zodat ik een eigen site zou kunnen maken met vertrouwen.<br> Tweede leerdoel: <br> Ik wil dit semester sneller om hulp vragen aan docenten, omdat ik zo nieuw ben met deze talen en ook omdat ik dat nooit echt doe. <br> Derde leerdoel: <br> Ik wil design principes leren, zodat ik deze kan toepassen met sites en games maken.";
  myInformationTitle.innerHTML = "Leerdoelen"
 createBlocks();
}

function Hobbies(){
  myInformation.innerHTML = lookForMyData.data[0].bio;
  myInformationTitle.innerHTML = "Hobbies"
  createBlocks(); 
}

// source: https://www.w3schools.com/howto/howto_js_add_class.asp
function RevealText() {
  allButtons.classList.add("hide")
  informationBox.classList.remove("hide");
  removeBlocksButton.classList.remove("hide");
}

//lego kleuren van https://color-term.com/lego-colors/index.html
const colors = [
  "rgb(0,85,191)",      
  "rgb(0,143,155)",    
  "rgb(201,26,9)",  
  "rgb(85,165,175)", 
  "rgb(129,0,123)",
  "rgb(146,57,120)",  
  "rgb(32, 50, 176)",
  "rgb(179,16,4)",
  "rgb(114,14,15)",

]; 

/* 
meeste van dit komt uit chatGPT.
prompt: 
zou het mogelijk zijn om een foreach te gebruiken om deze blokken over de hele achtergrond te doen
gevolgd bij prompt:
Is het mogelijk dat er een seconde tussen elk blokje zit?
*/
function createBlocks() {
  const blockSize = 100;
  const cols = Math.ceil(window.innerWidth / blockSize);
  const rows = Math.ceil(window.innerHeight / blockSize);
  const totalBlocks = rows * cols;
  const blocks = [];
  // zet blokken in de array
  for (let i = 0; i < totalBlocks; i++) {
    blocks.push(i);
  }
  // plaats elk blok
  blocks.forEach((blockIndex) => {
    setTimeout(() => {
      const block = document.createElement('div');
      block.classList.add('block');
    
      block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      // Bereken positie van blok
      const left = (blockIndex % cols) * blockSize;
      const top = Math.floor(blockIndex / cols) * blockSize;
    
      // plaats blok op goede plaats
      block.style.left = `${left}px`;
      block.style.top = `${top}px`;
    
      // maak het een child
      document.getElementById('block-container').appendChild(block);

      // delay van tekst laten verschijnen
      if (blockIndex === totalBlocks - 1){
        RevealText()
      }
    }, blockIndex * 20);
  });     
}

/* 
chatGPT prompt
nu heb ik een knop nodig die alle blokken verwijderd
*/
function removeBlocks() {
  document.getElementById('block-container').innerHTML = '';

  allButtons.classList.remove("hide")
  removeBlocksButton.classList.add("hide");
  informationBox.classList.add("hide");
}

//source: https://www.w3schools.com/jsref/event_animationend.asp
const fallingBricks = document.querySelectorAll("#fallingBricks .animate");
fallingBricks.forEach((fallingBrick) => {
  fallingBrick.addEventListener("animationend", () => {
    fallingBrick.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    fallingBrick.style.left = (Math.random() * 75 + 10).toFixed(2) + "%";
    
    /*
    deze 3 lijnen code komen van chatGPT
    de prompt was: Wat ik heb werkt deels, om de een of andere reden glitched het elke keer als het gereset wordt. Ook reset het niet naar de goede hoogte.
    gevolgd bij prompts om de code uit te leggen. 
    Daarna probeerde ik een andere manier werkte weer niet, vroeg aan chatGPT:
    stel ik zet in css de animation van "infinite" naar "linear" en in javascript de addeventlistener naar animationend. Kan ik dan de animatie opnieuw triggeren zonder de class te verwijderen en weer toe te voegen?
    */ 
    fallingBrick.style.animation = 'none';
    fallingBrick.offsetHeight; 
    fallingBrick.style.animation = "fallingBricks" + (Math.random() * 4 + 1).toFixed(2) + "5s linear";
    fallingBrick.style.animationDuration = (Math.random() * 20 + 5).toFixed(2) + "s";
  });   
});
  

let meEvent = document.getElementById("MeInformationButton");
meEvent.addEventListener('click', MyInformation);

let removeBlocksEvent = document.getElementById("removeBlocks");
removeBlocksEvent.addEventListener('click', removeBlocks)

let leerdoelEvent = document.getElementById("LearningGoalsButton");
leerdoelEvent.addEventListener('click', LearningGoals);

let HobbyEvent = document.getElementById("HobbyButton");
HobbyEvent.addEventListener('click', Hobbies);