import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './shared/modules/product-details/product-details.component';
import { ListComponent } from './products/list/list.component';
import { CreateComponent } from './products/create/create.component';
import { MyCartComponent } from './my-cart/my-cart.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'list/edit/:id', component: CreateComponent },
  { path: 'my-cart', component: MyCartComponent },
  // {path: 'products', loadChildren: () => import('./products/products.module').then ( m => m.ProductsModule)},
  // {path: 'product/:id', loadChildren: () => import('./product-details/product-details.module').then ( m => m.ProductDetailsModule)},
  // {path: 'my-cart', loadChildren: () => import('./my-cart/my-cart.module').then ( m => m.MyCartModule)},
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
