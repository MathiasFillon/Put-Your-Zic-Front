'use strict';

export default function ($http, $q) {
  'ngInject';

  const PHP_MEDIA_URL = 'http://192.168.1.36/PutYourZick/web/app_dev.php/'
  // const PHP_MEDIA_URL = 'http://192.168.1.12/wcs/hackathon/putyourzick/web/user/addmedia'
  // const PHP_MEDIA_URL = 'http://192.168.1.36/www/PutYourZick/web/user/addmedia'

  this.createVideo = (video) => {
    return $q((resolve, reject) => {
      console.log(video)
      $http.get(`http://192.168.1.36/PutYourZick/postmedia.php?titre=${video.titre}&url=${video.url}&playlist=${video.playlist}&user=1`, video).then((response) => {
        console.log(response)
        console.log(response.data)
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }

  this.createPlaylist = (playlist) => {
    return $q((resolve, reject) => {
      console.log(playlist)
      $http.get(`http://192.168.1.36/PutYourZick/postplaylist.php?titre=${playlist.titre}&url=${playlist.url}&theme=${playlist.theme}&user=1`).then((response) => {
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
      $http.get('http://192.168.1.36/PutYourZick/getmedia.php').then((response) => {
        console.log(response)
        console.log(response.data)
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }

  this.getPlaylist = () => {
    return $q((resolve, reject) => {
      $http.get('http://192.168.1.36/PutYourZick/getplaylist.php').then((response) => {
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