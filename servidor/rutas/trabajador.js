const express = require("express");
const router = express.Router();
const Trabajador = require("../modelos/trabajador");
const auth = require("../middlewares/auth");

router.get("/trabajadores", (req, res) => {
    Trabajador.find((err, trabajadores) => {
        if(err) return res.status(500).send({message: `Ocurrio el siguiente error: ${err}`});
        if(!trabajadores) return res.send(404).send({message: 'No existen trabajadores'});

        res.status(200).json(trabajadores);
    })
})

router.get("/trabajadores/:id", (req, res) => {
    const id = req.params.id;
    
    Trabajador.findById(id, (err, trabajador) => {
        if(err) return res.status(500).send({ message: 'Ocurrio un error en el servidor' })

        res.status(200).json(trabajador);
    })
})

router.post("/trabajadores", (req, res) => {
    const body = req.body;

    const trabajador = new Trabajador(body);

    trabajador.save((err, trabajadorSave) => {
        if(err) res.status(500).send({
            message: `Ocurrio el siguiente error: ${err}`
        })

        res.status(200).send({
            trabajador: trabajadorSave
        })
    })
})

router.put("/trabajadores/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Trabajador.findByIdAndUpdate(id, body, (err, trabajador) => {
        if(err) return res.status(500).send({message: `Ocurrio el siguiente error: ${err}`});

        res.status(200).json(trabajador);
    })
})

router.delete("/trabajadores/:id", (req, res) => {
    const id = req.params.id;
    
    Trabajador.findById(id, (err, trabajador) => {
        if(err) return res.status(500).send({message: `Ocurrio el siguiente error: ${err}`});
        
        trabajador.remove(err => {
            if (err) res.status(500).send({message: `Ocurrio el siguiente error: ${err}`});

            res.status(200).send({message: 'Se ha eliminado el trabajador'});
        });
    })
})

module.exports = router;