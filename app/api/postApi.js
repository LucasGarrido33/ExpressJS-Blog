class PostApi {

  static getAllPosts() {
  return fetch('/api/posts', {
    method: 'GET'
  })
    .then((response) => response.json()).catch(error => error);
  }

  static sortPosts(posts){
    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    return fetch('/api/posts/sort', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        posts: posts
      })
    })
    .then(response => response.json()).catch((error) => error);
  }

  static updatePost(post){
    let data = new FormData();
    // for (const file in post.images) {
    //   data.append('images', post.images[file]);
    // }
    data.append('title', post.title);
    data.append('content', post.content);
    data.append('category', post.category);
    data.append('thumbnail', post.thumbnail[0]);

    return fetch(`/api/posts/${post.id}`, {
      method: 'PATCH',
      body: data
    })
    .then(response => response.json()).catch((error) => error);
  }

  static deletePost(post) {
    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    return fetch(`/api/posts/${post.id}`,
    {
      method: 'DELETE',
      headers: myHeaders
    })
    .then((response) => response.json()).catch((error) => error);
  }

  static createPost(post){
    let data = new FormData();
    // for (const file in post.images) {
    //   data.append('images', post.images[file]);
    // }

    data.append('title', post.title);
    data.append('content', post.content);
    data.append('thumbnail', post.thumbnail[0]);
    data.append('category', post.category);

    return fetch('/api/posts', {
      method: 'POST',
      body: data
    })
    .then(response => response.json()).catch((error) => error);

  }
}

  export default PostApi;
