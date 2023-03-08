const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})


io.on('connection', (socket) => {
    console.log('User connect')


    socket.on('chat message', (message) => {
        // console.log(`New message: ${message}`)

        io.emit('chat message', message)
    })

    // socket.on('disconnect', () => {
    //     console.log('disconnect')
    // })
})


server.listen(3000, () => {
    console.log('Listen on 3000 port.')
})