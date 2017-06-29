'use strict';

export default function ($http, $q) {
  'ngInject';

  const USERS_URL = '/api/users/';
  const PHP_USERS_URL = 'http://192.168.1.12/wcs/hackathon/putyourzick/web/inscription'

  this.create = (user) => {
    return $q((resolve, reject) => {
      $http.post(USERS_URL, user).then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }

  this.update = (user) => {
    return $q((resolve, reject) => {
      $http.put(USERS_URL + user._id, user).then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

}