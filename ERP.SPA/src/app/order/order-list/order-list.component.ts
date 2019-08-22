import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from './../../_services/auth.service';
import { OrderCreateDialogComponent } from './../order-create-dialog/order-create-dialog.component';
import { OrderService } from './../../_services/order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Order } from '../../_models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:false}) sort: MatSort;

  orders: Order[];
 
  displayedColumns = ['orderId',  'status', 'supplierName', 'requestedDate', 'totalCost'];

  selectedOrder;
  dataSource = new MatTableDataSource<Order>();

  constructor(private orderService: OrderService, 
    private dialog: MatDialog, 
    private authService: AuthService, 
    private alertifyService: AlertifyService) {}

  ngOnInit() {  
    this.getOrders();   
  }

  getOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
      this.setDataSource();  
    });
  }

  setDataSource() {
    this.dataSource.data = this.orders;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onOrderSelected(order: any) {
    this.selectedOrder = order;
  }

  addOrder() {
    if(this.authService.isPurchaseAllowed()) {
      let dialogRef = this.dialog.open(OrderCreateDialogComponent, {
        height: '800px',
        width: '1200px',
      }).afterClosed().subscribe(result => {
        if(result != null) {
          this.orders.push(result);
          this.setDataSource();
        }
      });
    } else {
      this.alertifyService.error(this.authService.NO_PERMISSION_ERROR_MESSAGE);
    }
  }

  orderDeleted(order: Order) {
    this.orders.splice(this.orders.indexOf(order), 1);
    this.selectedOrder = null;
    this.setDataSource();
  }
}
