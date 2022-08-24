/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MajorListComponent } from './major-list.component';

describe('MajorListComponent', () => {
  let component: MajorListComponent;
  let fixture: ComponentFixture<MajorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
