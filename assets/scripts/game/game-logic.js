'use strict';

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

store.currentPlayer = 'x';

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

  totalMoves++;
  if (totalMoves === 9 && !isWinningMove()) {
    ui.onTie();
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
  winningMoves.map(row => {
    let first = row[0];
    let second = row[1];
    let third = row[2];

    if (
      store.game.cells[first] === store.game.cells[second] &&
      store.game.cells[second] === store.game.cells[third] &&
      store.game.cells[first] !== ''
    ) {
      winner = true;
      store.isOver = true;
      totalMoves = 0;
    }
  });

  return winner;
};

const togglePlayer = () => {
  store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x';
};

const endGame = () => {
  ui.onGameOver();
};

module.exports = {
  isValidMove,
  isWinningMove,
  togglePlayer,
  onUpdateMove,
  endGame
};
