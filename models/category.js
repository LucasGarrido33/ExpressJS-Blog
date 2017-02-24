let connection = require('../config/connection');

class Category {

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getName(){
    return this.name;
  }

  static all(cb){
    let options = {sql:'SELECT * FROM category', nestTables: true};

    connection.query(options,(err, results, fields) => {
      if(err) throw err
        cb(results.map((row) => new Category(row.category.id, row.category.name)));
    });
  }
}

module.exports =  Category;
