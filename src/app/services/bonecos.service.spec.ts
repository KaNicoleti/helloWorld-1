import { TestBed } from '@angular/core/testing';

import { CalcaService } from './.service';

describe('CalcaService', () => {
  let service: CalcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
