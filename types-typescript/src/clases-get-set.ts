export{};
enum PhotoOrientation { Landscape, Portrait, Square, Panorama};


// ...................................... get y set 


class Picture {
    // propiedades de la entidad
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor (id:number, title: string, orientation: PhotoOrientation) {
        this._id =id;
        this._title= title;
        this._orientation = orientation;
    }

    get id() {
        return this._id;
    }

    set id(id:number){
        this._id= id;
    }

    get title () {
        return this._title;
    }

    set title(title: string){
        this._title= title;
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

class Album {
    private _id: number;
    private _title: string;
    private _pictures: Picture [];

    public constructor (id: number, title: string) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get title(){
        return this._title;
    }

    set title(title:string){
        this._title=title;
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
picture.id = 100; // private, pero es posible porque se usa el método set id(100)
picture.title = "Another title";  // acceso publico
album.title = "Personal activities"; 
console.log("Album => " , album);

