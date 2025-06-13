import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, Product } from '../myservice';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css'
})
export class SignUpForm implements OnInit{
  name = ' ';
  email = ' ';
  password = ' ';
  onSubmit() {
    alert(`Sign Up Successfull!!
Name : ${this.name} 
Email : ${this.email}
Password : ${this.password}`);

    console.log('Name : ', this.name);
    console.log('Email : ', this.email);
    console.log('Password : ', this.password);
  }

  constructor(private myservice:Myservice){}

  product: Product[] = [];

  ngOnInit():void{
    this.myservice.getData().subscribe(data=>{
      console.log(data);
      this.product = data;
    })
  }

}
