import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VndPipe } from '../product-list/custom.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, VndPipe],
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  @Input() product: any;
}
