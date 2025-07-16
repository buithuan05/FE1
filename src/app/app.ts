import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { ProductListComponent } from './product-list/product-list.component';
import { ChildComponent } from './child/child';
import { CategoryList } from './category-list/category-list';
import { UserList } from './user-list/user-list';
import { BrandList } from './brand-list/brand-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld, ProductListComponent, ChildComponent, CategoryList, UserList, BrandList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'child component data';
}
