import { ItemSuppliersCreateDialogComponent } from './items/item-suppliers-create-dialog/item-suppliers-create-dialog.component';
import { ItemCreateDialogComponent } from './items/item-create-dialog/item-create-dialog.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { AlertifyService } from './_services/alertify.service';
import { RegisterEmployeeComponent } from './employee/register-employee/register-employee.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './home/login/login.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemService } from './_services/item.service';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { SupplierService } from './_services/supplier.service';
import { SupplierDetailComponent } from './suppliers/supplier-detail/supplier-detail.component';
import { MatStepperModule, MatIconModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSelectModule, MatSortModule } from '@angular/material';
import { SupplierCreateDialogComponent } from './suppliers/supplier-create-dialog/supplier-create-dialog.component';
import { ConfirmationDialogComponent } from './ConfirmationDialog/ConfirmationDialog.component';
import {TabsModule} from 'ngx-bootstrap';


@NgModule({
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
    ConfirmationDialogComponent
],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,  
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:5000']
      }
    }),
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    TabsModule.forRoot()
  ],
  //TODO MIERT VAN AZ KOMMENTELTBEN SupplierListComponent??? 2018.07.10
  //entryComponents: [SupplierCreateDialogComponent, ConfirmationDialogComponent, SupplierListComponent, ItemCreateDialogComponent, ItemSuppliersCreateDialogComponent],
  entryComponents: [SupplierCreateDialogComponent, ConfirmationDialogComponent, ItemCreateDialogComponent, ItemSuppliersCreateDialogComponent],
  providers: [
    AuthService,
    ItemService,
    SupplierService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
