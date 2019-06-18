import {Action} from '@ngrx/store';
import { Supplier } from '../_models/supplier.model';
import * as SupplierActions  from './supplier.actions';



let suppliers: Supplier[] = [
    {address: 'cim', lastUpdated: new Date('20190614'), city:'varos', contactName:'Jordan', name:'Ceg',phoneNumber: '1234', status:'Active',supplierId: 1}
];

export function supplierReducer(state = suppliers, action: SupplierActions.CreateSupplier) {
    switch(action.type) {
        case SupplierActions.CREATE_SUPPLIER:
            return {
                ...state,
               suppliers: [...state, action.payload]
            };

        default:
            return state;

    }
}
