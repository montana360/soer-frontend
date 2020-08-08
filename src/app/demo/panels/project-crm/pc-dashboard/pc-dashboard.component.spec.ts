import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDashboardComponent } from './pc-dashboard.component';

describe('PcDashboardComponent', () => {
  let component: PcDashboardComponent;
  let fixture: ComponentFixture<PcDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
