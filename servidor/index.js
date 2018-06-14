const app = require("./app");
const config = require("./config");

app.set("port", config.port);

app.listen(app.get("port"), () => {
    console.log("Servidor arriba", app.get("port"))
})