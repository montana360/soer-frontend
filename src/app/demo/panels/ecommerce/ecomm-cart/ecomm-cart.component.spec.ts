import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommCartComponent } from './ecomm-cart.component';

describe('EcommCartComponent', () => {
  let component: EcommCartComponent;
  let fixture: ComponentFixture<EcommCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
