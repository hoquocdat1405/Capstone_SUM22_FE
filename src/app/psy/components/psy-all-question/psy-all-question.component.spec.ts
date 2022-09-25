import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyAllQuestionComponent } from './psy-all-question.component';

describe('PsyAllQuestionComponent', () => {
  let component: PsyAllQuestionComponent;
  let fixture: ComponentFixture<PsyAllQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyAllQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyAllQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
