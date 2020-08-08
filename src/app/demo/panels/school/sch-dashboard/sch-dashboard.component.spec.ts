import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchDashboardComponent } from './sch-dashboard.component';

describe('SchDashboardComponent', () => {
  let component: SchDashboardComponent;
  let fixture: ComponentFixture<SchDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
