import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { HomeComponent } from './home/home.component';
import { SchoolRoutingModule } from './school-routing.module';

@NgModule({
    imports: [
        SharedModule,
        SchoolRoutingModule
    ],
    declarations: [
        HomeComponent,
    ]
})
export class LazySchoolModule {
}
