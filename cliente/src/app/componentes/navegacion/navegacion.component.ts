import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../../admin/servicios/auth-users.service';
declare var $: any;
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  estado:boolean = true;
  numero:number;
  estado2:boolean = true;
  constructor(private authUser: AuthUser) { 
    this.numero = 1;
  }

  ngOnInit() {
    
    $(".derecha i.fas").addClass("fa-chevron-right");
    $(".evento").click(function(){
      
      let link = $(this).attr("id")
        
        if(this.estado || this.estado == undefined){
            $("#" + link + " .derecha .fas").removeClass("fa-chevron-right")
            $("#" + link + " .derecha .fas").addClass("fa-chevron-down")
            this.estado=false;
        }
        else {
            $("#" + link + " .derecha .fas").removeClass("fa-chevron-down")
            $("#" + link + " .derecha .fas").addClass("fa-chevron-right")
            this.estado=true;
        }
    });
  }
  toggleMenu() {
    if(this.estado2) {
      $(".sidebar").css({
          'display':'none',
          'transition': ['all','300ms']
      })
      
      this.estado2=false;
    }
    else{
      
      $(".sidebar").css({
          'display':'inline',
          'transition': ['all','300ms']
      })
      this.estado2=true;
    }
  }
  salir():void {
    this.authUser.logout();
  }
}
