// Javascript File 

const container = document.querySelector('.container');
const createBtn = document.querySelector('#createBtn');

createBtn.addEventListener('click',()=> {
    const userInput = prompt("How many squares per side do you want? (max:100):  ");
    const number = Number(userInput);

    if (!isNaN(number)) {
        if (number > 0 && (number < 100 || number == 100))
            generateGrid(number);
        else
            alert("Invalid input! Number must be between 1 and 100, inclusive");
    } else {
    alert("That's not a valid number!");
    }
});


function generateGrid(number){
   
    let htmlString = "";
    let numberOfRows = number;
    let numberOfBoxes = number;
    let boxWidth = `${960/numberOfBoxes}px`;


    if (container){

        for(let i=0; i < numberOfRows ; i++ ){
            htmlString += `<div class="row">\n`;
            for (let j=0; j<numberOfBoxes;j++){
                htmlString += `<div class="box" style="width: ${boxWidth}; height:${boxWidth}"> </div>\n`;
            }
            htmlString += `</div>\n`;
        }

        container.innerHTML = htmlString;
            
    } else {
        console.log(`Can't find element class "Container"`);
    }

}



container.addEventListener('mouseout', function(event) {
  
    const cell = event.target.closest('.box');
    if (cell){
        cell.style.backgroundColor = randomColor();
    }

    
    
})

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  