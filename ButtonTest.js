const baseURL = "https://fdnd.directus.app/items/person/?filter={%22id%22:196}";
const response = await fetch(baseURL);
const lookForMyData = await response.json();


function MyInformation(){
  var myInformation = document.getElementById("WhoAmIText");
  myInformation.innerHTML = "Hallo, mijn naam is " + lookForMyData.data[0].name + " en ik vreselijk in coderen. " + lookForMyData.data[0].bio;
myFunction();

}

function LearningGoals(){
  var myInformation = document.getElementById("WhoAmIText");
  myInformation.innerHTML = "dus mijn eerste leerdoel is om css te leren";
  myFunction();
}

function Hobbies(){
  var myInformation = document.getElementById("WhoAmIText");
  myInformation.innerHTML = "En mijn tweede is om te janken";
  myFunction();
}

function myFunction() {
    var showInformation = document.getElementById("AllButtons");
    showInformation.classList.add("hide")

    createBlocks();
    var myInformation = document.getElementById("WhoAmIText");
    myInformation.classList.remove("hide");
    
    myInformation.hidden = false;

    var removeBlocksButton = document.getElementById("removeBlocks");
    removeBlocksButton.classList.remove("hide");
    removeBlocksButton.hidden = false;

    
  }

  
let blockTimeouts = [];

function createBlocks() {
      const blockSize = 100;
      const cols = Math.ceil(window.innerWidth / blockSize);
      const rows = Math.ceil(window.innerHeight / blockSize);

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
        }, blockIndex * 20);
      });
    }

    function removeBlocks() {
      blockTimeouts.forEach(clearTimeout);
      blockTimeouts = [];
      document.getElementById('block-container').innerHTML = '';

      
      var showInformation = document.getElementById("AllButtons");
      showInformation.classList.remove("hide")

      var removeBlocksButton = document.getElementById("removeBlocks");
      removeBlocksButton.hidden = true;

      var myInformation = document.getElementById("WhoAmIText");
      myInformation.hidden = true;
    }

  
   

let meEvent = document.getElementById("MeInformationButton");
meEvent.addEventListener('click', MyInformation);

let removeBlocksEvent = document.getElementById("removeBlocks");
removeBlocksEvent.addEventListener('click', removeBlocks)

let leerdoelEvent = document.getElementById("LearningGoalsButton");
leerdoelEvent.addEventListener('click', LearningGoals);

let HobbyEvent = document.getElementById("HobbyButton");
HobbyEvent.addEventListener('click', Hobbies);