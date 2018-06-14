import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../modelo/usuario';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
}

@Injectable()

export class UsuarioService {

    constructor(private http: HttpClient){}
    url:string = 'http://192.168.1.4:3000/users';

    private manejoDeErrores(error: HttpErrorResponse) {

        if(error.error instanceof ErrorEvent) {
            console.error('Ocurrio el siguiente error', error.error.message);
        }
        else {
            console.error(
                `Error en el servidor con el codigo ${error.status}
                con lo siguiente ${error.error}`
            )
        }
        return throwError('Intentelo mas tarde');

    }

    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.url, httpOptions)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
    addUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.url}/signup`, usuario, httpOptions)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
    updateUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${this.url}/update/${usuario._id}`, usuario, httpOptions)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
    deleteUsuario(id: string) {
        return this.http.delete(`${this.url}/delete/${id}`, httpOptions)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
    ingresar(usuario: Usuario) {
        return this.http.post(`${this.url}/signin`, usuario)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
}