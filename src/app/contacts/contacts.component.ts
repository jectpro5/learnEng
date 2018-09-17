import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    items1;
    current1;
    public isCollapsed = true;

  constructor(private langgServise: LanguageService) {
      this.items1 = langgServise.getItems1();
      this.current1 = this.langgServise.getCurrent();
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
