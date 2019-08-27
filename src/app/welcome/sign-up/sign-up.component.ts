import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Company } from 'src/app/shared/company.model';
import { CrudService } from 'src/app/services/crud.service';
import { Person } from 'src/app/shared/person.model';
import { CompanyAdress } from 'src/app/shared/company.adress.model';
import { BillingAdress } from 'src/app/shared/billing.adress.model';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  regExpName: RegExp = new RegExp('[a-zA-Z äöüÄÖÜ]*');
  regExpNumber: RegExp = new RegExp('^[0-9]*$');
  regExpPostalcode: RegExp = new RegExp('^[0-9]{5}$');
  regExpEmail: RegExp = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$');
  signUpForm: FormGroup;
  constructor(public router: Router, public formBuilder: FormBuilder,
              public authService: AuthenticationService, private crudService: CrudService) {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(this.regExpEmail), Validators.required])],
      password: ['', Validators.compose([Validators.pattern(''), Validators.required])],
      companyName: ['', Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      street: ['', Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      streetNumber: ['', Validators.compose([Validators.pattern(this.regExpNumber), Validators.required])],
      streetAddition: ['', Validators.compose([Validators.pattern('')])],
      postalcode: ['', Validators.compose([Validators.pattern(this.regExpPostalcode), Validators.required])],
      town: ['', Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      country: ['', Validators.compose([Validators.pattern(this.regExpName), Validators.required])]
    });
  }

  ngOnInit() { }
  signUp() {
    this.authService.registerUser(this.signUpForm.controls.email.value, this.signUpForm.controls.password.value)
      .then(res => {
        console.log(res);
        console.log('Account created');
        this.createCompanyRecord();
        this.router.navigateByUrl('/company');
      }, err => {
        console.log(err);
        console.log(err.message);
      });

  }
  onCancel() {
    this.signUpForm.reset();
  }
  createCompanyRecord() {
    let data: Company;
    data = new Company(
      this.signUpForm.controls.companyName.value,
      new CompanyAdress(this.signUpForm.controls.street.value,
        this.signUpForm.controls.streetNumber.value,
        this.signUpForm.controls.streetAddition.value,
        this.signUpForm.controls.postalcode.value,
        this.signUpForm.controls.town.value,
        this.signUpForm.controls.country.value),
      new BillingAdress('', null, '', null, '', '', '', ''),
      new Person('', '', this.signUpForm.controls.email.value, '', ''),
      'www.google.de',
      'logoPath',
      this.authService.userDetails().uid
    );
    let record: {};
    record = Object.assign(data);
    this.crudService.createCompany(record).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log(error);
    });
  }

}
