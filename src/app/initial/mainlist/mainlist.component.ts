import {Component, OnInit} from '@angular/core';
import {fade, fade2, slide, slideBottom, slideRight} from '../../animations';
import {LanguageService} from 'shared/services/language.service';
import {Observable} from 'rxjs/Observable';
import {share, shareReplay, switchMap} from 'rxjs/operators';
import {LanguageDataServiseService} from 'shared/services/language-data-servise.service';

@Component({
    selector: 'app-mainlist',
    templateUrl: './mainlist.component.html',
    styleUrls: ['./mainlist.component.scss'],
    animations: [
        fade,
        slide,
        slideRight,
        fade2,
        slideBottom
    ]
})
export class MainlistComponent implements OnInit {
    items1;
    current1;
    public isCollapsed = true;
    pageData$: Observable<any>;

    constructor(private langgServise: LanguageService, private languageDataService: LanguageDataServiseService) {
    }

    ngOnInit() {
        this.pageData$ = this.langgServise.getLanguage().pipe(
            switchMap(lang => this.languageDataService.getPageData(lang, 'mainlist')),
        );
    }

}
