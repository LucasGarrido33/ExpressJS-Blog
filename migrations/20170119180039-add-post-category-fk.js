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

exports.up = function (db, callback)
{
  db.addForeignKey('post', 'category', 'post_category_id_foreign',
  {
    'category_id': 'id'
  },
  {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT'
  }, callback);
};


exports.down = function (db, callback)
{
  db.removeForeignKey('post', 'post_category_id_foreign', callback);
};

exports._meta = {
  "version": 1
};
