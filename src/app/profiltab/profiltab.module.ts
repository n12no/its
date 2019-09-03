import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilTabComponent } from './profiltab.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilTabRoutingModule } from './profiltab.router.module';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import { BillingAdressComponent } from './billing-adress/billing-adress.component';
import { FirestoreContactService } from '../services/firestore-contact.service';


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
    FirestoreContactService
  ]
})
export class ProfiltabModule { }
