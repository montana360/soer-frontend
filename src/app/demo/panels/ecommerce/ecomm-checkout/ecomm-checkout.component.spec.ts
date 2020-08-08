import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommCheckoutComponent } from './ecomm-checkout.component';

describe('EcommCheckoutComponent', () => {
  let component: EcommCheckoutComponent;
  let fixture: ComponentFixture<EcommCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
