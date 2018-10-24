import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {LanguageService} from '../language.service';

declare let require: any;
@Component({
  selector: 'app-for-teachers',
  templateUrl: './for-teachers.component.html',
  styleUrls: ['./for-teachers.component.css']
})
export class ForTeachersComponent implements OnInit {
    items1;
    current1;
    public isCollapsed = true;
    // public video11 = require('../video/videogular.mp4');
    videoList = [
        {
            name: 'Item 1',
            slug: 'Item-1',
            embed: `5Z4_RLP7ytQ`
        },
        {
            name: 'Item 2',
            slug: 'Item-2',
            embed: `LrhyihlqB-U`
        },
        {
            name: 'Item 3',
            slug: 'Item-3',
            embed: null
        }
    ];

  constructor(private sanitizer: DomSanitizer, private langgServise: LanguageService) {
  }

  ngOnInit() {
  }
  getEmbedUrl(item) {
      return this.sanitizer.bypassSecurityTrustResourceUrl
      ('https://www.youtube.com/embed/' + item.embed);
  }

}
