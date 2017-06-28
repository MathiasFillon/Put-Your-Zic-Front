'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import messages from 'angular-messages';
import css from 'angular-css';
import ngToast from 'ng-toast';
import ngSanitize from 'angular-sanitize';
import animate from 'angular-animate';
import youtube from 'angular-youtube-embed';

import 'ng-toast/dist/ngToast.min.js';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/index.scss';

import components from './components';
import services from './services';
import config from './config';

let app = angular.module('meanApp', [
  uiRouter,
  messages,
  css,
  components,
  services,
  "ngToast",
  ngSanitize,
  animate
  youtube
]);

app.constant('CONSTANTS', config.constants);
app.config(config.routes);
app.run(config.run);

export default app;