import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisEvaluationComponent } from './sis-evaluation.component';

describe('SisEvaluationComponent', () => {
  let component: SisEvaluationComponent;
  let fixture: ComponentFixture<SisEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
