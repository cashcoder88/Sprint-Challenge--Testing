const express = require('express');
const server = express();
const Games = require('./games/gamesModel.js')

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json('API IS RUNNING!');
  });

server.get('/games', (req, res) => {
    Games.getGames()
    .then(games => {
      res.status(200).json(games)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});


module.exports = server;