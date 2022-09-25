import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTarotPageComponent } from './random-tarot-page.component';

describe('RandomTarotPageComponent', () => {
  let component: RandomTarotPageComponent;
  let fixture: ComponentFixture<RandomTarotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTarotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTarotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
