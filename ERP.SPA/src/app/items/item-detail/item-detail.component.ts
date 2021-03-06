import { StatusService } from './../../_services/status.service';
import { ItemSuppliersCreateDialogComponent } from './../item-suppliers-create-dialog/item-suppliers-create-dialog.component';
import { ItemSuppliers } from './../../_models/item-suppliers.model';
import { ConfirmationDialogComponent } from './../../ConfirmationDialog/ConfirmationDialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from './../../_services/item.service';
import { AlertifyService } from './../../_services/alertify.service';
import { Item } from './../../_models/item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  @Input() item: Item;
  itemSuppliers: ItemSuppliers[];
  statuses: string[];

  constructor(private statusService: StatusService,
    private aleritfyService: AlertifyService,
    private itemService: ItemService,
    private dialog: MatDialog
  ) { }

  ngOnChanges() {
    this.getItem();
    this.getSuppliers();
    this.getStatuses();
  }

  getItem() {
    this.itemService.getItem(this.item.itemId).subscribe((item: Item) => {
      this.item = Object.assign(this.item, item);
    });
  }

  getSuppliers() {
    this.itemService.getItemSuppliers(this.item.itemId).subscribe((data: ItemSuppliers[]) => {
      this.itemService.itemSuppliers = data;
      this.itemSuppliers = this.itemService.itemSuppliers;
    });
  }

  getStatuses() {
    this.statuses = this.statusService.getStatuses();
  }

  addSupplier() {
    let dialogRef = this.dialog.open(ItemSuppliersCreateDialogComponent, {
      height: '450px',
      width: '1700px',
      data: this.item
    });
  }

  updateItem() {
    this.itemService.updateItem(this.item).subscribe((success: Item) => {
      this.item = success;
      this.aleritfyService.success('updateSuccess');
    },
      error => {
        this.aleritfyService.error(error.error);
        this.getItem();
      });
  }

  onDeleteItemSupplier(itemSupplier: ItemSuppliers) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      height: '250px',
      width: '500px',
      data: { message: 'Are you sure you want to delete?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
       this.deleteItemSupplier(itemSupplier);
      }
    });
  }

  private deleteItemSupplier(itemSupplier: ItemSuppliers) {
    this.itemService.deleteItemSupplier(itemSupplier.itemId, itemSupplier.supplierId).subscribe(result => {
      this.aleritfyService.success('deleteSuccess');
      this.itemSuppliers.splice(this.itemSuppliers.findIndex(element => element.supplierId === itemSupplier.supplierId), 1);
    })
  }
}
