import {Component} from '@angular/core';
import {LanguageService} from 'shared/services/language.service';
import {Observable} from 'rxjs/Observable';
import {map, switchMap} from 'rxjs/operators';
import {AuthService} from '../admin/services/auth.service';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
    list = {
        'en': 'En',
        'uk': 'Uk',
        'ru': 'Ru',
        'pl': 'Pl',
    };
    isCollapsed = true;
    menu$: Observable<any>;
    dropd$: Observable<any>;

    constructor(private langgServise: LanguageService, public auth: AuthService) {
        this.menu$ = this.langgServise.getLanguage().pipe(
            switchMap(lang => this.langgServise.getMenu(lang))
        );
        this.dropd$ = this.langgServise.getLanguage().pipe(
            switchMap(lang => this.langgServise.getMenuDropdown(lang))
        );
    }

    onClick(lang: string) {
        this.langgServise.setLanguage(lang);
    }

    forCollapse() {
        return this.isCollapsed = true;
    }

    getList() {
        return Object.keys(this.list);
    }

    logout() {
        this.auth.logout();
        return this.isCollapsed = true;
    }

}
