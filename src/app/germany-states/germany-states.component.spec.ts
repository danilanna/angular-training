import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyStatesComponent } from './germany-states.component';

describe('GermanyStatesComponent', () => {
  let component: GermanyStatesComponent;
  let fixture: ComponentFixture<GermanyStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanyStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
