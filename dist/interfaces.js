"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// función para mostrar una fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
function showPicture(picture) {
    console.log(`[title: ${picture.title}, 
                    date: ${picture.date}, 
                    orientation: ${picture.orientation}]`);
}
;
let myPic = {
    title: "Test title",
    date: "2022-01",
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: "Title 2",
    date: "2022-01",
    orientation: PhotoOrientation.Portrait,
    // extra: "test" ocurre un error porque "extra" no está definido inicialmente
});
function generatePicture(config) {
    const pic = { title: "Default", date: "2022-01" }; //valores pode defecto
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
;
let pictu = generatePicture({});
console.log("Picture: ", pictu);
pictu = generatePicture({ title: "Hello from my room" });
console.log("New picture: ", pictu);
pictu = generatePicture({ title: "Hello from my room", date: "2022-01-24" });
console.log("New picture: ", pictu);
;
let user;
user = { id: 10, userName: "abifq", isPro: true };
console.log("User", user);
// user.id = 11; es un error 
user.userName = "tachi Black";
console.log("User", user);
