const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;

const app = express();
const path = require('path')

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});





io.on("connection", (socket) => {
  console.log("We are Connected");

  socket.on("chat", (chat) => {
    io.emit("chat", chat);
  });

  socket.on("disconnect", () => {
    console.log("We are Disconnecting");
  });
});

server.listen(5000, () => console.log("listening to port 5000"));
