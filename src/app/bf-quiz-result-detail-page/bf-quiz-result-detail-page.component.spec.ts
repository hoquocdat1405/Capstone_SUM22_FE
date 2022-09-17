import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfQuizResultDetailPageComponent } from './bf-quiz-result-detail-page.component';

describe('BfQuizResultDetailPageComponent', () => {
  let component: BfQuizResultDetailPageComponent;
  let fixture: ComponentFixture<BfQuizResultDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfQuizResultDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfQuizResultDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
