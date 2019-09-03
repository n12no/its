import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingAdress } from 'src/app/shared/billing.adress.model';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'app-billing-adress-edit',
  templateUrl: './billing-adress-edit.component.html',
  styleUrls: ['./billing-adress-edit.component.scss'],
})
export class BillingAdressEditComponent implements OnInit {
  regExpName: RegExp = new RegExp('[a-zA-Z äöüÄÖÜ]*');
  regExpNumber: RegExp = new RegExp('^[0-9]*$');
  regExpPostalcode: RegExp = new RegExp('^[0-9]{5}$');
  billingAdressForm: FormGroup;
  billingAdress: BillingAdress;

  constructor(private router: Router, private formBuilder: FormBuilder, private companyService: CompanyService) {
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

  ngOnInit() { }
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
    console.log(this.billingAdress);

  }
  onCancel() {
    this.billingAdressForm.reset();
  }

}
