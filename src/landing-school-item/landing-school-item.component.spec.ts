/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandingSchoolItemComponent } from './landing-school-item.component';

describe('LandingSchoolItemComponent', () => {
  let component: LandingSchoolItemComponent;
  let fixture: ComponentFixture<LandingSchoolItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSchoolItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSchoolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
