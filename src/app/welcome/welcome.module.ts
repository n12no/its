import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { firebaseConfig } from '../firebase.conf';
import { CrudService } from '../services/crud.service';
import { FirestoreCompanyAdressService } from '../services/firestore-company-adress.service';
import { FirestoreContactService } from '../services/firestore-contact.service';
import { FirestoreBillingAdressService } from '../services/firestore-billing-adress.service';
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    WelcomeComponent,
    SignInComponent,
    SignUpComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
    {
      path: '',
      component: WelcomeComponent
    },
    {
      path: 'sign-in',
      component: SignInComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    }
  ]),
  AngularFireAuthModule
  ],
  providers: [
    AuthenticationService,
    CrudService,
    FirestoreCompanyAdressService,
    FirestoreContactService,
    FirestoreBillingAdressService
  ]
})
export class WelcomeModule { }
