import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  message: any;
  onClick() {
    throw new Error('Method not implemented.');
  }
  protected readonly title = signal('miprimerproyecto');
}
