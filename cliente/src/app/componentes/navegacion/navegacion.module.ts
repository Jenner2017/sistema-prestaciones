import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from '../administrador/administrador.component';
import { NavegacionComponent } from './navegacion.component';
import { PrestacionesComponent } from '../prestaciones/prestaciones.component';
import { SalariosComponent } from '../salarios/salarios.component';
import { RutasNavegacion } from './rutas-navegacion/rutas-navegacion.module';
import { FormsModule } from '@angular/forms';
import { AgregarEmpleadosComponent } from '../registro-empleados/agregar-empleados/agregar-empleados.component';
import { ListaEmpleadosComponent } from '../registro-empleados/lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosService } from '../servicios/empleados.services';
import { LiquidadosComponent } from '../liquidacion/liquidados/liquidados.component';
import { LiquidarEmpleadoComponent } from '../liquidacion/liquidar-empleado/liquidar-empleado.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsuarioService } from '../servicios/usuario.service';
import { EditarPrestacionesComponent } from '../prestaciones/editar-prestaciones/editar-prestaciones.component';
import { DetalleEmpleado } from '../registro-empleados/detalle-empleado/detalle-empleado';


@NgModule({
    declarations: [
        AdministradorComponent,
        NavegacionComponent,
        PrestacionesComponent,
        SalariosComponent,
        AgregarEmpleadosComponent,
        ListaEmpleadosComponent,
        LiquidadosComponent,
        LiquidarEmpleadoComponent,
        DashboardComponent,
        EditarPrestacionesComponent,
        DetalleEmpleado
    ],
    imports: [
        FormsModule,
        CommonModule,
        RutasNavegacion,
        HttpClientModule
    ],
    providers: [ EmpleadosService, UsuarioService ]
})

export class NavegacionModule {}