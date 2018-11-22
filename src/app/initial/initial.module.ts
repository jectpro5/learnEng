import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainlistComponent} from './mainlist/mainlist.component';
import {BsNavbarComponent} from '../bs-navbar/bs-navbar.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
      SharedModule,
      RouterModule.forChild([])
  ],
  declarations: [
      MainlistComponent
  ]
})
export class InitialModule { }
