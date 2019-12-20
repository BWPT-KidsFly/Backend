const knex = require("knex");

const knexfile = require("../knexfile")

const environment = process.env.ENVIRONMENT
const knexConfig = knexfile[environment]
const db = knex(knexConfig);

module.export(db);