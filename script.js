// Javascript File 

const container = document.querySelector('.container');
let htmlString = "";
let numberOfRows = 16;
let numbeOfColunms = 16;

if (container){

    for(let i=0; i < numberOfRows ; i++ ){
        htmlString += `<div class="row">\n`;
        for (let j=0; j<numbeOfColunms;j++){
            htmlString += `<div class="column"> </div>\n`;
        }
        htmlString += `</div>\n`;
    }

    container.innerHTML = htmlString;
        
} else {
    console.log(`Can't find element class "Container"`);
}

container.addEventListener('mouseout', function(event) {
    console.log(event.target);
    const cell = event.target.closest('.column');
    if (cell){
        cell.style.backgroundColor = randomColor();
    }

    
    
})

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  