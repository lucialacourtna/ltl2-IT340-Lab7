import { environment } from '../environments/environment';

export class Api {
  private apiUrl = environment.apiUrl;

  getData() {
    return fetch(this.apiUrl + '/')
      .then(response => response.text());
  }
}

