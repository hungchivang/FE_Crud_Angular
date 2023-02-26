import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
  }
  productService: Product[] = [];


  findById(id : number):Observable<Product>{
    return this.http.get<Product>("http://localhost:8080/products/" +id);
  }
  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/products");
  }

  create(product : Product):Observable<any>{
    return this.http.post("http://localhost:8080/products",product);
  }

  delete(id : number):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/products/" + id );
  }

  // edit(id:number):Observable<any>{
  //   return this.http.put<any>("http://localhost:8080/products/"+id);
  // }

}
