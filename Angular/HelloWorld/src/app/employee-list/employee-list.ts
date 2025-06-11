import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  providers: [Myservice],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees: any[] = [];

  constructor(private myservice:Myservice){}

  ngOnInit(){
    this.employees = this.myservice.getEmployees();
  }
}
