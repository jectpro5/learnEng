import { Component, OnInit } from '@angular/core';
import {LanguageService} from 'shared/services/language.service';
import {Observable} from 'rxjs/Observable';
import {LanguageDataServiseService} from 'shared/services/language-data-servise.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {
    pageData$: Observable<any>;
    items1;
    current1;
    public isCollapsed = true;

  constructor(private langgServise: LanguageService, private languageDataService: LanguageDataServiseService) {
  }
  ngOnInit() {
      this.pageData$ = this.langgServise.getLanguage().pipe(
          switchMap(lang => this.languageDataService.getPageData(lang, 'how_it_work')),
      );
  }

}
