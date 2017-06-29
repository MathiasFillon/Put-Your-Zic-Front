'use strict';

import template from './home.html';
import animatedConcert from './images/animatedConcert.gif';
import aa from './images/a.jpg'

export default {


  template: template,

  controller: function () {
    'ngInject';

    this.$onInit = () => {

    };
    this.myPattern = animatedConcert
    this.myPattern1 = aa
  }
}