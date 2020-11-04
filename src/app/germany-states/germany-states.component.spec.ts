import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyStatesComponent } from './germany-states.component';
import {GermanyStatesService} from './germany-states.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GermanyStates} from './germany-states';
import {of} from 'rxjs';

describe('GermanyStatesComponent', () => {
  let service: GermanyStatesService;
  let component: GermanyStatesComponent;
  let fixture: ComponentFixture<GermanyStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanyStatesComponent ],
      imports: [HttpClientTestingModule],
      providers: [GermanyStatesService],
    }).compileComponents();
    service = TestBed.inject(GermanyStatesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should assign selectedState', () => {
    const state = {id: 1, name: 'Bayern'} as GermanyStates;
    component.onSelect(state);
    expect(component.selectedState).toBe(state);
  });

  it('should get all states', () => {
    expect(component.states.length).toBe(0);

    const expectedStates = [
      { id: 1, name: 'Bayern' },
      { id: 2, name: 'Berlin' }
    ];

    spyOn(service, 'getStates').and.returnValues(of(expectedStates));

    component.getStates();

    expect(component.states.length).toBe(2);
  });

  it('should reset selectedState value', () => {
    const state = {id: 1, name: 'Bayern'} as GermanyStates;
    component.onSelect(state);
    expect(component.selectedState).toBe(state);

    component.reset();
    expect(component.selectedState).toBe(null);
  });

  it('should delete the state', () => {
    const newStates = [{id: 2, name: 'Berlin'}] as GermanyStates[];
    const deleteState = {id: 1, name: 'Bayern'} as GermanyStates;

    component.onSelect(deleteState);
    expect(component.selectedState).toBe(deleteState);

    spyOn(service, 'deleteState').and.returnValues(of(deleteState));
    spyOn(service, 'getStates').and.returnValues(of(newStates));

    component.delete(deleteState);

    expect(component.selectedState).toBe(null);
    expect(component.states.length).toBe(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
