
const adrenaline = async (page) => {

    await page.goto('https://adrenaline.com.br/');


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
    
    adrenaline_news.map((result, index) => {

        console.log(`${index} = ${result.notice}.  ${result.data}`);
    }) 

    console.log();

    return adrenaline_news;
}

const techpowerUp = async (page) => {

    await page.goto("https://www.techpowerup.com/")

    const techpowerUp_notice = await page.evaluate(() => {

        let result = [];

        const notice_tags = document.querySelectorAll(".newspost h1");


        for (let x = 0; x < notice_tags.length; x++) {

            result.push(notice_tags[x].textContent);
            
        }

        return result;
    })

    console.log();
    console.log("-> TechpowerUP");

    techpowerUp_notice.map((result, index) => {

        console.log(`${index} = ${result}`);
    })

    console.log();
}

module.exports = {
    adrenaline,
    techpowerUp
}