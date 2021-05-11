const knex = require('knex');
const environment = process.env.DB_ENV || 'development';
const config = require('../knex')[environment];

module.exports = knex(config);