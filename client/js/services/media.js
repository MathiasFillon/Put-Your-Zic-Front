'use strict';

export default function ($http, $q) {
  'ngInject';

  const PHP_MEDIA_URL = 'http://192.168.1.12/wcs/hackathon/putyourzick/web/user/addmedia'
  // const PHP_MEDIA_URL = 'http://192.168.1.36/www/PutYourZick/web/user/addmedia'

  this.createVideo = (video) => {
    return $q((resolve, reject) => {
      $http.post(PHP_MEDIA_URL, video).then((response) => {
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