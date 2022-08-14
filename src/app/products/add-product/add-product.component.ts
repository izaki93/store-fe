import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import {ProductService} from "../../services/product.service";
import {Category} from "../Category";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  product: Product = new Product();
  categories: Category[] = [];

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories(){
    this.productService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, (error: any) => console.log(error));
  }
  saveProduct() {
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoProductList();
  }

  onSubmit() {
    this.saveProduct();
  }

  gotoProductList() {
    this.router.navigate(['/products']);
  }

}
