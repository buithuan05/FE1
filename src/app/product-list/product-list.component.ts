import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { VndPipe } from '../product-list/custom.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, VndPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 12000000, inStock: true },
    { id: 2, name: 'Phone', price: 8000000, inStock: false },
    { id: 3, name: 'Tablet', price: 5000000, inStock: true },
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
