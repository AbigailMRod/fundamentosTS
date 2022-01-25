"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // comportamiento de la clase
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
;
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
;
const album = new Album(1, "Personal pictures");
const picture = new Picture(1, "Platzi session", PhotoOrientation.Square);
album.addPicture(picture);
console.log("Album: ", album);
// Accediendo a los miembros públicos de las clases 
//al ser ahora métodos privados, no se puede acceder a ellos desde fuera de la clase, por lo que 
// se producirá un error si queremnos modificarlos
/* picture.id = 100; // accesod publico
picture.title = "Another title";  // acceso publico
album.title = "Personal activities";
console.log("Album => " , album); */
