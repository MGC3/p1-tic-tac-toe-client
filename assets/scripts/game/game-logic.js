'use strict';

const api = require('./api');
const ui = require('./ui');
const store = require('../store');
// track total moves for detecting tie condition in onUpdateMove()
// TODO: should this be moved to store?
let totalMoves = 0;

const isValidMove = id => {
  return store.game.cells[id] == false ? true : false;
};

const onUpdateMove = (id, player) => {
  // send the move, then update store with returned results
  // then check for win condition
  // if win condition, trigger clearboard. If not, toggle player for next turn
  api
    .updateMove(id, player)
    .then(res => ui.onUpdateMoveSuccess(res))
    .then(() => isWinningMove())
    .then(isWon => (isWon ? endGame() : togglePlayer()))
    .catch(error => ui.onUpdateMoveFailure(error));

  // if nobody has won after 9 moves, set the game as over and display message to user
  totalMoves++;
  if (totalMoves === 9 && !isWinningMove()) {
    ui.displayInfo("It's a tie!", 'What a close match, try again!');
    // TODO: the next two lines are duplicated in endGame(), refactor possibility
    store.isOver = true;
    totalMoves = 0;
    // update tie count for stats
    store.tie = store.tie + 1 || 1;
    console.warn(store.tie);
  }
};

const winningMoves = [
  [0, 1, 2], // cells[0], cells[1], cells[2]
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cells[0], cells[3], cells[6]j - i want row[0] value into cells[]. cells[row[0]]
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const isWinningMove = () => {
  let winner = false;
  // for every winning move combination...
  winningMoves.map(row => {
    let first = row[0];
    let second = row[1];
    let third = row[2];
    // check to see if our cells array has all x's or o's in them...
    if (
      store.game.cells[first] === store.game.cells[second] &&
      store.game.cells[second] === store.game.cells[third] &&
      store.game.cells[first] !== ''
    ) {
      // and if so, set winner to true so this function returns that (which triggers endGame())
      winner = true;
    }
  });

  return winner;
};

const togglePlayer = () => {
  store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x';
};

const endGame = () => {
  // notify the user that the game is over
  ui.onGameOver();
  // set the isOver flag and reset the total moves counter
  store.isOver = true;
  totalMoves = 0;
};

module.exports = {
  isValidMove,
  isWinningMove,
  togglePlayer,
  onUpdateMove,
  endGame
};
