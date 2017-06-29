"use strict";

import template from "./playlist.html";
import styles from "./playlist.scss";

export default {

    template: template,
    css: styles,
    bindings: {

    },
    controller: function (MediaService) {
        'ngInject';

        this.$onInit = () => {
            console.log(this.currentUser);
            console.log(this.profileUser);
            // var url = "http://youtube.com/get_video_info?video_id=KHOck2GYKjU?v=2&amp;alt=json-in-script&amp;callback=";
            // var title;
            // var description;
            // var viewcount;
            // var views;
            // var author;
            // $.getJSON(url,
            //     function (data) {
            //         title = data.entry.title.$t;
            //         description = data.entry.media$group.media$description.$t;
            //         viewcount = data.entry.yt$statistics.viewCount;
            //         views = numberFormat(viewcount);
            //         author = data.entry.author[0].name.$t;
            //         listInfo(title, description, author, views);
            //     });





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
                this.medias = res;
            }).catch((err) => {
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
            $.getJSON('https://www.googleapis.com/youtube/v3/videos?id='+this.content+'&key=AIzaSyCimJ96y7KN6ADZ0VBpjCCvJUunb2PUpnA&part=snippet&callback=?', function (data) {
                this.title = data.items[0].snippet.title;
            });

            this.media = {
                title: this.title,
                url: this.content,
                userId: this.currentUser._id
            }
            MediaService.createVideo(this.currentUser._id, this.media).then((res) => {

                UsersService.updateMedia(this.currentUser, res._id).then((good) => {
                    ngToast.create("Media saved");
                    this.file = "";
                    this.fileform.title = "";
                    this.fileform.legend = "";
                    this.fileform.url = "";
                    this.fileform.preview = "";
                    this.fileUpload = false;
                    this.media.rank = this.mediaList.length;
                    this.mediaList.push(this.media);
                }).catch();
            }).catch((err) => {
                let message = err.data ? err.data.errmsg || err.data : err;
                let toastContent = `Error: ${message} !`;
                ngToast.create(toastContent);
            });
        }

    }
};