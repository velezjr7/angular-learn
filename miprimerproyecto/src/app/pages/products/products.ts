import { Component, signal } from '@angular/core';
import { Product, ProductsService } from '../../services/products';
import { CartStore } from '../../services/cart';

@Component({
  selector: 'app-products',
  imports: [],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  loading = signal(true);
  products = signal<Product[]>([]);

  constructor(
    private productsService: ProductsService,
    private cartStore: CartStore,
  ) {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  addToCart(product: Product) {
    this.cartStore.addToCart(product);
  }
}
