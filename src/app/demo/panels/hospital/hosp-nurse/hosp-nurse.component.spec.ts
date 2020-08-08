import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospNurseComponent } from './hosp-nurse.component';

describe('HospNurseComponent', () => {
  let component: HospNurseComponent;
  let fixture: ComponentFixture<HospNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
