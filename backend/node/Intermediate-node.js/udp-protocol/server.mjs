import dgram from 'dgram';
const port = process.argv[2];
const address = process.argv[3];

let clientData = [];

//Create a Datagram Socket server
const server = dgram.createSocket('udp4'); // udp4 = ipv4

server.on('error', err => {
  console.error(`Server error: ${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  clientData.push({
    port: rinfo.port,
    address: rinfo.address,
  });
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.bind(port, address);

// Send Data to client
process.stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    console.log('Closing Node.js');
    return process.exit();
  }

  if (clientData.length != 0) {
    clientData.forEach(client => {
      server.send(data, client.port, client.address, err => {
        if (err) {
          console.log(err);
          throw err;
        }

        //Flush Data after sending
        clientData.length = 0;
      });
    });
  }
});
