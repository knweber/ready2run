const expect = require('expect');
const request = require('supertest');
const app = require('../app');

it('should render the about page', (done) => {
  request(app)
    .get('/about')
    .expect((res) => {
      expect(res.status).toEqual(200)
    })
    .end(done);
})
