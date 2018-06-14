export class Empleado {
    '_id': string;
    'dpi': string;
    'nombre1': string;
    'nombre2': string;
    'apellido1': string;
    'apellido2': string;
    'fechaNacimiento': Date;
    'fechaDeIngreso': Date;
    'fechaDeSalida': Date;
    'liquidado':boolean;
    'nit': string;
    'direccion':string;
    'telefono':string;
    'email':string;
    'sexo':number;
    'estudio':string;
    'categoria':string;
    'salario':number;
    'prestaciones': {
        'bono14':number,
        'aguinaldo': number,
        'vacaciones': number,
        'indemnizacion': number
    };
    '__v'?: number;
}