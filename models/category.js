let connection = require('../config/connection');

class Category {

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  static all(){
    return new Promise(
      function(resolve, reject){
        let options = {sql:'SELECT * FROM category', nestTables: true};
        connection.query(options,(error, results, fields) => {
          if(error){
            return reject(error);
          }
          resolve(results.map((row) => new Category(row.category.id, row.category.name)));
        });
      }
    );
  }

  static create (name){
    return new Promise(
      function(resolve, reject){
        connection.query('INSERT INTO category SET name = ?', [name], (error, result) => {
          if(error){
            return reject(error);
          }
          resolve(result);
        });
      }
    );
  }

  static delete(id){
    return new Promise(
      function(resolve, reject){
        connection.query('DELETE FROM category WHERE id = ?', [id], (error, result) => {
          if(error){
            return reject(error);
          }
          resolve(result);
        });
      }
    );
  }

}

module.exports =  Category;
