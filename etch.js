const grindContainer=document.createElement('div');
grindContainer.id='grid';
grindContainer.style.display='flex';
grindContainer.style.flexWrap='wrap';
document.body.appendChild(grindContainer);

let initialGrid=16;

let gridNumElement=document.getElementById('gridNum');
gridNumElement.addEventListener('click', function(){
    console.log("changing number of grid");
    let newGrid=prompt("Enter a number of grids");
    console.log("new grid number: "+newGrid);
    if(newGrid>0 && newGrid<=100){
        initialGrid=newGrid;
    }else{
        alert("Please enter a number between 1 and 100");
    }
});
function createGrid(){
    for(let i=0;i<initialGrid;i++){
        for(let j=0;j<initialGrid;j++){
            const cell=document.createElement('div');
            cell.style.width='50px';
            cell.style.height='50px';
            cell.style.border='1px solid rgba(0, 0, 0, 0.5)';
            grindContainer.appendChild(cell);
        }
    }
}

function coloring(event){
    console.log('coloring');
    event.target.style.backgroundColor='powderblue';
}

grindContainer.addEventListener('mouseover', coloring);

createGrid();