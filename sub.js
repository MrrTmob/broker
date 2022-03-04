// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://52.90.76.132',{port:1883})
var topic = 'Tmob'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})