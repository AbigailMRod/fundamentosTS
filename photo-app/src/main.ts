import { User } from "./user";
import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";


const user= new User (1, "abifq", "Abi", true);
const album = new Album (10, "Platzi-pictures");
const picture = new Picture (1, "Code in my desk", "2022-01-25", PhotoOrientation.Landscape);

// creamos relaciones entre los objetos

user.addAlbum(album);
album.addPicture(picture);
console.log("User: ", user);


// Estamos borrando el album
user.removeAlbum(album);
console.log("USER: " , user);
