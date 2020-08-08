import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommProductComponent } from './ecomm-product.component';

describe('EcommProductComponent', () => {
  let component: EcommProductComponent;
  let fixture: ComponentFixture<EcommProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
