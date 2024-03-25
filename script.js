let gridItem = document.getElementById(`gridItem`);
function setMarker(gridItem){
    if (!gridItem.textContent.trim()) {
        gridItem.textContent = 'X';
    }
}
function checkForWinner() {
    const gridItems = document.querySelectorAll('.tttGridItem');
    const winCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ];
    
}