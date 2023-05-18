import express, { response } from "express";
import request from "supertest"
// import assert from "assert"

const app = express();



app.listen(3000, () => {
    console.log("This App run on http://localhost:3000")
})


app.get('/', (req, res) => {
    res.status(200).send('Hello Eko')
})



test('Test Express JS', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World')
});