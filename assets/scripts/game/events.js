'use strict';

const api = require('./api');
const ui = require('./ui');

const onCreateGame = e => {
  api
    .createGame()
    .then(res => console.log(res))
    // .then(ui.onSignupSuccess) // this should render the board
    .catch(ui.onCreateGameFailure);
};

const onGetAllGames = () => {
  api
    .getAllGames()
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure);
};

const addHandlers = e => {
  $('#create-game').on('click', onCreateGame);
  $('#get-all-games').on('click', onGetAllGames);
};

module.exports = {
  addHandlers
};
