import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyService } from './company.service';
import { ContactEditComponent } from './edit/contact-edit/contact-edit.component';
import { CompanyEditComponent } from './edit/company-edit/company-edit.component';
import { CompanyAdressEditComponent } from './edit/company-adress-edit/company-adress-edit.component';
import { BillingAdressEditComponent } from './edit/billing-adress-edit/billing-adress-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  declarations: [
    CompanyComponent,
    ContactEditComponent,
    CompanyEditComponent,
    CompanyAdressEditComponent,
    BillingAdressEditComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
    {
      path: '',
      component: CompanyComponent
    },
    {
      path: 'contact-edit',
      component: ContactEditComponent
    },
    {
      path: 'company-edit',
      component: CompanyEditComponent
    },
    {
      path: 'company-adress-edit',
      component: CompanyAdressEditComponent
    },
    {
      path: 'billing-adress-edit',
      component: BillingAdressEditComponent
    }
  ])
  ],
  providers: [
    CompanyService,
    AuthenticationService
  ]
})
export class CompanyModule { }
