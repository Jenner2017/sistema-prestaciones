import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutasPrincipales } from './rutas/rutas';
import { AdminModule } from './admin/admin.module';
import { PaginaNoEncotrada } from './admin/pagina-no-encotrada/pagina-no-encontrada';
import { NavegacionModule } from './componentes/navegacion/navegacion.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncotrada
  ],
  imports: [
    BrowserModule,
    AdminModule,
    NavegacionModule,
    RutasPrincipales,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
