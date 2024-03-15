// Importing the 'net' module to create a TCP server
const net = require('net');

// Array to store connected clients
let clients = [];

// Function to broadcast a message to all clients except the sender
const broadcastMessage = (message, sender) => {
  clients.forEach(client => {
    if (client === sender) return; // Skip the sender
    client.write(message); // Send the message to the client
  });
};

// Creating a TCP server
const server = net.createServer(socket => {
  // Setting a default username for the socket
  socket.username = 'Anonymous';
  
  // Adding the socket to the list of clients
  clients.push(socket);
  
  // Sending a welcome message to the newly connected client
  socket.write('Welcome to the chat server! Set your username with SET_USERNAME:yourusername\n');

  // Event listener for receiving data from clients
  socket.on('data', data => {
    const message = data.toString(); // Convert received data to a string
    if (message.startsWith('SET_USERNAME:')) {
      // Extracting username from the received message
      const username = message.split(':')[1].trim();
      // Setting the username for the socket
      socket.username = username;
      // Broadcasting a message to inform other clients about the new user
      broadcastMessage(`${username} has joined the chat\n`, socket);
    } else {
      // Broadcasting the received message with the username of the sender
      broadcastMessage(`${socket.username}: ${message}`, socket);
    }
  });

  // Event listener for when a client disconnects
  socket.on('end', () => {
    // Removing the disconnected client from the list of clients
    clients = clients.filter(client => client !== socket);
    // Broadcasting a message to inform other clients about the disconnected user
    broadcastMessage(`${socket.username} has left the chat\n`, socket);
  });
});

// Start listening for incoming connections on port 3000
server.listen(3000, () => {
  console.log('Server listening on *:3000');
});
