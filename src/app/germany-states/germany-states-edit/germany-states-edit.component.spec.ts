import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyStatesEditComponent } from './germany-states-edit.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GermanyStatesService} from '../germany-states.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {GermanyStates} from '../germany-states';

describe('GermanyStatesEditComponent', () => {
  let component: GermanyStatesEditComponent;
  let fixture: ComponentFixture<GermanyStatesEditComponent>;
  let route: ActivatedRoute;
  let service: GermanyStatesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanyStatesEditComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [GermanyStatesService],
    })
    .compileComponents();
    route = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(GermanyStatesService);
    spyOn(route.snapshot.paramMap, 'get').and.returnValue('1');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyStatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create and find the state', () => {
    const state = {id: 1, name: 'Bayern'} as GermanyStates;
    spyOn(service, 'getState').and.returnValue(of(state));
    component.ngOnInit();
    expect(component.state).toBe(state);
  });

  it('should save the state', () => {
    const state = {id: 1, name: 'Bavaria'} as GermanyStates;
    spyOn(service, 'updateState').and.returnValue(of(state));
    component.state = state;
    component.save();
    expect(component.state).toBe(state);
  });
});
