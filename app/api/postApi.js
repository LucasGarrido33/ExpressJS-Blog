class PostApi {

  static getAllPosts() {
  return fetch('/api/posts',
    { credentials: 'same-origin'})
    .then((response) => response.json()).catch(error => error);
  }

  static editPost(post){
    let data = new FormData();
    for (const file in post.images) {
      data.append('images', post.images[file]);
    }
    data.append('title', post.title);
    data.append('content', post.content);
    data.append('category', post.category);
    data.append('_csrf', this.state.csrfToken);

    return fetch('/api/admin/post', {
      credentials: 'same-origin',
      method: 'POST',
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
    for (const file in post.images) {
      data.append('images', post.images[file]);
    }
    data.append('title', post.title);
    data.append('content', post.content);
    data.append('category', post.category);
    data.append('_csrf', this.state.csrfToken);

    fetch('/api/admin/post', {
      credentials: 'same-origin',
      method: 'POST',
      body: data
    })
    .then(response => response.json()).catch((error) => error);

  }
}

  export default PostApi;
