let connection = require('../config/connection');

class Category {

  constructor(id, name) {
    this.id = id;
    this.name = name;
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
          resolve(new Category(result.insertId, name));
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

  static find(id){
    return new Promise(
      function (resolve, reject) {
        const options = {sql:'SELECT * FROM category WHERE id = ? LIMIT 1', nestTables: true};
        connection.query(options, [id], (error, results, fields) => {
          if(error){
            return reject(error);
          }
          let category = null;
          if(results.length){
            const row = results[0];
            category = new Category(row.category.id, row.category.name);
          }
          resolve(category);
        });
      }
    );
  }

  static update(category){
    return new Promise(
      function (resolve, reject) {
        connection.query('UPDATE category SET name = ? WHERE id = ? ;', [category.name, category.id], (error, result) => {
          if(error){
            return reject(error);
          }
          resolve(category);
        });
      }
    );
  }


}

module.exports =  Category;
