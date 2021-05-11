module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './db/users',
      },
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds'
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        }
      }
    },
  
    test: {
      client: 'sqlite3',
      connection: {
        filename: './db/test.db3'
      },
      useNullAsDefault: true,
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        }
      },
      migrations: {
        directory: './db/migrations',
      },
      seeds: {
        directory: './db/seeds',
      }
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user: 'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './db/migrations',
        tableName: 'knex_migrations'
      },
      seeds: {
        directory: './db/seeds',
      }
    }
  
  };