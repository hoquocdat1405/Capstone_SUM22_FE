import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonaAstrologicalPageComponent } from './mona-astrological-page.component';

describe('MonaAstrologicalPageComponent', () => {
  let component: MonaAstrologicalPageComponent;
  let fixture: ComponentFixture<MonaAstrologicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonaAstrologicalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonaAstrologicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
