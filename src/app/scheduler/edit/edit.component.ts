import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditService} from 'shared/services/edit.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from 'shared/models/task';
import {fade, fade2} from '../../animations';
import {LanguageService} from 'shared/services/language.service';

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
    showSpinner = true;
    title = 'learn english';
    tasks: Task[];
    filteredTasks: any[];
    subscription: Subscription;
    items1;
    current1;
    public isCollapsed = true;


    constructor(private taskService: EditService, private langgServise: LanguageService) {
        this.subscription = this.taskService.getAll()
            .subscribe(tasks => {
                this.filteredTasks = this.tasks = tasks;
                this.showSpinner = false;
            });
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
