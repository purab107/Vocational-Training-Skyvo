import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  providers: [Myservice],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees: any[] = [];

 constructor(private myservice: Myservice, private router: Router) {}


  ngOnInit(){
    this.employees = this.myservice.getEmployees();
  }

  onSelect(employees: { id: any; }){
    this.router.navigate(['/employeeDetail', employees.id])
    alert(`${this.employees}`)
  }
}
