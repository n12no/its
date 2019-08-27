import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../company.service';
import { Person } from 'src/app/shared/person.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  regExpName: RegExp = new RegExp('[a-zA-Z äöüÄÖÜ]*');
  regExpPhonenumber: RegExp = new RegExp('^(?:\\+\\d{1,3}|0\\d{1,3}|00\\d{1,2})?(?:\\s?\\(\\d+\\))?(?:[-\\/\\s.]|\\d)+$');
  regExpMobilnumber: RegExp = new RegExp('^(?:\\+\\d{1,3}|0\\d{1,3}|00\\d{1,2})?(?:\\s?\\(\\d+\\))?(?:[-\\/\\s.]|\\d)+$');
  regExpEmail: RegExp = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$');
  contactForm: FormGroup;
  contact: Person;
  constructor(public router: Router, public formBuilder: FormBuilder, public companyService: CompanyService) {
    this.contact = this.companyService.getContact();
    this.contactForm = formBuilder.group({
      prename: [this.contact.prename, Validators.compose([
        Validators.pattern(this.regExpName), Validators.required
      ])],
      lastname: [this.contact.name, Validators.compose([
        Validators.pattern(this.regExpName), Validators.required
      ])],
      phonenumber: [this.contact.phonenumber, Validators.compose([
        Validators.pattern(this.regExpPhonenumber), Validators.required
      ])],
      mobilenumber: [this.contact.mobilenumber, Validators.compose([
        Validators.pattern(this.regExpMobilnumber), Validators.required
      ])],
      email: [this.contact.mail, Validators.compose([
        Validators.pattern(this.regExpEmail), Validators.required
      ])]
    });
  }

  ngOnInit() { }
  submitContact() {
    console.log(this.contactForm);
    this.contact = {
      prename: this.contactForm.controls.prename.value,
      name: this.contactForm.controls.lastname.value,
      phonenumber: this.contactForm.controls.phonenumber.value,
      mobilenumber: this.contactForm.controls.mobilenumber.value,
      mail: this.contactForm.controls.email.value
    };
    this.companyService.editContact(this.contact);
    this.contactForm.reset();
    console.log(this.contact);
  }
  onCancel() {
    this.contactForm.reset();
  }
}
