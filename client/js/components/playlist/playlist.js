"use strict";

import template from "./playlist.html";
import styles from "./playlist.scss";

export default {

    template: template,
    css: styles,
    bindings: {
        playlistId: '<',
        playlist: '<'
    },
    controller: function (MediaService, ngToast, $state) {
        'ngInject';

        this.$onInit = () => {
            console.log(this.playlist);
            console.log(this.playlistdId);
            this.getVideos();
            if (this.playlistId == 1) {
                this.medias = [{
                    date: "2017-06-29 19:34:14",
                    id: "1",
                    playlist_id: "1",
                    titre: "Flo the kid - I see you smiling",
                    url: "mVofbmjXNjs",
                    user_id: "1"
                }, {
                    date: "2017-06-29 19:34:14",
                    id: "2",
                    playlist_id: "1",
                    titre: "Michael Christmas - Y all Trippin",
                    url: "ElHLgaXIZgg",
                    user_id: "1"
                }, {
                    date: "2017-06-29 19:34:14",
                    id: "3",
                    playlist_id: "1",
                    titre: "coin-coin R Wan",
                    url: "VbobOmQOyBI",
                    user_id: "1"
                }]
            } else if (this.playlistId == 2) {
                this.medias = [{
                        date: "2017-06-29 19:34:14",
                        id: "4",
                        playlist_id: "2",
                        titre: "54-46 Was My Number - Toots and The Maytals",
                        url: "UhH1Lxv-8sA",
                        user_id: "2"
                    },
                    {
                        date: "2017-06-29 19:34:14",
                        id: "5",
                        playlist_id: "2",
                        titre: "Easy Star All-Stars - Time",
                        url: "Z6mzAGRY7uo",
                        user_id: "2"
                    },
                    {
                        date: "2017-06-29 19:34:14",
                        id: "6",
                        playlist_id: "2",
                        titre: "99 Posse feat. Mama Marjas - Combat Reggae",
                        url: "N_mwZugEs28",
                        user_id: "2"
                    }
                ]
            } else if (this.playlistId == 3) {
                this.medias = [{
                        date: "2017-06-29 19:34:14",
                        id: "7",
                        playlist_id: "3",
                        titre: "Rodrigo Amarante - Tuyo",
                        url: "Y2E8mM3o6iA",
                        user_id: "3"
                    }, {
                        date: "2017-06-29 19:34:14",
                        id: "8",
                        playlist_id: "3",
                        titre: "Datarock - Fa Fa Fa",
                        url: "N6xoFhkthls",
                        user_id: "3"
                    },
                    {
                        date: "2017-06-29 19:34:14",
                        id: "9",
                        playlist_id: "3",
                        titre: "Robert Miles - Children",
                        url: "CC5ca6Hsb2Q",
                        user_id: "3"
                    }
                ]
            } else if (this.playlistId == 4) {
                this.medias = [{
                        date: "2017-06-29 19:34:14",
                        id: "10",
                        playlist_id: "4",
                        titre: "New Fang",
                        url: "S7_vH3H8LPI",
                        user_id: "4"
                    },
                    {
                        date: "2017-06-29 19:34:14",
                        id: "11",
                        playlist_id: "4",
                        titre: "Animals As Leaders - CAFO",
                        url: "NmfzWpp0hMc",
                        user_id: "4"
                    },
                    {
                        date: "2017-06-29 19:34:14",
                        id: "12",
                        playlist_id: "4",
                        titre: "Megadeth - Trust",
                        url: "3Ja3CQNyhhw",
                        user_id: "4"
                    }
                ];
            } else {
                this.medias = [{
                    date: "2017-06-29 19:34:14",
                    id: "13",
                    playlist_id: "5",
                    titre: "Ra Ra Riot - Boy",
                    url: "NKGfQCOyCCA",
                    user_id: "5"
                }, {
                    date: "2017-06-29 19:34:14",
                    id: "13",
                    playlist_id: "5",
                    titre: "Ra Ra Riot - Boy",
                    url: "NKGfQCOyCCA",
                    user_id: "5"
                }, {
                    date: "2017-06-29 19:34:14",
                    id: "15",
                    playlist_id: "5",
                    titre: "Portugal. The Man - Feel It Still",
                    url: "pBkHHoOIIn8",
                    user_id: "5"
                }];
            }

        };

        this.getIframeSrc = (src) => {
            return 'https://www.youtube.com/embed/' + src;
        };

        this.getVideos = () => {
            MediaService.get().then((res) => {
                ngToast.create("Media getted");
                for (let vid of res) {
                    console.log(vid)
                    if (vid.playlist_id == this.playlistId) {
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