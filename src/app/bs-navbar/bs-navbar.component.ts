import {Component} from '@angular/core';
import {LanguageService} from '../language.service';
import {Observable} from 'rxjs/Observable';
import {map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

    list = {
        'en': 'En',
        'uk': 'Uk',
    };

    current1;
    public isCollapsed = true;
    menu$: Observable<any>;

    constructor(private langgServise: LanguageService) {
       this.menu$ = this.langgServise.getLanguage().pipe(
            switchMap(lang => this.langgServise.getMenu(lang))
        );
    }

    onClick(lang: string) {
        this.langgServise.setLanguage(lang);
    }

    getList() {
        return Object.keys(this.list);
    }

}
