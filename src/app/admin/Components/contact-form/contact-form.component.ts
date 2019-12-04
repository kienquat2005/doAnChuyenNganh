import { ContactService } from 'shared/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  user = {};
  id;
  constructor(
    private router: Router,
    private contactService: ContactService,
    private route: ActivatedRoute) {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.contactService.get(this.id).take(1).subscribe(p => this.user = p);
     }

     save(user) {
      if (this.id) this.contactService.update(this.id, user);
      else this.contactService.create(user);
      this.router.navigate(['/admin/contacts'])
    }

    delete(){
      if(!confirm('Are you sure you want to delete this user?')) return;
      this.contactService.delete(this.id);
      this.router.navigate(['/admin/contacts']);

    }

  ngOnInit() {
  }

}
