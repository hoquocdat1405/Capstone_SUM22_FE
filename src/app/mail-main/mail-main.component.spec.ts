import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailMainComponent } from './mail-main.component';

describe('MailMainComponent', () => {
  let component: MailMainComponent;
  let fixture: ComponentFixture<MailMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
