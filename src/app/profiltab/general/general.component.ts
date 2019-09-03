import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { CompanyAdress } from 'src/app/shared/company.adress.model';
import { CompanyService } from 'src/app/company/company.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  company: Company;
  companyAdress: CompanyAdress;
  constructor(private companyService: CompanyService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('company.component: ngOnInit');
    this.company = this.companyService.getCompany();
    this.companyAdress = this.companyService.getCompanyAdress();
    console.log(this.company);
  }
  onEdit() {
    this.router.navigateByUrl('tabs/profiltab/general/edit');
  }
}
