import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditService } from 'shared/services/edit.service';
import { EventService } from 'shared/services/event.service';
import { InfoService } from 'shared/services/info.service';
import { LanguageDataServiseService } from 'shared/services/language-data-servise.service';
import { TaskService } from 'shared/services/task.service';

import { InfoFormComponent } from '../core/home/info-form/info-form.component';
import { ReviewsFormComponent } from '../scheduler/edit/reviews-form/reviews-form.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  declarations: [
      LoaderComponent,
      ReviewsFormComponent,
      InfoFormComponent
  ],
    exports: [
        LoaderComponent,
        ReviewsFormComponent,
        InfoFormComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        InfoService,
        TaskService,
        EditService,
        EventService,
        LanguageDataServiseService
    ]
})
export class SharedModule { }
