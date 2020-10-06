import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpRegistrationComponent } from './otp-registration.component';

describe('OtpRegistrationComponent', () => {
  let component: OtpRegistrationComponent;
  let fixture: ComponentFixture<OtpRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
