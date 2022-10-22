const EventEmitter = require("events");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const http = require("http");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})