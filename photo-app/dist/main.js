"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user = new user_1.User(1, "abifq", "Abi", true);
const album = new album_1.Album(10, "Platzi-pictures");
const picture = new picture_1.Picture(1, "Code in my desk", "2022-01-25", photo_orientation_1.PhotoOrientation.Landscape);
// creamos relaciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log("User: ", user);
// Estamos borrando el album
user.removeAlbum(album);
console.log("USER: ", user);
