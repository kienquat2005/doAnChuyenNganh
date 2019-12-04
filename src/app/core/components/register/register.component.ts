import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as firebase from 'firebase'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      repeatPassword: ["", Validators.required]
    });
  }
  onRegister() {
    var user = null;
    const { email, password, repeatPassword, name } = this.registerForm.value;
    if (password == repeatPassword) {
      this.auth
        .onRegister({ email, password })
        .then(function() {
          user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: name
          })
        })
        .catch(err => {
          console.log(err);
        });
        this.router.navigateByUrl('/login')
    } else {
      alert(" password incorrect");
    }

  }


}
