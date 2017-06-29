'use strict';

import template from './signin.html';

export default {

  template: template,

  controller: function (AuthService, $state, ngToast, $window, CONSTANTS) {
    'ngInject';

    this.signin = () => {
      // Local authentication mode
      AuthService.login(this.user).then((user) => {
        $state.go('users');
      }).catch((err) => {
        let message = err.data ? err.data.message || err.data : err;
        let toastContent = `Error : ${message} !`;
        ngToast.create(toastContent);
      });
    };

    this.facebook = () => {
      // FB authentication request
      $window.location = CONSTANTS.serverFacebookUrl;
    }
  }
}