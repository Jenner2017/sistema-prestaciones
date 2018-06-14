import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrls: ['./agregar-empleados.component.css']
})
export class AgregarEmpleadosComponent implements OnInit {

  modelo:any = {}
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
  constructor(private empleadoServicio: EmpleadosService) { }

  ngOnInit() {
  }

  guardar(formulario: NgForm){
    this.modelo = formulario.value;
    this.modelo.liquidado = false;
    this.modelo.prestaciones = {
      bono14:null,
      aguinaldo:null,
      vacaciones:null,
      indemnizacion:null
    }
    this.empleadoServicio.addEmpleado(this.modelo)
      .subscribe(res => console.log(res))
  }
}
