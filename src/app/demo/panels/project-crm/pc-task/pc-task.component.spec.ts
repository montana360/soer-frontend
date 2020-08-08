import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcTaskComponent } from './pc-task.component';

describe('PcTaskComponent', () => {
  let component: PcTaskComponent;
  let fixture: ComponentFixture<PcTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
