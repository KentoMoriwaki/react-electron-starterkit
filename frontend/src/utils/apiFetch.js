const host = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3001';

const apiFetch = (input, init = {}) => {
  input = host + input;
  init.headers = init.headers || new Headers();
  init.headers.append('Content-Type', 'application/json');
  return fetch(input, init);
};

export default apiFetch;
