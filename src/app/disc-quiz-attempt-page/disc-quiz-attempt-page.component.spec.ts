/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscQuizAttemptPageComponent } from './disc-quiz-attempt-page.component';

describe('DiscQuizAttemptPageComponent', () => {
  let component: DiscQuizAttemptPageComponent;
  let fixture: ComponentFixture<DiscQuizAttemptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscQuizAttemptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscQuizAttemptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
