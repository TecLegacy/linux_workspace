import dgram from 'dgram';
const port = process.argv[2];
const address = process.argv[3];

console.log(port, address);

//Create a Datagram Socket server
const server = dgram.createSocket('udp4'); // udp4 = ipv4

server.on('error', err => {
  console.error(`Server error: ${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.bind(port, address);

process.stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    console.log('Closing Node.js');
    return process.exit();
  }

  // Send Data to client
  server.send(data, 5000, 'localhost', err => {
    if (err) {
      console.log(err);
      throw err;
    }
  });
});
