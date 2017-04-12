
let connection = require('../config/connection');
let Category = require('../models/category');

class Post {

  constructor(id, title, content, thumbnail_path, category) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.thumbnail_path = thumbnail_path;
    this.category = category;
  }

  getId(){
    return this.id;
  }
  getThumb(){
    return this.thumbnail_path;
  }

  getTitle(){
    return this.title;
  }

  getContent(){
    return this.content;
  }

  getCategory(){
    return this.category;
  }

  static create (title, content, category_id){
    return new Promise(
      function(resolve, reject){
        connection.query('INSERT INTO post SET title = ?, content = ?, thumbnail_path = ?, category_id = ?', [title, content, 'test', category_id], (error, result) => {
          if(error){
            return reject(error);
          }
          resolve(result);
        });
      }
    );
  }

  static addImages (pathArray){
    return new Promise(
      function(resolve, reject){
        connection.query('INSERT INTO post_image (post_id, path) VALUES ?', [pathArray], (error, result) => {
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
        connection.query('DELETE FROM post WHERE id = ?', [id], (error, result) => {
          if(error){
            return reject(error);
          }
          resolve(result);
        });
      }
    );
  }

  static update(){


  }

  static all(){
    return new Promise(
      function (resolve, reject) {
        const options = {sql:'SELECT * FROM post INNER JOIN category ON post.category_id = category.id', nestTables: true};
        connection.query(options,(error, results, fields) => {
          if(error){
            return reject(error);
          }
          resolve(results.map((row) => new Post(row.post.id, row.post.title, row.post.content, row.post.thumbnail_path, new Category(row.category.id, row.category.name))));
        });
      }
    );
  }

  static find(id){
    return new Promise(
      function (resolve, reject) {
        const options = {sql:'SELECT * FROM post INNER JOIN category ON post.category_id = category.id WHERE post.id = ? LIMIT 1', nestTables: true};
        connection.query(options, [id], (error, results, fields) => {
          if(error){
            return reject(error);
          }
          let post = null;
          if(results.length){
            const row = results[0];
            const category = new Category(row.category.id, row.category.name);
            post = new Post(row.post.id, row.post.title, row.post.content, row.post.thumbnail_path, category);
          }
          resolve(post);
        });
      }
    );
  }
}

module.exports =  Post;
