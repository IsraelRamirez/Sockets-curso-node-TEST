var socket = io()
    //on: escuchan
socket.on('connect', function() {
    console.log('Socket conectado')
})
socket.on('disconnect', function() {
        console.log('Se perdió la conexión con el server')
    })
    //emit: Se envia información
socket.emit('enviarMensaje', {
    usuario: 'Isra',
    mensaje: 'Hola mundo'
}, function(res) {
    console.log(res);
})
socket.on('enviarMensaje', function(res) {
    console.log(res);
})