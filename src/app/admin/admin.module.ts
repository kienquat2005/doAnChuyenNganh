import { AuthGuardService } from './../shared/services/auth-guard.service';
import { ContactService } from 'shared/services/contact.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DataTableModule} from 'angular5-data-table';
@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    AdminContactComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    DataTableModule.forRoot()
  ],
  providers: [
    AdminAuthGuardService,
    AuthGuardService,
    ContactService
  ]
})
export class AdminModule { }
