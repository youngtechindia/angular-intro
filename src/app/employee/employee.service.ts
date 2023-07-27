import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: [] = [];

  constructor() {}
  insertEmployee(employee: {
    id: number;
    name: string;
    age: number | string;
    city: string;
    description: string;
  }) {
    this.employees.push(employee as never);
  }

  getEmployees() {
    return this.employees;
  }

  deleteEmployee(id: number) {
    let index = this.employees.findIndex((data: any) => data.id == id);
    this.employees.splice(index, 1);
  }
}
