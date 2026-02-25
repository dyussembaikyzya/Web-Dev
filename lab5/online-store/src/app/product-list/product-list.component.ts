import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input, output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  deleteProduct = output<number>();

  onDelete(id: number): void {
    this.deleteProduct.emit(id);
  }
}