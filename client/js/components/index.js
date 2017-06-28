'use strict';

import angular from 'angular';

import mainComponent from './main/main';
import homeComponent from './home/home';
import profileComponent from './profile/profile';
import playlistComponent from './playlist/playlist';
import usersComponent from './users/users';
import loginComponent from './login/login';
import signinComponent from './login/signin';
import signupComponent from './login/signup';
import acceuilComponent from './home/home';
import createPlaylistComponent from './playlist/createPlaylist'

export default angular.module('appComponents', [])

  .component('main', mainComponent)
  .component('home', homeComponent)
  .component('profile', profileComponent)
  .component('playlist', playlistComponent)
  .component('users', usersComponent)
  .component('login', loginComponent)
  .component('signin', signinComponent)
  .component('signup', signupComponent)
  .component('home', acceuilComponent)
  .component('createPlaylist', createPlaylistComponent)
  .name;