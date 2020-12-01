/* Ejercicio11.js */
"use strict";
class Mapa {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }

    getPosicion(position) {
        this.longitud = position.coords.longitude;
        this.latitud = position.coords.latitude;
        this.precision = position.coords.accuracy;
        this.altitud = position.coords.altitude;
        this.precisionAltitud = position.coords.altitudeAccuracy;
    }

    verErrores(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la petición de geolocalización"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Información de geolocalización no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición de geolocalización ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido"
                break;
        }
    }

    getLongitud() {
        return this.longitud;
    }

    getLatitud() {
        return this.latitud;
    }

    getAltitud() {
        return this.altitud;
    }

    verTodo(dondeVerlo) {
        var ubicacion = document.getElementById(dondeVerlo);
        var datos = '';
        datos += '<p>Longitud: ' + this.getLongitud() + ' grados</p>';
        datos += '<p>Latitud: ' + this.getLatitud() + ' grados</p>';
        ubicacion.innerHTML = datos;
    }


    getMapaEstaticoGoogle(dondeVerlo) {
        var ubicacion = document.getElementById(dondeVerlo);
        var apiKey = "&key=AIzaSyAtF0HSYfDaXjyc_GcuBioFAfXEa3Gpaj4";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + this.latitud + "," + this.longitud;
        var zoom = "&zoom=15";
        var tamaño = "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false";
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        mapa.innerHTML = "<img src='" + this.imagenMapa + "'/>";
    }
}

var miMapa = new Mapa();