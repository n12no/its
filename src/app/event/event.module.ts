import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventComponent
      }
    ])
  ]
})
export class EventModule { }
