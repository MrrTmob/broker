// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtts://mosquitto.d2a.link',{port:8443})
var topic = 'Tmob'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})