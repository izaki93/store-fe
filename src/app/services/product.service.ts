import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../products/product";
import {Category} from "../products/Category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {
  }

  getProduct(id: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/products/${id}`;
    return this.http.get<Product>(productUrl);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/products/', product);
  }

  getProductsList(): Observable<Product[]> {
    const productListUrl = `${this.baseUrl}/products?limit=10`;
    return this.http.get<Product[]>(productListUrl);
  }

  getAllCategories(): Observable<Category[]> {
    const allCategoryUrl = `${this.baseUrl}/products/categories`;
    return this.http.get<Category[]>(allCategoryUrl);
  }
}
