import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    @Output() enterEvent2 = new EventEmitter();
    items1;
    current1;
    public isCollapsed = true;

  constructor(private langgServise: LanguageService) {
      this.items1 = langgServise.getItems1();
      this.current1 = this.langgServise.getCurrent();
  }

  ngOnInit() {
  }

    onClick(number: string) {
        this.current1 = number;
        this.enterEvent2.emit(this.current1);
    }

}
