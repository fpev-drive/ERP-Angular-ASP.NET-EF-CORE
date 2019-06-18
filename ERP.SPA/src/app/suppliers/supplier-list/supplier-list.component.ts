import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierService } from '../../_services/supplier.service';
import { Supplier } from '../../_models/supplier.model';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SupplierCreateDialogComponent } from 'src/app/suppliers/supplier-create-dialog/supplier-create-dialog.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
suppliers :Supplier[];
  //  suppliers: Observable<{ suppliers: Supplier[]}>
  displayedColumns = ['supplierId', 'name', 'status'];

  selectedSupplier;
  constructor(
    private store: Store<{suppliers: Supplier[]}>,
    private supplierService: SupplierService, 
    private dialog: MatDialog
  ) {}
  dataSource = new MatTableDataSource<Supplier>();
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {  
    this.getSuppliers();   
  }

  getSuppliers() {
    this.store.select('supplier').subscribe(result => {
      this.suppliers = result;
   });
   this.setDataSource();
    // this.supplierService.getSuppliers().subscribe(data => {
    // this.suppliers = data;
    // this.setDataSource();  
    // });
  }

  addSupplier() {
    let dialogRef = this.dialog.open(SupplierCreateDialogComponent, {
      height: '450px',
      width: '1700px',
    }).afterClosed().subscribe(result => {
      if(result != null) {
       // this.suppliers.push(result);
        this.setDataSource();
      }
    });
  }

  setDataSource() {
    this.dataSource.data = this.suppliers;
    // this.dataSource.data = this.suppliers;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  onSupplier(supplier: any) {
    this.selectedSupplier = supplier;
  }

  updateSupplier(updatedSupplier: Supplier) {
    // for (let index = 0; index < this.suppliers.length; index++) {
    //   const element = this.suppliers[index];
    //   if(element.supplierId === updatedSupplier.supplierId)
    //     this.suppliers[index] = updatedSupplier;
    // }
    this.setDataSource();
  }
}