require('dotenv').config();

module.exports = {
  migrationFolder: 'migrations',
  direction: 'up',
  logFileName: 'migration.log',
  databaseUrl: process.env.DATABASE_URL,
  sqlFile: true,
};

