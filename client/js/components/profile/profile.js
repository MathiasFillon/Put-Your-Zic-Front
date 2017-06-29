"use strict";

import template from "./profile.html";
import styles from "./profile.scss";

export default {

    template: template,
    css: styles,
    bindings: {

    },
    controller: function (MediaService, ngToast) {
        'ngInject';

        this.$onInit = () => {
            console.log(this.currentUser);
            console.log(this.profileUser);
            this.getPlaylist();

        };
        this.addPhotoUrl = () => {
            this.fileform.preview = this.fileform.url;
            this.content = this.fileform.preview;
            //TO DO : regex sur l'url d'entrée 
            //to do optional : verify if this url exist
        }

        this.getPlaylist = () => {
            MediaService.getPlaylist().then((res) => {
                ngToast.create("Media getted");
                this.playlist = res;
                console.log(this.playlist)
            }).catch((err) => {
                console.log(err)
                let message = err.data ? err.data.errmsg || err.data : err;
                let toastContent = `Error: ${message} !`;
                ngToast.create(toastContent);
            });
        }
        this.savePlaylist = () => {
            this.media = {
                titre: this.fileform.title,
                theme: this.fileform.theme,
                url: this.content,
            }
            MediaService.createPlaylist(this.media).then((res) => {
                    ngToast.create("Media saved");
                    this.file = "";
                    this.fileform.title = "";
                    this.fileform.legend = "";
                    this.fileform.url = "";
                    this.fileform.preview = "";
                    this.fileUpload = false;
                    this.media.rank = this.mediaList.length;
                    this.mediaList.push(this.media);
            }).catch((err) => {
                let message = err.data ? err.data.errmsg || err.data : err;
                let toastContent = `Error: ${message} !`;
                ngToast.create(toastContent);
            });
        }
    }
};