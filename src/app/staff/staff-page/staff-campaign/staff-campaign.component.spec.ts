/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StaffCampaignComponent } from './staff-campaign.component';

describe('StaffCampaignComponent', () => {
  let component: StaffCampaignComponent;
  let fixture: ComponentFixture<StaffCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
