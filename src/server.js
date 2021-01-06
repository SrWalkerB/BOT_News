require("dotenv").config();

const Bot = require("./Bot/Bot");
const express = require("express");
const router = require("./Routes/router");


const app = express();
const PORT = 4000;



app.use(express.json());

app.use(router);




app.listen(PORT, () => {

    console.log(`-> Servidor rodando, PORT ${PORT}!`);
    console.log(`-> A cada 75 segundos o BOT faz suas operações`);
})