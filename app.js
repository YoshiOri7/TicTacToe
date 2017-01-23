// Make a command line tic-tac-toe game from scratch for two players.
// Expected features
// ===============
// * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// * Win detection - detect and display who won

// Bonus / stretch goals (any or all of the following)
// =======================================
// * Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
// * Implement win detection with a functional rather than iterative style.
// * Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

// Implementation instructions
// =======================
// * Create the project from scratch. Don't just clone an existing project.
// * This includes writing configuration files for any dependencies and test framework setup.
// * You should have a reasonably thorough suite of unit tests using a real unit test framework.
// * Use the editor of your choice.
// * Init a git repo for this project.
// * Push the repo up to github.
// * Make small commits as you go to illustrate your thought process and be able to back out changes easily.
// * Don't forget to push your final solution up to Github.
// * Add a professional-looking README file with installation and usage instructions.

// Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead.

// Submission instructions
// ========================================
// rowIndex and colIndex
//[ [0:0, 0:1 , 0:2]
//  [1:0, 1:1 , 1:2]
//  [2:0, 2:1 , 2:2] ]
// ========================================
// cellIndex
//[ [0, 1, 2]
//  [3, 4, 5]
//  [6, 7, 8] ]
// ========================================

var _cellIndicesGenerator = function() {
  var cellIndices = [];
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      cellIndices.push({
        'rowIndex': i,
        'colIndex': j
      });
    }
  }
  return cellIndices;
}
// create a ticTacToe board
var Board = function() {
  // initialize a board
  this.board = this._create();
  // keep track of available cell
  this.availableCells = [];
  // cellIndices (for ease of matrix inbdexing)
  this.cellIndicies = _cellIndicesGenerator();

};
Board.prototype._create = function () {
  // create 3x3 matrix
  var row = [' ', ' ', ' '];
  var matrix = [];
  for (var i = 0; i < 3; i++) {
    matrix.push( row.slice() );
  }
  return matrix;
};
Board.prototype._displayBoard = function () {
  console.log('-----------------');
  this.board.forEach(function(rows){
    console.log(rows);
  });
  console.log('-----------------');
};

Board.prototype.fill = function (string, cellIndex) {
  // return true -> next player,
  // return false -> same player, select different cell
  // console.log(this.cellIndicies[cellIndex]);
  var cell = this.cellIndicies[cellIndex];
  console.log(cell.rowIndex, cell.colIndex);

  var selectedCell = this.board[cell.rowIndex][cell.colIndex];
  if (selectedCell === ' ') {
     this.board[cell.rowIndex][cell.colIndex] = string;
    return true;
  } else {
    console.log('that cell is already taken. selected a different cell')
    return false;
  }
};

Board.prototype.evaluateGame = function () {
  var compelte = [/*true, false, true*/];
  complelet.push( this.evaluateDiag() );
  complelet.push( this.evaluateCols() );
  complelet.push( this.evaluateRows() );

  // if there is at least one true,
  // game has ended

}
Board.prototype._evaluateDiag = function () {
  // return true if 'win'
  var cellsToCheck = [[0,4,8],[2,4,6]];
  // check cells to see if player has won;
};
Board.prototype._evaluateCols = function () {
  // return true if 'win'
  var cellsToCheck = [[0, 1, 2], [3,4,5], [6,7,8]];
  // check cells to see if player has won;

};
Board.prototype._evaluateRows = function () {
  // return true if 'win'
  var cellsToCheck = [[0, 3, 6], [1,4,7], [2,5,8]];
  // check cells to see if player has won;
};

// ========================================
// cellIndex
//[ [0, 1, 2]
//  [3, 4, 5]
//  [6, 7, 8] ]
var board = new Board();
board.fill('x', 0)
board.fill('x', 1)
board.fill('x', 0)
board._displayBoard();
// console.log( board.cellIndicies );
