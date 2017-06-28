"use strict";

import template from "./playlist.html";
import styles from "./playlist.scss";

export default {

    template: template,
    css: styles,
    bindings: {
        
    },
    controller: function () {
        'ngInject';

        this.$onInit = () => {
            console.log(this.currentUser);
            console.log(this.profileUser);

        };


    }
};
