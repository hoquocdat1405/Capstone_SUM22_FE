/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwelveAstrologicalListPageComponent } from './twelve-astrological-list-page.component';

describe('TwelveAstrologicalListPageComponent', () => {
  let component: TwelveAstrologicalListPageComponent;
  let fixture: ComponentFixture<TwelveAstrologicalListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelveAstrologicalListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveAstrologicalListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
