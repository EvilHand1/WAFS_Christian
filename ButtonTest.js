function myFunction() {
    // var element = document.getElementById("myDIV");
    // element.classList.add("block");
    var element2 = document.getElementById("myButton");
    element2.hidden = true;
    createBlocks();
  }


function createBlocks() {
      const blockSize = 100;
      const cols = Math.ceil(window.innerWidth / blockSize); // Aantal kolommen
      const rows = Math.ceil(window.innerHeight / blockSize); // Aantal rijen

      const blocks = []; // Array van blokken

      // Vul de array met blokken
      for (let i = 0; i < rows * cols; i++) {
        blocks.push(i);  // We voegen de index van het blok toe
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
    
          // Voeg het blok toe aan de body
          document.body.appendChild(block);
        }, blockIndex * 30); // 1 seconde vertraging per blok
      });
    }

    // Roep de functie aan om de blokken te maken
