import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTarotDrawCardPageComponent } from './new-tarot-draw-card-page.component';

describe('NewTarotDrawCardPageComponent', () => {
  let component: NewTarotDrawCardPageComponent;
  let fixture: ComponentFixture<NewTarotDrawCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTarotDrawCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTarotDrawCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
