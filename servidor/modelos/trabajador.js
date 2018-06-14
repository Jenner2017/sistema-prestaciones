const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trabajadores = new Schema({
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    fechaNacimiento: Date,
    fechaDeIngreso: Date,
    fechaDeSalida:Date,
    liquidado:Boolean,
    nit: String,
    dpi: { type: String, unique: true, lowercase:true },
    direccion: String,
    telefono: { type: String, unique: true, lowercase:true },
    email: { type: String, unique: true, lowercase:true },
    sexo: Number,
    estudio: { type: String, enum: [
        'Sin estudios',
        'Primaria',
        'Secundaria',
        'Diversificado',
        'Licenciatura',
        'Maestria'
    ]},
    categoria: {
        type: String, 
        enum: [
            'Dirección',
            'Administración',
            'Comercial',
            'Mantenimiento',
            'Producción',
            'Directivo',
            'Mando Interno',
            'Tecnico',
            'Trabajador Cualificado',
            'Trabajador no Cualificado'
    ]},
    salario: {type: Number, min:0},
    prestaciones: {
        bono14: Number,
        aguinaldo: Number,
        vacaciones: Number,
        indemnizacion: Number
    }
});

module.exports = mongoose.model("trabajadores", trabajadores);