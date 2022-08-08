import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfQuizPersonalityDetailPageComponent } from './bf-quiz-personality-detail-page.component';

describe('BfQuizPersonalityDetailPageComponent', () => {
  let component: BfQuizPersonalityDetailPageComponent;
  let fixture: ComponentFixture<BfQuizPersonalityDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfQuizPersonalityDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfQuizPersonalityDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
