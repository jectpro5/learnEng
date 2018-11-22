import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class InfoService {

  constructor(private db: AngularFireDatabase) { }

    create(info) {
        return this.db.list('/infos').push(info);
    }

    getAll() {
        return this.db.list('/infos');
    }

    get(infoId) {
        return this.db.object('/infos/' + infoId);
    }

    update(infoId, infos) {
        return this.db.object('/infos/' + infoId).update(infos);
    }

    delete(infoId) {
        return this.db.object('/infos/' + infoId).remove();
    }

}
