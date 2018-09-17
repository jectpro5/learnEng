import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from '../models/task';
import {fade, fade2} from '../animations';
import {LanguageService} from '../language.service';

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
    public LOGO = require('./img/polynesia.jpg');
    title = 'learn english';
    tasks: Task[];
    filteredTasks: any[];
    subscription_en: Subscription;

    items1;
    current1;
    public isCollapsed = true;

    constructor(private taskService: TaskService, private langgServise: LanguageService) {
       this.subscription_en = this.taskService.getAll()
           .subscribe(tasks => this.filteredTasks = this.tasks = tasks);
        this.items1 = langgServise.getItems1();
        this.current1 = this.langgServise.getCurrent();
    }

    filter(query: string) {
       this.filteredTasks = (query) ?
           this.tasks.filter(t => t.task.toLowerCase().includes(query.toLowerCase())) :
           this.tasks;
    }

    ngOnDestroy() {
       this.subscription_en.unsubscribe();
    }

    wEnterEvent2(number: string) {
        this.current1 = number;
    }
    ngOnInit() {
    }
}
