import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MshpCountryComponent } from './mshp-country.component';

describe('MshpCountryComponent', () => {
  let component: MshpCountryComponent;
  let fixture: ComponentFixture<MshpCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
