import { ComponentFixture, TestBed, tick, fakeAsync, async } from '@angular/core/testing';
import { RegisterEmployeeComponent } from 'src/app/employee/register-employee/register-employee.component';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TimepickerModule, TabsModule } from 'ngx-bootstrap';
import { AppComponent } from 'src/app/app.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SupplierCreateDialogComponent } from 'src/app/suppliers/supplier-create-dialog/supplier-create-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/ConfirmationDialog/ConfirmationDialog.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/home/login/login.component';
import { ItemListComponent } from 'src/app/items/item-list/item-list.component';
import { ItemDetailComponent } from 'src/app/items/item-detail/item-detail.component';
import { ItemCreateDialogComponent } from 'src/app/items/item-create-dialog/item-create-dialog.component';
import { ItemSuppliersCreateDialogComponent } from 'src/app/items/item-suppliers-create-dialog/item-suppliers-create-dialog.component';
import { SupplierListComponent } from 'src/app/suppliers/supplier-list/supplier-list.component';
import { SupplierDetailComponent } from 'src/app/suppliers/supplier-detail/supplier-detail.component';
import { OrderListComponent } from 'src/app/order/order-list/order-list.component';
import { OrderDetailComponent } from 'src/app/order/order-detail/order-detail.component';
import { OrderCreateDialogComponent } from 'src/app/order/order-create-dialog/order-create-dialog.component';
import { OrderItemsComponent } from 'src/app/order/order-items/order-items.component';
import { EmployeeListComponent } from 'src/app/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from 'src/app/employee/employee-detail/employee-detail.component';
import { OrderAddItemComponent } from 'src/app/order/order-add-item/order-add-item.component';
import { AccountingComponent } from 'src/app/accounting/accounting.component';
import { DropdownDirective } from 'src/app/_directives/dropdown.directive';
import { EmployeeRoleComponent } from 'src/app/employee/employee-role/employee-role.component';
import { EmployeeRoleAddDialogComponent } from 'src/app/employee/employee-role-add-dialog/employee-role-add-dialog.component';
import { EmployeeChangePasswordDialogComponent } from 'src/app/employee/employee-change-password-dialog/employee-change-password-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'ngx-moment';
import { Position } from '../../../app/_models/position.model';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { detectChanges } from '@angular/core/src/render3';


