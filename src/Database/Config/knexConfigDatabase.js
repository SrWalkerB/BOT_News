const knexfile = require("../../../knexfile");
const knexDatabase = require("knex")(knexfile['development']);


module.exports = knexDatabase;