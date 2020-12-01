"use strict";
class ProcesarFichero{
    constructor(){}

    procesar(ficheros){
        this.soporte();
        var tamañoTotal=0;
        for (var i=0;i<ficheros.length;i++){
            var fichero = ficheros[i];
            this.crear("Archivo número "+i);
            this.crear("Nombre " + fichero.name);
            this.crear("Tamaño " + fichero.size + " bytes");
            this.crear("Tipo " + fichero.type);
            this.crear("Fecha modificación " + fichero.lastModifiedDate);
            tamañoTotal += fichero.size;
            var tipoTxt = /text.*/;
            var tipoJson = /application.json/;
            if (fichero.type.match(tipoTxt) || fichero.type.match(tipoJson))
                this.procesarContenidoFichero(fichero);
        }
        document.getElementById("numero").innerHTML = ficheros.length;
        document.getElementById("tamaño").innerHTML = tamañoTotal + " bytes";
    }
    soporte(){
        if (window.File && window.FileReader && window.FileList && window.Blob)
            document.getElementById("sp").innerHTML = "<p>Este navegador soporta el API File </p>";
        else document.getElementById("sp").innerHTML = "<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>";
    }
    crear(info){
        var elemento = document.createElement("p");
        elemento.innerHTML = info;
        $("footer").before(elemento);
    }
    procesarContenidoFichero(fichero){
        this.crear("Contenidos del archivo:");
        var reader = new FileReader();
        reader.onload = function(evento){
            var elemento = document.createElement("pre");
            elemento.innerHTML = reader.result;
            $("footer").before(elemento);
        }
        reader.readAsText(fichero);
    }
}

var p = new ProcesarFichero();