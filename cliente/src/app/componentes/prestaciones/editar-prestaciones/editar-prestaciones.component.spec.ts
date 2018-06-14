import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrestacionesComponent } from './editar-prestaciones.component';

describe('EditarPrestacionesComponent', () => {
  let component: EditarPrestacionesComponent;
  let fixture: ComponentFixture<EditarPrestacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPrestacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
