import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MshpDashboardComponent } from './mshp-dashboard.component';

describe('MshpDashboardComponent', () => {
  let component: MshpDashboardComponent;
  let fixture: ComponentFixture<MshpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
