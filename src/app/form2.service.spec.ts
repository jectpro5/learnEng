import { TestBed, inject } from '@angular/core/testing';

import { Form2Service } from './form2.service';

describe('Form2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Form2Service]
    });
  });

  it('should be created', inject([Form2Service], (service: Form2Service) => {
    expect(service).toBeTruthy();
  }));
});
