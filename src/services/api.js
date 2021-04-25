const BASE_URL = 'https://my-json-server.typicode.com';

export class API_SERVICES {
  static getTodoList(callback) {
    const url = `${BASE_URL}/gujamark/todos/todos`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => callback(result))
      .catch((err) => console.error(err));
  }
}

export default API_SERVICES;
