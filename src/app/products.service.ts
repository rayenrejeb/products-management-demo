import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './Product';
import { environment } from './../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = environment.grizzlyUrl;

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {

    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    this.http.post(this.uri + '/api/products/add', obj)
        .subscribe(res => {
          console.log('Done');
        });
  }

  getProducts(): Observable<Product[]> {
    return this
           .http
           .get<Product[]>(this.uri + '/api/products/all');
  }

  editProduct(id) {
    return this
            .http
            .get(this.uri + '/api/products/edit/' + id);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    return this
      .http
      .post(this.uri + '/api/products/update/' + id, obj);
  }

  deleteProduct(id) {
    return this
              .http
              .delete(this.uri + '/api/products/delete/' + id);
  }
}
