import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.product = new Product();
    const productId: number = this.route.snapshot.params['id'];
    this.productService.getProduct(productId)
      .subscribe((data: Product) => {
        console.log(data)
        this.product = data;
      }, (error: any) => console.log(error));
  }

  list() {
    this.router.navigate(['products']);
  }

}
