import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MshpCouponsComponent } from './mshp-coupons.component';

describe('MshpCouponsComponent', () => {
  let component: MshpCouponsComponent;
  let fixture: ComponentFixture<MshpCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
