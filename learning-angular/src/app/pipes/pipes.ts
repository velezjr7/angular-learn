import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DatePipe } from '@angular/common';
import { EstadosPipe } from './estados-pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DatePipe, EstadosPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  name = signal('Kikin');
  lastName = signal('VELEZ');

  date = signal('2026-03-11T12:00:00Z');

  estado = signal(1);

  fullName() {
    return `${this.name()} ${this.lastName()}`;
  }

  changeState() {
    this.estado.set(this.estado() === 0 ? 1 : 0);
  }
}
