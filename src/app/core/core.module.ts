import { AuthGuardService } from './../shared/services/auth-guard.service';
import { ContactService } from 'shared/services/contact.service';
import { AdminAuthGuardService } from './../admin/services/admin-auth-guard.service';
import { AdminContactComponent } from './../admin/Components/admin-contact/admin-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ContactFormComponent } from 'app/admin/Components/contact-form/contact-form.component';



@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminContactComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AdminAuthGuardService,
    ContactService,
    AuthGuardService
  ],
  exports: [
    BsNavbarComponent,
    AdminContactComponent
  ]
})
export class CoreModule { }
