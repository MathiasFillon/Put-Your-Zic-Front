'use strict';

import angular from 'angular';
import cookies from 'angular-cookies';

import usersService from './users';
import authService from './auth';
import formulaireService from './formulaire';

export default angular.module('appServices', ['ngCookies'])

  .service('UsersService', usersService)
  .service('AuthService', authService)
  .service('formulaireService', formulaireService)
  .name;