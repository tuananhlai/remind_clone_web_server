// Database connection configuration

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DATABASE_HOST || "localhost",
      user: process.env.DATABASE_USERNAME || "root",
      password: process.env.DATABASE_PASSWORD || "password",
      database: process.env.DATABASE_NAME || "remind_clone",
      charset: "utf8mb4",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
  staging: {},
  production: {},
};