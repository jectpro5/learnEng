import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from '../models/task';
import {fade, fade2} from '../animations';
import {LanguageService} from '../language.service';
import {Observable} from 'rxjs/Observable';
import {switchMap} from 'rxjs/operators';
import {LanguageDataServiseService} from '../language-data-servise.service';
import {FormBuilder, FormGroup} from '@angular/forms';

declare let require: any;

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
    public LOGO = require('./img/polynesia.jpg');
    title = 'learn english';
    tasks: Task[];
    filteredTasks: any[];
    subscription_en: Subscription;

    items1;
    current1;
    public isCollapsed = true;
    pageData$: Observable<any>;

    form: FormGroup;

    constructor(private taskService: TaskService,
                private langgServise: LanguageService,
                private fb: FormBuilder,
                private languageDataService: LanguageDataServiseService) {
        this.subscription_en = this.taskService.getAll()
            .subscribe(tasks => {
                this.filteredTasks = this.tasks = tasks;
                this.showSpinner = false;
            });

        // this.items1 = langgServise.getItems1();
        //  this.current1 = this.langgServise.getCurrent();

        this.form = this.fb.group({
            en: this.fb.group({
                'title': this.fb.control(null),
                'comment': this.fb.control(null),
                'description': this.fb.control(null),
            }),
            uk: this.fb.group({
                'title': this.fb.control(null),
                'comment': this.fb.control(null),
                'description': this.fb.control(null),
            }),
            ru: this.fb.group({
                'title': this.fb.control(null),
                'comment': this.fb.control(null),
                'description': this.fb.control(null),
            }),
            fr: this.fb.group({
                'title': this.fb.control(null),
                'comment': this.fb.control(null),
                'description': this.fb.control(null),
            })
        });
    }

    filter(query: string) {
        this.filteredTasks = (query) ?
            this.tasks.filter(t => t.task.toLowerCase().includes(query.toLowerCase())) :
            this.tasks;
    }

    ngOnDestroy() {
        this.subscription_en.unsubscribe();
    }

    // wEnterEvent2(number: string) {
    //     this.current1 = number;
    // }

    ngOnInit() {
        // console.log(this.form.controls);

        this.pageData$ = this.langgServise.getLanguage().pipe(
            switchMap(lang => this.languageDataService.getPageData(lang, 'home'))
        );
    }

    getKeys(controls) {
        return Object.keys(controls);
    }

    save() {
        // this.form.value;
    }
}
