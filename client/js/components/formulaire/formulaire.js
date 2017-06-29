'use strict';

import template from './formulaire.html';

export default {

  template: template,

  controller: function (formulaireService) {
    'ngInject';

    this.$onInit = () => {
      
    };

    this.add = () => {
      var submit = {
        "username": this.username,
        "email": this.email,
        "password": this.password
      }
      formulaireService.inscription(submit);
    }
  }
}