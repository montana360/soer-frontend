import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcProjectComponent } from './pc-project.component';

describe('PcProjectComponent', () => {
  let component: PcProjectComponent;
  let fixture: ComponentFixture<PcProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
