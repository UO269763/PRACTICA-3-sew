"use strict";
class Geolocalizacion {
    constructor() {
        this.map = new Map();
        this.inicializar();
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.obtenerDatos.bind(this), this.errores.bind(this));
        } else {
            alert('No soportada la geolocalización por ordenador');
        }
    }

    obtenerDatos(pos) {
        geolocalizacion.map.set('accuracy', pos.coords.accuracy);
        geolocalizacion.map.set('altitude', pos.coords.altitude);
        geolocalizacion.map.set('altitudeAccuracy', pos.coords.altitudeAccuracy);
        geolocalizacion.map.set('heading', pos.coords.heading);
        geolocalizacion.map.set('latitude', pos.coords.latitude);
        geolocalizacion.map.set('longitude', pos.coords.longitude);
        geolocalizacion.map.set('speed', pos.coords.speed);
        geolocalizacion.mostrar();
    }

    errores(err) {
        alert('Error: ' + err.code + ' ' + err.message);
    }

    mostrar() {
        const localizacion = {
            lat: this.map.get("latitude"),
            lng: this.map.get("longitude")
        };

        const map = new google.maps.Map($('main')[0], {
            zoom: 14,
            center: localizacion
        });
        const marker = new google.maps.Marker({
            position: localizacion,
            map: map
        });
    }

}

const geolocalizacion = new Geolocalizacion();