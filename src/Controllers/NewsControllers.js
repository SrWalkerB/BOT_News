
const moment = require("moment");
const knexDatabase = require("../Database/Config/knexConfigDatabase");


module.exports = {

    list_news: async (Request, Response) => {

        try {
            
            const result = await knexDatabase("tb_news").orderBy("created_at", "desc");
            
            let dados_formatados = [];

            result.map(result => {

                moment.locale("pt-br")
                const data_formatada =  moment(result.created_at).format("LLLL");


                dados_formatados.push({
                    id_news: result.id_news,
                    title: result.title,
                    site: result.site,
                    result_day: data_formatada,
                    site_URL: result.site_URL
                })
            })

            return Response.status(200).json(dados_formatados);

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