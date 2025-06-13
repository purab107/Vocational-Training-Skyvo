import { Injectable, NgModuleDecorator } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  constructor(private http:HttpClient) { }

  getMessage(): string{
    return 'Here are my services';
  }

  getEmployees(){
    return [
      { "id": 1, "name": "Pankaj Williams", "Age" : 22},
      { "id": 2, "name": "Alex Kumar", "Age" : 22},
      { "id": 3, "name": "Tanmay Khan", "Age" : 22},
    ];
  }

  getData():Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  addProduct(data:any){
    return this.http.post<Add>('https://fakestoreapi.com/products', data);
  }

  
}

export class Rating {
  rate: number | undefined;
  count: number | undefined;
}

export class Product{
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating : Rating | undefined;
}

export class Add{
  id!: number;
  title!: string;
  price!: number;
  description!: string;
  category!: string;
  image!: string;
}