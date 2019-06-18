import {Action} from '@ngrx/store';
import { Supplier } from '../_models/supplier.model';

export const CREATE_SUPPLIER = 'CREATE_SUPPLIER';

export class CreateSupplier implements Action {
    readonly type = CREATE_SUPPLIER;
    payload: Supplier;
}