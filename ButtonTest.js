const baseURL = "https://fdnd.directus.app/items/person/?filter={%22id%22:196}";
const response = await fetch(baseURL);
const lookForMyData = await response.json();

const myInformation = document.getElementById("informationContent");
const myInformationTitle = document.getElementById("informationTitle");
const removeBlocksButton = document.getElementById("removeBlocks");
const informationBox = document.getElementById("Informationtextbox");
const allButtons = document.getElementById("AllButtons");

function MyInformation(){
  myInformation.innerHTML = "Hallo, mijn naam is " + lookForMyData.data[0].name + " maar je kunt me ook " + lookForMyData.data[0].nickname + " noemen. Ik ben geboren op " + lookForMyData.data[0].birthdate + ". Ik ben een derde jaars gamedevelopment student en heb voornamelijk ervaring met C# en Unity. Ik gebruik nog ouderwetse emojis zoals " + lookForMyData.data[0].fav_emoji + " omdat ik die leuker vind.";
  myInformationTitle.innerHTML = "Wie ben ik?"
 createBlocks();
}

function LearningGoals(){
  myInformation.innerHTML = "dus mijn eerste leerdoel is om css te leren";
  myInformationTitle.innerHTML = "Leerdoelen"
 createBlocks();
}

function Hobbies(){
  myInformation.innerHTML = lookForMyData.data[0].bio;
  myInformationTitle.innerHTML = "Hobbies"
  createBlocks(); 
}

function RevealText() {
  allButtons.classList.add("hide")
  informationBox.classList.remove("hide");
  removeBlocksButton.classList.remove("hide");
}

  
let blockTimeouts = [];

function createBlocks() {
  const blockSize = 100;
  const cols = Math.ceil(window.innerWidth / blockSize);
  const rows = Math.ceil(window.innerHeight / blockSize);
  const totalBlocks = rows * cols;
  const blocks = [];


  // Vul de array met blokken
  for (let i = 0; i < rows * cols; i++) {
    blocks.push(i);
  }

  // Gebruik forEach om elk blok te plaatsen
  blocks.forEach((blockIndex) => {
    setTimeout(() => {
      const block = document.createElement('div');
      block.classList.add('block');
    
      // Bereken de positie van het blok op basis van de index
      const left = (blockIndex % cols) * blockSize;
      const top = Math.floor(blockIndex / cols) * blockSize;
    
      // Positioneer het blok
      block.style.left = `${left}px`;
      block.style.top = `${top}px`;
    
      // make the block a child
      document.getElementById('block-container').appendChild(block);

      if (blockIndex === totalBlocks - 1){
        RevealText()
      }
    }, blockIndex * 20);
  });     
}

function removeBlocks() {
  blockTimeouts.forEach(clearTimeout);
  blockTimeouts = [];
  document.getElementById('block-container').innerHTML = '';

  allButtons.classList.remove("hide")
  removeBlocksButton.classList.add("hide");
  informationBox.classList.add("hide");
}

  
   

let meEvent = document.getElementById("MeInformationButton");
meEvent.addEventListener('click', MyInformation);

let removeBlocksEvent = document.getElementById("removeBlocks");
removeBlocksEvent.addEventListener('click', removeBlocks)

let leerdoelEvent = document.getElementById("LearningGoalsButton");
leerdoelEvent.addEventListener('click', LearningGoals);

let HobbyEvent = document.getElementById("HobbyButton");
HobbyEvent.addEventListener('click', Hobbies);