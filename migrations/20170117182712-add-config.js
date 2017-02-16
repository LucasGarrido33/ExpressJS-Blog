'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('config', {
    key: { 
    	type: 'string',
    	primaryKey: true,
    	notNull: true,
    },
    value: 'string'  // shorthand notation
  }, callback);
}

exports.down = function (db, callback) {
  db.dropTable('config', {
  	ifExists: true
  },
  callback);
};

exports._meta = {
  "version": 1
};
