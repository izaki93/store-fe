import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product';
import {Router} from '@angular/router';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  // @ts-ignore
  serviceSubscription: Subscription;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnDestroy(): void {
        this.serviceSubscription.unsubscribe();
    }

  ngOnInit() {
    this.fetchProductList();
  }

  fetchProductList() {
    this.serviceSubscription = this.productService.getProductsList().subscribe(data => {
      this.products = data;
    }, (error: any) => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['/products/details', id]);
  }
}
