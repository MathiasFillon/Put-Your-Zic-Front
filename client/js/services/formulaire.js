'use strict';

export default function ($http, $q) {
    'ngInject'

    const FORM_URL = 'http://192.168.1.12/wcs/hackathon/putyourzick/web/inscription';

    this.inscription = (inscription) => {
        return $q((resolve, reject) => {
            $http.post(FORM_URL, inscription)
                .then((response) => {
                    resolve(response)
                    console.log('ça marche');
                }).catch((err) => {
                    reject(err);
                });
        })
    }
};