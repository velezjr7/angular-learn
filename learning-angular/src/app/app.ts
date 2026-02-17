import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Atributo } from './atributo/atributo';
import { Estructural } from './estructural/estructural';
import { Pipes } from './pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Atributo, Estructural, Pipes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning-angular');
}
