import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyPageComponent } from './psy-page.component';

describe('PsyPageComponent', () => {
  let component: PsyPageComponent;
  let fixture: ComponentFixture<PsyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
