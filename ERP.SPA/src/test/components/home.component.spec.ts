import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthService } from 'src/app/_services/auth.service';
import { LoginComponent } from 'src/app/home/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { EmployeeChangePasswordDialogComponent } from 'src/app/employee/employee-change-password-dialog/employee-change-password-dialog.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountingComponent } from 'src/app/accounting/accounting.component';
import { EmployeeListComponent } from 'src/app/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from 'src/app/employee/employee-detail/employee-detail.component';
import { RegisterEmployeeComponent } from 'src/app/employee/register-employee/register-employee.component';
import { ItemListComponent } from 'src/app/items/item-list/item-list.component';
import { SupplierListComponent } from 'src/app/suppliers/supplier-list/supplier-list.component';
import { OrderListComponent } from 'src/app/order/order-list/order-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabDirective, TabsModule, TimepickerModule, DayPickerComponent } from 'ngx-bootstrap';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SupplierCreateDialogComponent } from 'src/app/suppliers/supplier-create-dialog/supplier-create-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/ConfirmationDialog/ConfirmationDialog.component';
import { ItemCreateDialogComponent } from 'src/app/items/item-create-dialog/item-create-dialog.component';
import { ItemSuppliersCreateDialogComponent } from 'src/app/items/item-suppliers-create-dialog/item-suppliers-create-dialog.component';
import { ItemDetailComponent } from 'src/app/items/item-detail/item-detail.component';
import { SupplierDetailComponent } from 'src/app/suppliers/supplier-detail/supplier-detail.component';
import { OrderDetailComponent } from 'src/app/order/order-detail/order-detail.component';
import { OrderCreateDialogComponent } from 'src/app/order/order-create-dialog/order-create-dialog.component';
import { OrderItemsComponent } from 'src/app/order/order-items/order-items.component';
import { OrderAddItemComponent } from 'src/app/order/order-add-item/order-add-item.component';
import { DropdownDirective } from 'src/app/_directives/dropdown.directive';
import { EmployeeRoleComponent } from 'src/app/employee/employee-role/employee-role.component';
import { EmployeeRoleAddDialogComponent } from 'src/app/employee/employee-role-add-dialog/employee-role-add-dialog.component';
import { MomentModule } from 'ngx-moment';
import { AppComponent } from 'src/app/app.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    let authServiceFake;
    let localStorageFake;

    beforeEach(() => {
        authServiceFake = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
        localStorageFake = jasmine.createSpyObj('localStorage', ['getItem']);

        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
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
                EmployeeListComponent,
                EmployeeDetailComponent,
                OrderAddItemComponent,
                AccountingComponent,
                DropdownDirective,
                EmployeeRoleComponent,
                EmployeeRoleAddDialogComponent,
                EmployeeChangePasswordDialogComponent
            ],
            providers:[
                {provide: AuthService, useValue: authServiceFake},
                AlertifyService,
            ],
            imports:[
                TranslateModule.forRoot(),
                MomentModule,
                TimepickerModule.forRoot(),
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                TabsModule.forRoot(),
                HttpClientModule,
                AppMaterialModule 
            ]
        }).compileComponents();

        fixture  = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    describe('isFirstLogin', () => {
        it('should render employee change password dialog when user is logging in for the first time',() =>{
            spyOn(window.localStorage, 'getItem').and.callFake( (key:string):String => {
                return 'true';
            });
    
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;

            expect(element.querySelector('app-employee-change-password-dialog')).toBeTruthy();
        });
    })

    describe('loggedIn', () => {
        it('should render login screen when user is not logged in', fakeAsync(() => {
            let element = fixture.debugElement.nativeElement;
            authServiceFake.isLoggedIn.and.returnValue(false);
    
            tick();
            fixture.detectChanges();
    
            expect(element.querySelector('app-login')).toBeTruthy();
        }));

        it('should render main home screen when user is logged in and not first log in', () => {
            authServiceFake.isLoggedIn.and.returnValue(true);
            
            fixture.detectChanges();
            let element = fixture.nativeElement;
    
            expect(element.querySelector('#services')).toBeTruthy();
        });
    })
})