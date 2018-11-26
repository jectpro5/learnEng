import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { ContactsComponent } from './contacts/contacts.component';
import { ForTeachersComponent } from './for-teachers/for-teachers.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { StartLearnComponent } from './start-learn/start-learn.component';
import {LoginComponent} from '../admin/login/login.component';

@NgModule({
  imports: [
      SharedModule,
      RouterModule.forChild([]),
  ],
  declarations: [
      HowItWorksComponent,
      StartLearnComponent,
      ForTeachersComponent,
      ContactsComponent,
      LoginComponent
]
})
export class CoreModule { }
