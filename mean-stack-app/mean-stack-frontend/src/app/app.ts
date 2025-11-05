import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mean-stack-frontend');
  backendMessage = signal('Loading...');

  constructor() {
    const api = new Api();
    api.getData().then(data => {
      this.backendMessage.set(data);
    }).catch(err => {
      this.backendMessage.set('Error: ' + err);
    });
  }
}

