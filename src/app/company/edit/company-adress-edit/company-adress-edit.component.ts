import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyAdress } from 'src/app/shared/company.adress.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-adress-edit',
  templateUrl: './company-adress-edit.component.html',
  styleUrls: ['./company-adress-edit.component.scss'],
})
export class CompanyAdressEditComponent implements OnInit {
  regExpName: RegExp = new RegExp('[a-zA-Z äöüÄÖÜ]*');
  regExpNumber: RegExp = new RegExp('^[0-9]*$');
  regExpPostalcode: RegExp = new RegExp('^[0-9]{5}$');
  companyAdressForm: FormGroup;
  companyAdress: CompanyAdress;
  constructor(public router: Router, public formBuilder: FormBuilder, public companyService: CompanyService) {
    this.companyAdress = this.companyService.getCompanyAdress();
    this.companyAdressForm = formBuilder.group({
      street: [this.companyAdress.street, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      streetNumber: [this.companyAdress.streetNumber, Validators.compose([Validators.pattern(this.regExpNumber), Validators.required])],
      streetAddition: [this.companyAdress.streetAddition, Validators.pattern('')],
      postalcode: [this.companyAdress.postalcode, Validators.compose([Validators.pattern(this.regExpPostalcode), Validators.required])],
      town: [this.companyAdress.town, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      country: [this.companyAdress.country, Validators.compose([Validators.pattern(this.regExpName), Validators.required])]
    });
  }

  ngOnInit() { }
  submitCompanyAdress() {
    this.companyAdress = {
      street: this.companyAdressForm.controls.street.value,
      streetNumber: this.companyAdressForm.controls.streetNumber.value,
      streetAddition: this.companyAdressForm.controls.streetAddition.value,
      postalcode: this.companyAdressForm.controls.postalcode.value,
      town: this.companyAdressForm.controls.town.value,
      country: this.companyAdressForm.controls.country.value
    };
    this.companyService.editCompanyAdress(this.companyAdress);
    this.companyAdressForm.reset();
    console.log(this.companyAdress);
  }
  onCancel() {
    this.companyAdressForm.reset();
  }
}
