const database = {
  dialect: process.env.PG_DB_DIALECT,
  dbName: process.env.PG_DB_NAME,
  host: process.env.PG_DB_HOST,
  port: process.env.PG_DB_PORT,
  username: process.env.PG_DB_USER,
  password: process.env.PG_DB_PASSWORD
};

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  secret: process.env.JWT_SECRET || 'test_jwt',
  database: {
    ...database,
    uri: `postgres://${database.username}:${database.password}@${database.host}:${database.port}/${database.dbName}`
  }
};
