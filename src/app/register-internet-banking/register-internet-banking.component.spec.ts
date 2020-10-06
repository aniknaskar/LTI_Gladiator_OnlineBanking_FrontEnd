import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInternetBankingComponent } from './register-internet-banking.component';

describe('RegisterInternetBankingComponent', () => {
  let component: RegisterInternetBankingComponent;
  let fixture: ComponentFixture<RegisterInternetBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInternetBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInternetBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
