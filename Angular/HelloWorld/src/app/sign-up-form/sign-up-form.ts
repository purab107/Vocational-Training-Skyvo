import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css'
})
export class SignUpForm {
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

}
