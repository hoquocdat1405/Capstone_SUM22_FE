import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotDetailPageComponent } from './tarot-detail-page.component';

describe('TarotDetailPageComponent', () => {
  let component: TarotDetailPageComponent;
  let fixture: ComponentFixture<TarotDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarotDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarotDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
