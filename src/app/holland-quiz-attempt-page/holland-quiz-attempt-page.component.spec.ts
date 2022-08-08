/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HollandQuizAttemptPageComponent } from './holland-quiz-attempt-page.component';

describe('HollandQuizAttemptPageComponent', () => {
  let component: HollandQuizAttemptPageComponent;
  let fixture: ComponentFixture<HollandQuizAttemptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollandQuizAttemptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandQuizAttemptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
