import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss'],
})
export class CompanyEditComponent implements OnInit {
  regExpName: RegExp = new RegExp('[a-zA-Z äöüÄÖÜ]*');
  // tslint:disable-next-line:max-line-length
  regExpHomepage: RegExp = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)');
  regExpFileInput: RegExp = new RegExp('([a-zA-Z0-9\s\\_\\.\\-\\(\\):])+(.eps|.ai|.pdf)$');
  companyForm: FormGroup;
  company: { companyName: any; companyHomepage: any; fileInput: any; };
  value = false;
  constructor(public router: Router, public formBuilder: FormBuilder, public companyService: CompanyService) {
    this.companyForm = formBuilder.group({
      companyName: ['', Validators.compose([Validators.pattern(this.regExpName), Validators.required])],
      // tslint:disable-next-line:max-line-length
      companyHomepage: ['', Validators.compose([Validators.pattern(this.regExpHomepage), Validators.required])],
      fileInput: ['', Validators.compose([Validators.pattern(this.regExpFileInput), Validators.required])]
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
    this.companyService.editCompany(this.company);
    this.companyForm.reset();
    console.log(this.company);

  }
  onCancel() {
    this.companyForm.reset();
  }

}
