


 import express  from 'express'

import { SerialPortMock } from 'serialport'

const app = express()

const path = '/dev/example'
SerialPortMock.binding.createPort(path)
const serialport = new SerialPortMock({ path, baudRate: 9600 })
//serialport.write('ROBOT POWER ON')




  SerialPortMock.binding.createPort('/dev/robot')
const port = new SerialPortMock({ path: '/dev/robot', baudRate: 9600 })
port.on('open', () => {
  port.port.emitData('data')
})

SerialPortMock.list().then(function(ports){
    ports.forEach(function(port){
      console.log("Port: ", port);
    })
  });


app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)