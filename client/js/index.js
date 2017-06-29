'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import messages from 'angular-messages';
import material from 'angular-material';
import css from 'angular-css';
import 'youtube-iframe';
import youtube from 'angular-youtube-embed';
import ngParallax from 'ng-parallax';


import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'angular-material/angular-material.css';
import 'mdi/css/materialdesignicons.css';
import '../css/index.scss';
;

import components from './components';
import services from './services';
import config from './config';

let app = angular.module('meanApp', [
  uiRouter,
  material,
  messages,
  css,
  components,
  services,
  youtube,
  ngParallax
]);

app.constant('CONSTANTS', config.constants);
app.config(config.routes);
app.run(config.run);

app.config(['$sceDelegateProvider', function ($sceDelegateProvider) {

  //Allow to request YouTube videos
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain. **.
    'https://www.youtube.com/**'
  ]);
}]);

export default app;