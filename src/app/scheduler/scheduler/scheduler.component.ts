import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import 'dhtmlx-scheduler';
import {} from '@types/dhtmlxscheduler';
import {EventService} from 'shared/services/event.service';
import {Subscription} from 'rxjs/Subscription';
import {Task} from 'shared/models/task';
import {EditService} from 'shared/services/edit.service';

@Component({
    encapsulation: ViewEncapsulation.None,
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']

})
export class SchedulerComponent implements OnInit, OnDestroy {
    tasks: Task[];
    filteredTasks: any[];
    subscription: Subscription;
    @ViewChild('scheduler_here') schedulerContainer: ElementRef;
  constructor(private eventService: EventService) {
      this.subscription = this.eventService.getAll2()
          .subscribe(tasks => this.filteredTasks = this.tasks = tasks);
  }
    filter(query: string) {
        this.filteredTasks = (query) ?
            this.tasks.filter(t => t.task.toLowerCase().includes(query.toLowerCase())) :
            this.tasks;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
  ngOnInit() {
      // scheduler.init(this.schedulerContainer.nativeElement, new Date());
      scheduler.config.xml_date = '%Y-%m-%d %H:%i';
      scheduler.init(this.schedulerContainer.nativeElement);
      this.eventService.get()
          .then((data) => {
              scheduler.parse(data, 'json');
          });
  }

}
