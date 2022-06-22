import { TestBed } from '@angular/core/testing';

import { ApiComputersService } from './api-computers.service';

describe('ApiComputersService', () => {
  let service: ApiComputersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiComputersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
