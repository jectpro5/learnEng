import { Component, OnInit } from '@angular/core';
import {EditService} from '../edit.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from '../models/task';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
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

    wEnterEvent2(number: string) {
        this.current1 = number;
    }
  ngOnInit() {
  }

}
