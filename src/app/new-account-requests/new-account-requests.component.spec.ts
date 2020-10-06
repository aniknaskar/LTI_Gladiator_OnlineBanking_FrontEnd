import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountRequestsComponent } from './new-account-requests.component';

describe('NewAccountRequestsComponent', () => {
  let component: NewAccountRequestsComponent;
  let fixture: ComponentFixture<NewAccountRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
