'use strict';

export default function ($http, $q) {
  'ngInject';

  const PHP_MEDIA_URL = 'http://192.168.1.36/PutYourZick/web/app_dev.php/'
  // const PHP_MEDIA_URL = 'http://192.168.1.36/www/PutYourZick/web/user/addmedia'

  this.createVideo = (video) => {
    return $q((resolve, reject) => {
      video.user = 1;
      video.playlist = 3;
      console.log(video)
      $http.post(PHP_MEDIA_URL + 'user/addmedia', video).then((response) => {
        console.log(response)
        console.log(response.data)
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }


  this.get = () => {
    return $q((resolve, reject) => {
      $http.get(PHP_MEDIA_URL + 'getmedia').then((response) => {
        console.log(response)
        console.log(response.data)
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