describe('RegisterEmployeeComponent', () => {
    let component: RegisterEmployeeComponent;
    let fixture: ComponentFixture<RegisterEmployeeComponent>;

    let authServiceFake;
    let alertifyServiceFake;
    let routerFake;
    let mockPositions: Position[] = [{positionId: 1, positionName: 'IT', lastUpdated: new Date(19930131) }];

    beforeEach(() => {
        authServiceFake = jasmine.createSpyObj('AuthService', ['getPositions', 'register']);
        alertifyServiceFake = jasmine.createSpyObj('AlertifyService', ['success', 'error']);
        authServiceFake.getPositions.and.returnValue(of(mockPositions));


        TestBed.configureTestingModule({
            declarations: [
                NavComponent,
                HomeComponent,
                LoginComponent,
                RegisterEmployeeComponent,
                ItemListComponent,
                ItemDetailComponent,
                ItemCreateDialogComponent,
                ItemSuppliersCreateDialogComponent,
                SupplierListComponent,
                SupplierDetailComponent,
                SupplierCreateDialogComponent,
                OrderListComponent,
                OrderDetailComponent,
                OrderCreateDialogComponent,
                OrderItemsComponent,
                ConfirmationDialogComponent,
                OrderAddItemComponent,
                AccountingComponent,
                EmployeeRoleAddDialogComponent,
                EmployeeChangePasswordDialogComponent 
            ],
            providers: [
                {provide: AuthService, useValue: authServiceFake},
                {provide: AlertifyService, useValue: alertifyServiceFake}
            ],
            imports: [
                AppMaterialModule,
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([
                    {path: 'employees', component: HomeComponent}
                ]),
                MomentModule,
                TimepickerModule.forRoot(),
                TranslateModule.forRoot(),
                TabsModule.forRoot(),
                FormsModule,
                ReactiveFormsModule
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(RegisterEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should set positions after initialization',() => {

        // component.ngOnInit();
        // tick();

        expect(component.positions).toBe(mockPositions);
    });

    describe('emailInput validation', () => {
        it('should be true when emailInput is EMPTY', () => {
            let emailInput = component.registerForm.controls['email'];
            let errors = emailInput.errors || {};
    
            expect(errors['required']).toBeTruthy();
        });
    
        it('should be false when emailInput is NOT empty', () => {
            let emailInput = component.registerForm.controls['email'];
    
            emailInput.setValue('email value is set');
            let errors = emailInput.errors || {};
    
            expect(errors['required']).toBeFalsy();
        });
    
        it('should be true when value is in WRONG format', () => {
            let emailInput = component.registerForm.controls['email'];
    
            emailInput.setValue('value is set');
            let errors = emailInput.errors || {};
    
            expect(errors['email']).toBeTruthy();
        });
    
        it('should be false when value is in CORRECT format', () => {
            let emailInput = component.registerForm.controls['email'];
    
            emailInput.setValue('correct@email.format');
            let errors = emailInput.errors || {};
    
            expect(errors['email']).toBeFalsy();
        });
    });

    describe('salary input validation', () => {

        it('should be valid when contains only positive numbers', () => {
            let salaryInput = component.registerForm.controls['salary'];

            salaryInput.setValue('1234');

            expect(salaryInput.valid).toBeTruthy();
        })

        it('should be INVALID when contains string', () => {
            let salaryInput = component.registerForm.controls['salary'];

            salaryInput.setValue('string is given');

            expect(salaryInput.valid).toBeFalsy();
        })

        it('should be INVALID when contains string', () => {
            let salaryInput = component.registerForm.controls['salary'];

            salaryInput.setValue('1232 number with string');

            expect(salaryInput.valid).toBeFalsy();
        })

        it('should be INVALID when contains negative number', () => {
            let salaryInput = component.registerForm.controls['salary'];

            salaryInput.setValue('-1');

            expect(salaryInput.valid).toBeFalsy();
        })

        

    });
    
    describe('onSubmit method called', () => {
        it('should call alertify error method ONCE when form is INVALID', () => {

            component.onSubmit();
    
            expect(alertifyServiceFake.error).toHaveBeenCalledTimes(1);
        });

        it('should call elrtify error message with suitable error message when form is INVALID ', () => {

            component.onSubmit();

            expect(alertifyServiceFake.error.calls.argsFor(0)).toContain('You have to fill out all necessary information.');
        });

        it('form is invalid when empty', () => {
            expect(component.registerForm.valid).toBeFalsy();
        });

        it('form is VALID when all input values are given', () => {
            setAllRegisterFormInpuetValues();

            expect(component.registerForm.valid).toBeTruthy();
        });

        it('should call AuthService register observable ONCE when form is VALID', () => {
            setAllRegisterFormInpuetValues();
            authServiceFake.register.and.returnValue(of(true));

            component.onSubmit();

            expect(authServiceFake.register.calls.count()).toBe(1);
        });

        it('should call AuthService register observable with suitable parameter when form is VALID', () => {
            setAllRegisterFormInpuetValues();
            authServiceFake.register.and.returnValue(of(true));

            component.onSubmit();

            expect(authServiceFake.register).toHaveBeenCalledWith(component.employeeToRegister);
        });

        it('should call AlertifyService Success method when register is successful', () => {
            setAllRegisterFormInpuetValues();
            authServiceFake.register.and.returnValue(of(true));

            component.onSubmit();

            expect(alertifyServiceFake.success).toHaveBeenCalledTimes(1);
        });

        it('should call AuthService register observable with suitable parameter when form is VALID', () => {
            setAllRegisterFormInpuetValues();
            authServiceFake.register.and.returnValue(throwError('error'));

            component.onSubmit();

            expect(alertifyServiceFake.error.calls.count()).toBe(1);
        });
    })
    function setAllRegisterFormInpuetValues() {
        component.registerForm.get('email').setValue('set@valid.email');
        component.registerForm.controls['firstName'].setValue('FirstName');
        component.registerForm.controls['lastName'].setValue('LastName');
        component.registerForm.get('dateOfBirth').setValue(new Date(19930131));
        component.registerForm.get('salary').setValue(1000);
        component.registerForm.controls['position'].setValue(1);
    }
})



