// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipe-Book.db3'
    },
    migrations:{
      directory: './data/migrations'
    },
    seeds:{
      directory:'./data/seeds'
    }
  },


};
