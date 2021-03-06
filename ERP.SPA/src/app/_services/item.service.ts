import { ItemSuppliers } from './../_models/item-suppliers.model';
import { Item } from './../_models/item.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
  itemSuppliers: ItemSuppliers[];
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Item[]>(`${environment.baseurl}/items`);
  }

  getActiveItems() {
    return this.http.get<Item[]>(`${environment.baseurl}/items/active`);
  }

  getItem(itemId: number) {
    return this.http.get<Item>(`${environment.baseurl}/items/${itemId}`);
  }

   getItemSuppliers(itemId: number) {
    return this.http.get<ItemSuppliers[]>(`${environment.baseurl}/itemSuppliers/${itemId}`);
  }

  getItemsOfSupplier(supplierId: number) {
    return this.http.get<ItemSuppliers[]>(`${environment.baseurl}/itemSuppliers/supplier/${supplierId}`);
  }

  createItem(itemToCreate) {
    return this.http.post(`${environment.baseurl}/items`, itemToCreate);
  }

  createItemSuppliers(itemSuppliersToCreate) {
    return this.http.post(`${environment.baseurl}/itemSuppliers`, itemSuppliersToCreate);
  }

  deleteItemSupplier(itemId: number, supplierId: number) {
    return this.http.delete(`${environment.baseurl}/itemSuppliers/${itemId}/${supplierId}`);
  }

  updateItem(itemToTupdate: Item) {
    return this.http.put(`${environment.baseurl}/items/${itemToTupdate.itemId}`, itemToTupdate);
  }
}
