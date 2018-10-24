import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {
    items1;
    current1;
    public isCollapsed = true;

  constructor(private langgServise: LanguageService) {
  }
  ngOnInit() {
  }

}
