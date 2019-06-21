const db = require('../data/dbConfig.js');

module.exports = {
    getGames,
    getGamesById,
    addGames,
    deleteGame
}

function getGames() {
    return db('games');
}


function getGamesById(id) {
    return db('games')
        .where( {id} )
        .first();
}


function addGames(game) {
    return db('games')
    .insert(game, 'id')
}

function deleteGame(id) {
    return db('games')
    .where({ id})
    .del()
}

