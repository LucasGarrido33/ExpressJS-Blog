class PostApi {

  static getAllPosts() {

  return fetch('/api',
    { credentials: 'same-origin'})
    .then((response) => response.json()).catch(error => error);
  }
}

  export default PostApi;
