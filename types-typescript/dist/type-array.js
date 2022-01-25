"use strict";
// ......................corchetes []
// tipo explicito
let users;
users = ["abiFQ", "tachi", "tini"];
//tipo inferido
let otherUsers = ["abiFQ", "tachi", "tini"];
//......................array <tipo>
let pictureTitle;
pictureTitle = ["Favorite sunset", "Vacation time", "Relax", "Landscape"];
// accediendo a los valores en un array
console.log("first user", users[0]);
console.log("fisrt title", pictureTitle[2]);
//propiedades en array
console.log(users.length);
//uso de funciones en arreglos
users.push("ramabi");
users.sort();
console.log("users", users);
