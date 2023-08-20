import WebSocket from "ws";
import http from "http";
import { HandleAction } from "./handleAction";
import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static("uploads"));
app.use(cors({ origin: "*" }));

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

app.post("/upload", upload.array("files"), (req, res) => {
  res
    .status(200)
    .json({
      status: true,
      message: "Files uploaded successfully",
      data: req.files
    });
});

server.listen(4000, () => {
  console.log("WebSocket server is running on port 4000");
});
