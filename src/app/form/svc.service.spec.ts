import { TestBed } from '@angular/core/testing';

import { SvcService } from './svc.service';

describe('SvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvcService = TestBed.get(SvcService);
    expect(service).toBeTruthy();
  });
});
