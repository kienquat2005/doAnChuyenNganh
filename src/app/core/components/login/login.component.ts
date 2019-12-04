import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  login() {
    this.authService.login();
  }
  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }
  onLogin() {
    //call service func
    this.authService.onLogin(this.formLogin.value);
    this.router.navigateByUrl('/login');
  }

}
