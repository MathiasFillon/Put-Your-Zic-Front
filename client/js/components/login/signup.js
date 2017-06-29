'use strict';

import template from './signup.html';

export default {

  template: template,

  controller: function (UsersService, AuthService, $state, $mdToast) {
    'ngInject';

    this.signup = () =>  {
      console.log(this.user)
      UsersService.create(this.user).then((res) => {
        console.log(res.token)
        return AuthService.setToken(res.token);
      }).then((user) => {
        $state.go('users');
      }).catch((err) => {
        let message = err.data ? err.data.message || err.data : err;
        let toastContent = `Error: ${message} !`;
        $mdToast.showSimple(toastContent);
        console.log(toastContent)
      });
    }
  }
}