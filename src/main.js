
const puppeteer = require('puppeteer');
<<<<<<< HEAD


async function bot() {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://adrenaline.com.br/');


    const adrenaline_news = await page.evaluate(() => {


        let result = [];


        const tag_noticia = document.querySelectorAll(".post-h__content-title");
        const tag_noticia_data = document.querySelectorAll(".post-h__content-info");
        
        for(let x = 0; x < tag_noticia.length; x++){

            //result.push(`${tag_noticia[x].textContent} = ${tag_noticia_data[x].textContent}`);

            result.push({notice: tag_noticia[x].textContent,
                         data : tag_noticia_data[x].textContent})
        }

        return result;

    })

    await browser.close();

    console.log("-> Adrenaline")
    

    
    adrenaline_news.map((result, index) => {

        console.log(`${index} = ${result.notice}.  ${result.data}`);
    })
}


bot();
=======
const SitesControllers = require('./Controllers/SitesControllers')


async function Bot() {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await SitesControllers.adrenaline(page);
    await SitesControllers.techpowerUp(page);
    
    await browser.close();

}


Bot();
>>>>>>> ffd9cfd (Melhorando o codigo e adicioando site TechpowerUp)
