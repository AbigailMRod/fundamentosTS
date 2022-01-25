export{};
// función para mostrar una fotografia

enum PhotoOrientation {Landscape, Portrait, Square, Panorama};


/* esta interface puede sustituir todo el codigo que iría en la línea 13 después 
de picture */
interface Picture {
    title: string;
    date : string;
    orientation: PhotoOrientation
} 

function showPicture (picture: Picture) {
    console.log(`[title: ${picture.title}, 
                    date: ${picture.date}, 
                    orientation: ${picture.orientation}]`);
};

let myPic = {
    title: "Test title",
    date: "2022-01",
    orientation: PhotoOrientation.Landscape
};

showPicture (myPic);
showPicture({
    title: "Title 2",
    date : "2022-01",
    orientation: PhotoOrientation.Portrait,
    // extra: "test" ocurre un error porque "extra" no está definido inicialmente
});


/* cons le s+imbolo "?" se vuelv opcional poner los parámetros cuando se invoca
la función */
interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}


function generatePicture (config: PictureConfig) {
    const pic ={title: "Default", date: "2022-01"}; //valores pode defecto
    if (config.title){
        pic.title= config.title;
    }
    if (config.date){
        pic.date = config.date;
    }
    return pic;
};

let pictu= generatePicture ({});
console.log("Picture: ", pictu);
pictu = generatePicture({title: "Hello from my room"});
console.log("New picture: ", pictu);
pictu = generatePicture({title: "Hello from my room", date: "2022-01-24"});
console.log("New picture: ", pictu);



//......................... atributos de solo lectura

interface User {
     readonly id: number; // el atributo no se puede modificar, es solo de lectura
    userName: string;
    isPro: boolean;
};

let user: User;
user = {id: 10, userName: "abifq", isPro:true };
console.log("User", user);
// user.id = 11; es un error 
user.userName = "tachi Black";
console.log("User", user);












