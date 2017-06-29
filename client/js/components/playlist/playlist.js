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
        };

        this.getIframeSrc = (src) => {
            return 'https://www.youtube.com/embed/' + src;
        };

        
        this.createVideo = () => {
            MediaService.createVideo({title:'title test', url:'url video'}).then((res) => {
                ngToast.create("Media updated");
                this.edition = false;
            }).catch((err) => {
                let message = err.data ? err.data.errmsg || err.data : err;
                let toastContent = `Error: ${message} !`;
                ngToast.create(toastContent);
            });
        }


    }
};