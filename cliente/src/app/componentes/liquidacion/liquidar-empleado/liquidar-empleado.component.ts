import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.services';
import { Empleado } from '../../modelo/empleado';
import { NgForm } from '@angular/forms';

declare var moment;

@Component({
  selector: 'app-liquidar-empleado',
  templateUrl: './liquidar-empleado.component.html',
  styleUrls: ['./liquidar-empleado.component.css']
})
export class LiquidarEmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadosService) { }
  modelo:any = {};
  empleados: Empleado[] = [];
  
  ngOnInit() {
    this.empleadoService.getEmpleados()
      .subscribe(res => {
        this.empleados = res;
      })
  }

  editar(empleado: Empleado) {
    this.modelo = empleado;
  }
  liquidar(formulario: NgForm) {
    console.log(formulario.value.liquidar);
    let fechaIngreso = moment(this.modelo.fechaDeIngreso);
    let fechaSalida = moment(this.modelo.fechaDeSalida);

    if(fechaSalida.diff(fechaIngreso, 'days') > 0) {
      this.modelo.liquidado = true;
      this.empleadoService.updateEmpleado(this.modelo)
      .subscribe(res => console.log(res))
    }
    else {
      alert("Las fechas son incorrectas")
    }
  }
  estado(liquidado: boolean) {
    if(liquidado) {
      return 'Liquidado'
    }
    return 'No liquidado'
  }
  desliquidar(empleado: Empleado) {
    empleado.liquidado = false;
    empleado.fechaDeSalida = null;
    this.empleadoService.updateEmpleado(empleado)
      .subscribe(res => console.log(res))
  }
  

}
