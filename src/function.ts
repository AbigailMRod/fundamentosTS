// crear una fotografia usando JS
/* function createPicture (title, date, size){
    // title dará un elemento del tipo any, muy general
} */

// usando TS, se definen tipos para parámetros 
/* type SquareSize = "100x100" | "500x500" | "1000x1000";
function createPicture (title: string, date: string, size: SquareSize){
    // se crea la fotografia
    console.log("create picture using: ", title, date, size);
}

createPicture("My birthday", "2022-02-21", "100x100");
createPicture("Mexico trip", "2020-20"); */

// parámetros opcionales en funciones ..................... se agrega "?"  

type SquareSize = "100x100" | "500x500" | "1000x1000";
function createPicture (title?: string, date?: string, size?: SquareSize){
    // se crea la fotografia
    console.log("create picture using: ", title, date, size);
}

createPicture("My birthday", "2022-02-21", "100x100");
createPicture("Mexico trip", "2020-20");
createPicture("Homework");
createPicture();




//............... flat array functions 

let createPic= (title: string, date: string, size: SquareSize): object =>{
    /* return {
        title: title,
        date: date,
        size: size
    }; */

    return{title, date, size};
};

const picture = createPic("Platzi session", "2022-01-24", "100x100");
console.log("Picture", picture);



//tipo de retorno con TS

function handleError (code: number, message: string): never | string {
    // procesamiento delcódigo, mensaje 
    if( message === "error"){
        throw new Error (`${message}. Code error : ${code}`);
    } else {
        return "An error has ocurred";
    }
};



try {
    let result = handleError (200, "OK"); // retorna solo un string
console.log("result: " , result);

result =  handleError(404, "error"); // retorna never o sea lanzar un error 
console.log("result: ", result);
} catch (error) {
    
}

/* nuul y undefined se consideran como una especie de subtipos de void  */