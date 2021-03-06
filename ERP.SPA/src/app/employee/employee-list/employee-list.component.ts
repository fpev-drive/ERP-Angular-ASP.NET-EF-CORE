import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { MatPaginator, MatDialog, MatTableDataSource, MatSort } from '../../../../node_modules/@angular/material';
import { Employee } from '../../_models/employee.model';
import { EmployeeService } from '../../_services/employee.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  employees: Employee[];
  selectedEmployee;

  displayedColumns = ['email', 'firstName', 'lastName', 'position'];
  dataSource;

  constructor(private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private employeeService: EmployeeService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.setDataSource();
    });
  }

  setDataSource() {
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  createEmployee() {
    this.router.navigate(['register']);
  }

  onEmployee(employee: any) {
    if (this.authService.isReadEmployeeDataAllowed()) {
      this.selectedEmployee = employee;
    } else {
      this.alertify.error(this.authService.NO_PERMISSION_ERROR_MESSAGE);
    }
  }
  
  employeeUpdatedInDetailComponent(updatedEmployee: Employee) {
    let indexOfEmployeeUpdated = this.employees.indexOf(this.selectedEmployee);
    this.employees[indexOfEmployeeUpdated] = updatedEmployee;
    this.setDataSource();
  }
}
