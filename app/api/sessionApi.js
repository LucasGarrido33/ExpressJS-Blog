class SessionApi {

  static login(credentials) {
      const request = new Request('/api/login', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({auth: credentials})
      });

      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        throw error;
      });
    }
}

  export default SessionApi;
