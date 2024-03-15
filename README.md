# Chat Server

This is a simple Chat Server implemented using Node.js and TCP sockets. It allows multiple clients to connect to a central server and communicate with each other in a chatroom environment.

## Instructions

### Running the Server
1. Ensure you have Node.js installed on your system.
2. Open a terminal and navigate to the directory containing `server.js`.
3. Run the command `node server.js` to start the server.
4. The server will start listening for connections on port 3000.

### Running the Client
1. Ensure you have Node.js installed on your system.
2. Open a terminal and navigate to the directory containing `client.js`.
3. Run the command `node client.js` to start the client.
4. The client will attempt to connect to the server running on port 3000.
5. Once connected, you can start typing messages to chat with other users.

## Architecture and Concurrency

### Architecture
- The application follows a client-server architecture.
- The server is implemented using Node.js's `net` module, creating a TCP server that listens for incoming connections.
- Each client connects to the server over TCP/IP and communicates with it using a socket.
- Communication between clients and the server is done via simple text messages.

### Concurrency Handling
- The server handles multiple client connections concurrently using asynchronous event-driven programming.
- Each client connection is handled in its own callback function, allowing the server to handle multiple connections simultaneously.
- The server uses event listeners to respond to incoming data from clients and manage client disconnections.
- Concurrency is managed effectively through non-blocking I/O operations, ensuring that the server can handle multiple clients without blocking or slowing down.

## Assumptions and Design Choices

- **Text-Based Communication:** The application assumes that communication between clients will be text-based. This simplifies the implementation and allows for easy integration with the terminal.
- **Default Username:** A default username of "Anonymous" is assigned to clients who do not set their username explicitly. This ensures that all clients have a recognizable identity in the chatroom.
- **Simple Message Format:** Messages exchanged between clients and the server are simple strings, making the communication protocol straightforward and easy to implement.
- **Single Chatroom:** The application assumes a single chatroom environment where all connected clients can communicate with each other. This simplifies the architecture and user experience.
- **Error Handling:** Basic error handling is implemented to handle cases such as invalid input or unexpected disconnections. However, more robust error handling could be added for production-grade applications.
