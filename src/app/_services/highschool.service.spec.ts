import { TestBed } from '@angular/core/testing';

import { HighschoolService } from './highschool.service';

describe('HighschoolService', () => {
  let service: HighschoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighschoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
