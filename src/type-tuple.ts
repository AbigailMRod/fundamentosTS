export{};
// tuplas

let user: [number,string];
user=[1, "Abigail Muñoz "];
console.log("user", user);
console.log("user name ", user[1]);
console.log("username.length", user[1].length);
console.log("id", user[0]);


// tuplas con varios valores

let userInfo: [number, string, boolean];
userInfo= [1, "abifq", true];
console.log("user info", userInfo);

// arreglo de tuplas

let arrays: [number, string][];
arrays= [];
arrays.push([1, "abifq"]);
arrays.push([2, "tachi"]);
arrays.push([3, "tini"]);
console.log("arrays", arrays);


//uso de funciones de la calse Array
// tini -> tini-coco

arrays[2][1]= arrays[2][1].concat("-coco");
console.log("arrays", arrays); 