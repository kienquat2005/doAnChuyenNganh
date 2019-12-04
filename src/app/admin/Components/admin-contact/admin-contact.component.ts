import { ContactService } from 'shared/services/contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent  {
  contact$;

  constructor(private contactService: ContactService) {
    this.contact$ = contactService.getContact();
   }

}
