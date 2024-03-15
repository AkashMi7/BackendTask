// Importing the 'net' module to create a TCP client
const net = require('net');

// Creating a connection to the chat server
const client = net.createConnection({ port: 3000 }, () => {
  // Once connected, log a message
  console.log('Connected to server');
  // Pipe input from the terminal to the client socket
  process.stdin.pipe(client);
});

// Event listener for receiving data from the server
client.on('data', (data) => {
  // Log the received data from the server
  console.log(data.toString());
});

// Event listener for when the connection is closed by the server
client.on('end', () => {
  // Log a message indicating disconnection
  console.log('Disconnected from server');
  // Exit the process
  process.exit();
});
