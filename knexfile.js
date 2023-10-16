require('dotenv').config();
const knex = require('knex')
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST_SENAC,
      port: process.env.DATABASE_PORT_SENAC,
      user: process.env.DATABASE_USER_SENAC,
      password: process.env.DATABASE_PASSWORD_SENAC,
      database: process.env.DATABASE_NAME_SENAC,

    },
    migrations: {
      directory: './models/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './models/seeds'
    }
};
