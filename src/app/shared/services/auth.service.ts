import { AppUser } from 'shared/models/app-user';
import { UserService } from 'shared/services/user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private router: Router)  {
    this.user$ = afAuth.authState;
  }

  onLogin(user){
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(res=>{
      console.log(res);
      // alert("Login successfully")
      this.router.navigateByUrl('/products');
    }).catch(err=>{
      console.log(err);
      alert("Login failed")
    })
  }
    onRegister(user){
    return firebase.auth().createUserWithEmailAndPassword(user.email,user.password);
  }
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$() : Observable<AppUser>{
    return  this.user$
      .switchMap(user => {
        if(user) return this.userService.get(user.uid);

        return Observable.of(null);
      });
  }

}
