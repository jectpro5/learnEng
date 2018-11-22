import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoFormComponent } from './home/info-form/info-form.component';

const schoolRoutes: Routes = [
    {path: ':id', component: InfoFormComponent},
    {path: '', component: HomeComponent},
];

@NgModule({
  imports: [
      RouterModule.forChild(schoolRoutes)
  ],
    exports: [
        RouterModule
    ]
})
export class SchoolRoutingModule { }
