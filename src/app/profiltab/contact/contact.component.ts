import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/person.model';
import { CompanyService } from 'src/app/company/company.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  person: Person;
  constructor(private companyService: CompanyService, private router: Router, private authService: AuthenticationService) {
   }

  ngOnInit() {
    console.log('contact.component: ngOnInit');
    this.person = this.companyService.getContact();
    console.log(this.person);
  }

}
