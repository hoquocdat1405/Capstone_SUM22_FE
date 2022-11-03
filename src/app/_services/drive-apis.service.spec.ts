import { TestBed } from '@angular/core/testing';

import { DriveApisService } from './drive-apis.service';

describe('DriveApisService', () => {
  let service: DriveApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriveApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
