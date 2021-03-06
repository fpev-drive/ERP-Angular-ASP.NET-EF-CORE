import { ItemCreateDialogComponent } from './../item-create-dialog/item-create-dialog.component';
import { ItemService } from '../../_services/item.service';
import { Item } from '../../_models/item.model';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:false}) sort: MatSort;

  items: Item[];
 
  displayedColumns = ['itemId', 'name', 'retailPrice', 'quantityOnHand', 'status'];
  dataSource = new MatTableDataSource<Item>();

  selectedItem;

  constructor(private itemService: ItemService, private dialog: MatDialog) {}
  
  ngOnInit() {  
    this.getItems();   
  }

  getItems() {
    this.itemService.getItems().subscribe((data: Item[]) => {
    this.items = data;
    this.setDataSource();  
    });
  }
  
  setDataSource() {
    this.dataSource.data = this.items;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onItem(item: any) {
    this.selectedItem = item;
  }

  addItem() {
      let dialogRef = this.dialog.open(ItemCreateDialogComponent, {
      height: '450px',
      width: '1700px',
    }).afterClosed().subscribe(result => {
      if(result != null) {
        this.items.push(result);
        this.setDataSource();
      }
    });
  }
}
