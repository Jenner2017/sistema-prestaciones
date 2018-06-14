import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AuthUser } from '../servicios/auth-users.service';
import { AuthGuard } from '../servicios/auth-guard.service';

const rutasAdmin: Routes = [
    { 
        path: 'admin', 
        component: AdminComponent,
        children: [
            {
                path:'iniciar-sesion',
                component: IniciarSesionComponent
            }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(rutasAdmin)
    ],
    exports: [ RouterModule ],
    providers: [ AuthUser, AuthGuard ]
})

export class RutasAdmin {}