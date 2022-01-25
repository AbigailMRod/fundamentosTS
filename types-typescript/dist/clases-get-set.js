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
// ...................................... get y set 
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    // comportamiento de la clase
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
;
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
;
const album = new Album(1, "Personal pictures");
const picture = new Picture(1, "Platzi session", PhotoOrientation.Square);
album.addPicture(picture);
console.log("Album: ", album);
/* cada vez que querenos leer el estado de un miembro, usamos el método get  */
// es un método de lectura, no se está modificando el estado 
console.log("Picture.id", picture.id); // get id 
picture.id = 100; // private, pero es posible porque se usa el método set id(100)
picture.title = "Another title"; // acceso publico
album.title = "Personal activities";
console.log("Album => ", album);
