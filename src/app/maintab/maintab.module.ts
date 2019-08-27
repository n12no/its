import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainTabRoutingModule } from './maintab.router.module';

import { MaintabComponent } from './maintab.component';
import { EventModule } from '../event/event.module';
import { CompanyModule } from '../company/company.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainTabRoutingModule,
    EventModule,
    CompanyModule
  ],
  declarations: [
    MaintabComponent
  ]
})
export class MainTabModule {}
