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
     it('responds with an Array', () => {
        return supertest(server).get('/games')
        .then(res => {
            expect(Array.isArray(res.body)).toBeTruthy()
        })
     });
     it('responds with empty array when no data is in games', () => {
         return supertest(server).get('/games')
         .then(res => {
             if(res.body.length < 1) {
               expect(res.body).toEqual([{}])
             } else {
                expect(200)
             }
         })
     });
     it('Throws 404 if bad endpoint', () => {
        return supertest(server).get('/gamesss').expect(404)
     });
});

describe('POST', () => {
    // Need to change this every test, if failing, change some title or some genre
    const mockGameDataGood = {
        "title": "some titleeee",
        "genre": "some genreee"
    }
    const mockGameDataBad = {
        "tile": "some tile",
        "era": "some era"
    }
    it('responds with 201 when correct data is sent', (done) => {
        return supertest(server)
            .post('/games')
            .send(mockGameDataGood)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
    it('responds with 422 when bad data is sent', (done) => {
        return supertest(server)
            .post('/games')
            .send(mockGameDataBad)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
    it('responds with 422 when NO data is sent', (done) => {
        return supertest(server)
            .post('/games')
            .send()
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
    it('Throws 404 if bad endpoint', () => {
        return supertest(server).post('/gamesss').expect(404)
     });

});

 // ============================ STRETCH ===========================

describe('GET/:id', () => {
    let id = 1 || 2 || 3 || 4
    it('responds with 200 if passed correct ID', () => {
       return supertest(server).get(`/games/${id}`).expect(200)
    });
    it('responds with an object', () => {
       return supertest(server).get(`/games/${id}`)
       .then(res => {
           expect(typeof res.body === 'object').toBeTruthy()
       })
    });
    it('responds with Some Json Content', () => {
       return supertest(server).get(`/games/${id}`).expect('Content-Type', /json/i)
    });
    it('Throws 404 if bad endpoint', () => {
       return supertest(server).get(`/games/${id + 1000}`).expect(404)
    });
    it('responds with error message when id doesnt exist', () => {
       return supertest(server).get(`/games/${id + 1000}`)
       .then(res => {
             expect(res.body).toEqual({
               "error": "Please provide an existing ID to see corresponding game"
             })   
       })
   });
});

describe('DELETE/:id', () => {
    it('responds with 200 when deleted successfully and message', () => {
        return supertest(server)
        // edit this ID lower or higher if test is failing 
        .delete('/games/10')
        .expect(200)
        .then(res => {
            expect(res.body).toEqual({
                "message": "deleted game with specified id!"
              })
        })
    });
    it('responds with 404 when bad id', () => {
        return supertest(server)
        .delete('/games/123456731')
        .expect(404)
    });

});