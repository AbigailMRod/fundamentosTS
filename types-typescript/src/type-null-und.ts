//explicita

let nullVariable: null;
nullVariable= null;

let otherVariable= null;
otherVariable= "hola" // esto se permite porque other-variable se está tomando como any

console.log("null variable", nullVariable);
console.log("other variable", otherVariable);


// ...................undefined

let undefinedVariable: undefined=undefined;
let otherUndefined=undefined;
otherUndefined=5; // esto es posible porque se está toamdno como any
console.log("undefined", undefinedVariable);
console.log("other undefined", otherUndefined);

//null y undefined como subtipos
//        --strictNullChecks   permite agregar un flag en el compilador de ts para 
// poder verificar las asignaciones en las variables, cada vez que encuentre una asignación
//con null o undefined se va a producir un error
let albumName:string;
/* albumName= null;
albumName= undefined; */