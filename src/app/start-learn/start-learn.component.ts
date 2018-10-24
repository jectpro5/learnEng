import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../language.service';

declare let require: any;
@Component({
  selector: 'app-start-learn',
  templateUrl: './start-learn.component.html',
  styleUrls: ['./start-learn.component.css']
})
export class StartLearnComponent implements OnInit {
    items1;
    current1;
    public isCollapsed = true;
    public LOGO = require('../img_main/school-1.jpg');
    public sl_img2 = require('../img_main/women.jpg');

  constructor(private langgServise: LanguageService) {
      // this.items1 = langgServise.getItems1();
      // this.current1 = this.langgServise.getCurrent();
  }

    onClick(number: string) {
        this.current1 = number;
    }
    wEnterEvent2(number: string) {
        this.current1 = number;
    }
  ngOnInit() {
  }

}
