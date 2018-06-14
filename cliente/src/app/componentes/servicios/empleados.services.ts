import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Empleado } from '../modelo/empleado';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
  };


@Injectable()

export class EmpleadosService {
    error:boolean = false;
    url:string = "http://192.168.1.4:3000/api/trabajadores";
    url2:string = "http://192.168.1.4:3000/imagenes";
    constructor(private http: HttpClient){}

    private manejoDeErrores(error: HttpErrorResponse) {

        if(error.error instanceof ErrorEvent) {
            this.error = true;
            console.error('Ocurrio el siguiente error', error.error.message);
        }
        else {
            this.error = true;
            console.error(
                `Error en el servidor con el codigo ${error.status}
                con lo siguiente ${error.error}`
            )
        }
        return throwError('Intentelo mas tarde');

    }

    getEmpleados(): Observable<Empleado[]>{
       return this.http.get<Empleado[]>(this.url, httpOptions)
        .pipe(
            retry(3),
            catchError(this.manejoDeErrores)
        )
    }
    getEmpleado(id:string): Observable<Empleado> {
        return this.http.get<Empleado>(`${this.url}/${id}`, httpOptions);
    }

    addEmpleado(empleado: Empleado): Observable<Empleado> {
        return this.http.post<Empleado>(this.url, empleado, httpOptions)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
    updateEmpleado(empleado: Empleado): Observable<Empleado> {
        return this.http.put<Empleado>(`${this.url}/${empleado._id}`, empleado, httpOptions)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
    deleteEmpleado(id: string) {
        return this.http.delete(`${this.url}/${id}`, httpOptions)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }

    subirImagen(datos): Observable<any> {
        return this.http.post<any>(this.url2, datos)
            .pipe(
                retry(3),
                catchError(this.manejoDeErrores)
            )
    }
}