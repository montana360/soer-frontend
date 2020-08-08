import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommSellerComponent } from './ecomm-seller.component';

describe('EcommSellerComponent', () => {
  let component: EcommSellerComponent;
  let fixture: ComponentFixture<EcommSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
