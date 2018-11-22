import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {ReviewsFormComponent} from './edit/reviews-form/reviews-form.component';
import {ScheduleComponent} from './schedule/schedule.component';

const scheduleRoutes: Routes = [
    {path: '', component: EditComponent},
    {path: ':id', component: ReviewsFormComponent}
];

@NgModule({
  imports: [
      RouterModule.forChild(scheduleRoutes)
  ],
    exports: [
        RouterModule
    ]
})
export class ScheduleRoutingModule { }
