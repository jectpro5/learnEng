import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LanguageService {

    constructor(private http: HttpClient) {
    }

    private language$ = new BehaviorSubject(localStorage.getItem('language') ? localStorage.getItem('language') : 'en');

    setLanguage(language: string): void {
        this.language$.next(language);
        localStorage.setItem('language', language);
    }

    getLanguage() {
        return this.language$;
    }

    getMenu(lang): Observable<any> {
        return this.http.get('/assets/data/' + lang + '/navbar.json');
    }
    getMenuDropdown(lang): Observable<any> {
        return this.http.get('/assets/data/' + lang + '/nav_dropdown.json');
    }

    // items1 = ['en', 'ru', 'ua'];
    // current1 = 'en';
    //
    // getItems1() {
    //     return ['en', 'ru', 'ua'];
    // }
    //
    // getCurrent() {
    //     return 'en';
    // }
}
