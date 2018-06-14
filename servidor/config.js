module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/trabajadores',
    SECRET_TOKEN: 'tokensecreto2018',
    salt: 10
}