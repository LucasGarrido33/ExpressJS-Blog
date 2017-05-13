class ImageApi {

  static getPostImages() {

  return fetch('/api',
    { credentials: 'same-origin'})
    .then((response) => response.json()).catch(error => error);
  }
}

  export default ImageApi;
