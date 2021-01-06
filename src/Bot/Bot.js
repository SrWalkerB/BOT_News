
const puppeteer = require('puppeteer');
const SitesControllers = require("../Bot/Bot_Controllers/SitesControllers");


async function Bot() {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await SitesControllers.adrenaline(page);
    await SitesControllers.techpowerUp(page);
    
    await browser.close();

}


let number = 0;

setInterval(async () => {

    //await Bot();
    
    number++;
    console.log(`Chamadas: ${number}`);
    console.log(`Fim: ${number}`)

}, 75000)



module.exports = Bot;
