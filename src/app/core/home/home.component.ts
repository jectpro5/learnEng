import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Info } from 'shared/models/info';
import { InfoService } from 'shared/services/info.service';

import { fade, fade2 } from '../../animations';
import { LanguageDataServiseService } from 'shared/services/language-data-servise.service';
import { LanguageService } from 'shared/services/language.service';
import { TaskService } from 'shared/services/task.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        fade,
        fade2
    ]
})
export class HomeComponent implements OnInit, OnDestroy {
    showSpinner = true;
    infos: Info[];
    filteredInfos: any[];
    subscription_inf: Subscription;

    items1;
    current1;
    public isCollapsed = true;
    pageData$: Observable<any>;
    firebaseLangg$: Observable<any>;

    form: FormGroup;

    constructor(private taskService: TaskService,
                private infoService: InfoService,
                private langgServise: LanguageService,
                private languageDataService: LanguageDataServiseService) {
        this.subscription_inf = this.infoService.getAll()
            .subscribe(infos => {
                this.filteredInfos = this.infos = infos;
                this.showSpinner = false;
            });
    }

    // filter(query: string) {
    //     this.filteredTasks = (query) ?
    //         this.tasks.filter(t => t.task.toLowerCase().includes(query.toLowerCase())) :
    //         this.tasks;
    // }
    filter(query: string) {
        this.filteredInfos = (query) ?
            this.infos.filter(inf => inf.title.toLowerCase().includes(query.toLowerCase())) :
            this.infos;
    }

    ngOnDestroy() {
        this.subscription_inf.unsubscribe();
    }


    ngOnInit() {
        this.pageData$ = this.langgServise.getLanguage().pipe(
            switchMap(lang => this.languageDataService.getPageData(lang, 'home'))
        );
        this.firebaseLangg$ = this.langgServise.getLanguage();
    }
}
