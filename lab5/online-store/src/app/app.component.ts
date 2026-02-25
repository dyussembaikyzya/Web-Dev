import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private readonly productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.getProductsByCategory(categoryId);
  }

  handleDelete(productId: number): void {
    // удаляем из сервиса
    this.productService.deleteProduct(productId);

    // обновляем текущий список на экране
    if (this.selectedCategoryId !== null) {
      this.selectedProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }

  isSelected(categoryId: number): boolean {
    return this.selectedCategoryId === categoryId;
  }
}
