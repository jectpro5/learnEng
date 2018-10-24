import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../language.service';
import {LanguageDataServiseService} from '../language-data-servise.service';
import {Observable} from 'rxjs/Observable';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
    items1;
    current1;
    public isCollapsed = true;
    pageData$: Observable<any>;

  constructor(private langgServise: LanguageService, private languageDataService: LanguageDataServiseService) {
  }

  ngOnInit() {
      this.pageData$ = this.langgServise.getLanguage().pipe(
          switchMap(lang => this.languageDataService.getPageData(lang, 'video')),
      );
  }

}
