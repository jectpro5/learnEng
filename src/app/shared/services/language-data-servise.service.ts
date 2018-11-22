import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {share, shareReplay} from 'rxjs/operators';

@Injectable()
export class LanguageDataServiseService {

  constructor(private http: HttpClient) { }

  getPageData(lang, page) {
    return this.http.get('/assets/data/' + lang + '/' + page + '.json').pipe(
        share()
    );
  }
}
