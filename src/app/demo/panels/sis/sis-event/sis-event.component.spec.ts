import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisEventComponent } from './sis-event.component';

describe('SisEventComponent', () => {
  let component: SisEventComponent;
  let fixture: ComponentFixture<SisEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
