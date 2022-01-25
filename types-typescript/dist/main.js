"use strict";
console.log("Hola mundo!!");
/*.................................number ......................... */
// explicito
let phone;
phone = 1;
phone = 5478987642;
// phone = "hola"; // es un error
// inferido
let phoneNumber = 5679875278;
//phoneNumber= true; //error por tipo de dato 
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
/*........................... boolean */
// tipado explicito
let isPro;
isPro = true;
//inferido
let isUserPro = false;
isUserPro = true;
/* ......................String */
let userName = "abigail";
userName = "Abi";
//Template Stringcon uso de back-tick
let userInfo;
userInfo = `
    User info: 
    username: ${userName}
    fisrtName: ${userName + "  Muñoz "} 
    phone: ${phone}
    isPro: ${isPro}
    `;
console.log("userInfo", userInfo);
