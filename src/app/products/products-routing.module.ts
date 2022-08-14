import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ProductsListComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
