import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidarEmpleadoComponent } from './liquidar-empleado.component';

describe('LiquidarEmpleadoComponent', () => {
  let component: LiquidarEmpleadoComponent;
  let fixture: ComponentFixture<LiquidarEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidarEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
