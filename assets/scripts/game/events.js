'use strict';

const api = require('./api');
const ui = require('./ui');
const game = require('./game-logic');
const store = require('../store');

const onCreateGame = e => {
  api
    .createGame()
    .then(res => ui.onCreateGameSuccess(res))
    .catch(ui.onCreateGameFailure);
};

const onGetAllGames = () => {
  api
    .getAllGames()
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure);
};

const onClickSquare = e => {
  // things to do:
  // check if move is valid, and exit/break if invalid
  // render the X or O. Add a 'currentPlayerSymbol' boolean somewhere and toggle it.
  // check for win condition
  // send/PATCH api update with new move. If win, send that info too. Also if win, show user message
  const id = parseInt(e.target.id);
  const player = store.currentPlayer;
  if (game.isValidMove(id) && !store.isOver) {
    game.onUpdateMove(id, player);
    ui.renderSquare(id);
  } // TODO else tell user move is invalid
};

const onCheckState = () => {
  console.log(store.game.cells);
};

const addHandlers = e => {
  $('#create-game').on('click', onCreateGame);
  $('#get-all-games').on('click', onGetAllGames);
  $('#game-board').on('click', onClickSquare);
  $('#check-state').on('click', onCheckState);
};

module.exports = {
  addHandlers
};
