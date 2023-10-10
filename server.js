const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

socket.on ("message", (msg, rinfo) => {
    console.log(`Server received the message: ${msg} \n from ${rinfo.address}:${rinfo.port}`)
})

socket.bind(8081)