import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditService} from '../edit.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from '../models/task';
import {fade, fade2} from '../animations';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
    animations: [
        fade2,
        fade
    ]
})
export class EditComponent implements OnInit, OnDestroy {
    title = 'learn english';
    products$;
    tasks: Task[];
    filteredTasks: any[];
    subscription: Subscription;
    items1;
    current1;
    public isCollapsed = true;


    constructor(private taskService: EditService, private langgServise: LanguageService) {
        this.subscription = this.taskService.getAll()
            .subscribe(tasks => this.filteredTasks = this.tasks = tasks);

        this.items1 = langgServise.getItems1();
        this.current1 = this.langgServise.getCurrent();
    }

    onClick(number: string) {
        this.current1 = number;
    }

    filter(query: string) {
        this.filteredTasks = (query) ?
            this.tasks.filter(t => t.task.toLowerCase().includes(query.toLowerCase())) :
            this.tasks;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    wEnterEvent2(number: string) {
        this.current1 = number;
    }

  ngOnInit() {
  }

}
