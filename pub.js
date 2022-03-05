// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://52.90.76.132:1883')
//console.log(client)
var topic = 'Tmob'
var message = '1'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 3000)
})