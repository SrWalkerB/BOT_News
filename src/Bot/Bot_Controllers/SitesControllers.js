const NewsControllers = require("../../Controllers/NewsControllers");
const knexDatabase = require("../../Database/Config/knexConfigDatabase");

const adrenaline = async (page) => {

    const site_URL = "https://adrenaline.com.br/";
    const site = "adrenaline";
    await page.goto(site_URL);


    //Seacher and Return news
    const adrenaline_news = await page.evaluate(() => {

        let result = [];

        const tag_noticia = document.querySelectorAll(".post-h__content-title");
        const tag_noticia_data = document.querySelectorAll(".post-h__content-info");
        

        for(let x = 0; x < tag_noticia.length; x++){

            result.push({notice: tag_noticia[x].textContent,
                         data : tag_noticia_data[x].textContent})
        }

        return result;

    })

    console.log("-> Adrenaline")
    
    adrenaline_news.map( async (result, index) => {

        console.log(`${index} = ${result.notice}.  ${result.data}`);

        await NewsControllers.create_News(result.notice, site, site_URL);

    }) 

    console.log();


    return adrenaline_news;
}

const techpowerUp = async (page) => {

    const site_URL = "https://www.techpowerup.com/"
    const site = "teachpowerup"
    await page.goto(site_URL)

    const techpowerUp_notice = await page.evaluate(() => {

        let result = [];

        const notice_tags = document.querySelectorAll(".newspost h1");


        for (let x = 0; x < notice_tags.length; x++) {

            result.push(notice_tags[x].textContent);
            
        }

        return result;
    })

    console.log();

    techpowerUp_notice.map(async (result, index) => {

        console.log(`${index} = ${result}`);
        await NewsControllers.create_News(result, site, site_URL);
    })

    console.log();
}



module.exports = {
    adrenaline,
    techpowerUp
}