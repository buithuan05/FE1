import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetail } from './product-detail/product-detail';
import { BrandList } from './brand-list/brand-list';
import { CategoryList } from './category-list/category-list';
import { UserList } from './user-list/user-list';
import { HelloWorld } from './hello-world/hello-world';
import { CreateProduct } from './create-product/create-product'; 
import { ProductUpdate } from './product-update/product-update';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HelloWorld },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetail },
  { path: 'brands', component: BrandList },
  { path: 'categories', component: CategoryList },
  { path: 'users', component: UserList },
  { path: 'create-product', component: CreateProduct }, 
  { path: 'product/update/:id', component: ProductUpdate },
];
