import { Component, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  standalone: true,
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
  // autoTitle = toSignal(timer(0, 5000).pipe(map((i) => `Título automático #${i}`)));
  // manualTitle = signal('Título inicial');
  // currentDate = toSignal(timer(0, 1000).pipe(map(() => new Date())));

  // changeTitle(newTitle: string) {
  //   this.manualTitle.set(newTitle);
  // }
}
