import { NgModule } from '@angular/core';
import {VideoComponent} from './video/video.component';
import {SharedModule} from 'shared/shared.module';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import {VideoRoutingModule} from './video-routing.module';

@NgModule({
  imports: [
      SharedModule,
      VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule,
      VideoRoutingModule
  ],
  declarations: [
      VideoComponent
  ]
})
export class LazyVideoModule { }
