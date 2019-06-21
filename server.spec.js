const server = require('./server.js')
const db = require('./games/gamesModel.js');
const supertest = require('supertest')

describe('TEST', () => {
    it('responds with 200 OK', () => {
        return supertest(server).get('/').expect(200)
     });
});
// describe('GET', () => {
    
// });

// describe('POST', () => {
    
// });