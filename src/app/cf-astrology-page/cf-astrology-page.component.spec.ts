import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfAstrologyPageComponent } from './cf-astrology-page.component';

describe('CfAstrologyPageComponent', () => {
  let component: CfAstrologyPageComponent;
  let fixture: ComponentFixture<CfAstrologyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfAstrologyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfAstrologyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
