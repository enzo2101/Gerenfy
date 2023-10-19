/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('fluxo', table => {
        table.increments('id').primary();
        table.dateTime('data').defaultTo(knex.fn.now());
        table.float('valor', 8, 2).notNullable();
        table.text('tipo').notNullable();
    })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('fluxo');
};
