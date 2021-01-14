
const moment = require("moment");
const knexDatabase = require("../Database/Config/knexConfigDatabase");


module.exports = {

    list_news_tecnologia: async (Request, Response) => {

        try {
            
            const result = await knexDatabase("tb_news").where("tags", "tecnologia").orderBy("id_news", "desc");
             
            let dados_formatados = [];

            result.map(result => {

                moment.locale("pt-br")
                const data_formatada =  moment(result.created_at).format("LLLL");

                dados_formatados.push({
                    id_news: result.id_news,
                    title: result.title,
                    resume: result.resume,
                    site: result.site,
                    tags: result.tags,
                    result_day: data_formatada,
                    site_URL: result.site_URL,
                    newsURL: result.news_URL
                })
            })

            return Response.status(200).json(dados_formatados);

        } catch (error) {
            
            console.log(error);

            return Response.status(404).json({ err: error });
        }
    },
    
    create_News: async (notice, resume, site, tags, siteURL, newsURL) => {

        try {

            const seacher = await knexDatabase("tb_news").where("title", notice);

            if(seacher != 0){

                return;
            }
             
            const insert = await knexDatabase("tb_news").insert({

                title: notice,
                site: site,
                resume: resume,
                tags: tags,
                news_URL: newsURL,
                site_URL: siteURL
            })

        } catch (error) {
            
            console.log(error);
        }
    },

    list_news_word: async (Request, Response) => {

        try {
            
            const result = await knexDatabase("tb_news").where("tags", "world").orderBy("id_news", "desc");
            
            let dados_formatados = [];

            result.map(result => {

                moment.locale("pt-br")
                const data_formatada =  moment(result.created_at).format("LLLL");

                dados_formatados.push({
                    id_news: result.id_news,
                    title: result.title,
                    resume: result.resume,
                    site: result.site,
                    tags: result.tags,
                    result_day: data_formatada,
                    site_URL: result.site_URL,
                    newsURL: result.news_URL
                })
            })

            return Response.status(200).json(dados_formatados);

        } catch (error) {
            
            console.log(error);

            return Response.status(404).json({ err: error });
        }
    }
    
}