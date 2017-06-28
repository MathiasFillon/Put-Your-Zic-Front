'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import messages from 'angular-messages';
import material from 'angular-material';
import css from 'angular-css';
import youtube from 'angular-youtube-embed';



import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'angular-material/angular-material.css';
import 'mdi/css/materialdesignicons.css';
import '../css/index.scss';

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
  youtube
]);

app.constant('CONSTANTS', config.constants);
app.config(config.routes);
app.run(config.run);

export default app;