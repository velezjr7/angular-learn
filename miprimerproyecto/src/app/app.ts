import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
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
