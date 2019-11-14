'use strict';

const api = require('./api');
const getFormFields = require('../../../lib/get-form-fields');
const ui = require('./ui');

const onSignUp = e => {
  e.preventDefault();

  const form = e.target;
  const formData = getFormFields(form);

  api
    .signUp(formData)
    .then(ui.onSignupSuccess)
    .catch(ui.onSignupFailure);
};

const onSignIn = e => {
  e.preventDefault();

  const form = e.target;
  const formData = getFormFields(form);

  api
    .signIn(formData)
    .then(ui.onSigninSuccess)
    .catch(ui.onSigninFailure);
};

const onChangePassword = e => {
  e.preventDefault();

  const form = e.target;
  const formData = getFormFields(form);

  api
    .changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure);
};

const onSignOut = e => {
  e.preventDefault();

  api
    .signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure);
};

const addHandlers = e => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers
};
