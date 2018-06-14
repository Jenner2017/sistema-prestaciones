import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelo/usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  modelo: any = {};
  usuarios: Usuario[] = [];
  ngOnInit() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarios = res;
        console.log(this.usuarios);
      })
  }
  eliminar(id: string) {
    let res = confirm("Estar seguro de eliminarlo")
    if(res) {
      this.usuarioService.deleteUsuario(id)
        .subscribe(res => console.log(res));
    }
    return;
    
  }
  guardar(formulario: NgForm) {
    this.modelo = formulario.value
    this.usuarioService.addUsuario(formulario.value)
      .subscribe(res => console.log(res));
  }

}
