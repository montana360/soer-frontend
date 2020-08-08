import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisCourseComponent } from './sis-course.component';

describe('SisCourseComponent', () => {
  let component: SisCourseComponent;
  let fixture: ComponentFixture<SisCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
