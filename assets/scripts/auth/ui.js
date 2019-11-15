'use strict';

const store = require('../store');
const Swal = require('sweetalert2');

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message);
  $('form').trigger('reset');
};

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure)')
    .text(message);
  $('form').trigger('reset');
};

const onSignupSuccess = () => {
  onSuccess('Sucessfully signed up');
};

const onSignupFailure = () => {
  onFailure('ERROR ERROR - sign up');
};

const onSigninSuccess = responseData => {
  store.user = responseData.user;
  $('.after-auth').show();
  $('.before-auth').hide();
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Successfully logged in',
    showConfirmButton: false,
    timer: 1000
  });
};

const onSigninFailure = () => {
  onFailure('ERROR ERROR - sign in');
};

const onChangePasswordSuccess = responseData => {
  onSuccess('Sucessfully changed password');
};

const onChangePasswordFailure = () => {
  onFailure('ERROR ERROR - change password');
};

const onSignOutSuccess = () => {
  onSuccess('Sucessfully Signed Out');
  store.user = {}; // the store no longer knows who we are
  $('.after-auth').hide();
  $('.before-auth').show();
};

const onSignOutFailure = () => {
  onFailure('ERROR ERROR - sign out');
};

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
};
