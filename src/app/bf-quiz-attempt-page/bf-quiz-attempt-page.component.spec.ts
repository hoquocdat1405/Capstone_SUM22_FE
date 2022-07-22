import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfQuizAttemptPageComponent } from './bf-quiz-attempt-page.component';

describe('BfQuizAttemptPageComponent', () => {
  let component: BfQuizAttemptPageComponent;
  let fixture: ComponentFixture<BfQuizAttemptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfQuizAttemptPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfQuizAttemptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
