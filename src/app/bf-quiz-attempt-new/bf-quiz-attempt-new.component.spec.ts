/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BfQuizAttemptNewComponent } from './bf-quiz-attempt-new.component';

describe('BfQuizAttemptNewComponent', () => {
  let component: BfQuizAttemptNewComponent;
  let fixture: ComponentFixture<BfQuizAttemptNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfQuizAttemptNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfQuizAttemptNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
