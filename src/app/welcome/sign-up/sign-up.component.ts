import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Company } from 'src/app/shared/company.model';
import { CrudService } from 'src/app/services/crud.service';
import { Person } from 'src/app/shared/person.model';
import { CompanyAdress } from 'src/app/shared/company.adress.model';
import { BillingAdress } from 'src/app/shared/billing.adress.model';
import { create } from 'domain';
import { FirestoreCompanyAdressService } from 'src/app/services/firestore-company-adress.service';
import { FirestoreContactService } from 'src/app/services/firestore-contact.service';
import { FirestoreBillingAdressService } from 'src/app/services/firestore-billing-adress.service';

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
              public authService: AuthenticationService, private crudService: CrudService,
              private firestoreCompanyAdress: FirestoreCompanyAdressService, private fireStoreContact: FirestoreContactService,
              private fireStoreBillingAdress: FirestoreBillingAdressService) {
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
        const user = res.user;
        this.createCompanyRecord(this.signUpForm.controls.companyName.value, user.uid).then((docRef) => {
          console.log();
          this.createCompanyAdressRecord(
            this.signUpForm.controls.street.value,
            this.signUpForm.controls.streetNumber.value,
            this.signUpForm.controls.streetAddition.value,
            this.signUpForm.controls.postalcode.value,
            this.signUpForm.controls.town.value,
            this.signUpForm.controls.country.value, docRef.id);
          this.createContactRecord(docRef.id, user.email, user.uid);
          this.createBillingAdressRecord(docRef.id);
        });
        // this.router.navigateByUrl('/company');
      }, err => {
        console.log(err);
        console.log(err.message);
      });

  }
  onCancel() {
    this.signUpForm.reset();
  }
  createCompanyRecord(companyName: string, uidP: string) {
    const data = ({
      id: '',
      name: companyName,
      // User for Authentication
      uid: uidP,
      url: '',
      logoPath: ''

    });
    return this.crudService.createCompany(data);
  }
  createBillingAdressRecord(cidP: string ) {
      const data = ({
        cid: cidP,
        billingCompanyName: '',
        street: '',
        streetNumber: '',
        streetAddition: '',
        postalcode: '',
        town: '',
        country: '',
        note: ''
      });
      this.fireStoreBillingAdress.createRecord(data).then ((resp) => {
        console.log(resp);
      }).catch((error) => {
        console.log(error);
      });
    }
  createContactRecord(cid: string, email: string, uidP?: string) {
    if (!uidP) {
      uidP = null;
    }
    const data = ({
      companyRef: cid,
      prename: '',
      name: '',
      mail: email,
      phonenumber: '',
      mobilnumber: '',
      uid: uidP
    });
    this.fireStoreContact.createContact(data).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.log(error);
    });
  }
  createCompanyAdressRecord(
    streetP: string, streetNumberP: string, streetAdditionP: string,
    postalcodeP: string, townP: string, countryP: string, cidP: string) {
    const data = ({
      companyRef: cidP,
      street: streetP,
      streetNumber: streetNumberP,
      streetAddition: streetAdditionP,
      postalcode: postalcodeP,
      town: townP,
      country: countryP
    });
    this.firestoreCompanyAdress.createCompanyAdressRecord(data).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.log(error);
    });

  }

}
