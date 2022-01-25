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
// super clase para la herencia 
// un miembro con modificador protected puede ser accedido desde la clase y las subclases 
//con abstratc estamos indicando que no se puede generar un nuevo objeto a partir del mismo Item
// con readonly no se permiten asignaciones sobre el miembro que tenga esa propiedad 
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    /* set id(id:number){
        this._id= id;
    } */
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
;
// ...................................... get y set 
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
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
Picture.photoOrientation = PhotoOrientation;
;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // constructor de super clase
        this._pictures = [];
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
//picture.id = 100; // private, pero es posible porque se usa el método set id(100)
picture.title = "Another title";
album.title = "Personal activities";
console.log("Album => ", album);
/*  no se pude generar un nuevo objeto a partir de una clase abstracta
const item=new Item(1, "test title");
console.log("item", item); */
//probando el miembro estático de la clase Picture, estamos accediendo a partir de la clase directamente  
console.log("Photo orientation ", Picture.photoOrientation.Landscape);
