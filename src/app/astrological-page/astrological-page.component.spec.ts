import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologicalPageComponent } from './astrological-page.component';

describe('AstrologicalPageComponent', () => {
  let component: AstrologicalPageComponent;
  let fixture: ComponentFixture<AstrologicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstrologicalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
