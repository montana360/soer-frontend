import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpCoinComponent } from './cp-coin.component';

describe('CpCoinComponent', () => {
  let component: CpCoinComponent;
  let fixture: ComponentFixture<CpCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
