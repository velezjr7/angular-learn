import { Component } from '@angular/core';
import { CartStore } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  standalone: true,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cartStore: CartStore) {}
}
