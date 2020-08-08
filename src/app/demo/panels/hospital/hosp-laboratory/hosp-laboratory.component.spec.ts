import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospLaboratoryComponent } from './hosp-laboratory.component';

describe('HospLaboratoryComponent', () => {
  let component: HospLaboratoryComponent;
  let fixture: ComponentFixture<HospLaboratoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospLaboratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
