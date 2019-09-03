import { Routes, RouterModule } from '@angular/router';
import { ProfilTabComponent } from './profiltab.component';

import { NgModule } from '@angular/core';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import { BillingAdressComponent } from './billing-adress/billing-adress.component';
import { CompanyEditComponent } from '../company/edit/company-edit/company-edit.component';
import { GeneralEditComponent } from './general/general-edit/general-edit.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { BillingAdressEditComponent } from './billing-adress/billing-adress-edit/billing-adress-edit.component';
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
                    },
                    {
                        path: 'edit',
                        component: GeneralEditComponent
                    }
                ]

            },
            {
                path: 'contact',
                children: [
                    {
                        path: '',
                        component: ContactComponent
                    },
                    {
                        path: 'edit',
                        component: ContactEditComponent
                    }
                ]
            },
            {
                path: 'billing-adress',
                children: [
                    {
                        path: '',
                        component: BillingAdressComponent
                    }, {
                        path: 'edit',
                        component: BillingAdressEditComponent
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
