
let connection = require('../config/connection');
let Category = require('../models/category');
let Image = require('../models/image');

class Post {

  constructor(id, title, content, thumbnail, display_order, category) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.thumbnail = thumbnail;
    this.display_order = display_order;
    this.category = category;
    this.images = [];
  }

  addImages(images) {
    this.images = images;
  }

  static create (title, content, thumbnail, category_id){
    return new Promise(
      function(resolve, reject){
        connection.beginTransaction(function(err) {
          if (err) { reject(err); }
          let insertId;
          connection.query('INSERT INTO post SET title = ?, content = ?, thumbnail = ?, category_id = ?, display_order = 0', [title, content, thumbnail, category_id], (error, result) => {
            if(err){
              return connection.rollback(function() {
                return reject(err);
              });
            }
            insertId = result.insertId;
          });

          connection.query('UPDATE post SET display_order=(SELECT MAX(display_order) +1)', function (error, result, fields) {
            if (error) {
              return connection.rollback(function() {
                reject(error);
              });
            }
            connection.commit(function(err) {
              if (err) {
                return connection.rollback(function() {
                  reject(err);
                });
              }
              Post.find(insertId).then((post) => {resolve(post)});
            });
          });
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
          connection.beginTransaction(function(err) {
            if (err) { reject(err); }

            connection.query('UPDATE post SET display_order = display_order - 1 WHERE display_order > (SELECT display_order FROM (SELECT * from POST) as P WHERE id = ?)', id, function (error, result, fields) {
              if(err){
                return connection.rollback(function() {
                  return reject(err);
                });
              }
            });

            connection.query('DELETE FROM post WHERE id = ?', [id], (error, result) => {
              if (error) {
                return connection.rollback(function() {
                  reject(error);
                });
              }
              connection.commit(function(err) {
                if (err) {
                  return connection.rollback(function() {
                    reject(err);
                  });
                }
                resolve(result);
              });
            });
          });
      }
    );
  }

  static update(post){
    return new Promise(
      function (resolve, reject) {
        connection.query('UPDATE post SET title = ?, content = ?, thumbnail = ?, category_id = ? WHERE id = ? ;', [post.title, post.content, post.thumbnail, post.category, post.id], (error, result) => {
          if(error){
            return reject(error);
          }
          resolve(post);
        });
      }
    );
}
  static sort(posts){
    return new Promise(
      function(resolve, reject) {
        let queries = '';
        posts.forEach(function (item) {
          queries += connection.format("UPDATE post SET display_order = ? WHERE id = ?; ", [item.display_order, item.id]);
        });
        connection.query(queries, (error, result) => {
          if(error){
            return reject(error);
          }
          resolve(result);
        });
      }
    );
  }

  static all(){
    return new Promise(
      function (resolve, reject) {
        const options = {sql:'SELECT * FROM post INNER JOIN category ON post.category_id = category.id ORDER BY display_order; SELECT * from post_image', nestTables: true};
        connection.query(options,(error, results, fields) => {
          if(error){
            return reject(error);
          }
          resolve(
            results[0].map(
              (row) => {
                const images = results[1].filter((row2) => row2.post_image.post_id === row.post.id).map((image) => new Image(image.post_image.id, image.post_image.path));
                const post = new Post(row.post.id, row.post.title, row.post.content, row.post.thumbnail, row.post.display_order, new Category(row.category.id, row.category.name));
                post.addImages(images);
                return post;
              }
            )
          );
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
          if (results.length){
            const row = results[0];
            const category = new Category(row.category.id, row.category.name);
            post = new Post(row.post.id, row.post.title, row.post.content, row.post.thumbnail, row.post.display_order, category);
          }
          resolve(post);
        });
      }
    );
  }
}

module.exports =  Post;
