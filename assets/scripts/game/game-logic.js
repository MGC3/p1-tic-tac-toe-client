'use strict';

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

store.currentPlayer = 'x';

const isValidMove = id => {
  return store.game.cells[id] == false ? true : false;
};

const onUpdateMove = (id, player) => {
  // send the move, then update store with returned results
  api
    .updateMove(id, player)
    .then(res => ui.onUpdateMoveSuccess(res))
    .catch(error => ui.onUpdateMoveFailure(error));
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
  console.log('Hi from isWinningMOve');
  winningMoves.map(row => {
    let first = row[0];
    let second = row[1];
    let third = row[2];
    if (
      store.game.cells[first] === store.game.cells[second] &&
      store.game.cells[second] === store.game.cells[third] &&
      store.game.cells[first] !== ''
    ) {
      console.log('winner: ', store.currentPlayer);
      return true;
    } else {
      console.log('no winners yet');
      return false;
    }
  });
};

const togglePlayer = () => {
  store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x';
};

const clearBoard = () => {
  console.log('Hi from clearBoard');
};

module.exports = {
  // currentPlayer,
  isValidMove,
  isWinningMove,
  togglePlayer,
  onUpdateMove,
  clearBoard
};
