import { Injectable } from '@angular/core';
// import {Event} from '../models/event';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class EventService {
    // Event = Event[];
    id: string;
    start_date: string;
    end_date: string;
    text: string;
    get() {
        return Promise.resolve([
            {id: 1, start_date: '2018-06-16 00:00', end_date: '2018-06-16 13:00', text: 'Event 1'},
            {id: 2, start_date: '2018-06-17 00:00', end_date: '2018-06-17 13:00', text: 'Event 2'},
        ]);
    }
  constructor(private db: AngularFireDatabase) { }
    create2(task) {
        return this.db.list('/tasks').push(task);
    }

    getAll2() {
        return this.db.list('/tasks');
    }

    get2(taskId) {
        return this.db.object('/tasks/' + taskId);
    }

    update2(taskId, tasks) {
        return this.db.object('/tasks/' + taskId).update(tasks);
    }

    delete2(taskId) {
        return this.db.object('/tasks/' + taskId).remove();
    }

}
