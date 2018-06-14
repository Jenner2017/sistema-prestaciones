const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./conexionDB/db");
const trabajadorRutas = require("./rutas/trabajador");
const auth = require("./middlewares/auth");
const usuarioRutas = require("./rutas/usuario");
const formidable = require("express-formidable");

//configuraciones
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(formidable({
    encoding: 'utf-8',
    uploadDir: '/imagenes'
}))

//rutas

app.use("/api", auth, trabajadorRutas);

app.use("/users", usuarioRutas);

app.post("/imagenes", (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'Has ingresado a esta ruta'})
})


module.exports = app;