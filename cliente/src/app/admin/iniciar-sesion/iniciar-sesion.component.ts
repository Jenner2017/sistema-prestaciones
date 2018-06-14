import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../componentes/servicios/usuario.service';
import { NgForm } from '@angular/forms';
import { AuthUser } from '../servicios/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private authUser: AuthUser,
    private router: Router
  ) { }
  modelo: any = {};
  ngOnInit() {
  }
  ingresar(formulario: NgForm) {
    console.log(formulario.value)
    this.usuarioService.ingresar(formulario.value)
      .subscribe(res => {
        const miToken:any = res;
        console.log(miToken.token)
        sessionStorage.setItem('token', miToken.token);

        this.authUser.login().subscribe(res => {
          if(this.authUser.autenticado) {
            console.log('Autenticado');
            this.authUser.redirect = sessionStorage.getItem('url');

            const redirect = this.authUser.redirect ? this.authUser.redirect:'/dashboard';
          
            this.router.navigate([redirect]);
          }
        })
      })
  }
}
