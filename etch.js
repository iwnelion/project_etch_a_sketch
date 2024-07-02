const gridContainer=document.createElement('div');
gridContainer.id='grid';
gridContainer.style.display='flex';
gridContainer.style.flexWrap='wrap';
document.body.appendChild(gridContainer);

let initialGrid=16;

function createGrid(){
    gridContainer.innerHTML='';
    for(let i=0;i<initialGrid;i++){
        const row=document.createElement('div');
        for(let j=0;j<initialGrid;j++){
            const cell=document.createElement('div');
            cell.style.width='50px';
            cell.style.height='50px';
            cell.style.border='1px solid rgba(0, 0, 0, 0.5)';
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
    gridContainer.addEventListener('mouseover', coloring);
}

function coloring(event){
    console.log('coloring');
    event.target.style.backgroundColor='powderblue';
}

createGrid();

let gridNumElement=document.getElementById('gridNum');
gridNumElement.addEventListener('click', function(){
    console.log("changing number of grid");
    let newGrid=prompt("Enter a number of grids");
    console.log("new grid number: "+newGrid);
    if(newGrid>0 && newGrid<=100){
        initialGrid=newGrid;
        createGrid();
    }else{
        alert("Please enter a number between 1 and 100");
    }
});