import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospDepartmentComponent } from './hosp-department.component';

describe('HospDepartmentComponent', () => {
  let component: HospDepartmentComponent;
  let fixture: ComponentFixture<HospDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
