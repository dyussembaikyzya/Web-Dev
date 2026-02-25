import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like(): void {
    // лайк обновляется сразу в UI, потому что меняем объект
    this.product().likes += 1;
  }

  remove(): void {
    // можно добавить confirm, если хочешь:
    // if (!confirm('Are you sure?')) return;
    this.delete.emit(this.product().id);
  }

  shareWhatsApp(): void {
    const p = this.product();
    const text = encodeURIComponent(`${p.name}\n${p.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram(): void {
    const p = this.product();
    const text = encodeURIComponent(`${p.name}\n${p.link}`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${text}`, '_blank');
  }
}