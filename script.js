const gridItems = document.querySelectorAll('.tttGridItem');
let winnerHeading = document.getElementById(`winnerHeading`);
let winText;
function setMarker(gridItem){
    if (!gridItem.textContent.trim()) {
        gridItem.textContent = 'X';
    }
    aiMarker();
    checkForWinner();
    console.log(winText);
    winnerHeading.textContent = winText;
}
function aiMarker(){
    const emptyGridItems = [];
    for (let i = 0; i < gridItems.length; i++) {
        if (!gridItems[i].textContent.trim()) {
            emptyGridItems.push(gridItems[i]);
        }
    }

    if(emptyGridItems.length > 0) {
        const randomMarker = Math.floor(Math.random() * emptyGridItems.length);
        const aiGridMarker = emptyGridItems[randomMarker];
        aiGridMarker.textContent = 'O';
    }
}
function checkForWinner() {
    const winCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for(let combo of winCombo){
        const [a, b, c] = combo;
        if(gridItems[a].textContent == `X` 
            && gridItems[b].textContent == `X` 
            && gridItems[c].textContent == `X` ){
            winText = `The Player Won!`;
            return winText;
        }
        else if(gridItems[a].textContent == `O` 
            && gridItems[b].textContent == `O` 
            && gridItems[c].textContent == `O` ){
            winText = `The AI Won!`;
            return winText;
        }
    }
    return null;
}