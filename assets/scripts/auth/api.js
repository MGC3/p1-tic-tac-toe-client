'use strict';

const config = require('../config');
const store = require('../store');

const signUp = formData => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi-production.herokuapp.com/sign-up',
    // TODO: getting a 500 error when using dev url, once resolved remove the hardcoded link above
    // url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  });
};

const signIn = formData => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi-production.herokuapp.com/sign-in',
    // url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  });
};

const changePassword = formData => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi-production.herokuapp.com/change-password',
    // url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  });
};

const signOut = () => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi-production.herokuapp.com/sign-out',
    // url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
};