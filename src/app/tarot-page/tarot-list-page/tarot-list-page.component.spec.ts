import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotListPageComponent } from './tarot-list-page.component';

describe('TarotListPageComponent', () => {
  let component: TarotListPageComponent;
  let fixture: ComponentFixture<TarotListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarotListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarotListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
