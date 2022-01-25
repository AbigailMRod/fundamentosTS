// tipo explicito
// la variable any admite cualqueir tipo de dato

let idUser: any;
idUser= 1; //number
idUser= "2"; //string
console.log("idUser", idUser);


//tipo inferido
 let otherId;
 otherId= 4;
 otherId= "Hola";
 console.log("other id", otherId);


 let surprise: any = "Hola que hace";
 //
 console.log("res", surprise.substring(5));

 /* el uso de Any no es recomendable porque tiende 
 a comoeter errores en tiempo de ejecución 
 solo se debería usar Any cuando no se está seguro
 del tipo de dato que va almacenar la variable*/


 