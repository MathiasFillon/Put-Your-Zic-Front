"use strict";

import template from "./profile.html";
import styles from "./profile.scss";

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
