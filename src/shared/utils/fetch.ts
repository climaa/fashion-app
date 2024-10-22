interface Headers {
  [key: string]: string;
  accept: string;
  Authorization: string;
}

export interface RequestOptions {
  method: string;
  headers: Headers;
}

export function sendRequest(url: string, options: RequestOptions) {
  return fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}