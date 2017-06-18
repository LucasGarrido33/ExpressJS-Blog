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

exports.up = function(db, callback) {
   db.createTable('post_image', {
   	id: { 
    	type: 'int',
    	primaryKey: true,
    	notNull: true,
     	autoIncrement: true,
    	},
    post_id: { 
    	type: 'int',
    	primaryKey: true,
    	notNull: true,
        foreignKey: {
          name: 'post_image_post_id_fk',
          table: 'post',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
    	mapping: 'id'
        }
              },
    path: 'string'
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('post_image', callback);
};

exports._meta = {
  "version": 1
};
