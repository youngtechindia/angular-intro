import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  employeeName: string = '';
  employeeAge: number | string = '';
  employeeCity: string = '';
  employeeDescription: string = '';
  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    let empObj = {
      id: this.employeeService.getEmployees().length + 1,
      name: this.employeeName,
      city: this.employeeCity,
      age: this.employeeAge,
      description: this.employeeDescription,
    };

    this.employeeService.insertEmployee(empObj);
    this.employeeName = '';
    this.employeeCity = '';
    this.employeeAge = '';
    this.employeeDescription = '';
  }
}
