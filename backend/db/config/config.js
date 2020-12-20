import { devDB, testDB, prodDB } from '../../config';

module.exports = {
  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: devDB.name,
    username: devDB.username,
    password: devDB.password,
    host: devDB.host,
    dialect: devDB.dialect
  },

  test: {
    database: testDB.name,
    username: testDB.username,
    password: testDB.password,
    host: testDB.host,
    dialect: testDB.dialect
  },

  production: {
    database: prodDB.name,
    username: prodDB.username,
    password: prodDB.password,
    host: prodDB.host,
    dialect: prodDB.dialect
  }
};
