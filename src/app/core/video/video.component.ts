import { Component, OnInit } from '@angular/core';
import {LanguageService} from 'shared/services/language.service';
import {LanguageDataServiseService} from 'shared/services/language-data-servise.service';
import {Observable} from 'rxjs/Observable';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-prices',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
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
