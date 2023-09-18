import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  //get All
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:8080/api/products');
  }
  //get by id
  getProduct(id: number | string): Observable<Iproduct> {
    return this.http.get<Iproduct>('http://localhost:8080/api/products/' + id);
  }
  //create
  createProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>('http://localhost:8080/api/products', product);
  }
  //delete
  deleteProduct(id: number | string): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:8080/api/products/${id}`);
  }
  //update
  updateProduct(id: number | string, product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(
      `http://localhost:8080/products/${id}`,
      product
    );
  }
}
