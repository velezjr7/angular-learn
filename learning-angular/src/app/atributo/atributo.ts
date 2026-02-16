import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atributo',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './atributo.html',
  styleUrls: ['./atributo.css', '../app.css'],
})
export class Atributo {
  messageType = signal<'info' | 'warning' | 'error'>('info');
  inputValue = signal('');

  messageClasses = computed(() => ({
    info: this.messageType() === 'info',
    warning: this.messageType() === 'warning',
    error: this.messageType() === 'error',
  }));
}
