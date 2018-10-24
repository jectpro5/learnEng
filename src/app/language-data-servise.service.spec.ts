import { TestBed, inject } from '@angular/core/testing';

import { LanguageDataServiseService } from './language-data-servise.service';

describe('LanguageDataServiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageDataServiseService]
    });
  });

  it('should be created', inject([LanguageDataServiseService], (service: LanguageDataServiseService) => {
    expect(service).toBeTruthy();
  }));
});
