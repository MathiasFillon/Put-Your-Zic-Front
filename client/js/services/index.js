'use strict';

import angular from 'angular';
import cookies from 'angular-cookies';

import usersService from './users';
import authService from './auth';
import createPlaylistService from './playlistService'
import mediaService from './media';

export default angular.module('appServices', ['ngCookies'])

  .service('UsersService', usersService)
  .service('AuthService', authService)
  .service('createPlaylistService', createPlaylistService)
  .service('MediaService', mediaService)
  .name;