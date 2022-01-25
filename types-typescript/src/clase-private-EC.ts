export{};
enum PhotoOrientation { Landscape, Portrait, Square, Panorama};

class Picture {
    // propiedades de la entidad
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor (id:number, title: string, orientation: PhotoOrientation) {
        this.#id =id;
        this.#title= title;
        this.#orientation = orientation;
    }

    // comportamiento de la clase
    public toString () {
        return `[id: ${this.#id}, title: ${this.#title}, orientation: ${this.#orientation}]`;
    }
};

class Album {
    #id: number;
    #title: string;
    #pictures: Picture [];

    public constructor (id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture (picture: Picture) {
        this.#pictures.push(picture)
    }
};

const album: Album = new Album (1, "Personal pictures");
const picture: Picture = new Picture (1, "Platzi session", PhotoOrientation.Square);
album.addPicture(picture);

console.log("Album: " , album);


/* este tipo de sintaxis es una mejor encapsulacion, porque no permmite conocer 
ningun valor inerno que esté almacenado dentro de las clases */

