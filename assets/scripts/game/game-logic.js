'use strict';

const currentPlayer = 'X';

// const currentBoard = ['x', 'o', '', '', '', '', '', '', ''];

const isValidMove = () => {
  // TODO: actually check if move is valid
  return true;
};

const updateMove = () => {
  // TODO: actually send request to API, then get results back and update current board. So can check if win later
  console.log('Hi from updateMove');
};
const isWinningMove = () => {
  console.log('Hi from isWinningMOve'); //
};
const togglePlayer = () => {
  console.log('Hi from togglePlayer');
};

module.exports = {
  currentPlayer,
  isValidMove,
  isWinningMove,
  togglePlayer,
  updateMove
};
