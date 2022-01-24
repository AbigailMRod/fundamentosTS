// <> angle bracket syntax
export{};

let userName: any;
userName= "Abifq";
userName= "Abi";

// tenemos una cadema, TS confía en mi 
// gracias al oprador de aserción <> es posible acceder a la propiedad de la cadena y de esta forma
// a la propiedad .length 
let message: string = (<string>userName).length >= 5 ? 
                        `Welcome ${userName}`: 
                        "User name is too short";
console.log("message", message);


let userNameWithId : any= "Abifq 1";
// como obtener el user name?
userName = (<string>userNameWithId).substring(0,5);
console.log("User name only", userName);


// sintaxis "as"
message= (userName as string).length >= 5 ? 
         `Welcome ${userName}`: 
         "User name is too short";


let helloUser : any ;
helloUser = "Hello Abifq";
userName= (helloUser as string).substring(6);
console.log("User name: ", userName);
