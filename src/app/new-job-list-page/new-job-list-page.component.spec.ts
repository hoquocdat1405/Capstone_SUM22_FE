import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobListPageComponent } from './new-job-list-page.component';

describe('NewJobListPageComponent', () => {
  let component: NewJobListPageComponent;
  let fixture: ComponentFixture<NewJobListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJobListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
