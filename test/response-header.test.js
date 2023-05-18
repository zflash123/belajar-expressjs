import express, { query } from "express";
import request from "supertest";

const app = express();


app.get('/', (req, res) => {
    res.set({
        'X-Powered-By': 'Programmer Zaman Now',
        'X-Author': 'Zaed Abdullah'
    })
    res.send('Hello Response')
})

test("Test Response Header", async () => {
    let response = await request(app).get('/');
    expect(response.get('X-Powered-By')).toBe('Programmer Zaman Now');
    expect(response.get('X-Author')).toBe('Zaed Abdullah');
    expect(response.text).toBe('Hello Response');
})