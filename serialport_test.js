import { SerialPort } from 'serialport'

SerialPort.list().then(function(ports){
    ports.forEach(function(port){
      console.log("Port: ", port);
    })
  });
//const serialport = new SerialPort({ path: '/dev/example', baudRate: 9600 })
//serialport.write('ROBOT POWER ON')
