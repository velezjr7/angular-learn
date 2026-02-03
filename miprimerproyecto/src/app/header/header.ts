import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('Mi Primer Proyecto en Angular');
  resultado = signal(0);
  a = signal(0);
  b = signal(0);
  res = signal(0);

  changeTitle() {
    this.title.set('Título Cambiado');
  }

  sumar() {
    this.res.set(this.a() + this.b());
  }
  add(value: number) {
    this.resultado.update((current) => current + value);
  }
}
