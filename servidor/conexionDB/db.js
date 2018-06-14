const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.db, (err, res) => {
    if(err) return console.log(`Hubo un error al conectar la BD ${err}`)
    else return console.log("Se ha establecido la conexion a la BD")
})

module.exports = mongoose;