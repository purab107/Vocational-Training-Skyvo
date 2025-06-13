import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, Add } from '../myservice';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  providers: [Myservice],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  signupModel: any = {};

  products: Add = new Add();

  constructor (private myservice:Myservice) {}

  data:any;

  onSubmit(){
    console.log('Product Added :', this.products);
    this.myservice.addProduct(this.products).subscribe(data=>{
      this.data = data;
      alert(JSON.stringify(this.data));
    });

    const product = { title: 'Updated Product', price: 39.99 };
fetch('https://fakestoreapi.com/products/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data));
    fetch('https://fakestoreapi.com/products/20')
  .then(response => response.json())
  .then(data => console.log(data));
    
  }
}
