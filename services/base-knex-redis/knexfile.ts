// Update with your config settings.

module.exports = {

  development: {
    client: "postgresql",
    connection: {
      database: "test",
      user: "root",
      password: "password1",
      host: 'localhost',
      port: 6001
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
