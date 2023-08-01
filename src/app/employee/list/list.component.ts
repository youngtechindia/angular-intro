import { Component, DoCheck, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, DoCheck {
  employeesList: any[] = [];
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeesList = this.empService.getEmployees();

    //console.log(this.route.snapshot.params['id']);

    console.log(this.route.snapshot.queryParams);

    /*
{
  urlSubject:"",
  component:"",
  data:"",
  snapshot:{
    params:{id:4}
  }
}
*/
  }

  ngDoCheck(): void {
    this.employeesList = this.empService.getEmployees();
  }
  removeRow(employee: any) {
    this.empService.deleteEmployee(employee.id);
  }
}
