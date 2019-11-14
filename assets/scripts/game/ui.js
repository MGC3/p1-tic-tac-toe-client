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
  // TODO: get board to show after creating game - save for late MVP
  // onSuccess('Game successfully created');
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

const renderSquare = () => {
  console.log('Hi from renderSquare');
};

const onUpdateMoveSuccess = responseData => {
  // update game state
  store.game = responseData.game;
  // render square on screen
  console.log('Update move success - this is where Im updating state!');
  renderSquare();
};

const onUpdateMoveFailure = () => {
  console.log('ERROR - onUpdateMoveFailure');
};

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onUpdateMoveSuccess,
  onUpdateMoveFailure
};
