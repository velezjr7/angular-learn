import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DatePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  name = signal('Kikin');
  lastName = signal('VELEZ');

  date = signal('2026-03-11T12:00:00Z');

  fullName() {
    return `${this.name()} ${this.lastName()}`;
  }
}
