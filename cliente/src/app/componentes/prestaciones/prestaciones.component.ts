import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.services';
import { Empleado } from '../modelo/empleado'

declare var moment: any;

@Component({
  selector: 'app-prestaciones',
  templateUrl: './prestaciones.component.html',
  styleUrls: ['./prestaciones.component.css']
})
export class PrestacionesComponent implements OnInit {

  constructor(private empleadoService: EmpleadosService) { }
  empleadoSeleccionado: Empleado;
  empleados: Empleado[] = [];
  modelo:any = {};
  indemnizacion: number;
  indemnizacionT: any = 0;
  diasLaborados: number = 0;
  bono14: any = 0;
  aguinaldo: any = 0;
  vacaciones: any = 0;
  total:any;
  estado:boolean;
  ngOnInit() {
    this.empleadoService.getEmpleados()
      .subscribe(res => {
        this.empleados = res.filter(r => r.liquidado == false || null);
        if(this.empleados.length > 0) {
          this.estado = true;
        }
        else {
          this.estado = false;
        }
      })
      this.modelo.prestaciones = {
        bono14: this.bono14,
        aguinaldo: this.aguinaldo,
        vacaciones: this.vacaciones,
        indemnizacion: this.indemnizacionT
      }
  }

  editar(empleado: Empleado) {
    this.modelo = empleado
    let fechaIngreso = moment(this.modelo.fechaDeIngreso)
    let fechaActual = moment(Date.now())
    this.diasLaborados = fechaActual.diff(fechaIngreso, 'days');
    if(this.modelo.prestaciones.bono14 == null) {
      
      let salario = parseFloat(this.modelo.salario);
      let salarioDia = parseFloat(this.modelo.salario)*12/365;
      
  
      let indemnizacionTotal = this.getIndemnizacion(fechaIngreso, fechaActual, salario).toFixed(2);
  
      this.aguinaldo = (this.getAguinaldo(fechaActual, fechaIngreso)*salario/365).toFixed(2);
      this.bono14 = (this.getBono14(fechaActual, fechaIngreso)*salario/365).toFixed(2);
      let diasVaca = this.getVacaciones(fechaActual, fechaIngreso)*15/365;
      this.vacaciones = (parseFloat(diasVaca.toFixed(4))*salarioDia).toFixed(2);

      this.total = parseFloat(this.indemnizacionT) + parseFloat(this.aguinaldo) + parseFloat(this.bono14) + parseFloat(this.vacaciones);
      this.total = (this.total).toFixed(2);

      this.agregarPrestaciones();

    }
    
    else {
      this.total = parseFloat(this.modelo.prestaciones.indemnizacion) + parseFloat(this.modelo.prestaciones.aguinaldo) + parseFloat(this.modelo.prestaciones.bono14) + parseFloat(this.modelo.prestaciones.vacaciones);
      this.total = (this.total).toFixed(2);
    }
    
  }

  agregarPrestaciones():void {
    this.modelo.prestaciones = {
      bono14: this.bono14,
      aguinaldo: this.aguinaldo,
      vacaciones: this.vacaciones,
      indemnizacion: this.indemnizacionT
    }
    //console.log(this.modelo)
    this.empleadoService.updateEmpleado(this.modelo)
     .subscribe(res => console.log(res));
  }
  getIndemnizacion(fechaDeIngreso, fechaDeSalida, salario):number {
    let diasT = fechaDeSalida.diff(fechaDeIngreso, 'days');
    this.indemnizacion = salario*14/12;
    this.indemnizacionT = (diasT*this.indemnizacion/365).toFixed(2);
    return diasT*this.indemnizacion/365;
  }
  getAguinaldo(fechaActual, fechaIngreso):number {
    let fecha = new Date(Date.now())
    let diasAguinaldo = new Date('' + (fecha.getFullYear()-1)  + '-12-1');
    let diasAe = moment(diasAguinaldo);
    let aguinaldo;
    if(fechaActual.diff(fechaIngreso, 'year') > 0){
      aguinaldo = parseInt(fechaActual.diff(diasAguinaldo, 'days'))
      return aguinaldo;
    }
    else if(diasAe.diff(fechaIngreso, 'days') > 0) {
      aguinaldo = parseInt(fechaActual.diff(diasAguinaldo, 'days'))
      return aguinaldo;
    }
    else {
      aguinaldo = parseInt(fechaActual.diff(fechaIngreso, 'days'));
      return aguinaldo;
    }
  }
  getBono14(fechaActual, fechaDeIngreso):number {
    let fecha = new Date(Date.now());
    let diasBono = new Date('' + (fecha.getFullYear()-1) + '-07-01');
    let bono14;
    if(fechaActual.diff(fechaDeIngreso, 'year') > 0) {
      bono14 = parseInt(fechaActual.diff(diasBono, 'days'));
      
      return bono14;
    }
    else {
      bono14 = parseInt(fechaActual.diff(fechaDeIngreso, 'days'));
      return bono14;
    }

  }

  getVacaciones(fechaActual, fechaDeIngreso):number {
    let fecha = new Date(Date.now());
    let diasVaca = new Date('' + (fecha.getFullYear()-1) + '-04-01');
    let vacaciones;
    if(fechaActual.diff(fechaDeIngreso, 'year') > 0) {
      vacaciones = parseInt(fechaActual.diff(diasVaca, 'days'))-365;
      return vacaciones;
    }
    else {
      vacaciones = parseInt(fechaActual.diff(fechaDeIngreso, 'days'));
      return vacaciones
    }
  }

  seleccionado(empleado: Empleado) {
    this.empleadoSeleccionado = empleado
  }

}
