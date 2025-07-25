import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-product.html',
})
export class CreateProduct {
  product = {
    name: '',
    image: '',
    price: 0,
    inStock: false
  };

  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      try {
        console.log('Submitted product:', this.product);
        alert('Product created successfully!');
        this.router.navigate(['/products']);
      } catch (err: any) {
        this.errorMessage = 'Đã có lỗi xảy ra: ' + err.message;
      }
    } else {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin hợp lệ.';
    }
  }
}
