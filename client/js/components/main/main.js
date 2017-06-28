'use strict';

import template from './main.html';
import styles from './main.scss';

export default {

  template: template,
  css: styles,

  controller: function (AuthService, $state, $transitions, $log, $mdToast, $rootScope, CONSTANTS) {
    'ngInject';

    $transitions.onSuccess({}, (transition) => {
      // Watch route change to update the selected menu tab
      this.selectedTab = transition.to().name;
      $log.debug('TAB:' + this.selectedTab);
    });

    this.$onInit = () => {
      AuthService.getCurrent().then((user) => {
        // Save the currently connected user if any
        this.user = user;
      })
        .catch((err) => {
          $log.error(err);
          this.user = null;
        });
    };

    this.logout = () => {
      // Disconnect and display home page
      AuthService.logout().then(() => {
        $state.go('home');
      });
    };

    // Listen at authentication messages (see auth service)
    $rootScope.$on(CONSTANTS.authEvent, (evt, user) =>  {
      // Save the currently connected user and display the according message
      this.user = user;
      if (user) {
        $mdToast.showSimple(`Welcome ${user.firstName} !`);
      } else {
        $mdToast.showSimple('Disconnected');
      }
    });
    this.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.series = ['Series A', 'Series B'];
    this.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    console.log(this.data);
  }
}