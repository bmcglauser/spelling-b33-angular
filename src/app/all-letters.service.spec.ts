import { TestBed } from '@angular/core/testing';

import { AllLettersService } from './all-letters.service';

describe('AllLettersService', () => {
  let service: AllLettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllLettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
