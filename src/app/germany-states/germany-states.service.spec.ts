import { TestBed } from '@angular/core/testing';

import { GermanyStatesService } from './germany-states.service';

describe('GermanyStatesService', () => {
  let service: GermanyStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GermanyStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
