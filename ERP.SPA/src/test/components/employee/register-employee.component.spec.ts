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
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


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
                RouterTestingModule,
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

    it('should exist', fakeAsync(() => {

        component.ngOnInit();
        tick();

        expect(component.positions).toBe(mockPositions);
    }));

})