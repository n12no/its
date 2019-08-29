import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from '../shared/company.model';
import { CompanyAdress } from '../shared/company.adress.model';
import { BillingAdress } from '../shared/billing.adress.model';
import { Person } from '../shared/person.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  @ViewChild('tabs') tabs : IonTabs;
  company: Company;
  companyAdress: CompanyAdress;
  billingAdress: BillingAdress;
  person: Person;
  selectedTab = 'profil';
  constructor(public companyService: CompanyService, public router: Router, public authService: AuthenticationService) { }

  ngOnInit() {
    console.log('company.component: ngOnInit');
    this.company = this.companyService.getCompany();
    this.companyAdress = this.companyService.getCompanyAdress();
    this.billingAdress = this.companyService.getBillingAdress();
    this.person = this.companyService.getContact();
    console.log(this.company);
  }
  onLogOut() {
    this.authService.logoutUser().then(() => {
      console.log('LogOut');
      this.router.navigateByUrl('');
    }, err => {
      console.log(err);
      console.log(err.message);
    });
  }
  onClick(e: any) {
    const id: string = e.srcElement.id;
    switch (id) {
      case '0': {
        // Allgemeine Firmeninformationen
        console.log(id);
        this.router.navigateByUrl('tabs/profil/company-edit');
        break;
      }
      case '1': {
        // Ansprechpartner
        console.log(id);
        this.router.navigateByUrl('tabs/profil/contact-edit');
        break;
      }
      case '2': {
        // Firmenadresse
        console.log(id);
        this.router.navigateByUrl('tabs/profil/company-adress-edit');
        break;
      }
      case '3': {
        // Rechnungsadresse
        console.log(id);
        this.router.navigateByUrl('tabs/profil/billing-adress-edit');
        break;
      }
      default: {
        console.log('default: Event' + e);
        break;
      }
    }
  }

}
