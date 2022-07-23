import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfQuizDetailPageComponent } from './bf-quiz-detail-page.component';

describe('BfQuizDetailPageComponent', () => {
  let component: BfQuizDetailPageComponent;
  let fixture: ComponentFixture<BfQuizDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfQuizDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfQuizDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
