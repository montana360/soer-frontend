import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpTransactionsComponent } from './cp-transactions.component';

describe('CpTransactionsComponent', () => {
  let component: CpTransactionsComponent;
  let fixture: ComponentFixture<CpTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
