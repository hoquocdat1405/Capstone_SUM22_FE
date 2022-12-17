import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMajorComponent } from './school-major.component';

describe('SchoolMajorComponent', () => {
  let component: SchoolMajorComponent;
  let fixture: ComponentFixture<SchoolMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolMajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
