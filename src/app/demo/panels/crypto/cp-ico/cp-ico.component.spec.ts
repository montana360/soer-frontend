import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpIcoComponent } from './cp-ico.component';

describe('CpIcoComponent', () => {
  let component: CpIcoComponent;
  let fixture: ComponentFixture<CpIcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpIcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
