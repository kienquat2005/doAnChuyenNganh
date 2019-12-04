import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartItem } from './../../../shared/models/shopping-cart-item';
import { ShoppingCart } from './../../../shared/models/shopping-cart';
import { OrderService } from 'shared/services/order.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;
  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) {
    this.orders$ = orderService.getOrders();


  }
  delete(id) {
    if(!confirm('Are you sure you want to delete this customers?')) return;
    this.orderService.delete(id);
    this.router.navigateByUrl('/admin/orders')
  }
}
