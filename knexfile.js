

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/games.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
  // testing: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/gamesTest.db3',
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // },

  // production: {
  //   client: 'pg',
  //   connection: dbConnection,
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // }

};
