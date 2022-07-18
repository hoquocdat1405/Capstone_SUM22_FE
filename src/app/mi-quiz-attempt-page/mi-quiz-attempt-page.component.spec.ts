/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiQuizAttemptPageComponent } from './mi-quiz-attempt-page.component';

describe('MiQuizAttemptPageComponent', () => {
  let component: MiQuizAttemptPageComponent;
  let fixture: ComponentFixture<MiQuizAttemptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiQuizAttemptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiQuizAttemptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
