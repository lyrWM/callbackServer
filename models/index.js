const Sequelize = require('sequelize');
const config = require("../config/config");
const FB = 'fireblocksDB';
const IFDB = 'IFDB';
const fireblocks_config = config[FB];
const IFDB_config = config[IFDB];

const db = {};

db.sequelize = Sequelize;
db.Sequelize = Sequelize;

//fireblocksDB
const fireblocksDB = new Sequelize(
  fireblocks_config.database,
  fireblocks_config.username,
  fireblocks_config.password,
  fireblocks_config
)

//IFDB
const ifDB = new Sequelize(
  IFDB_config.database,
  IFDB_config.username,
  IFDB_config.password,
  IFDB_config
)


db.fireblocksDB = fireblocksDB;
db.ifDB = ifDB;

module.exports = db;