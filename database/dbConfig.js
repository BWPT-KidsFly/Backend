const knex = require('knex');

const knexfile = require('../knexfile.js');

const environment = 'development';

module.exports = knex(knexfile[environment]);