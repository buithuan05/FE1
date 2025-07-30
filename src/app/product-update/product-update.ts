import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './product-update.html',
  styleUrl: './product-update.css',
})
export class ProductUpdate implements OnInit {
  productForm: FormGroup;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      title: '',
      image: '',
      price: 0,
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));


    this.http.get<any>(`http://localhost:3001/products/${this.id}`).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
      },
      error: (err) => {
        console.error('Lỗi tải sản phẩm:', err);
      },
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.http
        .put(`http://localhost:3001/products/${this.id}`, this.productForm.value)
        .subscribe({
          next: () => {
            alert('Cập nhật thành công!');
            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.error('Lỗi cập nhật:', err);
            alert('Cập nhật thất bại');
          },
        });
    }
  }
}
