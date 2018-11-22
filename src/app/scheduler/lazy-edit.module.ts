import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { EditComponent } from './edit/edit.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
    imports: [
        SharedModule,
        ScheduleRoutingModule,
    ],
    declarations: [
        EditComponent
    ]
})
export class LazyEditModule {
}
