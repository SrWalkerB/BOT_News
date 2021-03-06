const knexDatabase = require("../Config/knexConfigDatabase");

exports.up = function(knex) {
  
    return knexDatabase.schema.createTable("tb_news", table => {

        table.increments('id_news').notNullable();
        table.string("title").notNullable();
        table.text("resume");
        table.string("site").notNullable();
        table.string("tags").notNullable();
        table.string("site_URL").notNullable();
        table.text("news_URL").notNullable();
        
        table.timestamp("created_at").notNullable().defaultTo(knexDatabase.fn.now());
    })
};

exports.down = function(knex) {
  
    return knexDatabase.schema.dropTable("tb_news");
};
