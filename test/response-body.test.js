import express, { query } from "express";
import request from "supertest";

const app = express();


app.get('/', (req, res) => {
    res.status(200)
    res.set('Content-Type', 'text/html')
    res.send('<html><head><title><h1>Hello HTML</h1></title></head></html>')
})

test("Test HTTP Response", async () => {
    const response = await request(app).get('/');
    expect(response.get('Content-Type')).toBe('text/html; charset=utf-8');
    expect(response.text).toBe('<html><head><title><h1>Hello HTML</h1></title></head></html>');
})