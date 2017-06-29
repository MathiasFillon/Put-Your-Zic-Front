"use strict";

import template from "./playlist.html";
import styles from "./playlist.scss";

export default {

    template: template,
    css: styles,
    bindings: {
        playlistId: '<'
    },
    controller: function (MediaService, ngToast, $state) {
        'ngInject';

        this.$onInit = () => {
            console.log(this.currentUser);
            console.log(this.profileUser);
            this.createVideo()
            this.getVideos()

        };

        this.getIframeSrc = (src) => {
            return 'https://www.youtube.com/embed/' + src;
        };


        this.createVideo = () => {
            MediaService.createVideo({
                titre: 'title test',
                url: 'url video'
            }).then((res) => {
                ngToast.create("Media updated");
                this.edition = false;
            }).catch((err) => {
                let message = err.data ? err.data.errmsg || err.data : err;
                let toastContent = `Error: ${message} !`;
                ngToast.create(toastContent);
            });
        }

        this.getVideos = () => {
            MediaService.get().then((res) => {
                ngToast.create("Media getted");
                this.medias = [];
                for(let vid of res){
                    console.log(vid)
                    if(vid.playlist_id == this.playlistId){
                        this.medias.push(vid);
                    }
                }
                console.log(this.medias)
            }).catch((err) => {
                console.log(err)
                let message = err.data ? err.data.errmsg || err.data : err;
                let toastContent = `Error: ${message} !`;
                ngToast.create(toastContent);
            });
        }

        // Extract videoYT id from url
        this.addYTUrl = () => {
            this.fileform.preview = this.fileform.url.replace(/https:\/\/(www\.)?youtu(\.)?be(\.com)?\/(watch\?v=)?/, '');
            this.content = this.fileform.preview;
            this.fileUpload = true;

            //TO DO : regex sur l'url d'entrée 
            //to do optional : verify if this url YT exist
        }

        this.saveMedia = () => {

            // get title video from youtube api
            $.getJSON('https://www.googleapis.com/youtube/v3/videos?id=' + this.content + '&key=AIzaSyCimJ96y7KN6ADZ0VBpjCCvJUunb2PUpnA&part=snippet&callback=?', function (data) {
                this.title = data.items[0].snippet.title;
            });
            console.log(this.title)
            this.media = {
                title: this.title,
                url: this.content,
                playlist: this.playlistId
            }
            MediaService.createVideo(this.media).then((res) => {

                ngToast.create("Media saved");
                this.file = "";
                this.fileform.title = "";
                this.fileform.legend = "";
                this.fileform.url = "";
                this.fileform.preview = "";
                this.fileUpload = false;
                $state.go('playlist');
            }).catch((err) => {
                let message = err.data ? err.data.errmsg || err.data : err;
                let toastContent = `Error: ${message} !`;
                ngToast.create(toastContent);
            });
        }

    }
};