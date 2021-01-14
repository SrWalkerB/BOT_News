const NewsControllers = require("../../Controllers/NewsControllers");

const adrenaline = async (page) => {

    const site_URL = "https://adrenaline.com.br/";
    const site = "adrenaline";
    const tags = "tecnologia";
    await page.goto(site_URL);


    //Seacher and Return news
    const adrenaline_news = await page.evaluate(() => {

        let result = [];

        const tag_noticia = document.querySelectorAll(".post-h__content-title");
        const tag_noticia_data = document.querySelectorAll(".post-h__content-info");
        const tag_noticia_resume = document.querySelectorAll(".post-h__content-sub");
        const tag_noticia_link = document.querySelectorAll(".col-lg-4.post-h__image a");
        

        for(let x = 0; x < tag_noticia.length; x++){

            result.push({news: tag_noticia[x].textContent,
                         data : tag_noticia_data[x].textContent,
                         resume: tag_noticia_resume[x].textContent,
                         news_url: tag_noticia_link[x].href,
                        })
        }

        return result;

    })

    console.log("-> Adrenaline")
    
    adrenaline_news.map( async (result, index) => {

        console.log(`${index} = ${result.news}. ${result.resume}`);

        await NewsControllers.create_News(result.news, result.resume, site, tags, site_URL, result.news_url);

    }) 

    console.log();


    return adrenaline_news;
}

const techpowerUp = async (page) => {

    const site_URL = "https://www.techpowerup.com/"
    const site = "teachpowerup"
    const tags = "tecnologia";

    await page.goto(site_URL)

    const techpowerUp_notice = await page.evaluate(() => {

        let result = [];

        const notice_tags = document.querySelectorAll(".newspost h1");
        const resume_tags = document.querySelectorAll(".newspost .text");
        const news_url = document.querySelectorAll(".newslink");


        for (let x = 0; x < notice_tags.length; x++) {

            result.push({notice: notice_tags[x].textContent,
                         resume: resume_tags[x].textContent,
                         news_url: news_url[x].href
                        });
            
        }

        return result;
    })

    console.log();

    techpowerUp_notice.map(async (result, index) => {

        console.log(`${index} = ${result}`);
        await NewsControllers.create_News(result.notice, result.resume, site, tags, site_URL, result.news_url);
    })

    console.log();
}



module.exports = {
    adrenaline,
    techpowerUp
}