import { Injectable, signal, computed } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  cart = signal<Product[]>([]);

  totalItems = computed(() => this.cart().length);

  totalPrice = computed(() => this.cart().reduce((sum, product) => sum + product.price, 0));

  addToCart(product: Product) {
    this.cart.update((items) => [...items, product]);
  }

  removeFromCart(productId: number) {
    this.cart.update((items) => items.filter((item) => item.id !== productId));
  }

  clearCart() {
    this.cart.set([]);
  }
}
