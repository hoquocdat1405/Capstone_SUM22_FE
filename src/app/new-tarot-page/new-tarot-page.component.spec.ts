import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTarotPageComponent } from './new-tarot-page.component';

describe('NewTarotPageComponent', () => {
  let component: NewTarotPageComponent;
  let fixture: ComponentFixture<NewTarotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTarotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTarotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
