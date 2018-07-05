import { TestBed, inject } from '@angular/core/testing';

import { TostrService } from './tostr.service';

describe('TostrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TostrService]
    });
  });

  it('should be created', inject([TostrService], (service: TostrService) => {
    expect(service).toBeTruthy();
  }));
});
