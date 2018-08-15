import { OrderItems } from './../_models/order-items.model';
import { Order } from './../_models/order.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Order[]>(environment.baseurl + 'Orders');
  }

  getOrderDetails(orderId: number) {
    return this.http.get<Order>(environment.baseurl + 'Orders/' + orderId);
  }

  updateOrder(orderToUpdate: Order) {
    return this.http.put(environment.baseurl + 'orders/' + orderToUpdate.orderId, orderToUpdate);
  }

  createOrder(orderToCreate: Order) {
    return this.http.post(environment.baseurl + 'orders', orderToCreate);
  }
  
  getOrderItems(orderId: number) {
    return this.http.get<OrderItems[]>(environment.baseurl + 'OrderItems/' + orderId);
  }
  
  createOrderItem(itemsOfOrderToCreate: OrderItems[]) {
    return this.http.post(environment.baseurl + 'orderItems', itemsOfOrderToCreate);
  }

  removeOrderItem(orderId: number, itemId: number) {
    return this.http.delete(environment.baseurl + 'orderItems/' + orderId + '/' + itemId);
  }
}