import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../products';
import { ProductCardComponent } from '../product-card.component/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = PRODUCTS;
}


