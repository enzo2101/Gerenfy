/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('cadastros', table => {
      table.string('cpf').notNullable().primary();
      table.string('email').notNullable;
      table.string('senha').notNullable;
      table.string('nome').notNullable;
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cadastros');
  };
