import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyStatesEditComponent } from './germany-states-edit.component';

describe('GermanyStatesEditComponent', () => {
  let component: GermanyStatesEditComponent;
  let fixture: ComponentFixture<GermanyStatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanyStatesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyStatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
