import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import { ContactsComponent } from './core/contacts/contacts.component';
import { ForTeachersComponent } from './core/for-teachers/for-teachers.component';
import { InfoFormComponent } from './core/home/info-form/info-form.component';
import { HowItWorksComponent } from './core/how-it-works/how-it-works.component';
import { StartLearnComponent } from './core/start-learn/start-learn.component';
import { MainlistComponent } from './initial/mainlist/mainlist.component';

const appRoutes: Routes = [
    {path: '', component: MainlistComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'for-teachers', component: ForTeachersComponent},
    {path: 'edit', loadChildren: './scheduler/lazy-edit.module#LazyEditModule'},
    {path: 'video', loadChildren: './core/lazy-video.module#LazyVideoModule'},
    {path: 'school', loadChildren: './core/lazy-school.module#LazySchoolModule'},
    {path: 'info-form', component: InfoFormComponent},
    {path: 'how-it-works', component: HowItWorksComponent},
    {path: 'start-learn', component: StartLearnComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
