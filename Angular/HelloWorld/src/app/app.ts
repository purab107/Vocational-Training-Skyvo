import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Register } from './register/register';
import { StyleBinding } from "./style-binding/style-binding";
import { EventBinding } from "./event-binding/event-binding";
import { TwoWayBinding } from "./two-way-binding/two-way-binding";
import { HighlightDirective } from "./highlight-directive";
import { SignUpForm } from "./sign-up-form/sign-up-form";
import { SwitchDirective } from "./switch-directive/switch-directive";
import { NgforDirective } from "./ngfor-directive/ngfor-directive";
import { Demo } from "./demo/demo";
import { PipesAngular } from "./pipes-angular/pipes-angular";
import { FormsModule } from '@angular/forms';
import { Myservice } from './myservice';
import { EmployeeDetails } from "./employee-details/employee-details";
import { EmployeeList } from "./employee-list/employee-list";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Register, StyleBinding, EventBinding, TwoWayBinding, HighlightDirective, SignUpForm, SwitchDirective, NgforDirective, Demo, PipesAngular, FormsModule, EmployeeDetails, EmployeeList, RouterLink],
  providers: [Myservice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'HelloWorld';
  protected pokemon = 'Pikachu'
  name = "peter p"
  // childmsg:any;
  // receiveMessage(msg:string){
  //   console.log(msg);
  //   this.childmsg = msg;
  // }

  
}

