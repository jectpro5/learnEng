import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { CollapseModule } from 'ngx-bootstrap';
import { LanguageService } from 'shared/services/language.service';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CoreModule } from './core/core.module';
import { InitialModule } from './initial/initial.module';
import { ScheduleModule } from './scheduler/schedule.module';
import {AuthService} from './admin/services/auth.service';
import {AuthGuardService} from './admin/services/auth-guard.service';

// import {SingleMediaPlayer} from './single-media-player';


@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        BrowserAnimationsModule,
        HttpModule,
        CustomFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        CollapseModule,
        HttpClientModule,
        AppRoutingModule,
        InitialModule,
        CoreModule,
        ScheduleModule
    ],
    providers: [
        LanguageService,
        AuthService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
