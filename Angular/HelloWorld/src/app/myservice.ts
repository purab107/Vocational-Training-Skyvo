import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  constructor() { }

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
}
