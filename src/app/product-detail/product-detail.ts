import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VndPipe } from '../product-list/custom.pipe'; // thêm pipe nếu dùng

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, VndPipe],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail implements OnInit {
  productId: number | null = null;
  product: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.productId = idParam ? +idParam : null;

      // 🔧 Giả sử đây là dữ liệu tạm để demo
      const allProducts = [
        { id: 1, name: 'Laptop', price: 1200, inStock: true },
        { id: 2, name: 'Phone', price: 800, inStock: false },
        { id: 3, name: 'Tablet', price: 500, inStock: true },
      ];

      // 🔍 Tìm sản phẩm theo ID
      this.product = allProducts.find(p => p.id === this.productId);
    });
  }
}
