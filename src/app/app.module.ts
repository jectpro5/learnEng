import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CustomFormsModule} from 'ng2-validation';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
// import {SingleMediaPlayer} from './single-media-player';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {HomeComponent} from './home/home.component';
import {PlanFormComponent} from './home/plan-form/plan-form.component';
import {TaskService} from './task.service';
import {EditComponent} from './edit/edit.component';
import {EditService} from './edit.service';
import {MainlistComponent} from './mainlist/mainlist.component';
import {CollapseModule} from 'ngx-bootstrap';
import {StartLearnComponent} from './start-learn/start-learn.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PricesComponent} from './prices/prices.component';
import {ForTeachersComponent} from './for-teachers/for-teachers.component';
import {ReviewsFormComponent} from './edit/reviews-form/reviews-form.component';
import {LanguageService} from './language.service';
import {SchedulerComponent} from './scheduler/scheduler.component';
import {EventService} from './event.service';
import {ScheduleComponent} from './schedule/schedule.component';
import {HttpClientModule} from '@angular/common/http';
import {LanguageDataServiseService} from './language-data-servise.service';
import { LoaderComponent } from './share/loader/loader/loader.component';


@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        PlanFormComponent,
        EditComponent,
        MainlistComponent,
        StartLearnComponent,
        HowItWorksComponent,
        ContactsComponent,
        PricesComponent,
        ForTeachersComponent,
        ReviewsFormComponent,
        SchedulerComponent,
        ScheduleComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        CustomFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        CollapseModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: MainlistComponent},
            {path: 'home', component: HomeComponent},
            {path: 'contacts', component: ContactsComponent},
            {path: 'for-teachers', component: ForTeachersComponent},
            {path: 'prices', component: PricesComponent},
            {path: 'edit', component: EditComponent},
            {path: 'schedule', component: ScheduleComponent},
            {path: 'home/:id', component: PlanFormComponent},
            {path: 'edit/:id', component: ReviewsFormComponent},
            {path: 'plan-form', component: PlanFormComponent},
            {path: 'reviews-form', component: ReviewsFormComponent},
            {path: 'how-it-works', component: HowItWorksComponent},
            {path: 'start-learn', component: StartLearnComponent}
        ])
    ],
    providers: [
        TaskService,
        EditService,
        LanguageService,
        EventService,
        LanguageDataServiseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
