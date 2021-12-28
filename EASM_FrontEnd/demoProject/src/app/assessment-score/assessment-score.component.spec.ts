import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentScoreComponent } from './assessment-score.component';

describe('AssessmentScoreComponent', () => {
  let component: AssessmentScoreComponent;
  let fixture: ComponentFixture<AssessmentScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
