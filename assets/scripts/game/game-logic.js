'use strict';

const api = require('./api');

const currentPlayer = 'X';

// const currentBoard = ['x', 'o', '', '', '', '', '', '', ''];

const isValidMove = () => {
  // TODO: actually check if move is valid
  return true;
};

const onUpdateMove = (id, player) => {
  api.updateMove(id, player);
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
