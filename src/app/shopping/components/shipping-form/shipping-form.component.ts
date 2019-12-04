import { ShoppingCart } from 'shared/models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from 'shared/models/order';
import 'rxjs/add/operator/take'


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;
  id;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.orderService.get(this.id).take(1).subscribe(p => this.shipping = p);

    }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  async ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder(order) {
    if (this.id) this.orderService.update(this.id, order);
    else { let orders = new Order(this.userId, this.shipping, this.cart);
     let result = await this.orderService.placeOrder(orders)
    }
    this.router.navigateByUrl('/my/orders');
  }
  delete(){
    if(!confirm('Are you sure you want to delete this my order?')) return;
    this.orderService.delete(this.id);
    this.router.navigate(['/my/orders']);

  }

}
