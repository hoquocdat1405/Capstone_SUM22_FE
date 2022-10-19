/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HollandQuizAttemptNewComponent } from './holland-quiz-attempt-new.component';

describe('HollandQuizAttemptNewComponent', () => {
  let component: HollandQuizAttemptNewComponent;
  let fixture: ComponentFixture<HollandQuizAttemptNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollandQuizAttemptNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandQuizAttemptNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
