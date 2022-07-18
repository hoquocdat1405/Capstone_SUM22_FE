/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MbtiQuizAttemptPageComponent } from './mbti-quiz-attempt-page.component';

describe('MbtiQuizAttemptPageComponent', () => {
  let component: MbtiQuizAttemptPageComponent;
  let fixture: ComponentFixture<MbtiQuizAttemptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbtiQuizAttemptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiQuizAttemptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
