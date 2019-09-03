import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/company/company.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BillingAdress } from 'src/app/shared/billing.adress.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-adress',
  templateUrl: './billing-adress.component.html',
  styleUrls: ['./billing-adress.component.scss'],
})
export class BillingAdressComponent implements OnInit {
  regExpName: RegExp = new RegExp('[a-zA-Z äöüÄÖÜ]*');
  regExpNumber: RegExp = new RegExp('^[0-9]*$');
  regExpPostalcode: RegExp = new RegExp('^[0-9]{5}$');
  billingAdressForm: FormGroup;
  billingAdress: BillingAdress;

  constructor(private router: Router, private companyService: CompanyService, private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.billingAdress = this.companyService.getBillingAdress();
    this.billingAdressForm = formBuilder.group({
      companyName: [this.billingAdress.companyName, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      street: [this.billingAdress.street, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      streetNumber: [this.billingAdress.streetNumber, Validators.compose([Validators.pattern(this.regExpNumber), Validators.required])],
      streetAddition: [this.billingAdress.streetAddition, Validators.compose([Validators.pattern('')])],
      postalcode: [this.billingAdress.postalcode, Validators.compose([Validators.pattern(this.regExpPostalcode), Validators.required])],
      town: [this.billingAdress.town, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      country: [this.billingAdress.country, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      note: [this.billingAdress.note, Validators.compose([Validators.pattern(this.regExpName)])]
    });
  }

  ngOnInit() {
    console.log('BillingAdressComponent: ngOnInit');
    this.billingAdress = this.companyService.getBillingAdress();
    console.log(this.billingAdress);
  }
  onEdit() {
    this.router.navigateByUrl('tabs/profiltab/billing-adress/edit');
  }
  submitBillingAdress() {
    this.billingAdress = {
      companyName: this.billingAdressForm.controls.companyName.value,
      street: this.billingAdressForm.controls.street.value,
      streetNumber: this.billingAdressForm.controls.streetNumber.value,
      streetAddition: this.billingAdressForm.controls.streetAddition.value,
      postalcode: this.billingAdressForm.controls.postalcode.value,
      town: this.billingAdressForm.controls.town.value,
      country: this.billingAdressForm.controls.country.value,
      note: this.billingAdressForm.controls.note.value
    };
    this.companyService.editBillingAdress(this.billingAdress);
    this.billingAdressForm.reset();
    this.router.navigateByUrl('tabs/profiltab/billing-adress');
    console.log(this.billingAdress);

  }
  onCancel() {
    this.billingAdressForm.reset();
    this.router.navigateByUrl('tabs/profiltab/billing-adress');
  }

}
