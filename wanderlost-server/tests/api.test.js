const app = require('../app')
const mongoose = require('mongoose')
const supertest = require('supertest')
const api = supertest(app)


test('test of root api', async()=>{
   const res = await api.get('/')
   // console.log(res)
   expect(res.statusCode).toBe(200)
   expect(res.text).toBe('hello world!')
})

afterAll(()=>{
   mongoose.connection.close()
})