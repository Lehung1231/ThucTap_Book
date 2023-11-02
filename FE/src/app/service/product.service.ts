import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/product';
import { ICategory } from '../interface/category';

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
  updatePatchProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.patch<Iproduct>(
      'http://localhost:8080/api/products/' + product._id,
      product
    );
  }
  updateProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(
      'http://localhost:8080/api/products/' + product._id,
      product
    );
  }
  deleteProduct(id: number | string): Observable<Iproduct> {
    return this.http.delete<Iproduct>(
      'http://localhost:8080/api/products/' + id
    );
  }
  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(
      'http://localhost:8080/api/products/',
      product
    );
  }
  //Category 
  getCategorys(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:8080/api/categorys');
  }
  getOneCategory(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(
      `http://localhost:8080/api/categorys/${id}`
    );
  }
  addCategorys(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(
      'http://localhost:8080/api/categorys/',
      category
    );
  }
  deleteCategorys(id: number | string): Observable<ICategory> {
    return this.http.delete<ICategory>(
      'http://localhost:8080/api/categorys/' + id
    );
  }
  updateCategorys(
    category: ICategory,
    _id: number | string
  ): Observable<ICategory> {
    return this.http.put<ICategory>(
      'http://localhost:8080/api/categorys/' + _id,
      category
    );
  }
  editPatchCategorys(category: ICategory): Observable<ICategory> {
    return this.http.patch<ICategory>(
      'http://localhost:8080/api/categorys/' + category._id,
      category
    );
  }
  editCategorys(
    id: number | string,
    category: ICategory
  ): Observable<ICategory> {
    return this.http.put<ICategory>(
      'http://localhost:8080/api/categorys/' + id,
      category
    );
  }
  //Card
  getCarts(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/cart/');
  }
  getOneCart(id: number | string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/cart/' + id);
  }
}
  
  