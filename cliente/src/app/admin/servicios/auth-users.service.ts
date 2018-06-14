import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()

export class AuthUser {

    constructor(private router: Router){}

    autenticado:boolean = false;
    redirect:string;

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(10),
            tap(val => this.autenticado = true)
        )
    }
    logout():void {
        this.autenticado = false;
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('url');
        this.router.navigate(['admin/iniciar-sesion']);
    }
    
}