export{};
enum PhotoOrientation { Landscape, Portrait, Square, Panorama};

class Picture {
    // propiedades de la entidad
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    public constructor (id:number, title: string, orientation: PhotoOrientation) {
        this.id =id;
        this.title= title;
        this.orientation = orientation;
    }

    // comportamiento de la clase
    public toString () {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
};

class Album {
    private id: number;
    private title: string;
    private pictures: Picture [];

    public constructor (id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture (picture: Picture) {
        this.pictures.push(picture)
    }
};

const album: Album = new Album (1, "Personal pictures");
const picture: Picture = new Picture (1, "Platzi session", PhotoOrientation.Square);
album.addPicture(picture);

console.log("Album: " , album);


// Accediendo a los miembros públicos de las clases 
//al ser ahora métodos privados, no se puede acceder a ellos desde fuera de la clase, por lo que 
// se producirá un error si queremnos modificarlos
/* picture.id = 100; // accesod publico 
picture.title = "Another title";  // acceso publico
album.title = "Personal activities"; 
console.log("Album => " , album); */

