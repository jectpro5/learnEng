import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
    items1;
    current1;
    public isCollapsed = true;

  constructor(private langgServise: LanguageService) {
      this.items1 = langgServise.getItems1();
      this.current1 = this.langgServise.getCurrent();
  }
    wEnterEvent2(number: string) {
        this.current1 = number;
    }

  ngOnInit() {
  }

}
