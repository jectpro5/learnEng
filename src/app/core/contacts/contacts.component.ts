import { Component, OnInit } from '@angular/core';
import {LanguageService} from 'shared/services/language.service';

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
  }

  ngOnInit() {
  }

}
