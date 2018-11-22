import { TestBed, inject } from '@angular/core/testing';

import { EditService } from 'shared/services/edit.service';

describe('EditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditService]
    });
  });

  it('should be created', inject([EditService], (service: EditService) => {
    expect(service).toBeTruthy();
  }));
});
