import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/company/company.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BillingAdress } from 'src/app/shared/billing.adress.model';

@Component({
  selector: 'app-billing-adress',
  templateUrl: './billing-adress.component.html',
  styleUrls: ['./billing-adress.component.scss'],
})
export class BillingAdressComponent implements OnInit {
  billingAdress: BillingAdress;

  constructor(private companyService: CompanyService, private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('BillingAdressComponent: ngOnInit');
    this.billingAdress = this.companyService.getBillingAdress();
    console.log(this.billingAdress);
  }

}
