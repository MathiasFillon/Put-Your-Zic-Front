"use strict";

import template from "./player.html";
import styles from "./player.scss";

export default {

    template: template,
    css: styles,
    bindings: {

    },
    controller: function ($http, $log, VideosService) {
        'ngInject';

        this.$onInit = () => {
            this.youtube = VideosService.getYoutube();
            this.results = VideosService.getResults();
            this.upcoming = VideosService.getUpcoming();
            this.history = VideosService.getHistory();
            this.playlist = true;
        };

        this.launch = function (id, title) {
            VideosService.launchPlayer(id, title);
            VideosService.archiveVideo(id, title);
            VideosService.deleteVideo(this.upcoming, id);
            $log.info('Launched id:' + id + ' and title:' + title);
        };

        this.queue = function (id, title) {
            VideosService.queueVideo(id, title);
            VideosService.deleteVideo(this.history, id);
            $log.info('Queued id:' + id + ' and title:' + title);
        };

        this.delete = function (list, id) {
            VideosService.deleteVideo(list, id);
        };

        this.search = function () {
            $http.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: 'AIzaSyCimJ96y7KN6ADZ0VBpjCCvJUunb2PUpnA',
                        type: 'video',
                        maxResults: '8',
                        part: 'id,snippet',
                        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                        q: this.query
                    }
                })
                .success(function (data) {
                    VideosService.listResults(data);
                    $log.info(data);
                })
                .error(function () {
                    $log.info('Search error');
                });
        }

        this.tabulate = function (state) {
            this.playlist = state;
        }


    }
};