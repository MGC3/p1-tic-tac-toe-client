'use strict';

const store = require('../store');
const Swal = require('sweetalert2');

const onSuccess = message => {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1250
  });
  $('form').trigger('reset');
};

const onFailure = (title, text) => {
  Swal.fire({
    position: 'top',
    icon: 'error',
    title: title,
    text: text || null,
    showConfirmButton: false,
    timer: 2000
  });
  $('form').trigger('reset');
};

const onSignupSuccess = () => {
  onSuccess('Sucessfully signed up');
};

const onSignupFailure = () => {
  onFailure(
    'Unable to sign up',
    "We weren't able to sign you up. Try using a different email."
  );
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
  onFailure(
    'Unable to sign you in',
    'Check to make sure you spelled your username and password correctly, and that your account exists.'
  );
};

const onChangePasswordSuccess = responseData => {
  onSuccess('Sucessfully changed password');
};

const onChangePasswordFailure = () => {
  onFailure(
    'Unable to change your password',
    'Check to make sure you spelled your old password correctly.'
  );
};

const onSignOutSuccess = () => {
  onSuccess('Sucessfully signed out');
  // clear store and hide stuff
  store.user = {};
  $('form').trigger('reset');
  $('.board').css('display', 'none');
  $('.after-auth').hide();
  $('.before-auth').show();
};

const onSignOutFailure = () => {
  onFailure('Unable to sign you out.');
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
