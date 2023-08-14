import express from "express";
import {WebSocket, WebSocketServer} from "ws"

const wss = new WebSocketServer({port: 4000});

wss.on('connection', (ws) => {
    console.log('A client connected');
  
    // Event listener for receiving messages from clients
    ws.on('message', (message) => {
      console.log(`Received: ${message}`);
  
      // Sending a response back to the client
      ws.send(`You said: ${message}`);
    });
  
    // Event listener for when the client disconnects
    ws.on('close', () => {
      console.log('A client disconnected');
    });
});

console.log('WebSocket server is running on port 4000');