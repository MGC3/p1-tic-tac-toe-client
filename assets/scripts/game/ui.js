'use strict';

const store = require('../store');

const onSuccess = message => {
  $('#game')
    .removeClass('failure')
    .addClass('success')
    .text(message);
};

const onFailure = message => {
  $('#game')
    .removeClass('success')
    .addClass('failure)')
    .text(message);
};

const onCreateGameSuccess = () => {
  onSuccess('Game successfully created');
};

const onCreateGameFailure = () => {
  onFailure('ERROR ERROR - failed to create game');
};

// // model onCreateGameSuccess after this. Similarly store the patch/updates in store too (though this will be diff function)
// const onSigninSuccess = responseData => {
//   store.user = responseData.user;
//   console.log(store);
//   onSuccess('Sucessfully signed in');
//   $('.after-auth').show();
//   $('.before-auth').hide();
// };

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure
};
