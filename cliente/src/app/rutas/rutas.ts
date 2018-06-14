import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncotrada } from '../admin/pagina-no-encotrada/pagina-no-encontrada';

const rutasPrincipales: Routes = [
    { path: '**', component: PaginaNoEncotrada }
]


@NgModule({
    imports: [
        RouterModule.forRoot(rutasPrincipales)
    ],
    exports: [
        RouterModule
    ]
})

export class RutasPrincipales {}