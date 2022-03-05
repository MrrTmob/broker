// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtts://mosquitto.d2a.link:8443')
//console.log(client)
var topic = 'Tmob'
var message = '1'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 3000)
})