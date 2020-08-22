const { io } = require('../server')
io.on('connection', (client) => {
    console.log(`Usuario ${client} conectado`)
    client.on('disconnect', () => {
        console.log(`Usuario desconectado`);
    })
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
    })
})