/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FQAPageComponent } from './FQA-page.component';

describe('FQAPageComponent', () => {
  let component: FQAPageComponent;
  let fixture: ComponentFixture<FQAPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FQAPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FQAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
