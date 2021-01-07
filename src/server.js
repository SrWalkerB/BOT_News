require("dotenv").config();

const express = require("express");
const cors = require("cors");

const router = require("./Routes/router");
const Bot = require("./Bot/Bot");

const app = express();
const PORT = 4000;


app.use(cors());
app.use(express.json());

app.use(router);


let teste = 0;

setInterval(() => {

    teste++;
    console.log("Rodando", teste)

}, 5000)


console.log("si")



app.listen(process.env.PORT|| PORT, () => {

    
    console.log(`\n-> Servidor rodando, PORT ${PORT}!`);
    console.log(`-> A cada ${Bot.minutos} minutos o BOT faz suas operações`);
})