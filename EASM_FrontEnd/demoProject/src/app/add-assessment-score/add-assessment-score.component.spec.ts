import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssessmentScoreComponent } from './add-assessment-score.component';

describe('AddAssessmentScoreComponent', () => {
  let component: AddAssessmentScoreComponent;
  let fixture: ComponentFixture<AddAssessmentScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssessmentScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssessmentScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
