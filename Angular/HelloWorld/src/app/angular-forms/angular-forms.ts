import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  imports: [CommonModule, FormsModule],
  templateUrl: './angular-forms.html',
  styleUrl: './angular-forms.css'
})
export class AngularForms {

  title = 'AngularProject';
  signupModel: any = {};
  counter = 0;

  onSubmit(){
    this.counter = this.counter + 1;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupModel))
    
  }
}
