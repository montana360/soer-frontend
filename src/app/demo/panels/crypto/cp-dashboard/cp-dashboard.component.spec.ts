import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpDashboardComponent } from './cp-dashboard.component';

describe('CpDashboardComponent', () => {
  let component: CpDashboardComponent;
  let fixture: ComponentFixture<CpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
