const cells = document.querySelectorAll(".cell");
const winnerBox = document.querySelector(".winBox");

winnerBox.style.display = "none";

let winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let playerX = "X";


//Switch Chance
cells.forEach(cell => {
    cell.addEventListener("click", function () {
        if (playerX) {
            console.log("Clicked");
            cell.textContent = "X";
            cell.disabled = true;
            checkWin();
            checkTie();
            playerX = false
        } else {
            console.log("Clicked");
            cell.textContent = "O";
            cell.disabled = true;
            checkWin();
            checkTie();
            playerX = true;
        }
    })
});

//Check winner
function checkWin() {
    for (const combo of winCombo) {

        if (cells[combo[0]].textContent == "X" && cells[combo[1]].textContent == "X" && cells[combo[2]].textContent == "X") {
            winnerBox.style.removeProperty("display");
            console.log("X Won");
            break;
        } else if (cells[combo[0]].textContent == "O" && cells[combo[1]].textContent == "O" && cells[combo[2]].textContent == "O") {
            winnerBox.style.removeProperty("display");
            document.querySelector('h1').textContent = "Congratulation";
            document.querySelector('p').textContent = "O Won!";
            console.log("O Won");
            break;
        }
    }
}

//Check Draw
function checkTie() {
    if (!checkWin() && Array.from(cells).every((c)=> c.textContent  !== "")) {
        winnerBox.style.removeProperty("display");
        document.querySelector('h1').textContent = "Too Bad";
        document.querySelector('p').textContent = "Its a Tie!";
        console.log("Draw");
    }
}

// Reset Game
function resetGame() {
    for (const cell of cells) {
        cell.textContent = "";
        cell.disabled = false;
        playerX = true;
    }
    winnerBox.style.display = "none";
}

