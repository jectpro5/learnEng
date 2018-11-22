import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class TaskService {

    constructor(private db: AngularFireDatabase) {
    }

    create(task) {
        return this.db.list('/content_chng').push(task);
    }

    getAll() {
        return this.db.list('/content_chng');
    }

    get(taskId) {
        return this.db.object('/content_chng/' + taskId);
    }

    update(taskId, tasks) {
        return this.db.object('/content_chng/' + taskId).update(tasks);
    }

    delete(taskId) {
        return this.db.object('/content_chng/' + taskId).remove();
    }
}
