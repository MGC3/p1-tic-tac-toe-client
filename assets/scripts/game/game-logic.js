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

const isWinningMove = () => {
  console.log('Hi from isWinningMOve');
  return false;
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
