// import { AppDataSource } from "./data-source"
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


// AppDataSource.initialize()
//     .then(async () => {
//         // console.log("Inserting a new user into the database...")
//         // const user = new User()
//         // user.firstName = "Timber"
//         // user.lastName = "Saw"
//         // user.age = 25
//         // await AppDataSource.manager.save(user)
//         // console.log("Saved a new user with id: " + user.id)
//         //
//         // console.log("Loading users from the database...")
//         // const users = await AppDataSource.manager.find(User)
//         // console.log("Loaded users: ", users)
//         //
//         // console.log("Here you can setup and run express / fastify / any other framework.")
//     })
//     .catch(error => console.log(error))



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
    console.log(`Listen on ${PORT} port.`)
})