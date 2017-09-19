const expect = require('expect');
const request = require('supertest');
const app = require('../app');

it('should render the index page', (done) => {
  request(app)
  // about route is placeholder
    .get('/about')
    .expect((res) => {
      expect(res.status).toEqual(200)
    })
    .end(done);
})
