import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommOrderComponent } from './ecomm-order.component';

describe('EcommOrderComponent', () => {
  let component: EcommOrderComponent;
  let fixture: ComponentFixture<EcommOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
