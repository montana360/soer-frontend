import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchTeacherComponent } from './sch-teacher.component';

describe('SchTeacherComponent', () => {
  let component: SchTeacherComponent;
  let fixture: ComponentFixture<SchTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
