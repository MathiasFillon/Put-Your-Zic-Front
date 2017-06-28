npm  'use strict';

import template from './createPlaylist.html';

export default {

    template: template,

    controller: function (createPlaylistService) {
        'ngInject';

      this.submit = () => {
        var reponse = {
          title: this.title,
          theme: this.theme,
          
        }

       createPlaylistService.postPlaylist(reponse).then(() => {
            $state.go('playlist');
          })
          .catch((err) => {
            this.errorMessage = err.message;
          });
      };
      
    }
    
  };

