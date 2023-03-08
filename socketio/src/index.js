const express = require('express')
require('dotenv').config({path: '../.env'})
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)


const PORT = process.env.SERVER_PORT


const io = new Server(server, {
    cors: {
        origin: '*'
    }
})



io.on('connection', (socket) => {
    console.log('user connect')

    socket.on('chat message', (message) => {
        io.emit('chat message', message)
    })

    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})



server.listen(PORT, () => {
    console.log('Listen on 3000 port.')
})