import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyStatesDetailComponent } from './germany-states-detail.component';

describe('GermanyStatesDetailComponent', () => {
  let component: GermanyStatesDetailComponent;
  let fixture: ComponentFixture<GermanyStatesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanyStatesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyStatesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
