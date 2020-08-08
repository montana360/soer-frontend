import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcCustomersComponent } from './pc-customers.component';

describe('PcCustomersComponent', () => {
  let component: PcCustomersComponent;
  let fixture: ComponentFixture<PcCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
