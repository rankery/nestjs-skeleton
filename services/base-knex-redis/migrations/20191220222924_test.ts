import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('test1', table => {
        table.increments('id');
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
    }).createTable('test2', table => {
        table.string('id1')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('test2')
        .dropTable('test1')
}

