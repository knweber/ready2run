const expect = require('expect');
const request = require('supertest');
const app = require('../app');

it('should return a status code of 200', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      expect(res.status).toEqual(200)
    })
    .end(done);
})

it('should render the index page', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      // test goes here
    })
    .end(done);
})

it('should ', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      // test goes here
    })
    .end(done);
})

it('should ', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      // test goes here
    })
    .end(done);
})

it('should ', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      // test goes here
    })
    .end(done);
})

it('should ', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      // test goes here
    })
    .end(done);
})
