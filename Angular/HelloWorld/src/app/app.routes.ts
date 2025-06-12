import { Routes } from '@angular/router';
import { EmployeeDetails } from './employee-details/employee-details';
import { EmployeeList } from './employee-list/employee-list';
import { EventBinding } from './event-binding/event-binding';
import { SignUpForm } from './sign-up-form/sign-up-form';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { PageNotFound } from './page-not-found/page-not-found';
import { Register } from './register/register';
import { AngularForms } from './angular-forms/angular-forms';

export const routes: Routes = [
    {path : '', component: Register},
    { path: 'employeeList', component: EmployeeList},
    { path: 'employeeDetails', component: EmployeeDetails},
    { path: 'EventBinding', component: EventBinding},
     { path: 'SignUpForm', component: SignUpForm},
      { path: 'TwoWayBinding', component: TwoWayBinding},
        { path: 'AngularForms', component: AngularForms},
    { path: '**', component: PageNotFound}
];
