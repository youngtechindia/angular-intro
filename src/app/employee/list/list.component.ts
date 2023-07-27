import { Component, DoCheck, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, DoCheck {
  employeesList: any[] = [];
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.employeesList = this.empService.getEmployees();
  }

  ngDoCheck(): void {
    this.employeesList = this.empService.getEmployees();
  }
  removeRow(employee: any) {
    this.empService.deleteEmployee(employee.id);
  }
}
