import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css']
})
export class BrandList {
  filterText = '';

  BrandList = [
    {
      id: 1,
      name: 'Adidas',
      description: 'Thương hiệu thời trang thể thao hàng đầu',
      Image: 'https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-adidas-vector-inkythuatso-01-29-09-08-58.jpg'
    },
    {
      id: 2,
      name: 'MLB',
      description: 'Thời trang phong cách Mỹ',
      Image: 'https://file.hstatic.net/200000690765/file/rqonnmvsmw_63ec51496337408083753a3b7ae4b1ca_grande.jpg'
    },
    {
      id: 3,
      name: 'Nike',
      description: 'Biểu tượng thời trang thể thao toàn cầu',
      Image: 'https://inkythuatso.com/uploads/images/2021/11/logo-nike-inkythuatso-2-01-04-15-42-44.jpg'
    }
  ];

  get filteredBrands() {
    const keyword = this.filterText.toLowerCase();
    return this.BrandList.filter(brand =>
      brand.name.toLowerCase().includes(keyword) ||
      brand.description.toLowerCase().includes(keyword)
    );
  }
}
