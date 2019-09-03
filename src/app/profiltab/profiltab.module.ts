import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilTabComponent } from './profiltab.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilTabRoutingModule } from './profiltab.router.module';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import { BillingAdressComponent } from './billing-adress/billing-adress.component';
<<<<<<< HEAD
import { FirestoreContactService } from '../services/firestore-contact.service';
=======
import { CompanyService } from '../company/company.service';
import { GeneralEditComponent } from './general/general-edit/general-edit.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { BillingAdressEditComponent } from './billing-adress/billing-adress-edit/billing-adress-edit.component';
>>>>>>> 0b715c7b63d3f8a22d3424b76a8f5974131a0f9d


@NgModule({
  declarations: [
    ProfilTabComponent,
    GeneralComponent,
    ContactComponent,
    BillingAdressComponent, 
    GeneralEditComponent,
    ContactEditComponent,
    BillingAdressEditComponent
   
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ProfilTabRoutingModule
  ],
  providers: [
<<<<<<< HEAD
    FirestoreContactService
=======
  
>>>>>>> 0b715c7b63d3f8a22d3424b76a8f5974131a0f9d
  ]
})
export class ProfiltabModule { }
