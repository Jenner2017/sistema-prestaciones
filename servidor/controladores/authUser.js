const Usuario = require("../modelos/usuario");
const servicio = require("../servicios/servicio");

function signup(req, res) {
    const usuario = new Usuario({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    usuario.save(err => {
        if(err) return res.status(500).send({ message: `Ocurrio el siguiente error ${err}` })

        res.status(200).send({ token: servicio.createToken(usuario) })
    })

}

function signin(req, res) {
    Usuario.findOne({ email: req.body.email }, (err, usuario) => {
        if(err) return res.status(500).send({ message: err })

        usuario.comparar(req.body.password, usuario.password, (err, sonIguales) => {
            if(sonIguales) {
                res.status(200).send({
                    message: "Te has logueado correctamente",
                    token: servicio.createToken(usuario)
                })
            }
            else {
                res.status(400).send({ message: "La contraseña es incorrecta" })
            }
        });
    })
}

function getUsuarios(req, res) {
    Usuario.find((err, users) => {
        if(err) return res.status(500).send({message: 'Ocurrio un error'});
        if(!users) return res.status(404).send({message: 'No existen usuarios'});

        res.status(200).json(users);
    })
}

function deleteUsuario(req, res) {
    const id = req.params.id

    Usuario.findById(id, (err, usuario) => {
        if(err) return res.status(500).send({message: 'Ocurrio un error'});

        usuario.remove(err => {
            if(err) return res.status(500).send({message: 'Ocurrio un error'});

            res.status(200).send({message: 'Se ha eliminado el usuairo'});
        
        })
    })

}

function updateUsuario(req, res) {
    const id = req.params.id;
    const body = req.body;

    Usuario.findByIdAndUpdate(id, body, (err, usuario) => {
        if(err) return res.status(500).send({message: `Ocurrio el siguiente error: ${err}`});

        res.status(200).json(usuario); 
    })
}

module.exports = {
    signup,
    signin,
    getUsuarios,
    deleteUsuario,
    updateUsuario
}