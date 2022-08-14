import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AddProductComponent} from './add-product/add-product.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule
    ]
})
export class ProductsModule {
}
