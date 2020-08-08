import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommProductDetailsComponent } from './ecomm-product-details.component';

describe('EcommProductDetailsComponent', () => {
  let component: EcommProductDetailsComponent;
  let fixture: ComponentFixture<EcommProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
