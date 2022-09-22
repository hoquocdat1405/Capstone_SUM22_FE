/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MbtiQuizAttemptNewComponent } from './mbti-quiz-attempt-new.component';

describe('MbtiQuizAttemptNewComponent', () => {
  let component: MbtiQuizAttemptNewComponent;
  let fixture: ComponentFixture<MbtiQuizAttemptNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbtiQuizAttemptNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiQuizAttemptNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
