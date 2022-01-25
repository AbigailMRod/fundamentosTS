// ..................uso del tipo void

//tipo explicito

function showInfo(user:any): any {
    console.log("user info", user.id, user.username, user.firstName)
}

showInfo({id:1, username:"Abimrod", firstName:"Abi"});


//tipo inferido

function showFormattedInfo (user:any){
    console.log("user info", `
    id: ${user.id}
    username: ${user.username}
    fisrtName: ${user.firstName}
    `)
}

showFormattedInfo({id:1, username:"Abimrod", firstName:"Abi"});


//tipo void como tipo de dato de una variable

let unusable: void;
/* unusable= null; */
unusable=undefined;

//................... uso del tipo never 

function handleError(code:number, message:string): never{
    //process your code
    // generate a message

    throw new Error(`${message}.Code: ${code}`);
}

try {
    handleError(404, "Not found");
} catch (error) {
    
}


function sumNumbers (limit:number):never{
    let suma=0;
    while(true){
        suma ++;
    }
    //return sum;
}

sumNumbers(10);
//ciclo infito, el progrma nunca termina 

