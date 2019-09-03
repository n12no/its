import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/person.model';
import { CompanyService } from 'src/app/company/company.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirestoreContactService } from 'src/app/services/firestore-contact.service';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  person: Person;
  data: Observable<Person>;
  constructor(private companyService: CompanyService, private router: Router, private authService: AuthenticationService,
              private firestoreContact: FirestoreContactService) {
   }

  ngOnInit() {
    console.log('contact.component: ngOnInit');
    this.person = this.companyService.getContact();
    const contact = this.firestoreContact.readContact(auth().currentUser.uid);
    console.log(contact);
  }
  onEdit() {
    this.router.navigateByUrl('tabs/profiltab/contact/edit');
  }

}
