'use strict';

export default function ($http, $q) {
  'ngInject';

  const PLAYLIST_URL = '/api/playlist/';

  this.postPlaylist = (playlist) => {
    return $q((resolve, reject) => {
      $http.post(PLAYLIST_URL, playlist).then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
 
}