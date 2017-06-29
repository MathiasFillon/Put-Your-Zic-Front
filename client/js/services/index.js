'use strict';

import angular from 'angular';
import cookies from 'angular-cookies';

import usersService from './users';
import authService from './auth';
<<<<<<< HEAD
import formulaireService from './formulaire';
=======
import createPlaylistService from './playlistService'
>>>>>>> 941cd73ef1bf91c8080b8e1201196c460f92bcc5

export default angular.module('appServices', ['ngCookies'])

  .service('UsersService', usersService)
  .service('AuthService', authService)
<<<<<<< HEAD
  .service('formulaireService', formulaireService)
=======
  .service('createPlaylistService', createPlaylistService)
>>>>>>> 941cd73ef1bf91c8080b8e1201196c460f92bcc5
  .name;