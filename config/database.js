// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'mprew_back_mysql'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', 'root'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });


  // strapi-api/config/database.js
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'ec2-52-207-15-147.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd5360hs5la7ui'),
        user: env('DATABASE_USERNAME', 'fbjhxifjltliyc'),
        password: env('DATABASE_PASSWORD', '5542fd179be40b270d337a5d4c9e197847c0927d14ea8206601bdab29e3a00f4'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
         
      },
      debug: false,
    },
  });