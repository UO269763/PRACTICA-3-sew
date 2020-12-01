"use strict";
class MapaKML{
    constructor(){}

    procesar(files){
        var file = files[0];
        var map = new google.maps.Map(document.getElementById("map"));
        map.setCenter({ lat: 40.4167, lng: -3.70325 });
        map.setZoom(4);
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
        var geo = new geoXML3.parser({map:map});
        if (file.name.endsWith(".kml")){
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event){
                geo.parseKmlString(reader.result);
            }
        }
    }
}
var mapa = new MapaKML();