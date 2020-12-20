import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('Could not find the .env file');
}

export const nodeEnv = process.env.NODE_ENV;
export const port = parseInt(`${process.env.PORT}`, 10) || 3000;

export const logLevel = 'debug';

export const apiPrefix = '/api';

export const devDB = {
  name: process.env.DEVDB_NAME,
  username: process.env.DEVDB_USER,
  password: process.env.DEVDB_PASS,
  host: process.env.DEVDB_HOST,
  dialect: 'postgres'
};

export const testDB = {
  name: process.env.TESTDB_NAME,
  username: process.env.TESTDB_USER,
  password: process.env.TESTDB_PASS,
  host: process.env.TESTDB_HOST,
  dialect: 'postgres'
};

export const prodDB = {
  name: process.env.PRODDB_NAME,
  password: process.env.PRODDB_PASS,
  host: process.env.PRODDB_HOST,
  dialect: 'postgres',
  username: process.env.PRODDB_USER
};
