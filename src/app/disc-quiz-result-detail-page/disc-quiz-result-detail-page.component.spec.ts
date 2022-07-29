/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscQuizResultDetailPageComponent } from './disc-quiz-result-detail-page.component';

describe('DiscQuizResultDetailPageComponent', () => {
  let component: DiscQuizResultDetailPageComponent;
  let fixture: ComponentFixture<DiscQuizResultDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscQuizResultDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscQuizResultDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
