import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Position } from "./../_models/position.model";
import { Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Supplier } from "../_models/supplier.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SupplierService {
  constructor(private http: HttpClient) {}

  getSuppliers() {
    return this.http.get<Supplier[]>(`${environment.baseurl}/suppliers`);
  }

  getActiveSuppliers() {
    return this.http.get<Supplier[]>(`${environment.baseurl}/suppliers/active`);
  }

  getSupplier(supplierId: number) {
    return this.http.get<Supplier>(
      `${environment.baseurl}/suppliers/${supplierId}`
    );
  }

  updateSupplier(supplier: Supplier) {
    return this.http.put(
      `${environment.baseurl}/suppliers/${supplier.supplierId}`,
      supplier
    );
  }

  createSupplier(supplier: Supplier) {
    return this.http.post(`${environment.baseurl}/suppliers`, supplier);
  }

  deleteSupplier(supplier: Supplier) {
    return this.http.delete(
      `${environment.baseurl}/suppliers/${supplier.supplierId}`
    );
  }
}
