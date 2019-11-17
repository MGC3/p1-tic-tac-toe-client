'use strict';

const store = require('../store');
const Swal = require('sweetalert2');

const onFailure = (title, text) => {
  Swal.fire({
    position: 'top',
    icon: 'error',
    title: title,
    text: text || null,
    showConfirmButton: false,
    timer: 2000
  });
};

const onCreateGameSuccess = responseData => {
  // store game info
  store.game = responseData.game;
  // clear the board
  clearBoard();
  // if the board is still hidden (1st sign in), make the board visible
  $('.board').css('display', 'flex');
  $('#current-turn').html('x');
};

const onCreateGameFailure = () => {
  onFailure('ERROR ERROR - failed to create game');
};

const onGetAllGamesSuccess = data => {
  // update the #game-count div with total number of games associated with user
  let totalGames = data.games.length;
  $('#game-count').html(totalGames);
};

const onGetAllGamesFailure = () => {
  // TODO: convert these to Swal (just re-use auth ui's messaging?).
  onFailure('Unable to get all games');
};

const renderSquare = id => {
  const newId = `#${id}`;
  $(newId).html(`${store.currentPlayer}`);
};

const onUpdateMoveSuccess = responseData => {
  // update game state
  store.game = responseData.game;
};

const onUpdateMoveFailure = () => {
  onFailure('Unable to update move');
};

const onGameOver = () => {
  Swal.fire({
    title: `Player ${store.currentPlayer} wins!`,
    text: 'Congratulations, you won!',
    icon: 'success',
    confirmButtonText: 'Ok',
    allowOutsideClick: false
  });
};

const displayInfo = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'info',
    confirmButtonText: 'Ok',
    allowOutsideClick: false
  });
};

const clearBoard = () => {
  $('.box').html('');
};

const updateCurrentTurn = () => {
  const nextPlayer = store.currentPlayer === 'x' ? 'o' : 'x';
  $('#current-turn').html(nextPlayer);
};

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onUpdateMoveSuccess,
  onUpdateMoveFailure,
  renderSquare,
  onGameOver,
  clearBoard,
  displayInfo,
  updateCurrentTurn
};
