import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasAdmin } from './rutas-admin/rutas-admin.module';
import { AdminComponent } from './admin.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './servicios/auth-guard.service';
import { Router } from '@angular/router';

@NgModule({
    declarations: [
        AdminComponent,
        IniciarSesionComponent
    ],
    imports: [
        CommonModule,
        RutasAdmin,
        FormsModule
    ],
    providers: [ AuthGuard ]
})

export class AdminModule {

    constructor(router: Router){
        
    }
}