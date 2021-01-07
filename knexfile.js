// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: process.env.CLIENT,
    connection: {
      database: process.env.DATABASE,
      host: process.env.HOST,
      user:     process.env.USER,
      password: process.env.PASSWORD
    },

    migrations: {
      tableName: 'Migrations',
      directory: "src/Database/Migrations"
    }
  }

};
