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

server.post('/games', (req, res) => {
    if(!req.body.title || !req.body.genre) {
        res.status(422).json({
            error: 'Please provide required title and genre fields'
        })
    } else {
        Games.addGames(req.body)
        .then(game => {
            res.status(201).json(game)
          })
          .catch(error => {
            res.status(500).json(error)
        })
    }
  });


module.exports = server;