'use strict';

export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      publicRoute: true,
      component: 'home'
    })
    .state({
      name: 'profile',
      url: '/profile',
      publicRoute: false,
      component: 'profile'
    })
    .state({
      name: 'playlist',
      url: '/playlist/:id',
      params: {
        id: null,
        theme: null,
        titre: null
      },
      publicRoute: false,
      component: 'playlist',
      resolve: {
        playlistId: function ($stateParams) {
          return $stateParams.id;
        },
        playlist: function ($stateParams) {
          return {
            theme: $stateParams.theme,
            titre: $stateParams.titre
          };
        }
      }
    })
    .state({
      name: 'player',
      url: '/player',
      publicRoute: false,
      component: 'player'
    })
    .state({
      name: 'users',
      url: '/users',
      component: 'users'
    })
    .state({
      name: 'createPlaylist',
      url: '/createPlaylist',
      publicRoute: true,
      component: 'createPlaylist'
    })
    .state('login', {
      url: '',
      abstract: true,
      component: 'login'
    })
    .state('login.signup', {
      url: '/signup',
      publicRoute: true,
      component: 'signup'
    })
    .state('formulaire', {
      url: '/formulaire',
      publicRoute: true,
      component: 'formulaire'
    })
    .state('login.signin', {
      url: '/signin',
      publicRoute: true,
      component: 'signin'
    })
    .state('callback', {
      url: '/auth/callback/:token',
      publicRoute: true,
      params: {
        code: null,
        status: null,
        message: null
      },
      controller: function (AuthService, $stateParams, $state) {
        'ngInject';

        if ($stateParams.token) {
          AuthService.setToken($stateParams.token).then((user) => {
              $state.go('home');
            })
            .catch((err) => {
              $state.go('home');
            });
        } else {
          $state.go('home');
        }
      }
    });

  $urlRouterProvider.otherwise('/home');
}