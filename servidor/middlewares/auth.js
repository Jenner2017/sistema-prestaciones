const servicio = require("../servicios/servicio");

function isAuth (req, res, next) {
    if(!req.headers.authorization) {
        return res.send(403).send({ message: "No tiene autorizacion" })
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log(token);

    servicio.decodeToken(token)
        .then(response => {
            req.user = response;
            next()
        })
        .catch(response => {
            res.status(response.status)
        })
}

module.exports = isAuth;