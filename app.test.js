const request = require('supertest')
const app = require('./app')

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    })
})

describe('Counter should add two numbers correclty', () => {
    test('It should add 1 and 1 correctly', () => {
        return request(app).get('/add/1/1').expect((res) => {
            expect(res.body.sum).toBe(2);
        })
    })

    test('It should add 3 and 4 correctly', () => {
        return request(app).get('/add/3/4').expect((res) => {
            expect(res.body.sum).toBe(7);
        })
    })
});