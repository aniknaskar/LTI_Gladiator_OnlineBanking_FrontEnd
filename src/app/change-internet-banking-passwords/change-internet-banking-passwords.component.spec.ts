import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInternetBankingPasswordsComponent } from './change-internet-banking-passwords.component';

describe('ChangeInternetBankingPasswordsComponent', () => {
  let component: ChangeInternetBankingPasswordsComponent;
  let fixture: ComponentFixture<ChangeInternetBankingPasswordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeInternetBankingPasswordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInternetBankingPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
