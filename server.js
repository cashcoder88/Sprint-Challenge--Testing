const express = require('express');
const server = express();
//model here

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json('API IS RUNNING!');
  });

module.exports = server;