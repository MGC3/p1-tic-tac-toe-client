'use strict';

const config = require('../config');
const store = require('../store');
const gameId = 2;

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

const getAllGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

const updateMove = (id, player) => {
  console.log('Hi from updateMove from API');
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: id,
          value: player
        },
        over: false
      }
    }
  });
};

module.exports = {
  createGame,
  getAllGames,
  updateMove
};
