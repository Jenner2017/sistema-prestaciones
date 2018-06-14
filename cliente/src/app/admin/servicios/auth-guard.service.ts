import { Injectable } from '@angular/core';
import { 
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
 } from '@angular/router';
import { AuthUser } from './auth-users.service';

@Injectable()

export class AuthGuard {

    constructor(private authUser: AuthUser, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        let url: string = state.url;

        return this.comprobar(url);
        
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    comprobar(url):boolean {
        if(sessionStorage.getItem('token')){
            console.log(this.authUser.autenticado)
            return true;
        }

        sessionStorage.setItem('url', url);
        this.authUser.redirect = url;

        this.router.navigate(['admin/iniciar-sesion']);

        return false;
    }
}