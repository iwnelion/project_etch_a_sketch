const grindContainer=document.createElement('div');
grindContainer.style.display='flex';
grindContainer.style.flexWrap='wrap';
grindContainer.style.justifyContent='pace-between';
document.body.appendChild(grindContainer);

for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        const cell=document.createElement('div');
        cell.style.width='50px';
        cell.style.height='50px';
        cell.style.backgroundColor='lightblue';
        cell.style.border='1px solid black';
        grindContainer.appendChild(cell);
    }
}