
const knexDatabase = require("../Database/Config/knexConfigDatabase");


module.exports = {

    list_news: async (Request, Response) => {

        try {
            
            const result = await knexDatabase("tb_news");


            return Response.status(200).json();

        } catch (error) {
            
            console.log(error);

            return Response.status(404).json({ err: error });
        }
    },
    
    create_News: async (notice) => {

        try {
            
            const insert = await knexDatabase("tb_news").insert({

                title: notice
            })

        } catch (error) {
            
            console.log(error);
        }
    }
    
}