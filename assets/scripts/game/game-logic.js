'use strict';

const api = require('./api');
const ui = require('./ui');
const currentPlayer = 'x';

// const currentBoard = ['x', 'o', '', '', '', '', '', '', ''];

const isValidMove = () => {
  // TODO: actually check if move is valid
  return true;
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
  console.log('Hi from togglePlayer');
};

const clearBoard = () => {
  console.log('Hi from clearBoard');
};

module.exports = {
  currentPlayer,
  isValidMove,
  isWinningMove,
  togglePlayer,
  onUpdateMove,
  clearBoard
};
