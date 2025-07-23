import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Submitted product:', this.product);
    }
  }
}
