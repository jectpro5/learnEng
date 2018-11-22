import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './video/video.component';

const schoolRoutes: Routes = [
    {path: '', component: VideoComponent}
];
@NgModule({
  imports: [
      RouterModule.forChild(schoolRoutes)
  ],
  declarations: []
})
export class VideoRoutingModule { }
