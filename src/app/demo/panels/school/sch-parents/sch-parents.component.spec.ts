import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchParentsComponent } from './sch-parents.component';

describe('SchParentsComponent', () => {
  let component: SchParentsComponent;
  let fixture: ComponentFixture<SchParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
