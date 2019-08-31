import { Routes, RouterModule } from '@angular/router';
import { ProfilTabComponent } from './profiltab.component';

import { NgModule } from '@angular/core';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import { BillingAdressComponent } from './billing-adress/billing-adress.component';
// const routes: Routes = [
//     {
//         path: '/tabs/profiltab', redirectTo: 'profiltab/general', pathMatch: 'full'
//     },
//     { path: 'profiltab/general', component: GeneralComponent},
//     { path: 'contact', component: GeneralComponent},
//     { path: 'billing-adress', component: GeneralComponent}
// ];
const routes: Routes = [
    {
        path: '',
        component: ProfilTabComponent,
        children: [
            {
                path: 'general',
                children: [
                    {
                        path: '',
                        component: GeneralComponent
                    }
                ]
            },
            {
                path: 'contact',
                children: [
                    {
                        path: '',
                        component: ContactComponent
                    }
                ]
            },
            {
                path: 'billing-adress',
                children: [
                    {
                        path: '',
                        component: BillingAdressComponent
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'general',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilTabRoutingModule { }
