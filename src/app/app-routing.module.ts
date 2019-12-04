import { OrderFormComponent } from './shopping/components/order-form/order-form.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { AdminContactComponent } from './admin/Components/admin-contact/admin-contact.component';
import { RegisterComponent } from './core/components/register/register.component';
import { ProductFormComponent } from './admin/Components/product-form/product-form.component';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/Components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/Components/admin-orders/admin-orders.component';
import { LoginComponent } from './core/components/login/login.component';
import { ContactFormComponent } from './admin/Components/contact-form/contact-form.component';

const routes: Routes = [
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      { path: 'check-out/:id', component: CheckOutComponent, canActivate: [AuthGuardService]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      { path: 'order-form/:id', component: OrderFormComponent, canActivate: [AuthGuardService]},

      { path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/contacts',
        component: AdminContactComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/contact/:id',
        component: ContactFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
