class CategoryApi {

  static getAllCategories() {

  return fetch('/api/categories',
    { credentials: 'same-origin' })
    .then((response) => response.json()).catch(error => error);
  }

  static createCategory(category){
    const myHeaders = new Headers({
      'Authorization': `Bearer ${sessionStorage.jwt}`,
      'Content-Type': 'application/json'
    });
    return fetch('/api/categories', {
      headers: myHeaders,
      method: 'POST',
      body: JSON.stringify({
        name: category.name
      })
    })
    .then(response => response.json()).catch(error => error);
  }

  static updateCategory(category){
    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    return fetch(`/api/categories/${category.id}`,
      {
        credentials: 'same-origin',
        headers: myHeaders,
        method: 'PUT',
        body: JSON.stringify({
          name: category.name
        })
      }).then(response => response.json()).catch(error => error);
  }

  static deleteCategory(category){
    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    return fetch(`/api/categories/${category.id}`,
    {
      method: 'DELETE',
      headers: myHeaders
    })
    .then((response) => response.json()).catch((error) => error);
    }

}

  export default CategoryApi;
