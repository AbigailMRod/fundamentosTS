export {};
let idUser:number | string;
idUser=10;
idUser= "10";


// buscar user name dado un id

function getUserNameById(id: number | string){
    //logic de negocio para encontrar al usuario
    return "abifq";
}

getUserNameById(20);
getUserNameById("20");


//................................... alias de tipos

type IdUsuario = number | string;
type UserName = string;

let idUsers:IdUsuario;
idUsers=10;
idUsers= "10";


// buscar user name dado un id

function getUserNameId(id: IdUsuario): UserName{
    //logic de negocio para encontrar al usuario
    return "abifq";
}

getUserNameId(20);
getUserNameId("20");


//..................... tipos literales
type SquareSize= "100x100" | "500x500" | "1000x1000";
let smallPicture: SquareSize = "100x100";
let medPicture: SquareSize = "500x500";
let bigPiscture:  SquareSize = "1000x1000";

