import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPaymentsComponent } from './saved-payments.component';

describe('SavedPaymentsComponent', () => {
  let component: SavedPaymentsComponent;
  let fixture: ComponentFixture<SavedPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
