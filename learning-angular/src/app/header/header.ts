import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // manera moderna de manejar el estado, con signal, pero no es compatible con la version actual de angular
  contador = signal(10);
  num1 = signal(0);
  num2 = signal(0);
  resultado = signal(0);
  incrementar() {
    this.contador.update((valor) => valor + 1);
  }
  decrementar() {
    this.contador.update((valor) => valor - 1);
  }

  sumar() {
    this.resultado.set(Number(this.num1()) + Number(this.num2()));
  }
  // manera tradicional de manejar el estado, con una variable normal
  // contador: number = 10;
  // num1: number = 0;
  // num2: number = 0;

  // resultado: number = 0;
  // ngOnInit() {
  //   this.contador = 10;
  // }

  // sumar(a: number, b: number) {
  //   this.resultado = a + b;
  // }
  // incrementar() {
  //   this.contador += 1;
  // }
  // decrementar() {
  //   this.contador -= 1;
  // }
}
