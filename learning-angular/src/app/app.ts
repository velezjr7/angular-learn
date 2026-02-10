import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Atributo } from './atributo/atributo';
import { Estructural } from './estructural/estructural';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Atributo, Estructural],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning-angular');
}
