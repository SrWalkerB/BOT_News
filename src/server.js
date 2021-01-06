require("dotenv").config();
const Bot = require("./Bot/Bot");


let number = 1;

//Bot();

console.log(process.env.PASSWORD)

setInterval(async () => {

    number++;

    //await Bot();
    
    console.log(`Chamadas: ${number}`);
    console.log(`Fim: ${number}`)
}, 75000)

