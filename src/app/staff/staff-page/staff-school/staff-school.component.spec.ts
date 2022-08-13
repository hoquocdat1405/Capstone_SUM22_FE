/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StaffSchoolComponent } from './staff-school.component';

describe('StaffSchoolComponent', () => {
  let component: StaffSchoolComponent;
  let fixture: ComponentFixture<StaffSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
