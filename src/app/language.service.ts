import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {
    items1 = ['en', 'ru', 'ua'];
    current1 = 'en';
    getItems1() {
        return ['en', 'ru', 'ua'];
    }
    getCurrent() {
        return 'en';
    }
    // onClickS(number: string) {
    //    return this.current1;
    // }

  constructor() { }
    // onClickS(number: string) {
    //    return this.current1 = number;
    // }
}
