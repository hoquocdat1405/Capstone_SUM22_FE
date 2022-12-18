import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBubbleBigfiveComponent } from './type-bubble-bigfive.component';

describe('TypeBubbleBigfiveComponent', () => {
  let component: TypeBubbleBigfiveComponent;
  let fixture: ComponentFixture<TypeBubbleBigfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBubbleBigfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBubbleBigfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
