const expect = require('expect');
const request = require('supertest');
const app = require('../app');

it('should render the index page', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      expect(res.status).toEqual(200)
    })
    .end(done);
})
