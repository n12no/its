import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyService } from './company.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  declarations: [
    CompanyComponent
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
    }
  ])
  ],
  providers: [
    CompanyService,
    AuthenticationService
  ]
})
export class CompanyModule { }
