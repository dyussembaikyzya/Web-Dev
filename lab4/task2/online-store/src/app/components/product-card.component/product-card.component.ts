import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  shareWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}

