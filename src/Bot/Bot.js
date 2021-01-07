
const puppeteer = require('puppeteer');
const SitesControllers = require("../Bot/Bot_Controllers/SitesControllers");


async function Bot() {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await SitesControllers.adrenaline(page);
    await SitesControllers.techpowerUp(page);
    
    await browser.close();

}



 setInterval(async () => {

    await Bot();

}, 95000)  



module.exports = Bot;
