import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MshpMembershipComponent } from './mshp-membership.component';

describe('MshpMembershipComponent', () => {
  let component: MshpMembershipComponent;
  let fixture: ComponentFixture<MshpMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
