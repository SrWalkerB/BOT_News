const knexDatabase = require("../Config/knexConfigDatabase");

exports.up = function(knex) {
  
    return knexDatabase.schema.createTable("tb_news", table => {

        table.increments('id_news').notNullable();
        table.string("title").notNullable();
        
        table.dateTime("created_at").notNullable().defaultTo(knexDatabase.fn.now());
    })
};

exports.down = function(knex) {
  
    return knexDatabase.schema.dropTable("tb_news");
};
