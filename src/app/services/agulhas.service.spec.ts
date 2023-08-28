import { TestBed } from '@angular/core/testing';

import { BonecosService } from './bonecos.service';

describe('BonecosService', () => {
  let service: BonecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

