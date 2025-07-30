import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VndPipe } from './custom.pipe';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule, VndPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterText = "";

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProduct().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err: any) => {
        console.error("Lỗi tải sản phẩm:", err);
      }
    });
  }

  filterProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
      product.price.toString().includes(this.filterText) ||
      product.id.toString().includes(this.filterText)
    );
  }

  deleteProduct(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }
}
