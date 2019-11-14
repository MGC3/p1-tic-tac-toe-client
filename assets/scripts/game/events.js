'use strict';

const api = require('./api');
const ui = require('./ui');
const game = require('./game-logic');

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

const onClickSquare = e => {
  // things to do:
  // check if move is valid, and exit/break if invalid
  // render the X or O. Add a 'currentPlayerSymbol' boolean somewhere and toggle it.
  // check for win condition
  // send/PATCH api update with new move. If win, send that info too. Also if win, show user message
  const id = parseInt(e.target.id);
  const player = game.currentPlayer;
  if (game.isValidMove()) {
    game.onUpdateMove(id, player);
    if (game.isWinningMove()) {
      game.clearBoard();
    } else {
      game.togglePlayer();
    }
  }
  // test sending API the
};

const addHandlers = e => {
  $('#create-game').on('click', onCreateGame);
  $('#get-all-games').on('click', onGetAllGames);
  $('#game-board').on('click', onClickSquare);
};

module.exports = {
  addHandlers
};
