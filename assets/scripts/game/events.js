'use strict';

const api = require('./api');
const ui = require('./ui');
const game = require('./game-logic');
const store = require('../store');

const onCreateGame = e => {
  store.isOver = false;
  store.currentPlayer = 'x';
  api
    .createGame()
    .then(res => ui.onCreateGameSuccess(res))
    .catch(ui.onCreateGameFailure);
  // update stat bar with total games
  onGetAllGames();
};

const onGetAllGames = () => {
  api
    .getAllGames()
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure);
};

const onClickSquare = e => {
  // grab id of square that user clicked and the current player
  const id = parseInt(e.target.id);
  const player = store.currentPlayer;
  // if the move is valid and the game is not over
  if (game.isValidMove(id) && !store.isOver) {
    // send the id and player to the api - this updates the move and checks for win condition
    game.onUpdateMove(id, player);
    // render the square on the board and toggle the current player
    ui.renderSquare(id);
    ui.updateCurrentTurn();
    // if the user tries to click when the game is over
  } else if (store.isOver) {
    ui.displayInfo(
      'Unable to make that move',
      'The game is already over! Create a new game to play again.'
    );
    // if the move is invalid and the game is not over yet
  } else {
    ui.displayInfo(
      'Unable to make that move',
      'That spot is already taken! Try clicking another spot.'
    );
  }
};

const onClickSpeed = () => {
  onCreateGame();
  let speedGame = setInterval(function() {
    if (store.isOver) {
      console.log("The game is over, so I won't execute speed turn");
      clearInterval(speedGame);
      return;
      // else toggle the player TODO: and reset timer
    } else {
      // ui.updateCurrentTurn();

      // game.togglePlayer();
      // and display new countdown to user
      console.log('Speed turn over!');
    }
  }, 2000);
};

const addHandlers = e => {
  $('#create-game').on('click', onCreateGame);
  $('#game-board').on('click', onClickSquare);
  $('#speed-game').on('click', onClickSpeed);
};

module.exports = {
  addHandlers,
  onCreateGame,
  onGetAllGames
};
