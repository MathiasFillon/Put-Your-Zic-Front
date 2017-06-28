'use strict';

import angular from 'angular';

import mainComponent from './main/main';
import homeComponent from './home/home';
import usersComponent from './users/users';
import loginComponent from './login/login';
import signinComponent from './login/signin';
import signupComponent from './login/signup';
import acceuilComponent from './acceuil/acceuil';
import createPlaylistComponent from './playlist/createPlaylist'

export default angular.module('appComponents', [])

  .component('main', mainComponent)
  .component('home', homeComponent)
  .component('users', usersComponent)
  .component('login', loginComponent)
  .component('signin', signinComponent)
  .component('signup', signupComponent)
  .component('acceuil', acceuilComponent)
  .component('createPlaylistComponent', createPlaylistComponent)
  .name;