import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { ReviewsFormComponent } from './edit/reviews-form/reviews-form.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {AuthGuardService} from '../admin/services/auth-guard.service';

const scheduleRoutes: Routes = [
    {path: 'reviews-form', component: ReviewsFormComponent},
    {path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(scheduleRoutes)
    ],
    declarations: [
        ScheduleComponent,
        SchedulerComponent
    ]
})
export class ScheduleModule {
}
