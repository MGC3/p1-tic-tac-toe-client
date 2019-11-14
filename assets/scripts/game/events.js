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

const addHandlers = e => {
  $('#create-game').on('click', onCreateGame);
};

module.exports = {
  addHandlers
};
