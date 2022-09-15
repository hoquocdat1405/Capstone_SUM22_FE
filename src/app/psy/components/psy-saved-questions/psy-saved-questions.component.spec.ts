import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsySavedQuestionsComponent } from './psy-saved-questions.component';

describe('PsySavedQuestionsComponent', () => {
  let component: PsySavedQuestionsComponent;
  let fixture: ComponentFixture<PsySavedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsySavedQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsySavedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
