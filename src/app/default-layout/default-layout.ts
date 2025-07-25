import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <nav>
          <a routerLink="/home" routerLinkActive="active">Trang chủ</a>
          <a routerLink="/products" routerLinkActive="active">Sản phẩm</a>
          <a routerLink="/create-product" routerLinkActive="active">Thêm sản phẩm</a>
          <a routerLink="/brands" routerLinkActive="active">Thương hiệu</a>
          <a routerLink="/categories" routerLinkActive="active">Danh mục</a>
          <a routerLink="/users" routerLinkActive="active">Người dùng</a>
        </nav>
      </aside>

      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .layout {
      display: flex;
      height: 100vh;
    }

    .sidebar {
      width: 220px;
      background: #2c3e50;
      padding: 20px;
      color: white;
    }

    .sidebar nav a {
      display: block;
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
      padding: 10px;
      border-radius: 4px;
      transition: background 0.2s;
    }

    .sidebar nav a:hover,
    .sidebar nav a.active {
      background: #34495e;
    }

    .content {
      flex: 1;
      padding: 30px;
      background-color: #f8f9fa;
    }
  `]
})
export class DefaultLayout {}

