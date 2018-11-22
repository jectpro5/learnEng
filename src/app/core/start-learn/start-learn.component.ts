import { Component, OnInit } from '@angular/core';
import {LanguageService} from 'shared/services/language.service';

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
    LOGO = require('../../../assets/images/img_main/school-1.jpg');
    sl_img2 = require('../../../assets/images/img_main/women.jpg');

  constructor(private langgServise: LanguageService) {
  }
  ngOnInit() {
  }

}
