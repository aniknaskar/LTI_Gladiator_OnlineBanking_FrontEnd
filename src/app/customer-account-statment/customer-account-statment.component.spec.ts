import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountStatmentComponent } from './customer-account-statment.component';

describe('CustomerAccountStatmentComponent', () => {
  let component: CustomerAccountStatmentComponent;
  let fixture: ComponentFixture<CustomerAccountStatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountStatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
