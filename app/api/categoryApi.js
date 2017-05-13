class CategoryApi {

  static getAllCategories() {

  return fetch('/api/admin/categories',
    { credentials: 'same-origin'})
    .then((response) => response.json()).catch(error => error);
  }
}

  export default CategoryApi;
