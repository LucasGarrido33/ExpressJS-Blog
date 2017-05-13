let connection = require('../config/connection');

class Image {

  constructor(id, path){
    this.id = id;
    this.path = path;
  }

  static findByPost(postId) {
    return new Promise(
      function (resolve, reject) {
        const options = {sql:'SELECT * FROM post_image WHERE post_id = ?', nestTables: true};
        connection.query(options, [postId], (error, results, fields) => {
          if(error){
            return reject(error);
          }
          resolve(
            results.map(
              (row) => new Image(row.post_image.id, row.post_image.path)));
        });
      }
    );

  }

}

module.exports =  Image;
