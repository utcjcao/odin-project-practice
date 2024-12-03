const board = [
  ["Z", "Z", "Z"],
  ["Z", "Z", "Z"],
  ["Z", "Z", "Z"],
];

var turn = "x";

function addTurnToBoard(turn) {
  let X = parseInt(prompt("whats the x location"));
  let Y = parseInt(prompt("whats the Y location"));
  board[X][Y] = turn;
}

function showBoard() {
  const mainDiv = document.getElementById("main");
  mainDiv.innerHTML = "";
  board.forEach((boardRow) => {
    const boardRowDiv = document.createElement("div");
    for (let j = 0; j < 3; j++) {
      const boardCell = document.createElement("span");
      boardCell.textContent = boardRow[j];
      boardRowDiv.appendChild(boardCell);
    }
    mainDiv.appendChild(boardRowDiv);
  });
}

function checkWin(turn) {
  // check horz
  for (let i = 0; i < 3; i++) {
    winFlag = true;
    for (let j = 0; j < 3; j++) {
      if (board[i][j] != turn) {
        winFlag = false;
      }
    }
    if (winFlag) {
      winnerDiv = document.getElementById("winner");
      winnerDiv.innerHTML = turn + " wins";
      return;
    }
  }

  // check vert
  for (let i = 0; i < 3; i++) {
    winFlag = true;
    for (let j = 0; j < 3; j++) {
      if (board[j][i] != turn) {
        winFlag = false;
      }
    }
    if (winFlag) {
      winnerDiv = document.getElementById("winner");
      winnerDiv.innerHTML = turn + " wins";
      return;
    }
  }

  // check diagonal
  winFlag = true;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] != turn) {
      winFlag = false;
    }
  }
  if (winFlag) {
    winnerDiv = document.getElementById("winner");
    winnerDiv.innerHTML = turn + " wins";
    return;
  }
  winFlag = true;
  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] != turn) {
      winFlag = false;
    }
  }
  if (winFlag) {
    winnerDiv = document.getElementById("winner");
    winnerDiv.innerHTML = turn + " wins";
    return;
  }

  return false;
}

// while (checkWin(turn) == false) {
//   showBoard();
//   addTurnToBoard(turn);
//   showBoard();
//   turn = turn === "x" ? "o" : "x";
// }

function playTurn() {
  showBoard(); // Render the board before input
  setTimeout(() => {
    addTurnToBoard(turn); // Get the player's input
    showBoard(); // Re-render the board after input
    if (checkWin(turn)) {
      return; // Stop if there's a winner
    }

    // Switch turns
    turn = turn === "x" ? "o" : "x";

    // Recursively call playTurn with delay
    setTimeout(playTurn, 1000); // Pause for 1 second before next move
  }, 500); // Delay before getting input (e.g., 500ms)
}

// Start the game
playTurn();
