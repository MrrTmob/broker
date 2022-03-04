// MQTT broker
var mosca = require('mosca')
var settings = {
    port: 1883,
    secure: {
        keyPath: "./privkey.pem",
        certPath: "./cert.pem"
    },
    // backend: {
    //     type: 'redis',
    //     redis: require('redis'),
    //     host: "localhost",
    //     port: 6379,
    //     db: 0,
    //     return_buffers: true,
    // },
    // persistence: {
    //     factory: mosca.persistence.Redis
    // }
};
var broker = new mosca.Server(settings)

broker.on('ready', () => {
    console.log('Broker is ready!')
})

// broker.on('published', (packet)=>{
//     message = packet.payload.toString()
//     console.log(message)
// })