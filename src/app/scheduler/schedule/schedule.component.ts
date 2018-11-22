import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditService} from 'shared/services/edit.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from 'shared/models/task';
import {LanguageService} from 'shared/services/language.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {
    tasks: Task[];
    schejule: any[];
    subscription: Subscription;

    showSpinner = true;
    public isCollapsed = true;
  constructor(private taskService: EditService, private langgServise: LanguageService) {
      this.subscription = this.taskService.getAll()
          .subscribe(tasks => {
              this.schejule = this.tasks = tasks;
              this.showSpinner = false;
          });

      // this.items1 = langgServise.getItems1();
      // this.current1 = this.langgServise.getCurrent();
  }
  ngOnInit() {
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
}

}
