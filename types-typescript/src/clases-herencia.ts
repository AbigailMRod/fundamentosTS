export{};
enum PhotoOrientation { Landscape, Portrait, Square, Panorama};


// super clase para la herencia 
// un miembro con modificador protected puede ser accedido desde la clase y las subclases 
//con abstratc estamos indicando que no se puede generar un nuevo objeto a partir del mismo Item
// con readonly no se permiten asignaciones sobre el miembro que tenga esa propiedad 
abstract class Item {
    protected readonly _id: number;
    protected  _title: string;

    constructor(id:number, title:string){
        this._id= id;
        this._title= title;
    }

    get id() {
        return this._id;
    }

    /* set id(id:number){
        this._id= id;
    } */

    get title () {
        return this._title;
    }

    set title(title: string){
        this._title= title;
    }
};


// ...................................... get y set 


class Picture extends Item{
    public static photoOrientation= PhotoOrientation;
    // propiedades de la entidad
    private _orientation: PhotoOrientation;

    public constructor (id:number, title: string, orientation: PhotoOrientation) {
        super(id, title);
        this._orientation = orientation;
    }

    get orientation (){
        return this._orientation;
    }

    set orientation (orientation: PhotoOrientation){
        this._orientation = orientation;
    }


    // comportamiento de la clase
    public toString () {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
};



class Album extends Item{
    private _pictures: Picture [];

    public constructor (id: number, title: string) {
        super(id, title); // constructor de super clase
        this._pictures = [];
    }

    public addPicture (picture: Picture) {
        this._pictures.push(picture)
    }
};

const album: Album = new Album (1, "Personal pictures");
const picture: Picture = new Picture (1, "Platzi session", PhotoOrientation.Square);
album.addPicture(picture);

console.log("Album: " , album);


/* cada vez que querenos leer el estado de un miembro, usamos el método get  */
// es un método de lectura, no se está modificando el estado 
console.log("Picture.id", picture.id); // get id 
//picture.id = 100; // private, pero es posible porque se usa el método set id(100)
picture.title = "Another title";  
album.title = "Personal activities"; 
console.log("Album => " , album);


/*  no se pude generar un nuevo objeto a partir de una clase abstracta 
const item=new Item(1, "test title");
console.log("item", item); */

//probando el miembro estático de la clase Picture, estamos accediendo a partir de la clase directamente  
console.log("Photo orientation " , Picture.photoOrientation.Landscape);