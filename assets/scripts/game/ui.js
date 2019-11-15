'use strict';

const store = require('../store');

// change this function to display board, save for late MVP
// const onSuccess = message => {
//   $('#game')
//     .removeClass('failure')
//     .addClass('success')
//     .text(message);
// };

const onFailure = message => {
  $('#game')
    .removeClass('success')
    .addClass('failure)')
    .text(message);
};

const onCreateGameSuccess = responseData => {
  // store game info
  store.game = responseData.game;
  clearBoard();
  // TODO: get board to show after creating game - save for late MVP
  // onSuccess('Game successfully created');
  $('.board').css('display', 'flex');
};

const onCreateGameFailure = () => {
  onFailure('ERROR ERROR - failed to create game');
};

const onGetAllGamesSuccess = data => {
  // update the #game-count div with total number of games associated with user
  let totalGames = data.games.length;
  $('#game-count').append(totalGames);
};

const onGetAllGamesFailure = () => {
  onFailure('ERROR ERROR - failed to get all games');
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
  console.log('ERROR - onUpdateMoveFailure');
};

const onGameOver = () => {
  alertWinner();
};

const alertWinner = () => {
  $('#game-alert')
    .addClass('alert alert-success')
    .html(`Player ${store.currentPlayer} wins!`);
};

const clearBoard = () => {
  $('.box').html('');
};

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onUpdateMoveSuccess,
  onUpdateMoveFailure,
  renderSquare,
  onGameOver
};
