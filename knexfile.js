require('dotenv').config();
const knex = require('knex')
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,

    },
    migrations: {
      directory: './models/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './models/seeds'
    }
};
