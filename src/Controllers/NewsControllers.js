
const knexDatabase = require("../Database/Config/knexConfigDatabase");


module.exports = {

    list_news: async (Request, Response) => {

        try {
            
            const result = await knexDatabase("tb_news");


            return Response.status(200).json(result);

        } catch (error) {
            
            console.log(error);

            return Response.status(404).json({ err: error });
        }
    },
    
    create_News: async (notice, site, siteURL) => {

        try {

            const seacher = await knexDatabase("tb_news").where("title", notice);


            if(seacher != 0){

                return;
            }
            
            const insert = await knexDatabase("tb_news").insert({

                title: notice,
                site: site,
                site_URL: siteURL
            })

        } catch (error) {
            
            console.log(error);
        }
    }
    
}