const express = require('express')
const http = require('http')
const { Server } = require('socketio')

const app = express()
const server = http.createServer(app)
const socketio = new Server(server)


socketio.on('connection', (socket) => {
    console.log('User connect')
})


server.listen(3000, () => {
    console.log('Listen on 3000 port.')
})