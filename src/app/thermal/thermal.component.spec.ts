import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalComponent } from './thermal.component';

describe('ThermalComponent', () => {
  let component: ThermalComponent;
  let fixture: ComponentFixture<ThermalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThermalComponent]
    });
    fixture = TestBed.createComponent(ThermalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
