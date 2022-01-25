//type: object

let user:object;
user={}; //Object

user={
    id:1,
    userName: "Abi",
    firstName: "Abigail",
    isPro: true
};
console.log("user", user);
/* console.log("user name: ",user.userName) */ // en el tipo object no se puede acceder a las propiedades del objeto



// Object (clase de Js) vs object (tipo en TS)

const myObj ={
    id:1,
    userName: "Abi",
    firstName: "Abigail",
    isPro: true
}; //TS considera el tipo Object de JS en este punto 

const isInstance= myObj instanceof Object; // clase Object de JS
console.log("is instance", isInstance);
console.log("user name: ", myObj.userName);
