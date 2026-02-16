import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-estructural',
  imports: [],
  templateUrl: './estructural.html',
  styleUrls: ['./estructural.css', '../app.css'],
})
export class Estructural {
  isError = signal<boolean>(false);

  sections = [
    { title: 'Section 1', content: 'This is the content of section 1.' },
    { title: 'Section 2', content: 'This is the content of section 2.' },
    { title: 'Section 3', content: 'This is the content of section 3.' },
    {
      title: 'Sección Especial',
      content: 'Esta sección es especial y se muestra solo si no hay errores.',
    },
  ];

  toggleError() {
    this.isError.set(!this.isError());
  }
  constructor() {
    console.log('inicio');
  }
}
