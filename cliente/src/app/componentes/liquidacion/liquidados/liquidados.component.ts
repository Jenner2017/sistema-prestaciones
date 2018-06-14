import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.services';
import { Empleado } from '../../modelo/empleado';

@Component({
  selector: 'app-liquidados',
  templateUrl: './liquidados.component.html',
  styleUrls: ['./liquidados.component.css']
})
export class LiquidadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadosService) { }

  empleados: Empleado[] = [];
  ngOnInit() {
    this.empleadoService.getEmpleados()
      .subscribe(res => {
        this.empleados = res.filter(res => res.liquidado == true);
      })
  }
  estado(liquidado: boolean) {
    if(liquidado) return 'Liquidado'
    return 'No liquidado'
  }

}
