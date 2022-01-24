"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName;
userName = "Abifq";
userName = "Abi";
// tenemos una cadema, TS confía en mi 
// gracias al oprador de aserción <> es posible acceder a la propiedad de la cadena y de esta forma
// a la propiedad .length 
let message = userName.length >= 5 ?
    `Welcome ${userName}` :
    "User name is too short";
console.log("message", message);
let userNameWithId = "Abifq 1";
// como obtener el user name?
userName = userNameWithId.substring(0, 5);
console.log("User name only", userName);
// sintaxis "as"
message = userName.length >= 5 ?
    `Welcome ${userName}` :
    "User name is too short";
let helloUser;
helloUser = "Hello Abifq";
userName = helloUser.substring(6);
console.log("User name: ", userName);
