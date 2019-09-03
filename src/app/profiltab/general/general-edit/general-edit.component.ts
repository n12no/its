import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyAdress } from 'src/app/shared/company.adress.model';
import { CompanyService } from 'src/app/company/company.service';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-general-edit',
  templateUrl: './general-edit.component.html',
  styleUrls: ['./general-edit.component.scss'],
})
export class GeneralEditComponent implements OnInit {
  regExpName: RegExp = new RegExp('[a-zA-Z äöüÄÖÜ]*');
  regExpNumber: RegExp = new RegExp('^[0-9]*$');
  regExpPostalcode: RegExp = new RegExp('^[0-9]{5}$');
  // tslint:disable-next-line:max-line-length
  regExpHomepage: RegExp = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)');
  regExpFileInput: RegExp = new RegExp('([a-zA-Z0-9\s\\_\\.\\-\\(\\):])+(.eps|.ai|.pdf)$');
  companyForm: FormGroup;
  company: { companyName: any; companyHomepage: any; fileInput: any};
  value = false;
  companyInit: Company;
  companyAdress: CompanyAdress;
  constructor(public router: Router, public formBuilder: FormBuilder, private companyService: CompanyService) {
    
    this.companyInit = this.companyService.getCompany();
    this.companyAdress = this.companyService.getCompanyAdress();
    this.companyForm = formBuilder.group({
      companyName: [this.companyInit.name, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      // tslint:disable-next-line:max-line-length
      companyHomepage: [this.companyInit.url, Validators.compose([Validators.pattern(this.regExpHomepage), Validators.required])],
      fileInput: ['', Validators.compose([Validators.pattern(this.regExpFileInput), Validators.required])],
      street: [this.companyAdress.street, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      streetNumber: [this.companyAdress.streetNumber, Validators.compose([Validators.pattern(this.regExpNumber), Validators.required])],
      streetAddition: [this.companyAdress.streetAddition, Validators.pattern('')],
      postalcode: [this.companyAdress.postalcode, Validators.compose([Validators.pattern(this.regExpPostalcode), Validators.required])],
      town: [this.companyAdress.town, Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      country: [this.companyAdress.country, Validators.compose([Validators.pattern(this.regExpName), Validators.required])]
    });
   
  }

  ngOnInit() { }
  logForm() {
    console.log(this.companyForm);
    this.company = {
      companyName: this.companyForm.controls.companyName.value,
      companyHomepage: this.companyForm.controls.companyHomepage.value,
      fileInput: this.companyForm.controls.fileInput.value
    };
    // this.companyService.editCompany(this.company);
    this.companyForm.reset();

    console.log(this.company);

  }
  onCancel() {
    this.companyForm.reset();

  }

}
