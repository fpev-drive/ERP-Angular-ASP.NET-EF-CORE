import { inject, TestBed } from '@angular/core/testing';
import { EmployeeService } from 'src/app/_services/employee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Employee } from '../../app/_models/employee.model';

const testData: Employee[] = [
    {
        employeeId: 1,
        email: 'blabla',
        firstName: 'blabla',
        lastName: 'blabla',
        dateOfBirth: new Date('1993/01/31'),
        salary: 13,
        positionId: 1,
        positionName: 'blabla'
    },
    {
        employeeId: 2,
        email: 'blabla',
        firstName: 'blabla',
        lastName: 'blabla',
        dateOfBirth: new Date('1993/01/31'),
        salary: 13,
        positionId: 1,
        positionName: 'blabla'
    }]

describe('EmployeeService', () => {
    let  employeeService: EmployeeService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [EmployeeService]
        });

        employeeService = TestBed.get(EmployeeService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
      });

    it('should be created', inject([EmployeeService], (service: EmployeeService) => {
        employeeService.getEmployees().subscribe(posts => {
            expect(posts.length).toBe(2);
            expect(posts).toEqual(testData);
        });

        const request = httpTestingController.expectOne('http://localhost:5000/api/employees');
        expect(request.request.method).toBe('GET');
        request.flush(testData);
    }));
});

