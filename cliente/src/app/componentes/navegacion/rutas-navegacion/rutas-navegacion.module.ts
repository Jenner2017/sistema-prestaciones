import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from '../navegacion.component';
import { AdministradorComponent } from '../../administrador/administrador.component';
import { PrestacionesComponent } from '../../prestaciones/prestaciones.component';
import { SalariosComponent } from '../../salarios/salarios.component';
import { AgregarEmpleadosComponent } from '../../registro-empleados/agregar-empleados/agregar-empleados.component';
import { ListaEmpleadosComponent } from '../../registro-empleados/lista-empleados/lista-empleados.component';
import { LiquidadosComponent } from '../../liquidacion/liquidados/liquidados.component';
import { LiquidarEmpleadoComponent } from '../../liquidacion/liquidar-empleado/liquidar-empleado.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuthGuard } from '../../../admin/servicios/auth-guard.service';
import { DetalleEmpleado } from '../../registro-empleados/detalle-empleado/detalle-empleado';


const rutasNavegacion: Routes = [
    { 
        path: '',
        component: NavegacionComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: 'administrador',
                component: AdministradorComponent
            },
            {
                path: 'detalle-empleado/:id',
                component: DetalleEmpleado
            },
            {
                path: 'prestaciones',
                component: PrestacionesComponent
            },
            {
                path: 'agregar-empleado',
                component: AgregarEmpleadosComponent
            },
            {
                path: 'lista-empleados',
                component: ListaEmpleadosComponent
            },
            {
                path: 'salarios',
                component: SalariosComponent
            },
            {
                path:'liquidados',
                component: LiquidadosComponent
            },
            {
                path:'liquidar-empleado',
                component: LiquidarEmpleadoComponent
            },
            {
                path:'dashboard',
                component: DashboardComponent
            }
        ] 
    }
]

@NgModule({
    imports: [ RouterModule.forChild(rutasNavegacion) ],
    exports: [ RouterModule ]
})

export class RutasNavegacion {}