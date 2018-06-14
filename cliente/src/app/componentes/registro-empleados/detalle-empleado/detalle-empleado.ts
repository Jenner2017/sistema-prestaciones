import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmpleadosService } from '../../servicios/empleados.services';
import { Empleado } from '../../modelo/empleado';
import { NgForm } from '@angular/forms';



@Component({
    selector: 'detalle-empleado',
    templateUrl: './detalle-empleado.html',
    styleUrls: ['./detalle-empleado.css']
})

export class DetalleEmpleado implements OnInit { 
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private servicio: EmpleadosService
    ){}
    public empleado: Empleado;
    public modelo: any = {};
    ngOnInit(){
        const id = this.route.snapshot.paramMap.get("id");
        this.servicio.getEmpleado(id)
            .subscribe(res => {
                this.empleado = res;
            });
    }

    enviar() {
        console.log("Se ha hecho click")
        this.servicio.subirImagen({nombre:'Jenner'})
            .subscribe(res => console.log(res));

    }

 }