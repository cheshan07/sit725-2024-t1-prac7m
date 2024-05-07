const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");

let app = express();
let port = process.env.PORT || 3000; // Changed 'port' to 'PORT' for consistency

let client = require("./dbConnection");
let router = require("./routes/routes");

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cat", router);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

server.listen(port, () => {
  console.log("server started");
});
