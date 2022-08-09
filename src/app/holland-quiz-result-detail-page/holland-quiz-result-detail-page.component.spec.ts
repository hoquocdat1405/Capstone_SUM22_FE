/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HollandQuizResultDetailPageComponent } from './holland-quiz-result-detail-page.component';

describe('HollandQuizResultDetailPageComponent', () => {
  let component: HollandQuizResultDetailPageComponent;
  let fixture: ComponentFixture<HollandQuizResultDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollandQuizResultDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollandQuizResultDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
