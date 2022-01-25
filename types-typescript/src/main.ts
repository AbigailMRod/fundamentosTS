console.log("Hola mundo!!")

/*.................................number ......................... */  
// explicito
let phone : number;
phone = 1;
phone= 5478987642;
// phone = "hola"; // es un error



// inferido
let phoneNumber= 5679875278;
//phoneNumber= true; //error por tipo de dato 

let hex: number= 0xf00d;
let binary: number = 0b1010;
let octal : number = 0o744;

/*........................... boolean */
// tipado explicito
let isPro: boolean;
isPro= true;

//inferido
let isUserPro= false;
isUserPro= true;


/* ......................String */
let userName: string = "abigail";
userName= "Abi";


//Template Stringcon uso de back-tick
let userInfo:string;
userInfo=`
    User info: 
    username: ${userName}
    fisrtName: ${userName + "  Muñoz "} 
    phone: ${phone}
    isPro: ${isPro}
    `;
console.log("userInfo", userInfo);

