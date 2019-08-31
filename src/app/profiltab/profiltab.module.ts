import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilTabComponent } from './profiltab.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfilTabRoutingModule } from './profiltab.router.module';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import { BillingAdressComponent } from './billing-adress/billing-adress.component';


@NgModule({
  declarations: [
    ProfilTabComponent,
    GeneralComponent,
    ContactComponent,
    BillingAdressComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ProfilTabRoutingModule
  ]
})
export class ProfiltabModule { }
