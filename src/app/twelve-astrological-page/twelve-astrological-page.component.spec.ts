import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveAstrologicalPageComponent } from './twelve-astrological-page.component';

describe('TwelveAstrologicalPageComponent', () => {
  let component: TwelveAstrologicalPageComponent;
  let fixture: ComponentFixture<TwelveAstrologicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelveAstrologicalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveAstrologicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
