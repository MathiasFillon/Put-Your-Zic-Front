'use strict';

import angular from 'angular';

import mainComponent from './main/main';
import homeComponent from './home/home';
import usersComponent from './users/users';
import loginComponent from './login/login';
import signinComponent from './login/signin';
import signupComponent from './login/signup';
import formulaireComponent from './formulaire/formulaire';
import accueilComponent from './accueil/accueil';



export default angular.module('appComponents', [])

  .component('main', mainComponent)
  .component('home', homeComponent)
  .component('users', usersComponent)
  .component('login', loginComponent)
  .component('signin', signinComponent)
  .component('signup', signupComponent)
  .component('formulaire', formulaireComponent)
  .component('accueil', accueilComponent)
  .name;