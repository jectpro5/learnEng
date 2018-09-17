import { Component, OnInit } from '@angular/core';
import {fade, fade2, slide, slideBottom, slideRight} from '../animations';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css'],
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
    public isCollapsed2 = true;
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
