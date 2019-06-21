const express = require('express');
const server = express();
const Games = require('./games/gamesModel.js')

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json('API IS RUNNING!');
  });


module.exports = server;