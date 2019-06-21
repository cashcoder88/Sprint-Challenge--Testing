const server = require('./server.js')
const db = require('./games/gamesModel.js');
const supertest = require('supertest')

describe('TEST', () => {
    it('responds with 200 OK', () => {
        return supertest(server).get('/').expect(200)
     });
});
describe('GET', () => {
    
    it('responds with 200 OK', () => {
        return supertest(server).get('/games').expect(200)
     });
     it('responds with Some Json Content', () => {
        return supertest(server).get('/games').expect('Content-Type', /json/i)
     });
     it('responds with empty array when no data is in games', () => {
         return supertest(server).get('/games')
         .then(res => {
             if(res.body.length < 1) {
               expect(res.body).toEqual({})
             } else {
                expect(200)
             }
         })
     });
});

// describe('POST', () => {
    
// });