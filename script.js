const gridItems = document.querySelectorAll('.tttGridItem');
let winnerHeading = document.getElementById(`winnerHeading`);
let winner;
let playerTurn = true;
function winningPlayer(marker, playerName, combo) {
    const [a, b, c] = combo;
    if (gridItems[a].textContent == marker &&
        gridItems[b].textContent == marker &&
        gridItems[c].textContent == marker) {
        winner = `${playerName} Won!`;
        return winner;
    }
}
function checkForWinner() {
    const winCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winCombo) {
        const result = winningPlayer(`X`, `Flack`, combo) || winningPlayer(`O`, `Player 2`, combo);
        if (result) {
            winner = result;
            return winner;
        }
    }
    return null;
}
function checkForDraw(){
    let isGridFull = true;
    for(let gridItem of gridItems){
        if(!gridItem.textContent.trim()){
            isGridFull = false;
            break;
        }
    }
    if(isGridFull && !winner){
        winner = `Draw!`;
        return winner;
    }
}
function setMarker(gridItem) {
    if (!gridItem.textContent) {
        if (playerTurn) {
            gridItem.textContent = 'X';
        } else {
            gridItem.textContent = 'O';
        }
        playerTurn = !playerTurn;
        checkForWinner();
        checkForDraw();
        winnerHeading.textContent = winner;
    }
}

