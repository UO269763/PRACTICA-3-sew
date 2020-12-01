"use strict";
class MapaGeo {
    constructor() {}

    procesarGeo(files) {
        var archivo = files[0];
        var mapa = new google.maps.Map(document.getElementById("map"));
        mapa.setCenter({ lat: 40.4167, lng: -3.70325 });
        mapa.setZoom(4);
        mapa.setMapTypeId(google.maps.MapTypeId.HYBRID);

        if (archivo.name.endsWith(".geojson")) {
            var lector = new FileReader();
            lector.readAsText(archivo);
            lector.onload = function(evento) {
                var geojson = JSON.parse(lector.result);
                mapa.data.addGeoJson(geojson);
            }
        }
    }
}

var mapa = new MapaGeo();