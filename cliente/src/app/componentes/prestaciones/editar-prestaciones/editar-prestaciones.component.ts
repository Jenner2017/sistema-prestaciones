import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../../modelo/empleado';
import { NgForm } from '@angular/forms';
import { EmpleadosService } from '../../servicios/empleados.services';

@Component({
  selector: 'app-editar-prestaciones',
  templateUrl: './editar-prestaciones.component.html',
  styleUrls: ['./editar-prestaciones.component.css']
})
export class EditarPrestacionesComponent implements OnInit {
  @Input() empleadoActivo: Empleado;
  constructor(private empleadoServicio: EmpleadosService) { }
  
  ngOnInit() {
  }
  actualizar() {
    this.empleadoServicio.updateEmpleado(this.empleadoActivo)
      .subscribe(res => this.cerrar())
  }
  cerrar(){
    this.empleadoActivo = null;
  }
}
