import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyDashboardComponent } from './psy-dashboard.component';

describe('PsyDashboardComponent', () => {
  let component: PsyDashboardComponent;
  let fixture: ComponentFixture<PsyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
