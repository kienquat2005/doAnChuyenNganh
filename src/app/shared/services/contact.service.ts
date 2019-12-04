import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db: AngularFireDatabase) { }

  create(contact) {
    return this.db.list('/products').push(contact);
  }
  getContact() :Observable<User[]>{
    return this.db.list('/users');
  }
  get(contactId) {
    return this.db.object('/users/' + contactId);
  }
  update(contactId, contact) {
    return this.db.object('/users/' + contactId).update(contact);
  }
  delete(contactId) {
    return this.db.object('/users/' + contactId).remove();
  }

}
