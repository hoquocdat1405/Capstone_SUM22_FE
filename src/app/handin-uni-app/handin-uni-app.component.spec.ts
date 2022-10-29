import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandinUniAppComponent } from './handin-uni-app.component';

describe('HandinUniAppComponent', () => {
  let component: HandinUniAppComponent;
  let fixture: ComponentFixture<HandinUniAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandinUniAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandinUniAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
