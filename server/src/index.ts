import WebSocket from "ws";
import http from "http";
import {
  HandleAction,
} from "./handleAction";

const server = http.createServer((req, res) => {
  res.end("WebSocket server");
});

const wss = new WebSocket.Server({ server });

const listRoom = new Map();

wss.on("connection", (ws) => {
  console.log("A client connected");

  ws.on("message", (message) => {
    HandleAction(wss, ws, message, listRoom);
  });

  ws.on("close", () => {
    console.log("A client disconnected");
  });
});

server.listen(4000, () => {
  console.log("WebSocket server is running on port 4000");
});
