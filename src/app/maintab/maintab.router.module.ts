import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintabComponent } from './maintab.component';

const routes: Routes = [
  {
    path: '',
    component: MaintabComponent,
    children: [
      {
        path: 'event',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../event/event.module').then(m => m.EventModule)
          }
        ]
      },
      {
        path: 'profiltab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profiltab/profiltab.module').then(m => m.ProfiltabModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/event',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/event',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainTabRoutingModule { }
