/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscQuizAttemptNewComponent } from './disc-quiz-attempt-new.component';

describe('DiscQuizAttemptNewComponent', () => {
  let component: DiscQuizAttemptNewComponent;
  let fixture: ComponentFixture<DiscQuizAttemptNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscQuizAttemptNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscQuizAttemptNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
