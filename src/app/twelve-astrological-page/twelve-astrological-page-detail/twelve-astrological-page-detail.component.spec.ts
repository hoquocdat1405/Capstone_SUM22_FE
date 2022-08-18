import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveAstrologicalPageDetailComponent } from './twelve-astrological-page-detail.component';

describe('TwelveAstrologicalPageDetailComponent', () => {
  let component: TwelveAstrologicalPageDetailComponent;
  let fixture: ComponentFixture<TwelveAstrologicalPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelveAstrologicalPageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveAstrologicalPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
