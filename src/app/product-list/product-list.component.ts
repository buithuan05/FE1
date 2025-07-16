import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VndPipe } from './custom.pipe'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, VndPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 1200, inStock: true },
    { id: 2, name: 'Phone', price: 800, inStock: false },
    { id: 3, name: 'Tablet', price: 500, inStock: true },
  ];

  filterText = "";

  filterProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
      product.price.toString().includes(this.filterText) ||
      product.id.toString().includes(this.filterText)
    );
  }
}
  