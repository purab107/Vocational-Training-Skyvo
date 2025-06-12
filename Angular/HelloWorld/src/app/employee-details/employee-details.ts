import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  providers: [Myservice],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {
  employees: any[] = [];

  constructor(private myservice:Myservice){}

  ngOnInit(){
    this.employees = this.myservice.getEmployees();
  }
}
