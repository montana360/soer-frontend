import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommCustomerComponent } from './ecomm-customer.component';

describe('EcommCustomerComponent', () => {
  let component: EcommCustomerComponent;
  let fixture: ComponentFixture<EcommCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
