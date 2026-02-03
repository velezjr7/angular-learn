import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartStore } from '../../services/cart';
import { computed } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public cartStore: CartStore) {}

  hasItems = computed(() => this.cartStore.totalItems() > 0);
}
