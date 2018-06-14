import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.services';
import { Empleado } from '../../modelo/empleado';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadosService) { }

  empleados: Empleado[] = [];
  estudios:string[] = [
    'Sin estudios',
    'Primaria',
    'Secundaria',
    'Diversificado',
    'Licenciatura',
    'Maestria'
  ];
  categorias:string[] = [
    'Dirección',
    'Administración',
    'Comercial',
    'Mantenimiento',
    'Producción',
    'Directivo',
    'Mando Interno',
    'Tecnico',
    'Trabajador Cualificado',
    'Trabajador no Cualificado'
];
  estado:boolean;
  modelo: any = {};
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
  }

  editar(empleado: Empleado) {
    this.modelo = empleado
  }
  actualizar() {
    console.log()
    this.empleadoService.updateEmpleado(this.modelo)
      .subscribe(res => console.log(res))
  }
  eliminar(id: string, indice) {
    const respuesta: boolean = confirm("Estas seguro de eliminarlo");
    if(respuesta) {
      this.empleadoService.deleteEmpleado(id)
        .subscribe(res => {
          this.empleados.splice(indice, 1);
        })
    }
    return;
  }
}
