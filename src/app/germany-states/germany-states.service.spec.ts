import { TestBed } from '@angular/core/testing';

import { GermanyStatesService } from './germany-states.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GermanyStatesService', () => {
  let service: GermanyStatesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GermanyStatesService]
    });
    service = TestBed.inject(GermanyStatesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<GermanyStates[]>', () => {
    const expectedStates = [
      { id: 1, name: 'Bayern' },
      { id: 2, name: 'Berlin' }
    ];

    service.getStates().subscribe(states => {
      expect(states.length).toBe(2);
      expect(states).toEqual(expectedStates);
    });

    const req = httpMock.expectOne(`api/states`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedStates);
  });

  it('should return an Observable<GermanyStates>', () => {
    const expectedState = { id: 1, name: 'Bayern' };

    service.getState(1).subscribe(state => {
      expect(state).toEqual(expectedState);
    });

    const req = httpMock.expectOne(`api/states/1`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedState);
  });

  it('should update a GermanyStates', () => {
    const expectedState = { id: 1, name: 'Bavaria' };

    service.updateState(expectedState).subscribe(state => {
      expect(state).toEqual(expectedState);
    });

    const req = httpMock.expectOne(`api/states`);
    expect(req.request.method).toBe('PUT');
    req.flush(expectedState);
  });

  it('should delete a GermanyStates', () => {
    const expectedState = { id: 1, name: 'Bavaria' };

    service.deleteState(1).subscribe(state => {
      expect(state).toEqual(expectedState);
    });

    const req = httpMock.expectOne(`api/states/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(expectedState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
