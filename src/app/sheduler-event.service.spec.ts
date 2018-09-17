import { TestBed, inject } from '@angular/core/testing';

import { ShedulerEventService } from './sheduler-event.service';

describe('ShedulerEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShedulerEventService]
    });
  });

  it('should be created', inject([ShedulerEventService], (service: ShedulerEventService) => {
    expect(service).toBeTruthy();
  }));
});
