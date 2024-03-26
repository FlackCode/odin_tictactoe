let tText = document.getElementById(`tText`);
let restartBtn = document.getElementById(`restartBtn`);
restartBtn.addEventListener(`click`, restartGame);
let tiles = Array.from(document.getElementsByClassName(`box`));
console.log(tiles);
const playerMarker = `X`;
const opponentMarker = `O`;
let currentMarker = playerMarker;
let gameOver = false;
let spaces = Array(9).fill(null);
const startGame = () => {
    tiles.forEach(tile => tile.addEventListener(`click`, tileClicked));
}
function tileClicked(box){
    const id = box.target.id;
    if(!spaces[id]){
        spaces[id] = currentMarker;
        box.target.innerText = currentMarker;
        if(playerWon() !==false){
            tText.innerHTML = `${currentMarker} has won.`;
            gameOver = true;
            tiles.forEach(tile => tile.removeEventListener(`click`, tileClicked));
            return;
        }
        currentMarker = currentMarker == playerMarker ? opponentMarker : playerMarker;
    }
}
function playerWon(){
    const winTileCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winTileCombo){
        let [a, b, c] = combo;
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c];
        }
    }
    return false;
}
function restartGame(){
    spaces.fill(null);
    tiles.forEach(tile => tile.innerText = ``);
    tText.innerHTML = `Tic Tac Toe`;
    currentMarker = playerMarker;
    gameOver = false;
    tiles.forEach(tile => tile.addEventListener(`click`, tileClicked));
}
startGame();