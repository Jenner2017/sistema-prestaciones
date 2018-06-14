import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.services';
import { Empleado } from '../modelo/empleado';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css']
})
export class SalariosComponent implements OnInit {

  constructor(private empleadoService: EmpleadosService) { }

  empleados: Empleado[] = [];
  modelo: any = {};
  estado: boolean;
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
      });
  }
  editar(empleado: Empleado) { 
    this.modelo = empleado;
  }
  actualizarSalario() {
    this.empleadoService.updateEmpleado(this.modelo)
      .subscribe(res => console.log(res));
  }

}
